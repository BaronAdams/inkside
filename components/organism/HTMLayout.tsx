'use client'

import React from 'react'
import { useContext } from 'react'
import { DarkLightContext } from '@/lib/context/DarkLightContext'
import { Jakarta_Sans, source_Serif_Pro, work_Sans } from '@/lib/fonts'
import Header from './header'
import Footer from './footer'
import { Session } from 'next-auth'

const HTMLayout = ({ children, session }:{ children: React.ReactNode, session: Session | null }) => {
    const { modeState } = useContext(DarkLightContext)

    return (
        <html lang="en" data-theme={modeState} >
            <body className={`${source_Serif_Pro.variable} ${Jakarta_Sans.variable} ${work_Sans.variable} font-sans overflow-x-hidden`}>
            {/* <Providers>
                <GlobalProvider> */}
                <Header session={session} />
                    <div className='w-full h-full overflow-x-hidden z-15'>
                    {children}
                    </div>
                <Footer/>
                {/* </GlobalProvider>
            </Providers> */}
        </body>
      </html>
    )
}

export default HTMLayout