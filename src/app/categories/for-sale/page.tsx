import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Package, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'

const checklist = [
  'Photograph defects honestly—buyers reward transparency with faster closes.',
  'Bundle accessories in the price or call them out separately to avoid disputes.',
  'Note pickup windows, neighborhoods, and whether you can ship.',
]

export default function ForSaleCategoryPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Categories · For sale"
      title={
        <>
          Turn clutter into <span className="text-[#C32121]">cash</span> with confident listings
        </>
      }
      description="Electronics, furniture, vehicles, and collectibles all live here. Think of it as a tidy shop window—not an endless auction feed."
      actions={
        <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds?category=shopping">
            Browse for sale
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-[#eef2f6] shadow-md lg:order-2 lg:min-h-[320px]">
          <Image
            src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=80"
            alt="Retail counter with products"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37]/75 via-transparent to-transparent" />
        </div>
        <ClassifiedContentCard className="lg:order-1">
          <div className="flex items-center gap-3 text-[#C32121]">
            <Package className="h-6 w-6" />
            <ClassifiedSectionLabel>Seller checklist</ClassifiedSectionLabel>
          </div>
          <h2 className="mt-3 text-2xl font-semibold text-[#0A1D37]">Make buyers say yes quickly</h2>
          <p className="mt-3 text-sm leading-relaxed text-[#666666]">
            Lead with condition, model year, and why you are selling. The calmer the story, the fewer back-and-forth messages you will juggle.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#666666]">
            {checklist.map((item) => (
              <li key={item} className="flex gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-[#C32121]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </ClassifiedContentCard>
      </div>

      <div className="mt-12 rounded-xl bg-[#0A1D37] px-6 py-10 text-white sm:px-10">
        <h3 className="text-xl font-semibold">Need pricing guidance?</h3>
        <p className="mt-3 max-w-2xl text-sm text-white/75">
          Scan similar listings on the board, then price slightly below the median if you want a same-weekend pickup. Bump upward when inventory is scarce.
        </p>
        <Button asChild className="mt-6 rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/search">Search comps</Link>
        </Button>
      </div>
    </ClassifiedSitePage>
  )
}
