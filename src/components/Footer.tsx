import Link from 'next/link'

import type { Site } from '@/payload-types'

export function Footer({ site }: { site: Site }) {
  return (
    <footer className="border-t border-ink/10 bg-paper">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-16">
        <div>
          <p className="font-display text-[15px] font-semibold">czechdesigner.com</p>
          <p className="mt-3 text-[13px] text-muted">Petr Kaloč</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Email</p>
          <a href={`mailto:${site.email}`} className="mt-2 block text-[14px] hover:text-accent">
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Location</p>
          <p className="mt-2 text-[14px]">{site.availabilityNote}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-muted">Nav</p>
          <div className="mt-2 flex flex-col gap-1 text-[14px]">
            <Link href="/#work">Work</Link>
            <Link href="/#about">About</Link>
            <Link href="/#contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
