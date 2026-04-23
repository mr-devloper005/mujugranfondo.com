import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'

const sections = [
  {
    title: 'Using the platform',
    body: `By accessing ${SITE_CONFIG.name}, you agree to post accurate information, respect other users, and follow applicable laws. We may remove content that violates these terms or creates risk for the community.`,
  },
  {
    title: 'Accounts & eligibility',
    body: 'You are responsible for safeguarding your login. You must be old enough to enter binding agreements in your jurisdiction. Business sellers should represent a legitimate entity or sole proprietorship they control.',
  },
  {
    title: 'Listings & transactions',
    body: 'Transactions happen between buyers and sellers. We provide the venue, not the contract. You agree not to use the platform for fraud, counterfeit goods, illegal services, or deceptive pricing.',
  },
  {
    title: 'Fees & changes',
    body: 'Some placements or boosts may carry fees disclosed at checkout. We can update these terms with reasonable notice; continued use after changes means you accept the revised terms.',
  },
  {
    title: 'Liability',
    body: 'To the fullest extent permitted by law, we are not liable for indirect damages arising from use of the service. Our total liability for any claim is limited to the amounts you paid us in the prior twelve months for paid features.',
  },
  {
    title: 'Contact',
    body: 'Questions about these terms? Reach the team through the contact page and we will respond as soon as practical.',
  },
]

export default function TermsPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Legal"
      title={
        <>
          Terms of <span className="text-[#C32121]">service</span>
        </>
      }
      description={`The rules for using ${SITE_CONFIG.name} as a buyer, seller, or visitor.`}
      actions={
        <Button asChild variant="outline" className="rounded-md border-white/40 bg-white/10 font-semibold text-white hover:bg-white/15">
          <Link href="/privacy">
            Read privacy policy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <ClassifiedContentCard>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#666666]">Last updated · April 22, 2026</p>
        <ClassifiedSectionLabel>Summary</ClassifiedSectionLabel>
        <p className="mt-3 text-sm leading-relaxed text-[#666666]">
          These terms keep the marketplace respectful. They are written in plain language so you can skim quickly, then dive into each section when you need specifics.
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
