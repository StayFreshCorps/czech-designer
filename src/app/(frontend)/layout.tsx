import type { Metadata } from 'next'
import Script from 'next/script'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { getHomeData } from '@/lib/site'
import './styles.css'

const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://czechdesigner.com'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Petr Kaloč — Senior Designer | czechdesigner.com',
    template: '%s | czechdesigner.com',
  },
  description:
    'Senior designer. Brand systems, AI production pipelines and the work that ships. Based in Czech Republic, open to NL, DE, CH, UK.',
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteUrl,
    siteName: 'czechdesigner.com',
    title: 'Petr Kaloč — Senior Designer',
    description:
      'Brand systems, AI production pipelines and the work that ships. Open to senior remote or hybrid roles in Western Europe.',
  },
  alternates: {
    canonical: siteUrl,
  },
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { site } = await getHomeData()
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Petr Kaloč',
    jobTitle: 'Senior Graphic Designer',
    url: siteUrl,
    email: site.email,
    sameAs: [site.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'CZ',
    },
  }

  return (
    <html lang="en">
      <body className="font-sans">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}
        <Header />
        <main>{children}</main>
        <Footer site={site} />
      </body>
    </html>
  )
}
