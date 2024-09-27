import './globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kustom Keyboards',
  description: 'Create your own Kustom Keyboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
