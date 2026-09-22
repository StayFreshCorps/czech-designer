import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://czechdesigner.com'
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
