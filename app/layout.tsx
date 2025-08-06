import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Meandering Sleep',
  description: 'Welcome to Meandering Sleep',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-ms-nocturne text-ms-white">{children}</body>
    </html>
  )
}