import type { Metadata } from 'next'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'NextJS 14 server actions',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-gr-installed="true">
      <body suppressHydrationWarning={true}>
        <Header />

        {children}

        <Toaster position="top-right" />
      </body>
    </html>
  )
}
