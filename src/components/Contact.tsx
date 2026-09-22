import Image from 'next/image'

import { Button, Shell } from '@/components/ui'
import type { Site } from '@/payload-types'

export function Contact({ site }: { site: Site }) {
  return (
    <section id="contact" className="relative isolate overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0">
        <Image
          src="/images/contact.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25" />
      </div>
      <Shell className="relative flex min-h-[520px] flex-col justify-end py-20 lg:min-h-[640px] lg:py-24">
        <h2 className="max-w-3xl font-display text-[52px] font-medium lg:text-[88px]">
          Let&apos;s talk.
        </h2>
        <p className="mt-6 max-w-lg text-[16px] leading-7 text-paper/75">{site.availabilityNote}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={`mailto:${site.email}`} invert>
            {site.email}
          </Button>
          <Button href={site.linkedin} variant="ghost" invert>
            LinkedIn
          </Button>
        </div>
      </Shell>
    </section>
  )
}
