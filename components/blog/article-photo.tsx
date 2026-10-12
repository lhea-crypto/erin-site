import Image from "next/image"

type ArticlePhotoProps = {
  src: string
  alt: string
  caption: string
  priority?: boolean
}

export function ArticlePhoto({ src, alt, caption, priority }: ArticlePhotoProps) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[3/2] overflow-hidden rounded-3xl bg-paper-deep">
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 720px) 680px, 100vw" className="object-cover" />
      </div>
      <figcaption className="pt-3 text-sm text-stone">{caption}</figcaption>
    </figure>
  )
}
