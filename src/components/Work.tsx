import Image from 'next/image'
import Link from 'next/link'

import { Shell } from '@/components/ui'
import { mediaUrl } from '@/lib/media'
import type { Project } from '@/payload-types'

function cover(project: Project) {
  const image = Array.isArray(project.images) ? project.images[0] : null
  const url = mediaUrl(image)
  const alt = image && typeof image === 'object' && 'alt' in image ? image.alt : project.title
  return { url, alt: alt || project.title }
}

export function Work({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects
  if (!featured) return null

  const featuredCover = cover(featured)

  return (
    <section id="work" className="bg-ink text-paper">
      <Shell className="pb-20 lg:pb-28">
        <h2 className="max-w-3xl font-display text-[42px] leading-[0.92] font-medium tracking-[-0.02em] lg:text-[64px]">
          Selected work.
          <br />
          Outcomes, not moodboards.
        </h2>

        <Link
          href={`/work/${featured.slug}`}
          className="group mt-14 grid items-center gap-8 rounded-panel bg-paper/4 p-3 lg:grid-cols-12 lg:gap-10 lg:p-4"
        >
          <div className="relative aspect-[16/10] overflow-hidden rounded-inset lg:col-span-7">
            {featuredCover.url ? (
              <Image
                src={featuredCover.url}
                alt={featuredCover.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
            ) : null}
          </div>
          <div className="px-2 pb-4 lg:col-span-5 lg:px-0 lg:pb-0">
            <p className="text-[11px] tracking-[0.22em] uppercase text-paper/40">
              01 / {featured.client}
            </p>
            <h3 className="mt-4 font-display text-[28px] leading-tight font-medium tracking-[-0.015em] group-hover:text-accent lg:text-[36px]">
              {featured.title}
            </h3>
            <p className="mt-4 max-w-md text-[15px] leading-7 text-paper/65">{featured.outcome}</p>
          </div>
        </Link>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          {rest.map((project, index) => {
            const { url, alt } = cover(project)
            return (
              <Link
                key={project.id}
                href={`/work/${project.slug}`}
                className="group rounded-panel bg-paper/4 p-3"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-inset">
                  {url ? (
                    <Image
                      src={url}
                      alt={alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                  ) : null}
                </div>
                <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-paper/40">
                  {String(index + 2).padStart(2, '0')} / {project.client}
                </p>
                <h3 className="mt-2 font-display text-[20px] leading-tight font-medium tracking-[-0.015em] group-hover:text-accent">
                  {project.title}
                </h3>
                <p className="mt-3 text-[14px] leading-6 text-paper/55">{project.outcome}</p>
              </Link>
            )
          })}
        </div>
      </Shell>
    </section>
  )
}
