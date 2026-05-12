import Link from 'next/link'
import { Clock, LifeBuoy, Mail, MapPin, MessageSquare, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'
import { siteIdentity } from '@/config/site.identity'

const lanes = [
  {
    title: 'Posting & billing',
    body: 'Questions about drafts, renewals, featured boosts, or receipts.',
    icon: MessageSquare,
  },
  {
    title: 'Trust & safety',
    body: 'Report suspicious listings, harassment, or scams—include links and screenshots.',
    icon: LifeBuoy,
  },
  {
    title: 'Partnerships',
    body: 'Local media, civic groups, or employers who want a branded lane on the board.',
    icon: MapPin,
  },
]

export default function ContactPage() {
  const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || `hello@${siteIdentity.domain}`

  return (
    <ClassifiedSitePage
      eyebrow="Contact"
      title={
        <>
          We respond fast to <span className="text-[#C32121]">real people</span> with real questions
        </>
      }
      description="Tell us what you are trying to post, fix, or understand. We route moderation, billing, and partnerships separately so you are not stuck in a generic queue."
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.02fr] lg:items-start">
        <div className="space-y-6">
          {lanes.map(({ title, body, icon: Icon }) => (
            <ClassifiedContentCard key={title} className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-[#0A1D37]">{title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#666666]">{body}</p>
                </div>
              </div>
            </ClassifiedContentCard>
          ))}
        </div>

        <ClassifiedContentCard>
          <ClassifiedSectionLabel>Message us</ClassifiedSectionLabel>
          <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Send a note to {SITE_CONFIG.name}</h2>
          <p className="mt-2 text-sm text-[#666666]">
            This form is a UI preview—wire it to your help desk when you are ready. For now it helps visitors see the fields we recommend collecting.
          </p>
          <form className="mt-8 grid gap-5">
            <div className="grid gap-2 sm:grid-cols-2 sm:gap-4">
              <div className="grid gap-2">
                <Label htmlFor="c-name" className="text-sm font-medium text-[#0A1D37]">
                  Name
                </Label>
                <Input id="c-name" placeholder="Your full name" className="h-11 border-[#e5e7eb] bg-white" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="c-email" className="text-sm font-medium text-[#0A1D37]">
                  Email
                </Label>
                <Input id="c-email" type="email" placeholder="you@example.com" className="h-11 border-[#e5e7eb] bg-white" />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-topic" className="text-sm font-medium text-[#0A1D37]">
                Topic
              </Label>
              <Input id="c-topic" placeholder="e.g. Renewals, reporting a listing, partnership" className="h-11 border-[#e5e7eb] bg-white" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="c-body" className="text-sm font-medium text-[#0A1D37]">
                Details
              </Label>
              <Textarea
                id="c-body"
                placeholder="Share links, ad IDs, and what outcome you need."
                className="min-h-[160px] border-[#e5e7eb] bg-white text-sm"
              />
            </div>
            <Button type="button" className="h-11 rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
              Send message
            </Button>
          </form>
          <p className="mt-6 text-center text-xs text-[#666666]">
            Prefer self-serve?{' '}
            <Link href="/help" className="font-semibold text-[#C32121] hover:underline">
              Visit the help center
            </Link>
          </p>
        </ClassifiedContentCard>
      </div>
    </ClassifiedSitePage>
  )
}
