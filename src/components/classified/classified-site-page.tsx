import type { ReactNode } from 'react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { cn } from '@/lib/utils'

type ClassifiedSitePageProps = {
  eyebrow?: string
  title: ReactNode
  description?: string
  actions?: ReactNode
  children: ReactNode
}

export function ClassifiedSitePage({ eyebrow, title, description, actions, children }: ClassifiedSitePageProps) {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-[#0A1D37]">
      <NavbarShell />
      <section className="relative overflow-hidden bg-[#0A1D37] text-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_-10%,rgba(195,33,33,0.35),transparent_50%)]" aria-hidden />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_90%_80%,rgba(255,255,255,0.06),transparent_40%)]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16">
          {eyebrow ? <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75">{eyebrow}</p> : null}
          <div className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</div>
          {description ? <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80">{description}</p> : null}
          {actions ? <div className="mt-8 flex flex-wrap gap-3">{actions}</div> : null}
        </div>
      </section>
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">{children}</main>
      <Footer />
    </div>
  )
}

export function ClassifiedContentCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'rounded-xl border border-[#eef2f6] bg-white p-6 shadow-[0_12px_40px_rgba(10,29,55,0.06)] sm:p-8',
        className,
      )}
    >
      {children}
    </div>
  )
}

export function ClassifiedSectionLabel({ children }: { children: ReactNode }) {
  return <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">{children}</p>
}
