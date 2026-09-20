import type { Site } from '@/payload-types'

export function Contact({ site }: { site: Site }) {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-28 lg:px-16 lg:py-36">
        <h2 className="max-w-4xl font-display text-[42px] leading-[0.95] font-semibold tracking-[-0.04em] lg:text-[95px]">
          Available for senior remote or hybrid roles.
          <br />
          Let&apos;s talk.
        </h2>
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={`mailto:${site.email}`}
            className="bg-paper px-6 py-3 text-[13px] font-medium tracking-wide text-ink hover:bg-accent hover:text-paper"
          >
            Send email
          </a>
          <a
            href={site.linkedin}
            className="border border-paper/30 px-6 py-3 text-[13px] font-medium tracking-wide hover:border-accent hover:text-accent"
          >
            LinkedIn
          </a>
        </div>
        <p className="mt-10 text-[14px] text-paper/55">{site.availabilityNote}</p>
      </div>
    </section>
  )
}
