import { About } from '@/components/About'
import { Clients } from '@/components/Clients'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Work } from '@/components/Work'
import { getHomeData } from '@/lib/site'

export default async function HomePage() {
  const { site, projects, stats, clients } = await getHomeData()

  return (
    <>
      <Hero site={site} clients={clients} />
      <About site={site} stats={stats} />
      <Services />
      <Work projects={projects} />
      <Clients clients={clients} />
      <Contact site={site} />
    </>
  )
}
