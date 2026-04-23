import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  LifeBuoy,
  MessageCircle,
  Search,
  Shield,
  Sparkles,
  Tag,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'

const guides = [
  {
    title: 'Post your first ad',
    description: 'Photos, titles, pricing, and category tags that help buyers decide in seconds.',
    href: '/register',
    icon: Tag,
  },
  {
    title: 'Search like a local',
    description: 'Combine keywords, categories, and saved filters to track new inventory daily.',
    href: '/classifieds',
    icon: Search,
  },
  {
    title: 'Stay safe in trades',
    description: 'Meet in public, avoid wire-only deals, and report listings that feel off.',
    href: '/contact',
    icon: Shield,
  },
  {
    title: 'Account & session',
    description: 'Sign in stays on this device until you sign out—perfect for shared computers.',
    href: '/login',
    icon: BookOpen,
  },
]

const helpFaqs = [
  {
    id: 'faq-post',
    question: 'How do I publish a classified?',
    answer: `Create an account from Post an ad, add photos and a clear price, then submit. Your listing appears on the ${SITE_CONFIG.name} board once it passes basic checks.`,
  },
  {
    id: 'faq-edit',
    question: 'Can I edit or renew an ad?',
    answer: 'Yes. Sign in, open your dashboard ads area, and choose edit or renew. Renewals keep your position fresh without duplicating posts.',
  },
  {
    id: 'faq-contact',
    question: 'How do I contact a seller?',
    answer: 'Use the message or contact options on the listing card. Keep conversations on-platform when possible so moderators can help if something goes wrong.',
  },
  {
    id: 'faq-safety',
    question: 'What should I do if a listing looks fraudulent?',
    answer: 'Do not pay outside verified flows. Use the report tools on the listing and include screenshots—we review every flag.',
  },
  {
    id: 'faq-cats',
    question: 'Where do jobs, housing, and services live?',
    answer: 'Start from Explore or the category hubs. Each lane has tips before you jump into filtered results.',
  },
  {
    id: 'faq-pricing',
    question: 'Are there fees?',
    answer: 'Standard listings are free in this template experience. Featured placements or boosts will always show pricing before you confirm.',
  },
]

export default function HelpPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Help center"
      title={
        <>
          Answers for <span className="text-[#C32121]">buyers & sellers</span> on {SITE_CONFIG.name}
        </>
      }
      description="Guides for posting, searching, staying safe, and getting human support when you need it—all in the same navy and crimson system as the rest of the site."
      actions={
        <>
          <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
            <Link href="/contact">
              Contact support
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md border-white/40 bg-white/10 font-semibold text-white hover:bg-white/15">
            <Link href="/explore">Explore hub</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {guides.map((g) => (
          <Link key={g.href} href={g.href} className="group">
            <ClassifiedContentCard className="h-full p-6 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
                <g.icon className="h-5 w-5" />
              </div>
              <h2 className="mt-4 text-lg font-semibold text-[#0A1D37]">{g.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#666666]">{g.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#C32121]">
                Open guide
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </ClassifiedContentCard>
          </Link>
        ))}
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <ClassifiedContentCard className="p-8">
          <div className="flex items-center gap-2 text-[#C32121]">
            <LifeBuoy className="h-6 w-6" />
            <ClassifiedSectionLabel>Still stuck?</ClassifiedSectionLabel>
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-[#0A1D37]">Talk with a human</h3>
          <p className="mt-3 text-sm leading-relaxed text-[#666666]">
            Moderation, billing, and partnerships each have their own inbox. Tell us which lane you need so we can route your note quickly.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#0A1D37]">
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#C32121]" />
              Average first reply within one business day for general questions.
            </li>
            <li className="flex gap-2">
              <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-[#C32121]" />
              Include listing links or screenshots when reporting an issue.
            </li>
          </ul>
          <Button asChild className="mt-8 rounded-md bg-[#0A1D37] font-semibold text-white hover:bg-[#132746]">
            <Link href="/contact">Open contact form</Link>
          </Button>
        </ClassifiedContentCard>

        <ClassifiedContentCard className="p-6 sm:p-8">
          <ClassifiedSectionLabel>FAQ</ClassifiedSectionLabel>
          <h3 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Common questions</h3>
          <p className="mt-2 text-sm text-[#666666]">Tap a row to expand. Looking for API docs? Head to Developers from the footer on other templates.</p>
          <Accordion type="single" collapsible className="mt-6 w-full">
            {helpFaqs.map((faq) => (
              <AccordionItem key={faq.id} value={faq.id} className="border-[#eef2f6]">
                <AccordionTrigger className="text-left text-[#0A1D37] hover:text-[#C32121] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-[#666666]">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ClassifiedContentCard>
      </div>

      <div className="mt-14 rounded-xl bg-[#0A1D37] px-6 py-10 text-center text-white sm:px-10">
        <h3 className="text-xl font-semibold sm:text-2xl">Prefer browsing over reading?</h3>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">Jump straight into the board—filters stay pinned so you never lose your place.</p>
        <Button asChild className="mt-6 rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds">Go to classifieds</Link>
        </Button>
      </div>
    </ClassifiedSitePage>
  )
}
