import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Briefcase, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'

const tips = [
  'State pay range or hourly band up front—serious applicants bounce when comp is vague.',
  'Mention schedule, location, and visa sponsorship in the first paragraph.',
  'Use bullet lists for must-have skills; keep fluff out of the title.',
]

export default function JobsCategoryPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Categories · Jobs & gigs"
      title={
        <>
          Hire faster with <span className="text-[#C32121]">clearer job posts</span>
        </>
      }
      description="Whether you are staffing a cafe, filling a contract role, or listing weekend gigs, this lane keeps the story focused on outcomes and availability."
      actions={
        <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds?category=jobs-payroll">
            Open jobs board
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
        <ClassifiedContentCard>
          <div className="flex items-center gap-3 text-[#C32121]">
            <Briefcase className="h-6 w-6" />
            <ClassifiedSectionLabel>Playbook</ClassifiedSectionLabel>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-[#0A1D37]">What belongs in this lane</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666666]">
            Full-time roles, contract work, internships, and paid projects belong here. Keep community volunteer requests in general classifieds unless compensation is clearly
            defined.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#666666]">
            {tips.map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C32121]" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </ClassifiedContentCard>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-[#eef2f6] shadow-md lg:min-h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80"
            alt="People collaborating at a laptop"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0A1D37]/70 via-transparent to-transparent" />
        </div>
      </div>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { label: 'Median time-to-first reply', value: '< 6 hrs', detail: 'Based on moderated pilot cohorts.' },
          { label: 'Verified employers', value: 'Growing', detail: 'Badges roll out as partners onboard.' },
          { label: 'Role types', value: 'FT · PT · Gig', detail: 'Use filters after you open the board.' },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-[#eef2f6] bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">{stat.label}</p>
            <p className="mt-2 text-2xl font-semibold text-[#0A1D37]">{stat.value}</p>
            <p className="mt-1 text-xs text-[#666666]">{stat.detail}</p>
          </div>
        ))}
      </div>
    </ClassifiedSitePage>
  )
}
