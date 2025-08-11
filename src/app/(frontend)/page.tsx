import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import './styles.css'

import Countdown from '@/components/countdown/countdown'

export default async function HomePage() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      {/* Background 2x2 grid */}
      <div className="grid h-full w-full grid-cols-2 grid-rows-2">
        {/* TL - Capital Vista */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_vista.webp"
            alt="Capital Vista"
            fill
            className="object-cover"
            priority
            sizes="50vw"
          />
        </div>
        {/* TR - Capital Heights */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_heights.webp"
            alt="Capital Heights"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        {/* BL - Capital Rise */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_rise.webp"
            alt="Capital Rise"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        {/* BR - Capital Garden */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_garden.webp"
            alt="Capital Garden"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
      </div>

      {/* Gradient overlay and decorative border */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--gradient-light-dark)' }}
      />

      {/* Bottom dark vignette */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

      {/* Main content with glassmorphism - centered on mobile/tablet, top on desktop */}
      <div className="absolute inset-0 lg:inset-x-0 lg:top-6 lg:h-1/2 flex flex-col items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 text-center">
        <div
          className="w-full max-w-[95%] sm:max-w-3xl p-4 sm:p-6 rounded-xl sm:rounded-2xl border backdrop-blur-md mb-4 md:mb-8"
          style={{
            background: 'var(--glass-bg)',
            borderColor: 'var(--glass-border)',
            backdropFilter: 'var(--glass-backdrop)',
          }}
        >
          <Image
            src="/cre-logos/logo-landscape.webp"
            alt="Capital Real Estate"
            width={200}
            height={70}
            className="mx-auto h-auto w-[140px] sm:w-[200px] mb-2 sm:mb-3"
            priority
          />
          <h1 className="mx-auto max-w-[800px] text-base sm:text-lg md:text-xl lg:text-2xl font-medium tracking-tight drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] mb-2 sm:mb-3 leading-tight text-foreground">
            Secure Your Front-Row Seat to Nairobi&apos;s Next Landmark Residences — Capital Vista &
            Capital Heights.
          </h1>
          <Button
            size="lg"
            className="rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base text-foreground"
            asChild
          >
            <a href="mailto:capitalrealestate254@gmail.com">Register now — Units Going Fast!</a>
          </Button>
        </div>
      </div>

      {/* Project badges in corners */}
      {/* TL - Capital Vista */}
      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-col items-center gap-1 sm:gap-2">
        <div
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-28 h-18 sm:w-36 sm:h-24 p-2 sm:p-3 rounded-lg sm:rounded-xl border backdrop-blur-sm"
          style={{
            background: 'var(--glass-navy-bg)',
            borderColor: 'var(--glass-navy-border)',
            backdropFilter: 'var(--glass-navy-backdrop)',
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/cre-logos/logo_capital_vista.webp"
              alt="Capital Vista Logo"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <div className="text-center">
            <div className="text-xs font-medium sm:font-semibold text-white drop-shadow-lg">
              Capital Vista
            </div>
            <div className="flex justify-center">
              <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
                Newly Launched
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* TR - Capital Heights */}
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex flex-col items-center gap-1 sm:gap-2">
        <div
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-28 h-18 sm:w-36 sm:h-24 p-2 sm:p-3 rounded-lg sm:rounded-xl border backdrop-blur-sm"
          style={{
            background: 'var(--glass-navy-bg)',
            borderColor: 'var(--glass-navy-border)',
            backdropFilter: 'var(--glass-navy-backdrop)',
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/cre-logos/logo_capital_heights.webp"
              alt="Capital Heights Logo"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <div className="text-center">
            <div className="text-xs font-medium sm:font-semibold text-white drop-shadow-lg">
              Capital Heights
            </div>
            <div className="flex justify-center">
              <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
                Groundbroken
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* BL - Capital Rise */}
      <div className="absolute bottom-32 left-3 sm:bottom-6 sm:left-6 flex flex-col items-center gap-1 sm:gap-2">
        <div
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-28 h-18 sm:w-36 sm:h-24 p-2 sm:p-3 rounded-lg sm:rounded-xl border backdrop-blur-sm"
          style={{
            background: 'var(--glass-navy-bg)',
            borderColor: 'var(--glass-navy-border)',
            backdropFilter: 'var(--glass-navy-backdrop)',
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/cre-logos/logo_capital_rise.webp"
              alt="Capital Rise Logo"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <div className="text-center">
            <div className="text-xs font-medium sm:font-semibold text-white drop-shadow-lg">
              Capital Rise
            </div>
            <div className="flex justify-center">
              <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
                Coming Soon
              </Badge>
            </div>
          </div>
        </div>
      </div>
      {/* BR - Capital Garden */}
      <div className="absolute bottom-32 right-3 sm:bottom-6 sm:right-6 flex flex-col items-center gap-1 sm:gap-2">
        <div
          className="flex flex-col items-center justify-center gap-1 sm:gap-2 w-28 h-18 sm:w-36 sm:h-24 p-2 sm:p-3 rounded-lg sm:rounded-xl border backdrop-blur-sm"
          style={{
            background: 'var(--glass-navy-bg)',
            borderColor: 'var(--glass-navy-border)',
            backdropFilter: 'var(--glass-navy-backdrop)',
          }}
        >
          <div className="flex justify-center">
            <Image
              src="/cre-logos/logo_capital_garden.webp"
              alt="Capital Garden Logo"
              width={16}
              height={16}
              className="sm:w-5 sm:h-5"
            />
          </div>
          <div className="text-center">
            <div className="text-xs font-medium sm:font-semibold text-white drop-shadow-lg">
              Capital Garden
            </div>
            <div className="flex justify-center">
              <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
                Preview
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom countdown */}
      <div className="absolute inset-x-0 bottom-3 sm:bottom-6 flex flex-col items-center gap-2 sm:gap-3 px-3 sm:px-6 text-center z-10">
        <h2 className="text-base sm:text-lg md:text-xl font-medium text-primary font-mono drop-shadow-lg">
          Website Launching in:
        </h2>
        <Countdown />

        {/* Social media icons */}
        <div className="flex items-center gap-3 sm:gap-4 mt-2 sm:mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61578846316409"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--facebook-blue)' }}
          >
            <FaFacebookF className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
          <a
            href="https://www.instagram.com/capitalrealestate254/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, var(--instagram-gradient-start), var(--instagram-gradient-end))`,
            }}
          >
            <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/capitalrealestateke"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--linkedin-blue)' }}
          >
            <FaLinkedinIn className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
