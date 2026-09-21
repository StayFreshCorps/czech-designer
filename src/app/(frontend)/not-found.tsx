import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-[1440px] px-6 py-32 lg:px-16">
      <p className="text-[11px] tracking-[0.28em] uppercase text-paper/40">404</p>
      <h1 className="mt-6 font-display text-[49px] font-medium">Page not found.</h1>
      <Link href="/" className="mt-8 inline-block text-[14px] text-paper/70 hover:text-accent">
        Back to work
      </Link>
    </div>
  )
}
