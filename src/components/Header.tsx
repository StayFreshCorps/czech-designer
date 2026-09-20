import Link from 'next/link'

import { Button } from '@/components/ui'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#practice', label: 'Practice' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function Header({ email }: { email: string }) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:h-[72px] lg:px-16">
        <Link href="/" className="font-display text-[15px] font-semibold tracking-tight">
          Petr Kaloč
        </Link>
        <nav className="hidden items-center gap-8 text-[13px] tracking-wide md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-ink/70 hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button href={`mailto:${email}`}>Email</Button>
      </div>
    </header>
  )
}
