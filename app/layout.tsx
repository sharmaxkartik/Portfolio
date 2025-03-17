import type React from "react"
import { Inter } from "next/font/google"
import { MainNav } from "@/components/main-nav"
import { EnsureDarkMode } from "@/components/ensure-dark-mode"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Kartik Sharma | Developer Portfolio",
  description: "Professional portfolio for Kartik Sharma, MERN stack developer and Java programmer",
  themeColor: "#000000",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} dark`}>
        <EnsureDarkMode />
        <div className="min-h-screen bg-background transition-colors duration-300">
          <header className="container mx-auto py-4 sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <MainNav />
            </div>
          </header>
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}



import './globals.css'