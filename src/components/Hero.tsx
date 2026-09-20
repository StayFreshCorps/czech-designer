import type { Site } from '@/payload-types'

export function Hero({ site }: { site: Site }) {
  const lines = (site.headline || '').split('\n').filter(Boolean)

  return (
    <section className="relative overflow-hidden border-b border-ink/10">
      <div className="pointer-events-none absolute inset-0">
        <svg className="h-full w-full" viewBox="0 0 1440 720" preserveAspectRatio="none" aria-hidden>
          <path d="M920 0 L1440 0 L1440 720 L780 720 Z" fill="none" stroke="black" strokeOpacity="0.08" />
          <path d="M1080 0 L1440 220" fill="none" stroke="black" strokeOpacity="0.12" />
          <path d="M960 80 L1440 80" fill="none" stroke="black" strokeOpacity="0.08" />
        </svg>
      </div>
      <div className="relative mx-auto max-w-[1440px] px-6 py-20 lg:px-16 lg:py-28">
        <div className="grid-12 items-end">
          <div className="col-span-12 lg:col-span-8">
            <p className="mb-8 text-[11px] font-medium tracking-[0.28em] uppercase text-muted">Portfolio</p>
            <h1 className="font-display text-[42px] leading-[0.95] font-semibold tracking-[-0.04em] sm:text-[61px] lg:text-[95px]">
              {lines.map((line, index) => (
                <span className="reveal-clip" key={line}>
                  <span className="reveal" style={{ animationDelay: `${index * 90}ms` }}>
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p
              className="reveal mt-8 max-w-xl text-[15px] text-muted"
              style={{ animationDelay: '280ms' }}
            >
              {site.subheadline}
            </p>
            <a
              href="#work"
              className="mt-10 inline-flex items-center bg-ink px-6 py-3 text-[13px] font-medium tracking-wide text-paper hover:bg-accent"
            >
              View Work ↓
            </a>
          </div>
          <div className="col-span-12 mt-16 lg:col-span-4 lg:mt-0">
            <div className="flex h-full min-h-[220px] flex-col justify-between border border-ink/10 p-6">
              <p className="text-[11px] tracking-[0.24em] uppercase text-muted">Experience</p>
              <p className="font-display text-[61px] leading-none font-semibold tracking-[-0.05em]">25+</p>
              <p className="max-w-[16rem] text-[14px] text-muted">
                Years shipping brand systems, print and AI production.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center gap-8 border-t border-ink/10 pt-8 text-[13px] text-muted">
          <span>Ostrava → Worldwide</span>
          <span className="hidden h-3 w-px bg-ink/20 sm:block" />
          <span>Remote-ready</span>
          <span className="hidden h-3 w-px bg-ink/20 sm:block" />
          <span>NL · DE · CH · UK</span>
        </div>
      </div>
    </section>
  )
}
