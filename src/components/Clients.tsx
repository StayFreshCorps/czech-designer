import type { Client } from '@/payload-types'

export function Clients({ clients }: { clients: Client[] }) {
  return (
    <section className="border-t border-ink/10 bg-paper">
      <div className="mx-auto max-w-[1440px] px-6 py-16 lg:px-16">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted">Selected clients and collaborators</p>
        <ul className="mt-8 flex flex-wrap gap-x-10 gap-y-4 text-[16px]">
          {clients.map((client) => (
            <li key={client.id}>{client.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
