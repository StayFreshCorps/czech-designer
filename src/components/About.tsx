import type { Site, Skill, Stat } from '@/payload-types'

export function About({
  site,
  stats,
  skills,
}: {
  site: Site
  stats: Stat[]
  skills: Skill[]
}) {
  return (
    <section id="about" className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16 lg:py-28">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted">About</p>
        <div className="mt-10 grid-12">
          <p className="col-span-12 max-w-3xl text-[20px] leading-8 lg:col-span-8">{site.about}</p>
        </div>
        <dl className="mt-20 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="border-t border-ink/15 pt-6">
              <dt className="font-display text-[39px] leading-none font-semibold tracking-[-0.04em] lg:text-[49px]">
                {stat.value}
              </dt>
              <dd className="mt-3 max-w-xs text-[14px] text-muted">{stat.label}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-24 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div key={skill.id}>
              <h3 className="font-display text-[18px] font-semibold">{skill.category}</h3>
              <p className="mt-3 text-[14px] leading-6 text-muted">
                {(skill.items || []).map((item) => item.label).join(', ')}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
