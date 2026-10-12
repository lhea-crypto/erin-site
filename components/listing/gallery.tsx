import Image from "next/image"
import { listing } from "@/lib/listing"

const shots = [
  { ...listing.photos.kitchen, caption: "Kitchen, updated in 2021", wide: true },
  { ...listing.photos.front, caption: "Front of the home and 2-car garage", wide: false },
  { ...listing.photos.autumn, caption: "The home in autumn", wide: false },
]

export function ListingGallery() {
  return (
    <section aria-labelledby="photos-heading">
      <h2 id="photos-heading" className="font-serif text-3xl">
        Photos
      </h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {shots.map((shot) => (
          <figure key={shot.caption} className={shot.wide ? "md:col-span-2" : ""}>
            <div className={`relative overflow-hidden bg-navy ${shot.wide ? "aspect-[16/7]" : "aspect-[4/3]"}`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={shot.wide ? "(min-width: 1152px) 1112px, 100vw" : "(min-width: 768px) 50vw, 100vw"}
                className="object-cover"
              />
            </div>
            <figcaption className="pt-2 text-sm text-muted">{shot.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
