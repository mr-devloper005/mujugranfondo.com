import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Hammer, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'

const lanes = [
  { title: 'Home & field services', body: 'Cleaning, repairs, landscaping, and moving crews—show licensing and insurance when relevant.' },
  { title: 'Creative & digital', body: 'Photographers, designers, tutors, and engineers should link portfolios instead of pasting huge PDFs.' },
  { title: 'Care & wellness', body: 'Childcare, coaching, therapy-adjacent support—be explicit about certifications and boundaries.' },
]

export default function ServicesCategoryPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Categories · Services"
      title={
        <>
          Book skilled help with <span className="text-[#C32121]">transparent scopes</span>
        </>
      }
      description="Pros win when they publish packages, arrival windows, and cancellation rules. Buyers win when they can compare apples to apples."
      actions={
        <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds?category=service">
            Browse services
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-2">
        {lanes.map((lane) => (
          <ClassifiedContentCard key={lane.title} className="p-6">
            <div className="flex items-center gap-2 text-[#C32121]">
              <Hammer className="h-5 w-5" />
              <ClassifiedSectionLabel>Lane</ClassifiedSectionLabel>
            </div>
            <h3 className="mt-3 text-xl font-semibold text-[#0A1D37]">{lane.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#666666]">{lane.body}</p>
          </ClassifiedContentCard>
        ))}
        <div className="relative min-h-[260px] overflow-hidden rounded-xl border border-[#eef2f6] shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=900&q=80"
            alt="Technician with tools"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37]/85 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 flex items-start gap-3 text-white">
            <Sparkles className="mt-1 h-5 w-5 text-[#ffb4b4]" />
            <p className="text-sm leading-relaxed">Bundle “good / better / best” packages so buyers can self-select without endless DMs.</p>
          </div>
        </div>
      </div>
    </ClassifiedSitePage>
  )
}
