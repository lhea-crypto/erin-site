import type { Metadata } from "next"
import Link from "next/link"
import { Phone } from "lucide-react"
import { agent, listing, marketFact } from "@/lib/listing"
import { ArticlePhoto } from "@/components/blog/article-photo"

export const metadata: Metadata = {
  title: "3-Bed Home for Sale in Riverside Heights, Sacramento",
  description:
    "1482 Alder Lane, Riverside Heights: 3 bed, 2 bath, 1,640 sq ft with a new 2023 roof, updated kitchen and fenced backyard. Listed at $489,000. Open house Oct 10.",
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 mb-3 font-serif text-3xl leading-tight text-balance">{children}</h2>
}

export default function BlogPage() {
  return (
    <main>
      <article className="mx-auto max-w-2xl px-5 py-12 text-lg leading-relaxed">
        <h1 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
          Homes for Sale in Riverside Heights: A Look at 1482 Alder Lane
        </h1>
        <p className="mt-4 inline-block border-b-[3px] border-gold pb-4 text-sm text-muted">
          By {agent.name}, {agent.company}
        </p>

        <p className="mt-8 text-xl">
          If you are looking at homes for sale in Riverside Heights, Sacramento, here is one to know about. 1482 Alder
          Lane is a 3 bed, 2 bath home with 1,640 sq ft of space. It is listed at {listing.price}. In this post I share
          what the house offers, what has been updated, and when you can come and see it.
        </p>

        <ArticlePhoto {...listing.photos.front} caption="1482 Alder Lane, Riverside Heights" priority />

        <H2>The house at a glance</H2>
        <p>
          The home was built in 1998. It has 3 bedrooms and 2 bathrooms, with 1,640 sq ft of living space. There is a
          2-car garage, so you have room for two cars or extra storage.
        </p>
        <p className="mt-4">
          One of the biggest updates is the roof. It is new from 2023. A roof is one of the costly parts of a home, so
          it is good to know it has been done recently.
        </p>
        <p className="mt-4">
          The kitchen was updated in 2021. It has quartz counters and a gas range. When you visit, take a few minutes
          in this room. Look at the counter space and how the kitchen connects to the rest of the house.
        </p>

        <ArticlePhoto {...listing.photos.kitchen} caption="The kitchen, updated in 2021" />

        <H2>The backyard and Alder Park</H2>
        <p>Out back, the yard is fenced, and there is a lemon tree. It is a simple, private outdoor space.</p>
        <p className="mt-4">
          Alder Park is about a 10-minute walk from the house. If you like to walk, it is close enough to get there on
          foot.
        </p>

        <ArticlePhoto {...listing.photos.autumn} caption="The home in autumn" />

        <H2>Homes for sale in Riverside Heights: the market right now</H2>
        <p>Before you buy, it helps to know what homes in the area cost.</p>
        {marketFact && (
          <div className="my-4 border-l-[5px] border-gold bg-cream px-5 py-4">
            <p>{marketFact.text}</p>
            <p className="mt-1 text-sm text-muted">Source: {marketFact.source}</p>
          </div>
        )}
        <p className="mt-4">
          Prices change from month to month, so check the date on any number you read. Every home is different. The
          best way to judge 1482 Alder Lane is to see it in person, walk through each room, and ask your questions.
        </p>

        <section aria-labelledby="open-house-heading" className="mt-10 border-l-[6px] border-gold bg-navy p-6 text-white">
          <h2 id="open-house-heading" className="font-serif text-2xl">
            Come to the open house
          </h2>
          <p className="mt-1 text-white/85">
            {listing.openHouse.day}, {listing.openHouse.time}, at {listing.address}.
          </p>
        </section>

        <p className="mt-6">
          When you visit, bring your questions. Look at the new roof and the kitchen updates for yourself. Check the
          space in the 2-car garage, and walk around the fenced backyard. It helps to take a few photos and notes, so
          you can compare homes later. If you are working with a lender, bring your pre-approval letter too. Then we can
          talk about next steps on the day.
        </p>
        <p className="mt-4">
          If you cannot make it on Saturday, that is fine. Get in touch and we can find another time for a viewing.
        </p>

        <div className="mt-10 border border-line p-6">
          <p className="font-serif text-2xl">
            {agent.name}, {agent.company}
          </p>
          <p className="mt-2 text-base text-muted">
            If you have questions about the home, or want to book a viewing, get in touch.
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <a
              href={agent.phoneHref}
              className="flex items-center justify-center gap-2 bg-navy px-5 py-3 text-base font-semibold text-white transition-colors hover:bg-navy-deep"
            >
              <Phone className="size-4" aria-hidden="true" />
              {agent.phone}
            </a>
            <Link
              href="/"
              className="text-base font-semibold underline decoration-gold decoration-2 underline-offset-4"
            >
              See the full listing and photos
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
