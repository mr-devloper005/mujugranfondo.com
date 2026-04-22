'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, Mail, MapPin, Menu, Phone, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useAuth } from '@/lib/auth-context'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteIdentity } from '@/config/site.identity'
import { cn } from '@/lib/utils'

export const NAVBAR_OVERRIDE_ENABLED = true

const NavbarAuthControls = dynamic(() => import('@/components/shared/navbar-auth-controls').then((mod) => mod.NavbarAuthControls), {
  ssr: false,
  loading: () => null,
})

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Explore', href: '/explore' },
  { label: 'About', href: '/about' },
  { label: 'Classifieds', href: '/classifieds' },
  { label: 'Contact', href: '/contact' },
]

export function NavbarOverride() {
  const pathname = usePathname()
  const { isAuthenticated } = useAuth()
  const [open, setOpen] = useState(false)
  const contactEmail = `hello@${siteIdentity.domain}`

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      <div className="bg-[#C32121] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              <span className="opacity-95">Serving {siteIdentity.name} &amp; nearby communities</span>
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href={`mailto:${contactEmail}`} className="inline-flex items-center gap-1.5 hover:underline">
              <Mail className="h-3.5 w-3.5" />
              {contactEmail}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              +82 10-0000-0000
            </span>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-[#e5e7eb] bg-white p-0">
            <img
              src="/favicon.png?v=20260401"
              alt=""
              width={40}
              height={40}
              className="h-full w-full origin-center scale-[1.28] object-contain"
            />
          </div>
          <div className="min-w-0">
            <span className="block truncate text-lg font-bold tracking-tight text-[#0A1D37] sm:text-xl">
              {SITE_CONFIG.name}
              <span className="text-[#C32121]">.</span>
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.2em] text-[#666666] sm:block">Classifieds</span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((item) => {
            const active = item.href === '/' ? pathname === '/' : pathname.startsWith(item.href) && item.href !== '/'
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn('text-sm font-semibold text-[#0A1D37] transition hover:text-[#C32121]', active && 'text-[#C32121]')}
              >
                {item.label}
              </Link>
            )
          })}
        </div>

        <div className="hidden max-w-md flex-1 px-6 lg:block">
          <Link
            href="/search"
            className="flex w-full items-center gap-2 rounded-md border border-[#e5e7eb] bg-[#f9fafb] px-4 py-2.5 text-sm text-[#666666] transition hover:border-[#C32121]/40 hover:bg-white"
          >
            <Search className="h-4 w-4 shrink-0 text-[#C32121]" />
            <span className="truncate">Search classifieds…</span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          {isAuthenticated ? (
            <NavbarAuthControls />
          ) : (
            <>
              <Button variant="ghost" asChild className="hidden rounded-md text-[#0A1D37] hover:bg-[#f3f4f6] md:inline-flex">
                <Link href="/login">Sign in</Link>
              </Button>
              <Button asChild className="hidden rounded-md border border-[#C32121] bg-white px-4 text-[#C32121] hover:bg-[#C32121] hover:text-white md:inline-flex">
                <Link href="/register" className="inline-flex items-center gap-2">
                  Post an ad
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </>
          )}
          <Button variant="ghost" size="icon" className="rounded-md lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {open ? (
        <div className="border-t border-[#eef2f6] bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            <Link href="/search" onClick={() => setOpen(false)} className="mb-3 flex items-center gap-2 rounded-md border border-[#e5e7eb] bg-[#f9fafb] px-3 py-3 text-sm text-[#666666]">
              <Search className="h-4 w-4 text-[#C32121]" />
              Search classifieds
            </Link>
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-3 text-sm font-semibold text-[#0A1D37] hover:bg-[#f9fafb]"
              >
                {item.label}
              </Link>
            ))}
            {!isAuthenticated ? (
              <div className="mt-3 flex flex-col gap-2 border-t border-[#eef2f6] pt-3">
                <Button asChild variant="outline" className="w-full rounded-md border-[#C32121] text-[#C32121]">
                  <Link href="/login" onClick={() => setOpen(false)}>
                    Sign in
                  </Link>
                </Button>
                <Button asChild className="w-full rounded-md bg-[#C32121] text-white hover:bg-[#a61b1b]">
                  <Link href="/register" onClick={() => setOpen(false)}>
                    Post an ad
                  </Link>
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </header>
  )
}
