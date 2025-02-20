import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://camcovers.app"),
  title: {
    default: "CAM Covers - Transform Your Photos into Album Covers",
    template: "%s | CAM Covers",
  },
  description:
    "Create stunning album covers with CAM Covers. Transform your photos into professional-looking music album covers with our easy-to-use photo editing app.",
  keywords: ["album cover maker", "photo editing app", "music cover creator", "album art generator"],
  authors: [{ name: "Tiago Danin" }],
  creator: "Tiago Danin",
  publisher: "CAM Covers",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <meta name="apple-mobile-web-app-title" content="CAM Covers" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'