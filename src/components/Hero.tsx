import Image from 'next/image'

import { Button, Shell } from '@/components/ui'
import type { Client, Site } from '@/payload-types'

export function Hero({ site, clients }: { site: Site; clients: Client[] }) {
  const lines = (site.headline || '').split('\n').filter(Boolean)

  return (
    <section className="relative overflow-hidden bg-paper text-ink">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <svg className="h-full w-full" viewBox="0 0 1440 820" preserveAspectRatio="none">
          <path d="M780 0 L1440 90 L1440 820 L640 820 Z" fill="none" stroke="black" strokeOpacity="0.08" />
          <path d="M920 0 L1440 180" fill="none" stroke="black" strokeOpacity="0.1" />
          <path d="M0 96 H1440" fill="none" stroke="black" strokeOpacity="0.06" />
        </svg>
      </div>

      <Shell className="relative grid items-center gap-12 py-16 lg:grid-cols-12 lg:gap-0 lg:py-0 lg:min-h-[780px]">
        <div className="lg:col-span-6 lg:pr-12 lg:py-24">
          <p className="mb-7 text-[11px] font-medium tracking-[0.32em] uppercase text-muted">
            Senior designer
          </p>
          <h1 className="font-display text-[52px] leading-[0.9] font-medium tracking-[-0.03em] sm:text-[72px] lg:text-[88px]">
            {lines.map((line, index) => (
              <span className="reveal-clip" key={line}>
                <span className="reveal" style={{ animationDelay: `${index * 90}ms` }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>
          <p className="reveal mt-7 max-w-md text-[15px] leading-7 text-muted" style={{ animationDelay: '220ms' }}>
            {site.subheadline}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`}>Email Petr</Button>
            <Button href={site.linkedin} variant="ghost">
              LinkedIn
            </Button>
          </div>
        </div>

        <div className="relative lg:col-span-6 lg:h-[780px]">
          <div className="relative aspect-[3/4] overflow-hidden rounded-panel lg:absolute lg:inset-y-10 lg:right-0 lg:aspect-auto lg:w-[92%]">
            <Image
              src="/images/hero.png"
              alt="Editorial menswear still — campaign photography"
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
            <div className="absolute right-6 bottom-6 rounded-inset bg-paper/92 px-4 py-3 backdrop-blur-sm lg:right-8 lg:bottom-8">
              <p className="font-display text-[42px] leading-none font-medium tracking-[-0.03em]">25+</p>
              <p className="mt-1 text-[12px] tracking-wide text-muted">Years in production</p>
            </div>
          </div>
        </div>
      </Shell>

      <div className="relative border-t border-ink/8">
        <Shell className="flex flex-wrap items-center gap-x-8 gap-y-3 py-6 text-[13px] text-muted">
          <span className="tracking-[0.2em] uppercase">Selected clients</span>
          {clients.slice(0, 4).map((client) => (
            <span key={client.id} className="text-ink">
              {client.name}
            </span>
          ))}
        </Shell>
      </div>
    </section>
  )
}
