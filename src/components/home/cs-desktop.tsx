import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaMapMarkerAlt, FaBed } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import '@/app/(frontend)/styles.css'
import Countdown from '@/components/countdown/countdown'
import ContactFormDialog from '@/components/contact-form-dialog'

export default function CSDesktop() {
  return (
    <div className="relative h-[100vh] w-full overflow-hidden">
      <div className="hidden md:grid h-[80vh] w-full grid-cols-4 grid-rows-1 gap-1">
        <div className="group relative min-h-0 overflow-hidden transition-opacity duration-300">
          <Image
            src="/cre-photos/capital_vista.webp"
            alt="Capital Vista"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            priority
            sizes="25vw"
          />
          <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/80" />
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none flex absolute inset-x-0 bottom-10 flex-col items-center justify-end gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Image
              src="/cre-logos/logo_capital_vista.webp"
              alt="Capital Vista Logo"
              width={56}
              height={56}
              className="drop-shadow"
            />
            <div className="text-white text-outline font-revivalism text-lg">Capital Vista</div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaMapMarkerAlt className="text-primary" />
              <span>Chania Ave Junction - Kilimani</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaBed className="text-primary" />
              <span>Luxury 1 & 2 Beds</span>
            </div>
            <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-3 py-1">
              Newly Launched
            </Badge>
          </div>
        </div>
        <div className="group relative min-h-0 overflow-hidden transition-opacity duration-300">
          <Image
            src="/cre-photos/capital_heights.webp"
            alt="Capital Heights"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="25vw"
          />
          <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/80" />
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none flex absolute inset-x-0 bottom-10 flex-col items-center justify-end gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Image
              src="/cre-logos/logo_capital_heights.webp"
              alt="Capital Heights Logo"
              width={56}
              height={56}
              className="drop-shadow"
            />
            <div className="text-white text-outline font-revivalism text-lg">Capital Heights</div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaMapMarkerAlt className="text-primary" />
              <span>School Lane - Westlands</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaBed className="text-primary" />
              <span>Luxury Studios, 1, 2 & 3 Beds</span>
            </div>
            <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-3 py-1">
              Groundbroken
            </Badge>
          </div>
        </div>
        <div className="group relative min-h-0 overflow-hidden transition-opacity duration-300">
          <Image
            src="/cre-photos/capital_garden.webp"
            alt="Capital Garden"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="25vw"
          />
          <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/80" />
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none flex absolute inset-x-0 bottom-10 flex-col items-center justify-end gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Image
              src="/cre-logos/logo_capital_garden.webp"
              alt="Capital Garden Logo"
              width={56}
              height={56}
              className="drop-shadow"
            />
            <div className="text-white text-outline font-revivalism text-lg">Capital Garden</div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaMapMarkerAlt className="text-primary" />
              <span>George Padmore Rd. - Kilimani</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaBed className="text-primary" />
              <span>Luxury 1, 2 & 3 Beds</span>
            </div>
            <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-3 py-1">
              Showhouse Ready
            </Badge>
          </div>
        </div>
        <div className="group relative min-h-0 overflow-hidden transition-opacity duration-300">
          <Image
            src="/cre-photos/capital_rise.webp"
            alt="Capital Rise"
            fill
            className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
            sizes="25vw"
          />
          <div className="pointer-events-none absolute inset-2 rounded-xl border-2 border-transparent transition-all duration-300 group-hover:border-primary/80" />
          <div className="pointer-events-none absolute inset-0 bg-black/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="pointer-events-none flex absolute inset-x-0 bottom-10 flex-col items-center justify-end gap-2 opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
            <Image
              src="/cre-logos/logo_capital_rise.webp"
              alt="Capital Rise Logo"
              width={56}
              height={56}
              className="drop-shadow"
            />
            <div className="text-white text-outline font-revivalism text-lg">Capital Rise</div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaMapMarkerAlt className="text-primary" />
              <span>Muringa Road - Kilimani</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-white/90">
              <FaBed className="text-primary" />
              <span>Luxury 1, 2 & 3 Beds</span>
            </div>
            <Badge className="bg-primary text-primary-foreground text-xs rounded-full px-3 py-1">
              Completed
            </Badge>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none hidden md:block absolute inset-0 h-[80vh]"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.20), rgba(255,255,255,0.10), transparent)',
        }}
      />

      <div
        className="pointer-events-none hidden md:block absolute inset-x-0 bottom-[20vh] h-16"
        style={{
          background: `linear-gradient(to top, var(--brand-navy-900), transparent)`,
        }}
      />

      <div className="pointer-events-none hidden md:flex absolute inset-x-0 top-4 bottom-[20vh] flex-col items-center justify-start gap-2 px-6 text-center">
        <div
          className="w-full max-w-5xl p-5 rounded-2xl border backdrop-blur-md"
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
            className="mx-auto h-auto w-[160px] mb-1"
            priority
          />
          <h1 className="mx-auto max-w-[800px] text-lg font-medium tracking-tight drop-shadow-[0_1px_8px_rgba(255,255,255,0.8)] mb-1 leading-tight text-foreground">
            Secure Your Front-Row Seat to Nairobi&apos;s Next Landmark Residences — Capital Vista &
            Capital Heights.
          </h1>
          <ContactFormDialog>
            <Button
              size="sm"
              className="pointer-events-auto rounded-full px-4 py-2 text-sm text-foreground"
            >
              Register now — Units Going Fast!
            </Button>
          </ContactFormDialog>
        </div>
      </div>

      {/* Removed mobile-only corner stacks */}

      {/* Bottom 20vh countdown section with solid navy background */}
      <div
        className="absolute inset-x-0 bottom-0 h-[20vh] flex flex-col items-center justify-center gap-1 px-6 text-center z-10"
        style={{ backgroundColor: 'var(--brand-navy-900)' }}
      >
        <h2 className="text-lg font-medium text-primary drop-shadow-lg font-revivalism">
          Website Launching in:
        </h2>
        <Countdown className="scale-90" />

        <div className="flex items-center gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=61578846316409"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--facebook-blue)' }}
          >
            <FaFacebookF className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://www.instagram.com/capitalrealestate254/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: `linear-gradient(45deg, var(--instagram-gradient-start), var(--instagram-gradient-end))`,
            }}
          >
            <FaInstagram className="w-3 h-3 text-white" />
          </a>
          <a
            href="https://www.linkedin.com/company/capitalrealestateke"
            target="_blank"
            rel="noopener noreferrer"
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--linkedin-blue)' }}
          >
            <FaLinkedinIn className="w-3 h-3 text-white" />
          </a>
        </div>
      </div>
    </div>
  )
}
