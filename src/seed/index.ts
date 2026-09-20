import path from 'path'
import { fileURLToPath } from 'url'
import type { Payload } from 'payload'

const dirname = path.dirname(fileURLToPath(import.meta.url))

async function createMedia(payload: Payload, file: string, alt: string) {
  return payload.create({
    collection: 'media',
    data: { alt },
    filePath: path.resolve(dirname, 'media', file),
  })
}

export async function seed(payload: Payload) {
  const adminEmail = process.env.PAYLOAD_ADMIN_EMAIL || 'petr@czechdesigner.com'
  const adminPassword = process.env.PAYLOAD_ADMIN_PASSWORD || 'change-me-now'

  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: adminEmail, password: adminPassword },
    })
  }

  const brand = await createMedia(payload, 'brand.png', 'Brand system kit — folders, swatches, type specimens')
  const ai = await createMedia(payload, 'ai.png', 'AI fashion photography still')
  const campaign = await createMedia(payload, 'campaign.png', 'Multi-channel campaign control room')
  const print = await createMedia(payload, 'print.png', 'Large-format print production floor')

  const projects = [
    {
      title: 'BANDI Brand System',
      slug: 'bandi-brand-system',
      client: 'BANDI VAMOS a.s.',
      outcome:
        'Built the complete visual identity system for a Czech premium menswear brand during growth from 500M → 1B CZK revenue.',
      tags: ['Brand', 'Packaging', 'Campaign', 'Identity'] as const,
      images: [brand.id],
      order: 1,
    },
    {
      title: 'AI Visual Production Pipeline',
      slug: 'ai-visual-production',
      client: 'Confidential client, premium menswear',
      outcome: 'Built a proprietary AI fashion photography pipeline that moved production from weeks to hours.',
      tags: ['AI', 'Campaign', 'Brand'] as const,
      images: [ai.id],
      order: 2,
    },
    {
      title: 'Multi-channel Campaign Production',
      slug: 'multi-channel-campaigns',
      client: 'BANDI VAMOS a.s.',
      outcome:
        '50+ banner assets per campaign deployed across Google, Meta and PPC in a single day via a smart-object system.',
      tags: ['Campaign', 'Brand'] as const,
      images: [campaign.id],
      order: 3,
    },
    {
      title: 'Corporate Identity / Print Production',
      slug: 'corporate-print-production',
      client: 'AG Geronimo · Factory Print',
      outcome:
        'Delivered identity and print systems for Komerční banka, Amundi, and large-format production including vehicle wraps.',
      tags: ['Identity', 'Print'] as const,
      images: [print.id],
      order: 4,
    },
  ]

  for (const project of projects) {
    await payload.create({
      collection: 'projects',
      data: { ...project, featured: true },
    })
  }

  const skillGroups = [
    { category: 'Brand & Identity', items: ['corporate identity', 'brand manuals', 'positioning'], order: 1 },
    { category: 'Print Production', items: ['prepress', 'ICC profiles', 'PDF/X', 'sublimation', 'large format'], order: 2 },
    { category: 'Digital & Campaign', items: ['multi-channel assets', 'PPC banners', 'e-commerce'], order: 3 },
    { category: 'AI Production', items: ['ComfyUI', 'SDXL', 'Flux', 'IP-Adapter', 'ControlNet'], order: 4 },
    { category: 'Systems', items: ['DAM architecture', 'NAS taxonomy', 'smart-object templates'], order: 5 },
    { category: 'Tools', items: ['Adobe CC (master)', 'Payload CMS', 'Cursor', 'Figma'], order: 6 },
  ]

  for (const group of skillGroups) {
    await payload.create({
      collection: 'skills',
      data: {
        category: group.category,
        items: group.items.map((label) => ({ label })),
        order: group.order,
      },
    })
  }

  const stats = [
    { value: '25+', label: 'Years of practice', order: 1 },
    { value: '500M→1B', label: 'CZK revenue growth supported', order: 2 },
    { value: '50+', label: 'Campaign assets in one day', order: 3 },
    { value: '4', label: 'Departments served simultaneously at BANDI', order: 4 },
    { value: '3', label: 'NAS drives — DAM taxonomy rebuilt', order: 5 },
    { value: '2007', label: 'First professional role — Prague DTP studio', order: 6 },
  ]

  for (const stat of stats) {
    await payload.create({ collection: 'stats', data: stat })
  }

  const clients = [
    'BANDI VAMOS a.s.',
    'AG Geronimo',
    'Škoda Auto',
    'Gawd Sqwad (NY)',
    'Whittles Jewellers (UK)',
    'Factory Print',
  ]

  for (const [index, name] of clients.entries()) {
    await payload.create({
      collection: 'clients',
      data: { name, order: index + 1 },
    })
  }

  await payload.updateGlobal({
    slug: 'site',
    data: {
      headline: 'THE WORK\nTHAT SHIPS',
      subheadline: 'Brand systems, AI production pipelines and print. 25+ years. Ostrava → Worldwide.',
      about:
        'I work at the intersection of brand strategy, visual production and AI systems. I build the infrastructure that makes design scalable — from taxonomy systems and smart-object templates to AI generation pipelines. I have delivered across agencies, in-house teams and international freelance since 2005. Currently open to senior remote or hybrid roles in Western Europe.',
      email: 'petr@czechdesigner.com',
      linkedin: 'https://linkedin.com/in/petrkaloc',
      openToWork: true,
      availabilityNote: 'Based in Czech Republic · Open to NL, DE, CH, UK · Hybrid or Remote',
    },
  })
}
