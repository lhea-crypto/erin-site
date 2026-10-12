import { agent, listing } from "@/lib/listing"

export function SiteFooter() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-2xl">{agent.company}</p>
          <p className="mt-1 text-sm text-paper/60">
            {listing.address}, {listing.neighborhood}, {listing.city}
          </p>
        </div>
        <div className="flex flex-col gap-1 text-sm md:items-end">
          <p className="text-paper/60">{agent.name}</p>
          <a href={agent.phoneHref} className="font-semibold hover:text-clay">
            {agent.phone}
          </a>
        </div>
      </div>
    </footer>
  )
}
