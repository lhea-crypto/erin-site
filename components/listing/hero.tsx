import Image from "next/image"
import { listing } from "@/lib/listing"

export function ListingHero() {
  return (
    <section className="relative bg-navy">
      <div className="relative h-[62vh] min-h-80 max-h-[600px] w-full">
        <Image
          src={listing.photos.front.src}
          alt={listing.photos.front.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/95 via-navy/60 to-transparent pt-24 pb-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">For sale</p>
            <h1 className="font-serif text-4xl leading-none text-balance md:text-6xl">{listing.address}</h1>
            <p className="mt-2 text-white/85 md:text-lg">
              {listing.neighborhood}, {listing.city}
            </p>
          </div>
          <p className="self-start bg-gold px-4 py-1.5 text-2xl font-bold text-navy md:self-auto md:text-3xl">
            <span className="sr-only">Listed at </span>
            {listing.price}
          </p>
        </div>
      </div>
    </section>
  )
}
