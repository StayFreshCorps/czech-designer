const practices = [
  {
    title: 'Brand systems',
    copy: 'Identity, manuals and DAM architecture that keep a brand coherent as it scales.',
  },
  {
    title: 'Print production',
    copy: 'Prepress, ICC, PDF/X, sublimation and large format — work that survives the factory floor.',
  },
  {
    title: 'AI pipelines',
    copy: 'ComfyUI, SDXL, Flux and IP-Adapter wired into campaign production, not demos.',
  },
]

export function Practice() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 pb-28 lg:px-16">
        <h2 className="font-display text-[39px] font-semibold tracking-[-0.04em] lg:text-[61px]">
          Practice
        </h2>
        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {practices.map((item) => (
            <article key={item.title} className="border border-paper/12 p-8">
              <h3 className="font-display text-[25px] font-semibold">{item.title}</h3>
              <p className="mt-4 max-w-sm text-[14px] leading-6 text-paper/65">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
