import { listing } from "@/lib/listing"

export function ListingFacts() {
  return (
    <dl className="mt-6 grid grid-cols-4 divide-x divide-line border-y border-line">
      {listing.facts.map((fact) => (
        <div key={fact.label} className="flex flex-col-reverse gap-0.5 px-3 py-4 first:pl-0">
          <dt className="text-xs text-stone">{fact.label}</dt>
          <dd className="text-xl font-semibold tabular-nums">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
