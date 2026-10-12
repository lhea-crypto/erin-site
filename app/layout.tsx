import type { Metadata, Viewport } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif-display" })

export const metadata: Metadata = {
  title: {
    default: "1482 Alder Lane, Riverside Heights | Reyes Home Group",
    template: "%s | Reyes Home Group",
  },
  description:
    "1482 Alder Lane, Riverside Heights, Sacramento: 3 bed, 2 bath, 1,640 sq ft. New roof 2023, kitchen updated 2021, fenced backyard. Listed at $489,000.",
}

export const viewport: Viewport = {
  themeColor: "#1f2a44",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
