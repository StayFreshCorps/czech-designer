import Image from 'next/image'

import { Button, Shell } from '@/components/ui'
import type { Site, Stat } from '@/payload-types'

const facts = ['Brand', 'AI', 'Print']

export function About({ site, stats }: { site: Site; stats: Stat[] }) {
  return (
    <section id="about" className="bg-ink text-paper">
      <Shell className="grid items-center gap-12 py-20 lg:grid-cols-12 lg:gap-16 lg:py-28">
        <div className="relative aspect-square overflow-hidden rounded-[32px] lg:col-span-5 lg:aspect-[4/5]">
          <Image
            src="/images/about.png"
            alt="Sculptural visor — production still"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>

        <div className="lg:col-span-7">
          <p className="text-[11px] tracking-[0.28em] uppercase text-paper/40">About</p>
          <h2 className="mt-4 font-display text-[42px] leading-[0.92] font-medium tracking-[-0.02em] lg:text-[64px]">
            The production
            <br />
            layer
          </h2>
          <div className="mt-6 flex gap-6 text-[13px] tracking-wide text-paper/45">
            {facts.map((fact, index) => (
              <span key={fact} className={index === 0 ? 'text-paper' : undefined}>
                {fact}
              </span>
            ))}
          </div>
          <p className="mt-8 max-w-xl text-[16px] leading-8 text-paper/75">{site.about}</p>
          <dl className="mt-10 grid grid-cols-3 gap-6">
            {stats.slice(0, 3).map((stat) => (
              <div key={stat.id}>
                <dt className="font-display text-[28px] leading-none font-medium tracking-[-0.02em] lg:text-[36px]">
                  {stat.value}
                </dt>
                <dd className="mt-2 text-[12px] leading-5 text-paper/45">{stat.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={`mailto:${site.email}`} invert>
              Email Petr
            </Button>
            <Button href={site.linkedin} variant="ghost" invert>
              LinkedIn
            </Button>
          </div>
        </div>
      </Shell>
    </section>
  )
}
