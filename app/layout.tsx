import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata = {
  title: "Aprenda Idiomas de Forma Interativa",
  description: "Masterize sua linguagem de forma interativa e desafie-se constantemente.",
    generator: 'P6G Software'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-gray-900 text-white`}>{children}</body>
    </html>
  )
}



import './globals.css'