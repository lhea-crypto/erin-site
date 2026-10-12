import Image from "next/image"

type ArticlePhotoProps = {
  src: string
  alt: string
  caption: string
  priority?: boolean
}

export function ArticlePhoto({ src, alt, caption, priority }: ArticlePhotoProps) {
  return (
    <figure className="my-8">
      <div className="relative aspect-[3/2] overflow-hidden bg-navy">
        <Image src={src} alt={alt} fill priority={priority} sizes="(min-width: 672px) 632px, 100vw" className="object-cover" />
      </div>
      <figcaption className="pt-2 text-sm text-muted">{caption}</figcaption>
    </figure>
  )
}
