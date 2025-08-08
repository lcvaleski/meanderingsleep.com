import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from './GoogleAnalytics'

export const metadata: Metadata = {
  title: 'Meandering Sleep - Fordham Foundry 2025 Winner | #1 Sleep App',
  description: '🏆 Winner of Fordham Foundry Pitch Challenge 2025 (1st of 150 teams). Finally quiet your racing mind at night with AI-generated boring stories that actually work. Join thousands falling asleep faster.',
  keywords: 'sleep app, insomnia relief, bedtime stories, sleep aid, boring stories, fall asleep fast, meditation, sleep sounds, fordham foundry winner',
  openGraph: {
    title: 'Meandering Sleep - Award-Winning Sleep App',
    description: '🏆 Fordham Foundry 2025 Winner • Finally fall asleep with AI-generated boring stories that quiet racing thoughts. Loved by insomniacs everywhere.',
    images: [
      {
        url: '/meanderinggif.gif',
        width: 1200,
        height: 630,
        alt: 'Meandering Sleep - Dreamy clouds animation',
        type: 'image/gif',
      }
    ],
    videos: [
      {
        url: '/meandering.mp4',
        width: 1200,
        height: 630,
        type: 'video/mp4',
      }
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meandering Sleep - Award-Winning Sleep App',
    description: '🏆 Fordham Foundry 2025 Winner • Finally fall asleep with AI-generated boring stories',
    images: ['/meanderinggif.gif'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-manrope">
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  )
}