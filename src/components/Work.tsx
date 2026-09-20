import Image from 'next/image'
import Link from 'next/link'

import { mediaUrl } from '@/lib/media'
import type { Project } from '@/payload-types'

function ProjectImage({ project, className }: { project: Project; className?: string }) {
  const image = Array.isArray(project.images) ? project.images[0] : null
  const url = mediaUrl(image)
  const alt = image && typeof image === 'object' && 'alt' in image ? image.alt : project.title

  if (!url) {
    return <div className={`bg-ink ${className ?? ''}`} />
  }

  const svg = url.endsWith('.svg')

  return (
    <Image
      src={url}
      alt={alt || project.title}
      fill
      unoptimized={svg}
      className={`object-cover ${className ?? ''}`}
      sizes="(min-width: 1024px) 50vw, 100vw"
    />
  )
}

export function Work({ projects }: { projects: Project[] }) {
  const [featured, ...rest] = projects

  if (!featured) return null

  return (
    <section id="work" className="bg-ink text-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-20 lg:px-16 lg:py-28">
        <article className="grid-12 items-center">
          <Link href={`/work/${featured.slug}`} className="relative col-span-12 aspect-[4/5] sm:aspect-[16/10] lg:col-span-6 lg:aspect-[4/5]">
            <ProjectImage project={featured} />
          </Link>
          <div className="col-span-12 lg:col-span-6 lg:pl-10">
            <p className="text-[11px] tracking-[0.28em] uppercase text-paper/50">Selected work</p>
            <h2 className="mt-6 font-display text-[39px] leading-[1.05] font-semibold tracking-[-0.03em] lg:text-[61px]">
              {featured.title}
            </h2>
            <p className="mt-4 text-[13px] tracking-wide text-paper/60">{featured.client}</p>
            <p className="mt-8 max-w-md text-[16px] leading-7">{featured.outcome}</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {(featured.tags || []).map((tag) => (
                <span key={tag} className="border border-paper/20 px-3 py-1 text-[11px] tracking-[0.16em] uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <Link href={`/work/${featured.slug}`} className="mt-10 inline-flex text-[13px] tracking-wide hover:text-accent">
              Open case →
            </Link>
          </div>
        </article>

        {rest.length > 0 && (
          <div className="mt-28">
            <h2 className="max-w-3xl font-display text-[39px] leading-[0.95] font-semibold tracking-[-0.04em] lg:text-[76px]">
              Limitless production with a system behind it
            </h2>
            <div className="mt-16 grid gap-12 lg:grid-cols-3">
              {rest.map((project) => (
                <Link key={project.id} href={`/work/${project.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-paper/5">
                    <ProjectImage project={project} />
                  </div>
                  <p className="mt-5 text-[11px] tracking-[0.2em] uppercase text-paper/45">{project.client}</p>
                  <h3 className="mt-2 font-display text-[25px] leading-tight font-semibold group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-6 text-paper/70">{project.outcome}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
