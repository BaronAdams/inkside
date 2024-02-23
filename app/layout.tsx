import type { Metadata } from 'next'
import { GlobalProvider } from '@/lib/context/store'
import Header from '@/components/organism/header'
import Footer from '@/components/organism/footer'
import { Providers } from '@/lib/utils/themeMode'
import { Jakarta_Sans, source_Serif_Pro, work_Sans } from '@/lib/fonts'
import './globals.css'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans`}>
        <Providers>
            <GlobalProvider>
               <Header />
               {children}
               <Footer />
            </GlobalProvider>
          </Providers>
      </body>
    </html>
  )
}
