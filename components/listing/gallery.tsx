import Image from "next/image"
import { listing } from "@/lib/listing"

const shots = [
  { ...listing.photos.kitchen, caption: "Kitchen, updated in 2021", className: "md:row-span-2 aspect-[4/3] md:aspect-auto" },
  { ...listing.photos.front, caption: "Front and 2-car garage", className: "aspect-[4/3]" },
  { ...listing.photos.autumn, caption: "The home in autumn", className: "aspect-[4/3]" },
]

export function ListingGallery() {
  return (
    <section aria-labelledby="photos-heading" className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:py-24">
        <div className="flex items-end justify-between gap-4">
          <h2 id="photos-heading" className="font-serif text-4xl">
            Inside &amp; out
          </h2>
          <p className="text-sm text-stone">{shots.length} photos</p>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-[3fr_2fr] md:grid-rows-2">
          {shots.map((shot, i) => (
            <figure key={shot.caption} className={`relative overflow-hidden rounded-3xl bg-line ${shot.className}`}>
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes={i === 0 ? "(min-width: 768px) 660px, 100vw" : "(min-width: 768px) 440px, 100vw"}
                className="object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 rounded-full bg-paper/90 px-3 py-1 text-xs font-medium backdrop-blur">
                {shot.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
