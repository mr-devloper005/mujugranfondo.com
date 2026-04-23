import Link from 'next/link'
import { ArrowRight, ShieldCheck, Tag } from 'lucide-react'
import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'
import { SITE_CONFIG } from '@/lib/site-config'
import { ClassifiedLoginForm } from '@/components/classified/classified-login-form'

export const LOGIN_PAGE_OVERRIDE_ENABLED = true

export function LoginPageOverride() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0A1D37]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
          <div className="relative overflow-hidden rounded-xl border border-[#e5e7eb] bg-[#0A1D37] p-8 text-white shadow-[0_24px_60px_rgba(10,29,55,0.2)] lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(195,33,33,0.35),transparent_45%)]" aria-hidden />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]">
                <Tag className="h-3.5 w-3.5 text-[#ffb4b4]" />
                Classified access
              </div>
              <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">Sign in to manage your ads</h1>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-white/80">
                Post new listings, edit drafts, and keep your buyer conversations organized. Your session is stored locally on this device after a successful sign-in.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-white/85">
                {['Post and renew classifieds faster', 'Dashboard matched to this product skin', 'Secure sign-out clears local session'].map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-lg border border-white/10 bg-white/5 px-4 py-3">
                    <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8f8f]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl border border-[#e5e7eb] bg-white p-8 shadow-[0_16px_48px_rgba(10,29,55,0.08)] lg:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#666666]">Welcome back</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Sign in to {SITE_CONFIG.name}</h2>
            <p className="mt-2 text-sm text-[#666666]">Enter the email and password you want to use on this device.</p>
            <ClassifiedLoginForm />
            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-sm text-[#666666]">
              <Link href="/forgot-password" className="hover:text-[#C32121] hover:underline">
                Forgot password?
              </Link>
              <Link href="/register" className="inline-flex items-center gap-2 font-semibold text-[#C32121] hover:underline">
                Create account
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
