import Link from 'next/link'
import { SITE_CONFIG } from '@/lib/site-config'

export const FOOTER_OVERRIDE_ENABLED = true

const explore = [
  { name: 'Explore hub', href: '/explore' },
  { name: 'Home', href: '/' },
  { name: 'Classifieds', href: '/classifieds' },
  { name: 'Post an ad', href: '/create/classified' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const legal = [
  { name: 'Terms', href: '/terms' },
  { name: 'Privacy', href: '/privacy' },
  { name: 'Cookies', href: '/cookies' },
]

export function FooterOverride() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A1D37] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight">
                {SITE_CONFIG.name}
                <span className="text-[#C32121]">.</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">{SITE_CONFIG.description}</p>
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
        </div>
      </div>
    </footer>
  )
}
