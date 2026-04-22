import Link from 'next/link'
import { ArrowRight, BadgeCheck, Sparkles, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { REGISTER_PAGE_OVERRIDE_ENABLED, RegisterPageOverride } from '@/overrides/register-page'
import { SITE_CONFIG } from '@/lib/site-config'

export default function RegisterPage() {
  if (REGISTER_PAGE_OVERRIDE_ENABLED) {
    return <RegisterPageOverride />
  }

  return (
    <ClassifiedSitePage
      eyebrow="Post an ad"
      title={
        <>
          Create your <span className="text-[#C32121]">seller workspace</span> in minutes
        </>
      }
      description="Set up a profile, save drafts, and publish classifieds with the same calm layout you see across the public site."
      actions={
        <Button asChild variant="outline" className="rounded-md border-white/40 bg-white/10 font-semibold text-white hover:bg-white/15">
          <Link href="/login">
            Already registered? Sign in
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
        <ClassifiedContentCard className="border border-[#1a3555] bg-[#0A1D37] p-8 text-white shadow-[0_24px_60px_rgba(10,29,55,0.18)] lg:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
            <Tag className="h-3.5 w-3.5 text-[#ffb4b4]" />
            Classifieds
          </div>
          <h2 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl">Everything you need to rotate inventory fast</h2>
          <p className="mt-4 text-sm leading-relaxed text-white/85">
            Upload photos, set price bands, and mark availability without fighting the UI. Renewals stay visible so you always know when a listing needs a refresh.
          </p>
          <ul className="mt-8 space-y-4 text-sm">
            {['Draft autosave while you type', 'Buyer messages routed to one inbox', 'Optional featured slots when you want extra reach'].map((item) => (
              <li key={item} className="flex gap-3 rounded-lg border border-white/15 bg-white/10 px-4 py-3 text-white">
                <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#ff8f8f]" aria-hidden />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </ClassifiedContentCard>

        <ClassifiedContentCard className="p-8 lg:p-10">
          <ClassifiedSectionLabel>Create account</ClassifiedSectionLabel>
          <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Join {SITE_CONFIG.name}</h2>
          <p className="mt-2 text-sm text-[#666666]">This form is a visual template—connect it to your auth flow when you wire production signup.</p>
          <form className="mt-8 grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="reg-name" className="text-sm font-medium text-[#0A1D37]">
                Full name
              </Label>
              <Input id="reg-name" placeholder="Alex Kim" className="h-11 border-[#e5e7eb] bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reg-email" className="text-sm font-medium text-[#0A1D37]">
                Email
              </Label>
              <Input id="reg-email" type="email" placeholder="you@example.com" className="h-11 border-[#e5e7eb] bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reg-pass" className="text-sm font-medium text-[#0A1D37]">
                Password
              </Label>
              <Input id="reg-pass" type="password" placeholder="••••••••" className="h-11 border-[#e5e7eb] bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="reg-intent" className="text-sm font-medium text-[#0A1D37]">
                What will you list first?
              </Label>
              <Input id="reg-intent" placeholder="Jobs, furniture, apartment…" className="h-11 border-[#e5e7eb] bg-white" />
            </div>
            <Button type="button" className="h-11 rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
              Create account
            </Button>
          </form>
          <p className="mt-6 text-center text-sm text-[#666666]">
            Already have an account?{' '}
            <Link href="/login" className="inline-flex items-center gap-1 font-semibold text-[#C32121] hover:underline">
              <Sparkles className="h-4 w-4" />
              Sign in
            </Link>
          </p>
        </ClassifiedContentCard>
      </div>
    </ClassifiedSitePage>
  )
}
