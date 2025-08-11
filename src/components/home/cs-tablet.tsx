import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import '@/app/(frontend)/styles.css'
import Countdown from '@/components/countdown/countdown'
import ContactFormDialog from '@/components/contact-form-dialog'

export default function CSTablet() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-1">
        {/* Capital Vista - Top Left */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_vista.webp"
            alt="Capital Vista"
            fill
            className="object-cover brightness-110 contrast-110 saturate-110"
            priority
            sizes="50vw"
          />
          <div className="absolute top-2 left-2 z-20">
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/cre-logos/logo_capital_vista.webp"
                alt="Capital Vista"
                width={48}
                height={48}
                className="drop-shadow"
              />
              <div
                className="text-white font-revivalism text-sm text-center"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
              >
                Capital Vista
              </div>
              <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                Newly Launched
              </Badge>
            </div>
          </div>
        </div>

        {/* Capital Heights - Top Right */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_heights.webp"
            alt="Capital Heights"
            fill
            className="object-cover brightness-110 contrast-110 saturate-110"
            sizes="50vw"
          />
          <div className="absolute top-2 right-2 z-20">
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/cre-logos/logo_capital_heights.webp"
                alt="Capital Heights"
                width={48}
                height={48}
                className="drop-shadow"
              />
              <div
                className="text-white font-revivalism text-sm text-center"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
              >
                Capital Heights
              </div>
              <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                Groundbroken
              </Badge>
            </div>
          </div>
        </div>

        {/* Capital Garden - Bottom Left */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_garden.webp"
            alt="Capital Garden"
            fill
            className="object-cover brightness-110 contrast-110 saturate-110"
            sizes="50vw"
          />
          <div className="absolute bottom-2 left-2 z-20">
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/cre-logos/logo_capital_garden.webp"
                alt="Capital Garden"
                width={48}
                height={48}
                className="drop-shadow"
              />
              <div
                className="text-white font-revivalism text-sm text-center"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
              >
                Capital Garden
              </div>
              <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                Showhouse Ready
              </Badge>
            </div>
          </div>
        </div>

        {/* Capital Rise - Bottom Right */}
        <div className="relative min-h-0">
          <Image
            src="/cre-photos/capital_rise.webp"
            alt="Capital Rise"
            fill
            className="object-cover brightness-110 contrast-110 saturate-110"
            sizes="50vw"
          />
          <div className="absolute bottom-2 right-2 z-20">
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/cre-logos/logo_capital_rise.webp"
                alt="Capital Rise"
                width={48}
                height={48}
                className="drop-shadow"
              />
              <div
                className="text-white font-revivalism text-sm text-center"
                style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)' }}
              >
                Capital Rise
              </div>
              <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-2 py-1">
                Completed
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'var(--gradient-light-dark)' }}
      />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/70 to-transparent" />

      <div className="absolute inset-0 bottom-32 top-20 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div
          className="w-full max-w-[60%] p-5 rounded-2xl border backdrop-blur-md mb-8"
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
            className="mx-auto h-auto w-[120px] mb-2"
            priority
          />
          <h1 className="mx-auto max-w-[800px] text-base font-medium tracking-tight drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] mb-2 leading-tight text-foreground">
            Secure Your Front-Row Seat to Nairobi&apos;s Next Landmark Residences — Capital Vista &
            Capital Heights.
          </h1>
          <ContactFormDialog>
            <Button size="sm" className="rounded-full px-4 py-2 text-sm text-foreground">
              Register now — Units Going Fast!
            </Button>
          </ContactFormDialog>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-6 flex flex-col items-center gap-3 px-6 text-center z-10">
        <h2
          className="text-4xl font-medium text-primary drop-shadow-lg"
          style={{ fontFamily: 'Revivalism' }}
        >
          Website Launching in:
        </h2>
        <Countdown />

        <div className="flex items-center gap-4 mt-4">
          <a
            href="https://www.facebook.com/profile.php?id=61578846316409"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--facebook-blue)' }}
          >
            <FaFacebookF className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.instagram.com/capitalrealestate254/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, var(--instagram-gradient-start), var(--instagram-gradient-end))`,
            }}
          >
            <FaInstagram className="w-5 h-5 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/capitalrealestateke"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--linkedin-blue)' }}
          >
            <FaLinkedinIn className="w-5 h-5 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
