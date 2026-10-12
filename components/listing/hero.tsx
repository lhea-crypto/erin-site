import Image from "next/image"
import { CalendarDays, Phone } from "lucide-react"
import { agent, listing } from "@/lib/listing"
import { ListingFacts } from "./facts"

export function ListingHero() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 pt-10 pb-16 lg:grid-cols-[5fr_6fr] lg:items-center lg:gap-14 lg:pt-16">
      <div className="flex flex-col">
        <p className="flex items-center gap-2 text-sm font-medium text-stone">
          <span aria-hidden="true" className="size-2 rounded-full bg-clay" />
          For sale in {listing.neighborhood}
        </p>
        <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
          {listing.address}
        </h1>
        <p className="mt-4 text-lg text-stone">
          A {listing.facts[0].value}-bedroom home in {listing.city} with a new roof, an updated kitchen, and a fenced
          yard with a lemon tree.
        </p>

        <p className="mt-8 font-serif text-4xl text-forest">
          <span className="sr-only">Listed at </span>
          {listing.price}
        </p>

        <ListingFacts />

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={agent.phoneHref}
            className="flex items-center justify-center gap-2 rounded-full bg-forest px-6 py-3.5 font-semibold text-paper transition-colors hover:bg-forest-deep"
          >
            <Phone className="size-4" aria-hidden="true" />
            Book a viewing
          </a>
          <a
            href="#open-house"
            className="flex items-center justify-center gap-2 rounded-full border border-ink/20 px-6 py-3.5 font-semibold transition-colors hover:border-ink"
          >
            <CalendarDays className="size-4" aria-hidden="true" />
            Open house {listing.openHouse.day.split(",")[0]}
          </a>
        </div>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-paper-deep lg:aspect-[5/6]">
        <Image
          src={listing.photos.front.src}
          alt={listing.photos.front.alt}
          fill
          priority
          sizes="(min-width: 1024px) 600px, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  )
}
