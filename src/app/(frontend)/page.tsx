import { About } from '@/components/About'
import { Clients } from '@/components/Clients'
import { Contact } from '@/components/Contact'
import { Hero } from '@/components/Hero'
import { Practice } from '@/components/Practice'
import { Work } from '@/components/Work'
import { getHomeData } from '@/lib/site'

export default async function HomePage() {
  const { site, projects, skills, stats, clients } = await getHomeData()

  return (
    <>
      <Hero site={site} />
      <Work projects={projects} />
      <Practice />
      <About site={site} stats={stats} skills={skills} />
      <Clients clients={clients} />
      <Contact site={site} />
    </>
  )
}
