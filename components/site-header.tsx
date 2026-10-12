import Link from "next/link"
import { Phone } from "lucide-react"
import { agent } from "@/lib/listing"
import { NavLinks } from "./nav-links"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span
            aria-hidden="true"
            className="flex size-8 items-center justify-center rounded-full bg-forest font-serif text-sm text-paper"
          >
            R
          </span>
          <span className="font-serif text-lg tracking-tight">Reyes Home Group</span>
        </Link>
        <div className="flex items-center gap-6">
          <NavLinks />
          <a
            href={agent.phoneHref}
            className="hidden items-center gap-2 rounded-full border border-ink/20 px-4 py-2 text-sm font-semibold transition-colors hover:border-forest hover:bg-forest hover:text-paper sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {agent.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
