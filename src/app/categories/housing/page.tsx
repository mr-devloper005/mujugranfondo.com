import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, KeyRound } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'

const highlights = [
  { title: 'Pin the essentials', body: 'Square footage, bedrooms, deposit, utilities, and pet policy should appear before adjectives like “cozy.”' },
  { title: 'Show the commute', body: 'Name train lines, bus routes, or drive times to major hubs—renters search maps first.' },
  { title: 'Safety first', body: 'Never wire funds blindly. Prefer in-person tours and documented leases.' },
]

export default function HousingCategoryPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Categories · Housing"
      title={
        <>
          List homes and rooms with <span className="text-[#C32121]">adult-level detail</span>
        </>
      }
      description="Rentals, roommate searches, and lease takeovers belong here. Buyers skim fast—give them numbers before vibes."
      actions={
        <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds?category=real-estate">
            Browse housing
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-stretch">
        <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[#eef2f6] shadow-md">
          <Image
            src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&q=80"
            alt="Modern apartment interior"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D37]/80 via-[#0A1D37]/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 max-w-md rounded-lg bg-white/95 p-4 text-[#0A1D37] shadow-lg backdrop-blur">
            <div className="flex items-center gap-2 text-[#C32121]">
              <KeyRound className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">Renter tip</span>
            </div>
            <p className="mt-2 text-sm text-[#666666]">Save searches with alerts so you are first to message when a fair listing drops.</p>
          </div>
        </div>
        <div className="space-y-4">
          {highlights.map((h) => (
            <ClassifiedContentCard key={h.title} className="p-6">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
                  <Home className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0A1D37]">{h.title}</h3>
                  <p className="mt-2 text-sm text-[#666666]">{h.body}</p>
                </div>
              </div>
            </ClassifiedContentCard>
          ))}
        </div>
      </div>
    </ClassifiedSitePage>
  )
}
