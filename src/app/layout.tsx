import { Inter } from 'next/font/google'

import { Layout } from 'components/layout'

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
      <body className={inter.className}><Layout>{children}</Layout></body>
    </html>
  )
}

export default RootLayout
