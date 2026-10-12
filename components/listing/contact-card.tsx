import { Phone } from "lucide-react"
import { agent, listing } from "@/lib/listing"

export function ContactCard() {
  const [weekday, date] = listing.openHouse.day.split(", ")
  const [month, dayNumber] = date.split(" ")

  return (
    <section id="open-house" aria-labelledby="open-house-heading" className="scroll-mt-20 bg-forest text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[auto_1fr] md:items-center md:gap-16 lg:py-20">
        <div className="flex w-40 flex-col items-center rounded-3xl bg-paper py-6 text-ink">
          <span className="text-sm font-semibold uppercase tracking-widest text-clay">{month}</span>
          <span className="font-serif text-7xl leading-none">{dayNumber}</span>
          <span className="mt-1 text-sm text-stone">{weekday}</span>
        </div>

        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 id="open-house-heading" className="font-serif text-4xl leading-tight text-balance md:text-5xl">
              Come see it in person.
            </h2>
            <p className="mt-3 text-lg text-paper/80">
              Open house {weekday}, {listing.openHouse.time}, at {listing.address}.
            </p>
          </div>
          <div className="flex flex-col gap-3 lg:items-end">
            <p className="text-sm text-paper/70">
              Listed by {agent.name}, {agent.company}
            </p>
            <a
              href={agent.phoneHref}
              className="flex items-center justify-center gap-2 rounded-full bg-paper px-6 py-3.5 font-semibold text-forest transition-colors hover:bg-clay hover:text-paper"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call {agent.phone}
            </a>
            <p className="text-sm text-paper/70">{"Can't make it? Call to book a private viewing."}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
