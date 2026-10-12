"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Listing" },
  { href: "/blog", label: "Journal" },
]

export function NavLinks() {
  const pathname = usePathname()
  return (
    <nav aria-label="Main" className="flex items-center gap-5 text-sm font-medium">
      {links.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`transition-colors ${active ? "text-ink" : "text-stone hover:text-ink"}`}
          >
            {active && <span aria-hidden="true" className="mr-1.5 inline-block size-1.5 rounded-full bg-clay align-middle" />}
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
