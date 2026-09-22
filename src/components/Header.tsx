import Link from 'next/link'

import { Button } from '@/components/ui'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#practice', label: 'Practice' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

function Nav({ className }: { className: string }) {
  return (
    <nav className={className}>
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="text-ink/70 hover:text-accent">
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export function Header({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 text-ink backdrop-blur-md">
      <div className="mx-auto flex max-w-[1440px] flex-col px-6 lg:px-16">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link href="/" className="font-display text-[15px] font-medium">
            Petr Kaloč
          </Link>
          <Nav className="hidden items-center gap-8 text-[13px] tracking-wide md:flex" />
          <Button href={`mailto:${email}`}>Email</Button>
        </div>
        <Nav className="flex items-center gap-5 pb-3 text-[12px] tracking-wide md:hidden" />
      </div>
    </header>
  )
}
