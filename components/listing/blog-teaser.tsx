import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogTeaser() {
  return (
    <section className="bg-cream">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">From the blog</p>
          <h2 className="mt-2 font-serif text-2xl text-balance md:text-3xl">
            Homes for Sale in Riverside Heights: A Look at 1482 Alder Lane
          </h2>
        </div>
        <Link
          href="/blog"
          className="group flex shrink-0 items-center gap-2 self-start font-semibold underline decoration-gold decoration-2 underline-offset-4 md:self-auto"
        >
          Read more about this home
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
