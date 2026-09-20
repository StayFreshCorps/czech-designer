import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { mediaUrl } from '@/lib/media'
import { getAllProjects, getProjectBySlug } from '@/lib/site'

type Args = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const projects = await getAllProjects()
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Work' }
  return {
    title: project.title,
    description: project.outcome,
  }
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) notFound()

  const images = Array.isArray(project.images) ? project.images : []

  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-16 lg:py-24">
        <Link href="/#work" className="text-[13px] tracking-wide text-muted hover:text-accent">
          ← Work
        </Link>
        <p className="mt-10 text-[11px] tracking-[0.24em] uppercase text-muted">{project.client}</p>
        <h1 className="mt-4 max-w-4xl font-display text-[42px] leading-[0.95] font-semibold tracking-[-0.04em] lg:text-[76px]">
          {project.title}
        </h1>
        <p className="mt-8 max-w-2xl text-[20px] leading-8">{project.outcome}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {(project.tags || []).map((tag) => (
            <span key={tag} className="border border-ink/15 px-3 py-1 text-[11px] tracking-[0.16em] uppercase">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-16 grid gap-6">
          {images.map((image, index) => {
            const url = mediaUrl(image)
            if (!url) return null
            const alt = image && typeof image === 'object' && 'alt' in image ? image.alt : project.title
            const svg = url.endsWith('.svg')
            return (
              <div key={index} className="relative aspect-[16/10] bg-ink">
                <Image
                  src={url}
                  alt={alt || project.title}
                  fill
                  unoptimized={svg}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}
