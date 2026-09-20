import type { ReactNode } from 'react'

export function Shell({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={`mx-auto w-full max-w-[1440px] px-6 lg:px-16 ${className}`}>{children}</div>
  )
}

export function Button({
  href,
  children,
  variant = 'solid',
  invert = false,
  className = '',
}: {
  href: string
  children: ReactNode
  variant?: 'solid' | 'ghost'
  invert?: boolean
  className?: string
}) {
  const solid = invert
    ? 'bg-paper text-ink hover:bg-accent hover:text-paper'
    : 'bg-ink text-paper hover:bg-accent'
  const ghost = invert
    ? 'border border-paper/25 text-paper hover:border-accent hover:text-accent'
    : 'border border-ink/20 text-ink hover:border-accent hover:text-accent'
  const external = href.startsWith('http')

  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[13px] font-medium tracking-wide transition-colors ${variant === 'solid' ? solid : ghost} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
