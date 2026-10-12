import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { listing } from "@/lib/listing"

export function BlogTeaser() {
  return (
    <section aria-labelledby="journal-heading" className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
      <Link
        href="/blog"
        className="group grid overflow-hidden rounded-3xl border border-line bg-paper transition-colors hover:border-ink/30 md:grid-cols-[2fr_3fr]"
      >
        <div className="relative aspect-[16/10] md:aspect-auto">
          <Image
            src={listing.photos.kitchen.src}
            alt=""
            fill
            sizes="(min-width: 768px) 440px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-between gap-8 p-8">
          <div>
            <p className="text-sm font-medium text-clay">From the journal</p>
            <h2 id="journal-heading" className="mt-3 font-serif text-3xl leading-tight text-balance">
              Homes for Sale in Riverside Heights: A Look at 1482 Alder Lane
            </h2>
          </div>
          <span className="flex items-center gap-2 font-semibold">
            Read the full story
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
        </div>
      </Link>
    </section>
  )
}
