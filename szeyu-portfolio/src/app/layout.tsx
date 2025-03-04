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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}