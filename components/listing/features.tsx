import { listing } from "@/lib/listing"

export function ListingFeatures() {
  return (
    <section aria-labelledby="about-heading" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[1fr_2fr] lg:gap-14 lg:py-24">
        <div>
          <p className="text-sm font-medium text-clay">About the home</p>
          <h2 id="about-heading" className="mt-3 font-serif text-4xl leading-tight text-balance">
            The big updates are already done.
          </h2>
          <p className="mt-4 leading-relaxed text-stone">
            Built in 1998 and cared for since, this {listing.neighborhood} home is ready to move into.
          </p>
        </div>
        <ol className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
          {listing.features.map((feature, i) => (
            <li
              key={feature.title}
              className={`flex flex-col gap-6 bg-paper p-6 ${i === listing.features.length - 1 ? "sm:col-span-2" : ""}`}
            >
              <span className="font-serif text-sm text-clay">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-lg font-semibold">{feature.title}</p>
                <p className="mt-1 text-stone">{feature.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
