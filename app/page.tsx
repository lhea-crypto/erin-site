import { ListingHero } from "@/components/listing/hero"
import { ListingFacts } from "@/components/listing/facts"
import { ListingFeatures } from "@/components/listing/features"
import { ContactCard } from "@/components/listing/contact-card"
import { ListingGallery } from "@/components/listing/gallery"
import { BlogTeaser } from "@/components/listing/blog-teaser"

export default function ListingPage() {
  return (
    <main>
      <ListingHero />
      <div className="mx-auto max-w-6xl px-5">
        <ListingFacts />
        <div className="grid gap-10 py-12 lg:grid-cols-[1fr_340px] lg:gap-14">
          <ListingFeatures />
          <ContactCard />
        </div>
        <div className="pb-16">
          <ListingGallery />
        </div>
      </div>
      <BlogTeaser />
    </main>
  )
}
