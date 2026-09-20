import { getPayload, Payload } from 'payload'
import config from '@/payload.config'

import { describe, it, beforeAll, expect } from 'vitest'

let payload: Payload

describe('API', () => {
  beforeAll(async () => {
    const payloadConfig = await config
    payload = await getPayload({ config: payloadConfig })
  })

  it('fetches users', async () => {
    const users = await payload.find({
      collection: 'users',
    })
    expect(users).toBeDefined()
  })

  it('seeds featured projects', async () => {
    const projects = await payload.find({
      collection: 'projects',
      sort: 'order',
    })
    expect(projects.totalDocs).toBeGreaterThanOrEqual(4)
    expect(projects.docs[0]?.title).toContain('BANDI')
  })

  it('loads site settings', async () => {
    const site = await payload.findGlobal({ slug: 'site' })
    expect(site.email).toBe('petr@czechdesigner.com')
    expect(site.headline).toContain('Senior Designer')
  })
})
