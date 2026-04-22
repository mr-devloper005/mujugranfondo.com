import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'What we collect',
    body: `Account details you provide (name, email), listing content, messages you send through ${SITE_CONFIG.name}, device and log data used for security, and limited analytics to understand feature usage.`,
  },
  {
    title: 'Why we collect it',
    body: 'To operate the service, personalize your experience, prevent abuse, comply with law, and improve reliability. We do not sell personal information to data brokers.',
  },
  {
    title: 'How long we keep it',
    body: 'We retain account and listing data while your account is active and for a reasonable period afterward for backups, disputes, and legal obligations. Analytics aggregates may be stored longer in de-identified form.',
  },
  {
    title: 'Sharing',
    body: 'We share information with vendors who help us host, email, and secure the product—under contracts that limit use to providing the service. We may disclose information if required by law or to protect users.',
  },
  {
    title: 'Your choices',
    body: 'You may access, update, or delete certain profile information from settings. You can opt out of marketing emails via the unsubscribe link. Some processing is required to operate an account.',
  },
  {
    title: 'International visitors',
    body: 'If you access the service from outside the primary region, you consent to processing and storage in accordance with this policy and applicable local law.',
  },
]

export default function PrivacyPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Legal"
      title={
        <>
          Privacy <span className="text-[#C32121]">policy</span>
        </>
      }
      description={`How ${SITE_CONFIG.name} collects, uses, and protects personal information.`}
      actions={
        <Button asChild variant="outline" className="rounded-md border-white/40 bg-white/10 font-semibold text-white hover:bg-white/15">
          <Link href="/cookies">
            Cookie policy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <ClassifiedContentCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">Last updated · April 22, 2026</p>
        <ClassifiedSectionLabel>At a glance</ClassifiedSectionLabel>
        <p className="mt-3 text-sm leading-relaxed text-[#666666]">
          We collect the minimum needed to run a trustworthy classified marketplace. You stay in control of marketing preferences, and we are transparent about subprocessors that help us deliver the product.
        </p>
        <div className="mt-10 space-y-6">
          {sections.map((section, index) => (
            <div key={section.title} className="border-t border-[#eef2f6] pt-6 first:border-t-0 first:pt-0">
              <p className="text-xs font-bold text-[#C32121]">Section {index + 1}</p>
              <h2 className="mt-2 text-lg font-semibold text-[#0A1D37]">{section.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#666666]">{section.body}</p>
            </div>
          ))}
        </div>
      </ClassifiedContentCard>
    </ClassifiedSitePage>
  )
}
