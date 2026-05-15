import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, BadgeCheck, Headphones, PiggyBank, Shield, Tag, Truck } from 'lucide-react'
import { TaskPostCard } from '@/components/shared/task-post-card'
import { SITE_CONFIG } from '@/lib/site-config'
import { fetchTaskPosts, getPostImages } from '@/lib/task-data'
import { ClassifiedQuickFinder } from '@/components/classified/classified-quick-finder'

const features = [
  { title: 'Cost effective', body: 'Reach buyers and renters without heavy listing fees.', icon: PiggyBank },
  { title: 'Real-time updates', body: 'Fresh posts surface quickly so you see what is new.', icon: Truck },
  { title: '24/7 support', body: 'Helpful guidance when you post, edit, or renew an ad.', icon: Headphones },
  { title: 'Safer trades', body: 'Clear profiles and reporting tools to reduce noise.', icon: Shield },
]

export async function ClassifiedHomeView() {
  const classifiedPosts = await fetchTaskPosts('classified', 8, { allowMockFallback: false, fresh: true })
  const featured = classifiedPosts.slice(0, 3)
  const categoryFallbackImages = [
    'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80',
    'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  ]

  const categoryMap = new Map<
    string,
    { title: string; slug: string; count: number; image?: string }
  >()
  for (const post of classifiedPosts) {
    const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
    const contentCategory = typeof content.category === 'string' ? content.category.trim() : ''
    const tagCategory = Array.isArray(post.tags)
      ? post.tags.find((tag) => typeof tag === 'string' && tag.toLowerCase() !== 'classified')
      : ''
    const rawCategory = (contentCategory || tagCategory || 'General').trim()
    const slug = rawCategory.toLowerCase().replace(/\s+/g, '-')
    const entry = categoryMap.get(slug)
    const postImage = getPostImages(post)[0]

    if (entry) {
      entry.count += 1
      if (!entry.image && postImage) entry.image = postImage
    } else {
      categoryMap.set(slug, {
        title: rawCategory,
        slug,
        count: 1,
        image: postImage,
      })
    }
  }

  const categoryCards = Array.from(categoryMap.values())
    .sort((a, b) => b.count - a.count)
    .slice(0, 3)
    .map((item, index) => ({
      title: item.title,
      href: `/classifieds?category=${encodeURIComponent(item.slug)}`,
      image: item.image || categoryFallbackImages[index % categoryFallbackImages.length],
      count: item.count,
    }))

  const visibleCategoryCards =
    categoryCards.length > 0
      ? categoryCards
      : [
          { title: 'General', href: '/classifieds', image: categoryFallbackImages[0], count: 0 },
          { title: 'Updates', href: '/classifieds', image: categoryFallbackImages[1], count: 0 },
          { title: 'Community', href: '/classifieds', image: categoryFallbackImages[2], count: 0 },
        ]

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
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/80">Trusted platform</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Reliable local content, shared{' '}
              <span className="text-[#C32121]">everywhere</span> you care about
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80">Built for clean discovery, structured publishing, and effortless updates across categories.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/classifieds"
                className="inline-flex items-center gap-2 rounded-md bg-[#C32121] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-[#a61b1b]"
              >
                Browse classifieds
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/create/classified"
                className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
              >
                Post an ad
              </Link>
            </div>
          </div>
          <div className="mt-12 w-full max-w-sm rounded-xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md lg:ml-auto lg:mt-0">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/75">Browse categories</p>
            <p className="mt-2 text-lg font-semibold text-white">Jump straight to what you need</p>
            <div className="mt-4 space-y-2">
              {visibleCategoryCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="flex items-center justify-between rounded-md bg-white/10 px-3 py-2 text-sm text-white/90 transition hover:bg-white/20 hover:text-white"
                >
                  <span>{card.title}</span>
                  <span className="ml-auto mr-2 text-xs text-white/70">{card.count}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <Link
              href="/classifieds"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-white/80"
            >
              See more
              <ArrowRight className="h-4 w-4" />
            </Link>
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
              <Image src="/placeholder-user.jpg" alt="Handshake" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
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
            {visibleCategoryCards.map((card) => (
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

      <section className="bg-[#0A1D37] py-14 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold">Ready to post your next ad?</h2>
            <p className="mt-2 max-w-xl text-sm text-white/75">Create an account, add photos, and publish in minutes.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/create/classified" className="inline-flex items-center gap-2 rounded-md bg-[#C32121] px-6 py-3 text-sm font-semibold text-white hover:bg-[#a61b1b]">
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
