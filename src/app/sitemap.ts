import type { MetadataRoute } from 'next'

import { getAllProjects } from '@/lib/site'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://czechdesigner.com'
  const projects = await getAllProjects()

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    ...projects.map((project) => ({
      url: `${siteUrl}/work/${project.slug}`,
      lastModified: new Date(),
    })),
  ]
}
