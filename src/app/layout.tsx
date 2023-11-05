import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'hobbescodes',
  description: 'hobbescodes personal website',
}

interface Props {
  children?: ReactNode
}

const RootLayout = ({
  children,
}: Props) => {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

export default RootLayout
