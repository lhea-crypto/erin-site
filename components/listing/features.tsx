import { listing } from "@/lib/listing"

export function ListingFeatures() {
  return (
    <section aria-labelledby="about-heading">
      <h2 id="about-heading" className="font-serif text-3xl">
        About the home
      </h2>
      <p className="mt-3 max-w-prose leading-relaxed text-muted">
        A 3 bed, 2 bath home in {listing.neighborhood} with the big-ticket updates already done: a new roof and a
        refreshed kitchen.
      </p>
      <ul className="mt-6 border-t border-line">
        {listing.features.map((feature) => (
          <li key={feature.title} className="flex gap-4 border-b border-line py-4">
            <span aria-hidden="true" className="mt-2 size-2.5 shrink-0 bg-gold" />
            <div>
              <p className="font-semibold">{feature.title}</p>
              <p className="text-muted">{feature.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
