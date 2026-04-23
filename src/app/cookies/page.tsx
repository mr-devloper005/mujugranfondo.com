import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'

const cookies = [
  {
    title: 'Essential cookies',
    body: 'Keep you signed in, remember security preferences, and route traffic safely across our infrastructure. These cannot be disabled if you want the product to function.',
  },
  {
    title: 'Functional cookies',
    body: 'Remember filters, draft listings, and UI density choices so returning visits feel continuous instead of repetitive.',
  },
  {
    title: 'Analytics cookies',
    body: 'Help us understand which pages are slow, which flows confuse people, and where errors spike. Data is aggregated and used to prioritize engineering work.',
  },
  {
    title: 'Marketing cookies',
    body: 'Only used when you opt into promotional experiences. You can withdraw consent anytime via the cookie banner or browser settings.',
  },
]

export default function CookiesPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Legal"
      title={
        <>
          Cookie <span className="text-[#C32121]">policy</span>
        </>
      }
      description={`How ${SITE_CONFIG.name} uses cookies and similar technologies.`}
      actions={
        <Button asChild variant="outline" className="rounded-md border-white/40 bg-white/10 font-semibold text-white hover:bg-white/15">
          <Link href="/privacy">
            Back to privacy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <ClassifiedContentCard>
          <ClassifiedSectionLabel>Control</ClassifiedSectionLabel>
          <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">You decide what sticks around</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666666]">
            Use your browser controls to block third-party cookies entirely. Keep in mind that blocking essential cookies may sign you out or disable saved drafts until you allow them again.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">Last updated · April 22, 2026</p>
        </ClassifiedContentCard>
        <div className="space-y-4">
          {cookies.map((c, i) => (
            <ClassifiedContentCard key={c.title} className="p-6">
              <p className="text-xs font-bold text-[#C32121]">Category {i + 1}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#0A1D37]">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#666666]">{c.body}</p>
            </ClassifiedContentCard>
          ))}
        </div>
      </div>
    </ClassifiedSitePage>
  )
}
