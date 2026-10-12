import { ListingHero } from "@/components/listing/hero"
import { ListingFeatures } from "@/components/listing/features"
import { ListingGallery } from "@/components/listing/gallery"
import { ContactCard } from "@/components/listing/contact-card"
import { BlogTeaser } from "@/components/listing/blog-teaser"

export default function ListingPage() {
  return (
    <main>
      <ListingHero />
      <ListingFeatures />
      <ListingGallery />
      <ContactCard />
      <BlogTeaser />
    </main>
  )
}
