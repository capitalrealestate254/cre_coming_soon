import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import './styles.css'

import Countdown from '@/components/countdown/countdown'
import ContactFormDialog from '@/components/contact-form-dialog'

export default async function HomePage() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1 sm:gap-1 md:gap-1">
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
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_heights.webp"
            alt="Capital Heights"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_rise.webp"
            alt="Capital Rise"
            fill
            className="object-cover"
            sizes="50vw"
          />
        </div>
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

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--gradient-light-dark)' }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 sm:h-72 md:h-80 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

      <div className="absolute inset-0 bottom-40 sm:bottom-32 md:top-20 md:bottom-32 lg:inset-x-0 lg:top-6 lg:bottom-auto lg:h-1/2 flex flex-col items-center justify-center gap-2 sm:gap-3 px-3 sm:px-6 text-center">
        <div
          className="w-full max-w-[75%] sm:max-w-[70%] md:max-w-[60%] lg:max-w-3xl p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border backdrop-blur-md mb-4 md:mb-8"
          style={{
            background: 'var(--glass-bg)',
            border: '2px solid',
            borderColor: 'var(--brand-gold)',
            backdropFilter: 'var(--glass-backdrop)',
          }}
        >
          <Image
            src="/cre-logos/logo-landscape.webp"
            alt="Capital Real Estate"
            width={200}
            height={70}
            className="mx-auto h-auto w-[80px] sm:w-[100px] md:w-[120px] lg:w-[160px] mb-1 sm:mb-2"
            priority
          />
          <h1 className="mx-auto max-w-[800px] text-xs sm:text-sm md:text-base lg:text-lg font-medium tracking-tight drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] mb-1 sm:mb-2 leading-tight text-foreground">
            Secure Your Front-Row Seat to Nairobi&apos;s Next Landmark Residences — Capital Vista &
            Capital Heights.
          </h1>
          <ContactFormDialog>
            <Button
              size="sm"
              className="rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 text-xs sm:text-sm text-foreground"
            >
              Register now — Units Going Fast!
            </Button>
          </ContactFormDialog>
        </div>
      </div>

      <div className="absolute top-3 left-3 sm:top-6 sm:left-6 flex flex-col items-center gap-1 sm:gap-2">
        <Image
          src="/cre-logos/logo_capital_vista.webp"
          alt="Capital Vista Logo"
          width={16}
          height={16}
          className="sm:w-5 sm:h-5"
        />
        <div className="text-center">
          <div className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-white text-outline font-revivalism">
            Capital Vista
          </div>
          <div className="flex justify-center">
            <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
              Newly Launched
            </Badge>
          </div>
        </div>
      </div>
      <div className="absolute top-3 right-3 sm:top-6 sm:right-6 flex flex-col items-center gap-1 sm:gap-2">
        <Image
          src="/cre-logos/logo_capital_heights.webp"
          alt="Capital Heights Logo"
          width={16}
          height={16}
          className="sm:w-5 sm:h-5"
        />
        <div className="text-center">
          <div className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-white text-outline font-revivalism">
            Capital Heights
          </div>
          <div className="flex justify-center">
            <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
              Groundbroken
            </Badge>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40 left-3 sm:bottom-32 sm:left-6 flex flex-col items-center gap-1 sm:gap-2">
        <Image
          src="/cre-logos/logo_capital_rise.webp"
          alt="Capital Rise Logo"
          width={16}
          height={16}
          className="sm:w-5 sm:h-5"
        />
        <div className="text-center">
          <div className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-white text-outline font-revivalism">
            Capital Rise
          </div>
          <div className="flex justify-center">
            <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
              Coming Soon
            </Badge>
          </div>
        </div>
      </div>
      <div className="absolute bottom-40 right-3 sm:bottom-32 sm:right-6 flex flex-col items-center gap-1 sm:gap-2">
        <Image
          src="/cre-logos/logo_capital_garden.webp"
          alt="Capital Garden Logo"
          width={16}
          height={16}
          className="sm:w-5 sm:h-5"
        />
        <div className="text-center">
          <div className="text-xs sm:text-sm md:text-base font-medium sm:font-semibold text-white text-outline font-revivalism">
            Capital Garden
          </div>
          <div className="flex justify-center">
            <Badge className="hidden sm:block bg-primary text-primary-foreground text-xs">
              Preview
            </Badge>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-3 sm:bottom-6 flex flex-col items-center gap-2 sm:gap-3 px-3 sm:px-6 text-center z-10">
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-primary drop-shadow-lg"
          style={{ fontFamily: 'Revivalism' }}
        >
          Website Launching in:
        </h2>
        <Countdown />

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
