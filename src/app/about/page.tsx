import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, MapPin, Shield, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ClassifiedContentCard, ClassifiedSectionLabel, ClassifiedSitePage } from '@/components/classified/classified-site-page'
import { mockTeamMembers } from '@/data/mock-data'
import { SITE_CONFIG } from '@/lib/site-config'

const milestones = [
  { year: '2024', title: 'Local pilot', body: 'We opened a focused board for neighborhood trades, gigs, and housing leads.' },
  { year: '2025', title: 'Trust tooling', body: 'Reporting, clearer seller cues, and faster renewals made listings easier to scan.' },
  { year: '2026', title: 'Nationwide rhythm', body: 'Today we balance fresh inventory with calmer pages so serious buyers stay longer.' },
]

const pillars = [
  {
    title: 'Neighbors first',
    body: 'We design for people who already live and work nearby—not anonymous spam at global scale.',
    icon: MapPin,
  },
  {
    title: 'Safety in the open',
    body: 'Clear expectations, visible contact paths, and moderation hooks keep trades more predictable.',
    icon: Shield,
  },
  {
    title: 'Human moderation',
    body: 'Automation helps triage, but humans still review edge cases so quality stays high.',
    icon: Users,
  },
]

export default function AboutPage() {
  return (
    <ClassifiedSitePage
      eyebrow="Our story"
      title={
        <>
          Built for <span className="text-[#C32121]">local classifieds</span> that feel calm and serious
        </>
      }
      description={`${SITE_CONFIG.name} exists so people can post once, be understood quickly, and connect without wading through noisy feeds.`}
      actions={
        <>
          <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
            <Link href="/classifieds">
              Browse board
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="rounded-md border-white/40 bg-white/10 font-semibold text-white backdrop-blur hover:bg-white/15"
          >
            <Link href="/contact">Talk with us</Link>
          </Button>
        </>
      }
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <ClassifiedContentCard>
          <ClassifiedSectionLabel>Why we are different</ClassifiedSectionLabel>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[#0A1D37] sm:text-3xl">Classifieds should feel like a bulletin board—not a casino.</h2>
          <p className="mt-4 text-sm leading-relaxed text-[#666666]">
            We keep categories obvious, headlines readable, and photos honest. Sellers get structured fields so buyers waste less time guessing. Everyone sees the same
            clean layout whether they are on a phone during a commute or at a desk planning a move.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-[#666666]">
            {[
              'No engagement tricks—just search, filter, and message.',
              'Renewals and expirations are visible so stale ads do not clutter results.',
              'Support routes you to a human when something looks off.',
            ].map((line) => (
              <li key={line} className="flex gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#C32121]" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </ClassifiedContentCard>
        <div className="relative min-h-[280px] overflow-hidden rounded-xl border border-[#eef2f6] shadow-[0_12px_40px_rgba(10,29,55,0.06)] lg:min-h-[360px]">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80"
            alt="Team collaborating"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D37]/80 via-transparent to-transparent" />
          <p className="absolute bottom-5 left-5 right-5 text-sm font-medium text-white">
            We are a small crew obsessed with clarity—designers, operators, and moderators who actually use the product.
          </p>
        </div>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {pillars.map(({ title, body, icon: Icon }) => (
          <ClassifiedContentCard key={title} className="p-6">
            <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#C32121]/10 text-[#C32121]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#0A1D37]">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#666666]">{body}</p>
          </ClassifiedContentCard>
        ))}
      </div>

      <div className="mt-14">
        <ClassifiedSectionLabel>Roadmap highlights</ClassifiedSectionLabel>
        <h2 className="mt-3 text-2xl font-semibold text-[#0A1D37]">Momentum you can feel</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {milestones.map((m) => (
            <div key={m.year} className="rounded-xl border border-[#eef2f6] bg-white p-6 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C32121]">{m.year}</p>
              <h3 className="mt-2 text-lg font-semibold text-[#0A1D37]">{m.title}</h3>
              <p className="mt-2 text-sm text-[#666666]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <ClassifiedSectionLabel>People behind the desk</ClassifiedSectionLabel>
        <h2 className="mt-3 text-2xl font-semibold text-[#0A1D37]">Meet the team</h2>
        <p className="mt-2 max-w-2xl text-sm text-[#666666]">We keep the lights on, answer emails, and ship improvements every week.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {mockTeamMembers.map((member) => (
            <ClassifiedContentCard key={member.id} className="p-6">
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 border border-[#eef2f6]">
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback className="bg-[#0A1D37] text-white">{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-[#0A1D37]">{member.name}</p>
                  <p className="text-xs text-[#666666]">{member.role}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[#666666]">{member.bio}</p>
              <p className="mt-3 text-xs font-medium text-[#C32121]">{member.location}</p>
            </ClassifiedContentCard>
          ))}
        </div>
      </div>

      <div className="mt-14 rounded-xl bg-[#0A1D37] px-6 py-10 text-center text-white sm:px-10">
        <h2 className="text-2xl font-semibold">Ready to post or browse?</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/75">Jump into the board, or tell us what category we should spotlight next.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button asChild className="rounded-md bg-[#C32121] font-semibold text-white hover:bg-[#a61b1b]">
            <Link href="/register">Post an ad</Link>
          </Button>
          <Button asChild variant="outline" className="rounded-md border-white/40 bg-transparent font-semibold text-white hover:bg-white/10">
            <Link href="/explore">Explore the site</Link>
          </Button>
        </div>
      </div>
    </ClassifiedSitePage>
  )
}
