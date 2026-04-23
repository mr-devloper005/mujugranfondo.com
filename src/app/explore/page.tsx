import Link from 'next/link'
import {
  ArrowRight,
  Compass,
  FileText,
  Home,
  LayoutGrid,
  LogIn,
  MapPinned,
  Megaphone,
  Shield,
  UserPlus,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { SITE_CONFIG } from '@/lib/site-config'

const primary = [
  { title: 'Home', description: 'Hero, featured picks, and trust strip.', href: '/', icon: Home },
  { title: 'Classifieds', description: 'Live board with filters tuned for local inventory.', href: '/classifieds', icon: LayoutGrid },
  { title: 'Post an ad', description: 'Open registration and start your first draft.', href: '/register', icon: Megaphone },
  { title: 'About', description: 'Mission, milestones, and the people behind the desk.', href: '/about', icon: Compass },
  { title: 'Contact', description: 'Lanes for support, safety, and partnerships.', href: '/contact', icon: FileText },
]

const categories = [
  { title: 'Jobs & gigs', description: 'Roles, shifts, freelance, and side hustles.', href: '/categories/jobs', icon: UserPlus },
  { title: 'For sale', description: 'Gear, vehicles, electronics, and household goods.', href: '/categories/for-sale', icon: LayoutGrid },
  { title: 'Housing', description: 'Rentals, roommates, leases, and short stays.', href: '/categories/housing', icon: MapPinned },
  { title: 'Services', description: 'Skilled trades, lessons, cleaning, and care.', href: '/categories/services', icon: Shield },
]

const legal = [
  { title: 'Terms', href: '/terms' },
  { title: 'Privacy', href: '/privacy' },
  { title: 'Cookies', href: '/cookies' },
]

export default function ExplorePage() {
  return (
    <ClassifiedSitePage
      eyebrow="Explore"
      title={
        <>
          Every doorway in <span className="text-[#C32121]">one calm map</span>
        </>
      }
      description={`Use this hub to jump anywhere inside ${SITE_CONFIG.name} without hunting through menus.`}
      actions={
        <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
          <Link href="/classifieds">
            Go to classifieds
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      }
    >
      <div>
        <ClassifiedSectionLabel>Start here</ClassifiedSectionLabel>
        <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Primary pages</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#666666]">Each card opens a fully refreshed layout that matches the navy and crimson system used on the homepage.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {primary.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <ClassifiedContentCard className="h-full p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#666666] transition group-hover:translate-x-0.5 group-hover:text-[#C32121]" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0A1D37]">{item.title}</h3>
                <p className="mt-2 text-sm text-[#666666]">{item.description}</p>
              </ClassifiedContentCard>
            </Link>
          ))}
          <Link href="/login" className="group">
            <ClassifiedContentCard className="h-full p-6 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
                  <LogIn className="h-5 w-5" />
                </div>
                <ArrowRight className="h-4 w-4 text-[#666666] transition group-hover:translate-x-0.5 group-hover:text-[#C32121]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#0A1D37]">Sign in</h3>
              <p className="mt-2 text-sm text-[#666666]">Access drafts, saved searches, and seller tools.</p>
            </ClassifiedContentCard>
          </Link>
        </div>
      </div>

      <div className="mt-14">
        <ClassifiedSectionLabel>Categories</ClassifiedSectionLabel>
        <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Curated lanes</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#666666]">Each lane has its own storytelling page before you dive into filtered results.</p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {categories.map((item) => (
            <Link key={item.href} href={item.href} className="group">
              <ClassifiedContentCard className="h-full p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0A1D37]/5 text-[#0A1D37]">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-[#0A1D37]">{item.title}</h3>
                    <p className="mt-2 text-sm text-[#666666]">{item.description}</p>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-[#666666] transition group-hover:translate-x-0.5 group-hover:text-[#C32121]" />
                </div>
              </ClassifiedContentCard>
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-xl border border-[#eef2f6] bg-white p-8 shadow-sm">
        <ClassifiedSectionLabel>Legal</ClassifiedSectionLabel>
        <h2 className="mt-2 text-2xl font-semibold text-[#0A1D37]">Policies with the same visual language</h2>
        <p className="mt-2 text-sm text-[#666666]">Terms, privacy, and cookies now share the classified hero shell so nothing feels bolted on.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {legal.map((l) => (
            <Button key={l.href} asChild variant="outline" className="rounded-md border-[#0A1D37]/15 text-[#0A1D37] hover:border-[#C32121] hover:text-[#C32121]">
              <Link href={l.href}>{l.title}</Link>
            </Button>
          ))}
        </div>
      </div>
    </ClassifiedSitePage>
  )
}
