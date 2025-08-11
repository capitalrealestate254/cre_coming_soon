'use client'

import React, { useEffect, useState } from 'react'

export type CountdownProps = {
  targetISO?: string
  durationMs?: number
  storageKey?: string
  className?: string
  onComplete?: () => void
}

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

function computeTimeLeft(targetDate: Date, nowMs: number = Date.now()): TimeLeft {
  const remainingMs = Math.max(0, targetDate.getTime() - nowMs)
  const days = Math.floor(remainingMs / (1000 * 60 * 60 * 24))
  const hours = Math.floor((remainingMs / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((remainingMs / (1000 * 60)) % 60)
  const seconds = Math.floor((remainingMs / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function Countdown(props: CountdownProps) {
  const { targetISO, durationMs, storageKey, className, onComplete } = props
  const [targetDate, setTargetDate] = useState<Date | null>(null)
  const [serverOffsetMs, setServerOffsetMs] = useState<number>(0)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    if (targetISO) {
      setTargetDate(new Date(targetISO))
      return
    }

    if (typeof durationMs === 'number') {
      const persistKey = storageKey ? `countdown:${storageKey}` : null
      try {
        if (persistKey && typeof window !== 'undefined') {
          const saved = window.localStorage.getItem(persistKey)
          if (saved) {
            const savedTs = Number(saved)
            if (!Number.isNaN(savedTs) && savedTs > Date.now()) {
              setTargetDate(new Date(savedTs))
              return
            }
          }
        }
        const computedTs = Date.now() + durationMs
        setTargetDate(new Date(computedTs))
        if (persistKey && typeof window !== 'undefined') {
          window.localStorage.setItem(persistKey, String(computedTs))
        }
      } catch {
        setTargetDate(new Date(Date.now() + durationMs))
      }
      return
    }

    setTargetDate(null)
  }, [targetISO, durationMs, storageKey])

  useEffect(() => {
    if (targetISO || typeof durationMs === 'number') return
    let aborted = false
    const run = async () => {
      try {
        const res = await fetch('/api/countdown', { cache: 'no-store' })
        if (!res.ok) return
        const data: { targetISO: string; serverNowISO: string } = await res.json()
        if (aborted) return
        const serverNow = new Date(data.serverNowISO).getTime()
        const clientNow = Date.now()
        setServerOffsetMs(serverNow - clientNow)
        setTargetDate(new Date(data.targetISO))
      } catch {
        // Ignore fetch errors; the component will render zeros
      }
    }
    run()
    return () => {
      aborted = true
    }
  }, [targetISO, durationMs])

  useEffect(() => {
    if (!targetDate) return
    let didComplete = false

    const tick = () => {
      const nowMs = Date.now() + serverOffsetMs
      const next = computeTimeLeft(targetDate, nowMs)
      setTimeLeft(next)
      const isZero = next.days === 0 && next.hours === 0 && next.minutes === 0 && next.seconds === 0
      if (isZero && !didComplete) {
        didComplete = true
        if (storageKey && typeof window !== 'undefined') {
          try {
            window.localStorage.removeItem(`countdown:${storageKey}`)
          } catch {}
        }
        onComplete?.()
      }
    }

    tick()
    const intervalId = setInterval(tick, 1000)
    return () => clearInterval(intervalId)
  }, [targetDate, storageKey, onComplete, serverOffsetMs])

  const Box = ({ label, value }: { label: string; value: number }) => (
    <div className="flex items-baseline gap-1">
      <div
        suppressHydrationWarning
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tabular-nums text-primary drop-shadow-[0_1px_6px_rgba(0,0,0,0.35)]"
        style={{ fontFamily: 'Revivalism' }}
      >
        {value.toString().padStart(2, '0')}
      </div>
      <div
        className="text-xs sm:text-sm md:text-base text-white font-medium uppercase tracking-wider"
        style={{ fontFamily: 'Revivalism' }}
      >
        {label.charAt(0)}
      </div>
    </div>
  )

  return (
    <div
      className={['flex items-center gap-2 sm:gap-3 md:gap-4', className].filter(Boolean).join(' ')}
    >
      <Box label="Days" value={timeLeft.days} />
      <Box label="Hours" value={timeLeft.hours} />
      <Box label="Minutes" value={timeLeft.minutes} />
      <Box label="Seconds" value={timeLeft.seconds} />
    </div>
  )
}
