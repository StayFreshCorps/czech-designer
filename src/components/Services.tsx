import { Shell } from '@/components/ui'

const practices = [
  {
    title: 'Brand systems',
    copy: 'Identity, manuals and DAM architecture that stay coherent as a brand scales.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <rect x="3" y="3" width="22" height="22" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 14 H25 M14 3 V25" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
  {
    title: 'AI pipelines',
    copy: 'ComfyUI, SDXL, Flux and IP-Adapter wired into campaign production — not demos.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <circle cx="14" cy="14" r="10" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="14" cy="14" r="3" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: 'Print production',
    copy: 'Prepress, ICC, PDF/X, sublimation and large format. Work that survives the factory floor.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
        <path d="M5 8 H23 V22 H5 Z" stroke="currentColor" strokeWidth="1.4" />
        <path d="M9 8 V5 H19 V8" stroke="currentColor" strokeWidth="1.4" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="practice" className="bg-ink text-paper">
      <Shell className="pb-20 lg:pb-28">
        <h2 className="font-display text-[42px] leading-[0.92] font-medium tracking-[-0.02em] lg:text-[64px]">
          Practice
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {practices.map((item) => (
            <article
              key={item.title}
              className="rounded-panel bg-paper/4 px-6 py-7"
            >
              <div className="text-paper/70">{item.icon}</div>
              <h3 className="mt-8 font-display text-[22px] font-medium tracking-[-0.015em]">{item.title}</h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-paper/55">{item.copy}</p>
            </article>
          ))}
        </div>
      </Shell>
    </section>
  )
}
