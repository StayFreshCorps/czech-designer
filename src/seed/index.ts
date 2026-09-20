import path from 'path'
import { fileURLToPath } from 'url'
import type { Payload } from 'payload'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

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
      data: {
        email: adminEmail,
        password: adminPassword,
      },
    })
  }

  const bandi1 = await createMedia(payload, 'bandi-1.svg', 'BANDI Charming Elegance packaging system')
  const bandi2 = await createMedia(payload, 'bandi-2.svg', 'BANDI campaign grid')
  const bandi3 = await createMedia(payload, 'bandi-3.svg', 'BANDI store rollout frames')
  const ai1 = await createMedia(payload, 'ai-1.svg', 'AI fashion photography pipeline, before and after')
  const ai2 = await createMedia(payload, 'ai-2.svg', 'ComfyUI and IP-Adapter production board')
  const campaign1 = await createMedia(payload, 'campaign-1.svg', 'Multi-channel banner set')
  const campaign2 = await createMedia(payload, 'campaign-2.svg', 'Campaign spread across Google, Meta, PPC')
  const print1 = await createMedia(payload, 'print-1.svg', 'Corporate identity print production')
  const print2 = await createMedia(payload, 'print-2.svg', 'Large format and vehicle wrap production')

  await payload.create({
    collection: 'projects',
    data: {
      title: 'BANDI Brand System',
      slug: 'bandi-brand-system',
      client: 'BANDI VAMOS a.s.',
      outcome:
        'Built the complete visual identity system for a Czech premium menswear brand during growth from 500M → 1B CZK revenue.',
      tags: ['Brand', 'Packaging', 'Campaign', 'Identity'],
      images: [bandi1.id, bandi2.id, bandi3.id],
      featured: true,
      order: 1,
    },
  })

  await payload.create({
    collection: 'projects',
    data: {
      title: 'AI Visual Production Pipeline',
      slug: 'ai-visual-production',
      client: 'Confidential client, premium menswear',
      outcome:
        'Built a proprietary AI fashion photography pipeline that moved production from weeks to hours.',
      tags: ['AI', 'Campaign', 'Brand'],
      images: [ai1.id, ai2.id],
      featured: true,
      order: 2,
    },
  })

  await payload.create({
    collection: 'projects',
    data: {
      title: 'Multi-channel Campaign Production',
      slug: 'multi-channel-campaigns',
      client: 'BANDI VAMOS a.s.',
      outcome:
        '50+ banner assets per campaign deployed across Google, Meta and PPC in a single day via a smart-object system.',
      tags: ['Campaign', 'Brand'],
      images: [campaign1.id, campaign2.id],
      featured: true,
      order: 3,
    },
  })

  await payload.create({
    collection: 'projects',
    data: {
      title: 'Corporate Identity / Print Production',
      slug: 'corporate-print-production',
      client: 'AG Geronimo · Factory Print',
      outcome:
        'Delivered identity and print systems for Komerční banka, Amundi, and large-format production including vehicle wraps.',
      tags: ['Identity', 'Print'],
      images: [print1.id, print2.id],
      featured: true,
      order: 4,
    },
  })

  const skillGroups = [
    {
      category: 'Brand & Identity',
      items: ['corporate identity', 'brand manuals', 'positioning'],
      order: 1,
    },
    {
      category: 'Print Production',
      items: ['prepress', 'ICC profiles', 'PDF/X', 'sublimation', 'large format'],
      order: 2,
    },
    {
      category: 'Digital & Campaign',
      items: ['multi-channel assets', 'PPC banners', 'e-commerce'],
      order: 3,
    },
    {
      category: 'AI Production',
      items: ['ComfyUI', 'SDXL', 'Flux', 'IP-Adapter', 'ControlNet'],
      order: 4,
    },
    {
      category: 'Systems',
      items: ['DAM architecture', 'NAS taxonomy', 'smart-object templates'],
      order: 5,
    },
    {
      category: 'Tools',
      items: ['Adobe CC (master)', 'Payload CMS', 'Cursor', 'Figma'],
      order: 6,
    },
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
    { value: '25+', label: 'years of practice', order: 1 },
    { value: '4', label: 'departments served simultaneously at BANDI', order: 2 },
    { value: '50+', label: 'banner assets per campaign, deployed in one day', order: 3 },
    { value: '500M→1B', label: 'CZK revenue growth supported as key designer', order: 4 },
    { value: '3', label: 'NAS drives — DAM taxonomy redesigned from scratch', order: 5 },
    { value: '2007', label: 'First professional role — Prague DTP studio', order: 6 },
  ]

  for (const stat of stats) {
    await payload.create({ collection: 'stats', data: stat })
  }

  const clients = [
    'BANDI VAMOS a.s.',
    'AG Geronimo (Komerční banka, Amundi)',
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
      headline: 'Senior Designer.\nBrand systems, AI production pipelines\nand the work that ships.',
      subheadline: '25+ years · Ostrava → Worldwide · Remote-ready',
      about:
        'I work at the intersection of brand strategy, visual production and AI systems. I build the infrastructure that makes design scalable — from taxonomy systems and smart-object templates to AI generation pipelines. I have delivered across agencies, in-house teams and international freelance since 2005. Currently open to senior remote or hybrid roles in Western Europe.',
      email: 'petr@czechdesigner.com',
      linkedin: 'https://linkedin.com/in/petrkaloc',
      openToWork: true,
      availabilityNote: 'Based in Czech Republic · Open to NL, DE, CH, UK · Hybrid or Remote',
    },
  })
}
