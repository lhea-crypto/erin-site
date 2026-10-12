import { CalendarDays, Phone } from "lucide-react"
import { agent, listing } from "@/lib/listing"

export function ContactCard() {
  return (
    <aside aria-label="Open house and contact" className="flex flex-col gap-4 lg:sticky lg:top-24">
      <div className="border-l-[6px] border-gold bg-navy p-6 text-white">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          <CalendarDays className="size-4" aria-hidden="true" />
          Open house
        </p>
        <p className="mt-3 font-serif text-2xl">{listing.openHouse.day}</p>
        <p className="text-lg text-white/85">{listing.openHouse.time}</p>
        <p className="mt-1 text-sm text-white/70">At {listing.address}</p>
      </div>

      <div className="border border-line p-6">
        <p className="text-sm text-muted">Listed by</p>
        <p className="mt-1 font-serif text-2xl">{agent.name}</p>
        <p className="text-muted">{agent.company}</p>
        <a
          href={agent.phoneHref}
          className="mt-5 flex items-center justify-center gap-2 bg-navy px-4 py-3 font-semibold text-white transition-colors hover:bg-navy-deep"
        >
          <Phone className="size-4" aria-hidden="true" />
          Call {agent.phone}
        </a>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {"Can't make the open house? Call to book a private viewing."}
        </p>
      </div>
    </aside>
  )
}
