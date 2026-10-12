"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { href: "/", label: "Listing" },
  { href: "/blog", label: "Blog" },
]

export function NavLinks() {
  const pathname = usePathname()
  return (
    <nav aria-label="Main" className="flex items-center gap-5 text-sm md:text-base">
      {links.map((link) => {
        const active = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={`border-b-2 pb-0.5 transition-colors ${
              active ? "border-gold" : "border-transparent text-white/80 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </nav>
  )
}
