import Link from 'next/link'

const links = [
  { href: '/#work', label: 'Work' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper">
      <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 lg:h-[72px] lg:px-16">
        <Link href="/" className="font-display text-[15px] font-semibold tracking-tight">
          czechdesigner.com
        </Link>
        <nav className="flex items-center gap-8 text-[13px] tracking-wide">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-accent">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
