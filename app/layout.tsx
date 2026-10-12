import type { Metadata, Viewport } from "next"
import { Fraunces, Manrope } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" })
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces" })

export const metadata: Metadata = {
  title: {
    default: "1482 Alder Lane, Riverside Heights | Reyes Home Group",
    template: "%s | Reyes Home Group",
  },
  description:
    "1482 Alder Lane, Riverside Heights, Sacramento: 3 bed, 2 bath, 1,640 sq ft. New roof 2023, kitchen updated 2021, fenced backyard. Listed at $489,000.",
}

export const viewport: Viewport = {
  themeColor: "#f4efe6",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
