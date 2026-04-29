import Link from 'next/link'
import { ArrowLeft, ArrowRight, Globe, Mail, MapPin, Phone, Tag } from 'lucide-react'
import { ClickablePhotoGallery } from '@/components/tasks/clickable-photo-gallery'
import { RichContent, formatRichHtml } from '@/components/shared/rich-content'
import { SchemaJsonLd } from '@/components/seo/schema-jsonld'
import { TaskPostCard } from '@/components/shared/task-post-card'
import type { SitePost } from '@/lib/site-connector'
import type { TaskKey } from '@/lib/site-config'

export function DirectoryTaskDetailPage({
  task,
  taskLabel,
  taskRoute,
  post,
  description,
  category,
  images,
  mapEmbedUrl,
  related,
}: {
  task: TaskKey
  taskLabel: string
  taskRoute: string
  post: SitePost
  description: string
  category: string
  images: string[]
  mapEmbedUrl: string | null
  related: SitePost[]
}) {
  const content = post.content && typeof post.content === 'object' ? (post.content as Record<string, unknown>) : {}
  const location = typeof content.address === 'string' ? content.address : typeof content.location === 'string' ? content.location : ''
  const website = typeof content.website === 'string' ? content.website : ''
  const phone = typeof content.phone === 'string' ? content.phone : ''
  const email = typeof content.email === 'string' ? content.email : ''
  const highlights = Array.isArray(content.highlights) ? content.highlights.filter((item): item is string => typeof item === 'string') : []
  const schemaPayload = {
    '@context': 'https://schema.org',
    '@type': task === 'profile' ? 'Organization' : 'LocalBusiness',
    name: post.title,
    description,
    image: images[0],
    url: `${taskRoute}/${post.slug}`,
    address: location || undefined,
    telephone: phone || undefined,
    email: email || undefined,
  }

  return (
    <div className="min-h-screen bg-[#f5f6f8] text-slate-950">
      <SchemaJsonLd data={schemaPayload} />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
          <Link href="/" className="hover:text-slate-800">Home</Link>
          <span>/</span>
          <Link href={taskRoute} className="hover:text-slate-800">{taskLabel}</Link>
          <span>/</span>
          <span className="font-medium text-slate-700">{post.title}</span>
        </div>

        <section className="grid gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
          <div>
            <div className="mb-5">
              <Link href={taskRoute} className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50">
                <ArrowLeft className="h-4 w-4" /> Back
              </Link>
            </div>

            <h1 className="text-3xl font-semibold text-slate-900 md:text-4xl">{post.title}</h1>
            <p className="mt-3 inline-flex items-center gap-2 text-lg text-slate-700">
              <MapPin className="h-5 w-5 text-slate-500" /> {location || 'Location not provided'}
            </p>

            <div className="mt-6">
              <h2 className="text-2xl font-semibold text-slate-900">Description</h2>
              <RichContent
                html={formatRichHtml(description, 'Details coming soon.')}
                className="mt-3 text-lg leading-8 text-slate-700"
              />
            </div>

            <div className="mt-6 grid gap-3 text-base text-slate-700">
              {phone ? <div className="inline-flex items-center gap-3"><Phone className="h-4 w-4" /> {phone}</div> : null}
              {email ? <div className="inline-flex items-center gap-3"><Mail className="h-4 w-4" /> {email}</div> : null}
              {website ? (
                <div className="inline-flex items-center gap-3">
                  <Globe className="h-4 w-4" />
                  <a href={website} target="_blank" rel="noreferrer" className="text-blue-700 hover:underline">{website}</a>
                </div>
              ) : null}
            </div>

            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-2xl font-semibold text-slate-900">Highlights</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {(highlights.length ? highlights : [category || taskLabel, 'Verified listing']).slice(0, 6).map((item) => (
                  <div key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <ClickablePhotoGallery images={images} title={post.title} />
            </div>
          </div>

          <aside className="space-y-5 lg:sticky lg:top-20">
            <div className="rounded-xl border border-slate-200 bg-white p-4">
              <a href={website || '#'} target={website ? '_blank' : undefined} rel={website ? 'noreferrer' : undefined} className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#0b5ea8] px-5 py-3 text-base font-semibold text-white hover:bg-[#094f8d]">
                Apply now <span className="text-sm font-normal">| via partner</span> <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="bg-green-700 px-4 py-3 text-base font-semibold text-white">Safety Tips</div>
              <div className="p-4 text-base leading-7 text-slate-700">
                Be careful with commission-based opportunities or offers that promise unrealistically high returns.
              </div>
            </div>

            {mapEmbedUrl ? (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700">Location</div>
                <iframe src={mapEmbedUrl} title={`${post.title} map`} className="h-[260px] w-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              </div>
            ) : null}
          </aside>
        </section>

        {related.length ? (
          <section className="mt-14">
            <div className="flex items-end justify-between gap-4 border-b border-slate-200 pb-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">Related surfaces</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">Keep browsing nearby matches.</h2>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                <Tag className="h-3.5 w-3.5" /> {taskLabel}
              </span>
            </div>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {related.map((item) => (
                <TaskPostCard key={item.id} post={item} href={`${taskRoute}/${item.slug}`} taskKey={task} />
              ))}
            </div>
          </section>
        ) : null}
      </main>
    </div>
  )
}
