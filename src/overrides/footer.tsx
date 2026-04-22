import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteIdentity } from '@/config/site.identity'

export const FOOTER_OVERRIDE_ENABLED = true

const explore = [
  { name: 'Explore hub', href: '/explore' },
  { name: 'Home', href: '/' },
  { name: 'Classifieds', href: '/classifieds' },
  { name: 'Post an ad', href: '/register' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const categories = [
  { name: 'Jobs & gigs', href: '/categories/jobs' },
  { name: 'For sale', href: '/categories/for-sale' },
  { name: 'Housing', href: '/categories/housing' },
  { name: 'Services', href: '/categories/services' },
]

const legal = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Cookies', href: '/cookies' },
]

export function FooterOverride() {
  const year = new Date().getFullYear()
  const contactEmail = `support@${siteIdentity.domain}`

  return (
    <footer className="bg-[#0A1D37] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">
                {SITE_CONFIG.name}
                <span className="text-[#C32121]">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{SITE_CONFIG.description}</p>
            <p className="mt-4 text-sm text-white/80">{contactEmail}</p>
            <p className="text-sm text-white/80">+82 10-0000-0000</p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Explore</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {explore.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Categories</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Legal</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              {legal.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white hover:underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/60 sm:flex-row">
          <p>
            &copy; {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <Link href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2 hover:bg-white/10" aria-label="Facebook">
              <Facebook className="h-4 w-4" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2 hover:bg-white/10" aria-label="Twitter">
              <Twitter className="h-4 w-4" />
            </Link>
            <Link href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full border border-white/15 p-2 hover:bg-white/10" aria-label="Instagram">
              <Instagram className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
