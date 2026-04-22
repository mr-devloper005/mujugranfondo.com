import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeCheck, Headphones, PiggyBank, Shield, Star, Tag, Truck } from 'lucide-react'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts } from '@/lib/task-data'
import { ClassifiedQuickFinder } from '@/components/classified/classified-quick-finder'

const categoryCards = [
  { title: 'Jobs & gigs', href: '/classifieds', image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80' },
  { title: 'For sale', href: '/classifieds', image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80' },
  { title: 'Housing', href: '/classifieds', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80' },
]

const features = [
  { title: 'Cost effective', body: 'Reach buyers and renters without heavy listing fees.', icon: PiggyBank },
  { title: 'Real-time updates', body: 'Fresh posts surface quickly so you see what is new.', icon: Truck },
  { title: '24/7 support', body: 'Helpful guidance when you post, edit, or renew an ad.', icon: Headphones },
  { title: 'Safer trades', body: 'Clear profiles and reporting tools to reduce noise.', icon: Shield },
]

const testimonials = [
  { name: 'Ravi Malhotra', role: 'Small business owner', quote: 'We filled two roles in a week. The flow is simple and serious buyers showed up fast.', rating: 5 },
  { name: 'Sora Kim', role: 'Community organizer', quote: 'Posting neighborhood notices here feels cleaner than scattered group chats.', rating: 5 },
  { name: 'Daniel Ortiz', role: 'Seller', quote: 'Sold my bike in three days. Photos and price controls made the listing easy to trust.', rating: 4 },
]

const insights = [
  { date: '12 Apr 2026', title: 'How to write classified ads that convert', href: '/blog', image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80' },
  { date: '02 Apr 2026', title: 'Pricing local services with confidence', href: '/blog', image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80' },
  { date: '22 Mar 2026', title: 'Safety tips for in-person pickups', href: '/contact', image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80' },
]

export async function ClassifiedHomeView() {
  const classifiedPosts = await fetchTaskPosts('classified', 8, { allowMockFallback: false, fresh: true })
  const featured = classifiedPosts.slice(0, 3)

  return (
    <main className="bg-white">
      <section className="relative isolate overflow-hidden bg-[#0A1D37] text-white">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D37] via-[#0A1D37]/92 to-[#0A1D37]/75" />
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:flex lg:min-h-[520px] lg:items-center lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Trusted classifieds</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Reliable local listings, posted{' '}
              <span className="text-[#C32121]">everywhere</span> you care about
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">{SITE_CONFIG.description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/classifieds"
                className="inline-flex items-center gap-2 rounded-md bg-[#C32121] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#a61b1b]"
              >
                Browse classifieds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/register"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Post an ad
              </Link>
            </div>
          </div>
          <div className="mt-12 w-full max-w-sm rounded-xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md lg:ml-auto lg:mt-0">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80', 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80'].map((src, i) => (
                  <span key={src} className="relative inline-flex h-10 w-10 overflow-hidden rounded-full ring-2 ring-[#0A1D37]">
                    <Image src={src} alt="" width={40} height={40} className="object-cover" />
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-amber-300' : 'fill-amber-300/40'}`} />
                  ))}
                </div>
                <p className="mt-1 text-sm font-semibold">4.8 average satisfaction</p>
                <p className="text-xs text-white/70">Trusted by locals and small teams</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Who we are</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A1D37] sm:text-4xl">Consistently helping people trade locally</h2>
            <p className="mt-4 text-sm leading-7 text-[#666666]">
              {SITE_CONFIG.name} is built for clear classified browsing: structured categories, honest summaries, and tools that keep your posts easy to find.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-[#C32121] px-5 py-2.5 text-sm font-semibold text-[#C32121] transition hover:bg-[#C32121] hover:text-white"
            >
              Know more
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="relative col-span-2 row-span-2 min-h-[280px] overflow-hidden rounded-2xl sm:min-h-[320px]">
              <Image src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=900&q=80" alt="Community" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </div>
            <div className="relative min-h-[150px] overflow-hidden rounded-2xl">
              <Image src="https://images.unsplash.com/photo-1521791055366-05d90393b961?w=500&q=80" alt="Handshake" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
            <div className="relative min-h-[150px] overflow-hidden rounded-2xl">
              <Image src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&q=80" alt="Meeting" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#eef2f6] bg-[#fafbfc] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Our categories</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A1D37]">How we organize classified excellence</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-[#666666]">Jump into the lanes people use most—jobs, goods, and housing stay separated so browsing stays fast.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {categoryCards.map((card) => (
              <Link key={card.title} href={card.href} className="group overflow-hidden rounded-xl bg-white shadow-[0_10px_40px_rgba(10,29,55,0.08)] ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg">
                <div className="relative h-48 w-full">
                  <Image src={card.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-lg font-semibold text-white">{card.title}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Why choose us</p>
            <h2 className="text-3xl font-semibold tracking-tight text-[#0A1D37]">Built for clarity, not clutter</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {features.map(({ title, body, icon: Icon }) => (
                <div key={title} className="rounded-lg border border-[#eef2f6] bg-white p-4 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C32121]/10 text-[#C32121]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-3 text-base font-semibold text-[#0A1D37]">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#666666]">{body}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1fr_minmax(0,0.9fr)] lg:items-stretch">
            <ClassifiedQuickFinder />
            <div className="relative hidden min-h-[280px] overflow-hidden rounded-xl bg-[#0A1D37] lg:block">
              <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Logistics inspiration" fill className="object-cover opacity-90" sizes="40vw" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-sm text-white/90">
                <BadgeCheck className="mb-2 h-6 w-6 text-[#C32121]" />
                Post once, reach neighbors who are already searching.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fafbfc] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#e5e7eb] pb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Fresh picks</p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-[#0A1D37]">Featured classifieds</h2>
              <p className="mt-2 max-w-xl text-sm text-[#666666]">Handpicked momentum from the newest posts on the board.</p>
            </div>
            <Link href="/classifieds" className="inline-flex items-center gap-2 text-sm font-semibold text-[#C32121] hover:underline">
              View all
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featured.length
              ? featured.map((post) => (
                  <TaskPostCard key={post.id} post={post} href={`/classifieds/${post.slug}`} taskKey="classified" />
                ))
              : [1, 2, 3].map((i) => (
                  <div key={i} className="rounded-xl border border-dashed border-[#e5e7eb] bg-white p-6 text-sm text-[#666666]">
                    <Tag className="mb-3 h-6 w-6 text-[#C32121]" />
                    <p className="font-semibold text-[#0A1D37]">Listings load from your feed</p>
                    <p className="mt-2">Connect your content source to populate this row automatically.</p>
                    <Link href="/classifieds" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#C32121] hover:underline">
                      Browse classifieds
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Voices</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A1D37]">What our community says</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border border-[#eef2f6] bg-white p-6 shadow-[0_12px_32px_rgba(10,29,55,0.06)]">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0A1D37] text-sm font-semibold text-white">{t.name.slice(0, 1)}</div>
                <div>
                  <p className="font-semibold text-[#0A1D37]">{t.name}</p>
                  <p className="text-xs text-[#666666]">{t.role}</p>
                </div>
              </div>
              <div className="mt-3 flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < t.rating ? 'fill-amber-400' : 'fill-transparent'}`} />
                ))}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#666666]">&ldquo;{t.quote}&rdquo;</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-[#eef2f6] bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#C32121]">Insights</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#0A1D37]">Tips for smarter classified posting</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {insights.map((post) => (
              <Link key={post.title} href={post.href} className="group overflow-hidden rounded-xl border border-[#eef2f6] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="relative h-44 w-full overflow-hidden">
                  <Image src={post.image} alt="" fill className="object-cover transition duration-500 group-hover:scale-105" sizes="33vw" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#666666]">{post.date}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0A1D37]">{post.title}</h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-[#C32121]">
                    Read more
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0A1D37] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">Ready to post your next ad?</h2>
            <p className="mt-2 max-w-xl text-sm text-white/75">Create an account, add photos, and publish in minutes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/register" className="inline-flex items-center gap-2 rounded-md bg-[#C32121] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a61b1b]">
              Post classified
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
