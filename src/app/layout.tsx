import { GeistSans } from 'geist/font'

import { Layout } from 'components/layout'

import type { Metadata } from 'next'
import type { ReactNode } from 'react'

import './globals.css'

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
      <body className={GeistSans.className}><Layout>{children}</Layout></body>
    </html>
  )
}

export default RootLayout
