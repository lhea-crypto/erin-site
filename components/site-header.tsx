import Link from "next/link"
import { Phone } from "lucide-react"
import { agent } from "@/lib/listing"
import { NavLinks } from "./nav-links"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 bg-navy text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-serif text-lg tracking-tight md:text-xl">
          Reyes Home Group
        </Link>
        <div className="flex items-center gap-6">
          <NavLinks />
          <a
            href={agent.phoneHref}
            className="hidden items-center gap-2 bg-gold px-4 py-2 text-sm font-semibold text-navy transition-colors hover:bg-white sm:flex"
          >
            <Phone className="size-4" aria-hidden="true" />
            {agent.phone}
          </a>
        </div>
      </div>
    </header>
  )
}
