import Link from 'next/link'

import { Shell } from '@/components/ui'
import type { Site } from '@/payload-types'

export function Footer({ site }: { site: Site }) {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper">
      <Shell className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-5">
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Email</p>
          <a href={`mailto:${site.email}`} className="mt-3 block text-[14px] hover:text-accent">
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Location</p>
          <p className="mt-3 max-w-[16rem] text-[14px] text-paper/70">{site.availabilityNote}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Work</p>
          <div className="mt-3 flex flex-col gap-2 text-[14px] text-paper/70">
            <Link href="/#work" className="hover:text-accent">
              Selected work
            </Link>
            <Link href="/#practice" className="hover:text-accent">
              Practice
            </Link>
            <Link href="/#about" className="hover:text-accent">
              About
            </Link>
          </div>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] uppercase text-paper/40">Contact</p>
          <div className="mt-3 flex flex-col gap-2 text-[14px] text-paper/70">
            <a href={`mailto:${site.email}`} className="hover:text-accent">
              Email
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:text-right">
          <p className="font-display text-[18px] leading-tight font-semibold">Petr Kaloč</p>
          <p className="mt-3 text-[13px] text-paper/45">czechdesigner.com</p>
        </div>
      </Shell>
      <div className="border-t border-paper/8">
        <Shell className="flex flex-wrap items-center justify-between gap-3 py-5 text-[12px] text-paper/35">
          <span>© {new Date().getFullYear()} Petr Kaloč</span>
          <span>Brand systems · AI production · Print</span>
        </Shell>
      </div>
    </footer>
  )
}
