'use client'

import { useState, useEffect } from 'react'
import CSDesktop from '@/components/home/cs-desktop'
import CSMobile from '@/components/home/cs-mobile'
import CSTablet from '@/components/home/cs-tablet'
import '@/app/(frontend)/styles.css'

export default function HomePage() {
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      if (width < 768) {
        setScreenSize('mobile')
      } else if (width < 1024) {
        setScreenSize('tablet')
      } else {
        setScreenSize('desktop')
      }
      setIsLoading(false)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  if (isLoading) {
    return <div className="h-screen w-full bg-gray-900" />
  }

  if (screenSize === 'mobile') return <CSMobile />
  if (screenSize === 'tablet') return <CSTablet />
  return <CSDesktop />
}
