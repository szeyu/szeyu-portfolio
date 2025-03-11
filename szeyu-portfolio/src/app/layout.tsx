import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: 'Sim Sze Yu - Portfolio',
  description: 'My personal portfolio as a developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="FTtitUFpJN-wNhIkuImpjSn3eUhVzEa_dPQ5yQXEPOE" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}