import { Shell } from '@/components/ui'
import type { Client } from '@/payload-types'

export function Clients({ clients }: { clients: Client[] }) {
  if (clients.length === 0) return null

  return (
    <section className="bg-ink text-paper">
      <Shell className="pb-20 lg:pb-28">
        <p className="text-[11px] tracking-[0.28em] uppercase text-paper/40">Clients</p>
        <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[18px] text-paper/80">
          {clients.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </Shell>
    </section>
  )
}
