import config from '@payload-config'
import { getPayload } from 'payload'

export async function getPayloadClient() {
  return getPayload({ config })
}

export async function getHomeData() {
  const payload = await getPayloadClient()

  const [site, projects, skills, stats, clients] = await Promise.all([
    payload.findGlobal({ slug: 'site' }),
    payload.find({
      collection: 'projects',
      where: { featured: { equals: true } },
      sort: 'order',
      depth: 2,
      limit: 4,
    }),
    payload.find({ collection: 'skills', sort: 'order', limit: 20 }),
    payload.find({ collection: 'stats', sort: 'order', limit: 20 }),
    payload.find({ collection: 'clients', sort: 'order', depth: 1, limit: 20 }),
  ])

  return {
    site,
    projects: projects.docs,
    skills: skills.docs,
    stats: stats.docs,
    clients: clients.docs,
  }
}

export async function getProjectBySlug(slug: string) {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    depth: 2,
    limit: 1,
  })
  return result.docs[0] ?? null
}

export async function getAllProjects() {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'projects',
    sort: 'order',
    depth: 2,
    limit: 50,
  })
  return result.docs
}
