import { listing } from "@/lib/listing"

export function ListingFacts() {
  return (
    <dl className="grid grid-cols-2 border-b border-line md:grid-cols-4">
      {listing.facts.map((fact, i) => (
        <div
          key={fact.label}
          className={`flex flex-col-reverse items-center gap-1 py-6 ${
            i % 2 === 0 ? "border-r border-line" : ""
          } ${i < 2 ? "border-b border-line md:border-b-0" : ""} ${i === 1 ? "md:border-r" : ""}`}
        >
          <dt className="text-sm text-muted">{fact.label}</dt>
          <dd className="font-serif text-3xl md:text-4xl">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
