import { agent } from "@/lib/listing"

export function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          {agent.name}, {agent.company}
        </p>
        <a href={agent.phoneHref} className="hover:text-navy">
          {agent.phone}
        </a>
      </div>
    </footer>
  )
}
