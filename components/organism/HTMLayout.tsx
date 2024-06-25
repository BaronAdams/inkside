'use client'

import React, { useEffect } from 'react'
import { useContext } from 'react'
import { DarkLightContext } from '@/lib/context/DarkLightContext'
import { Jakarta_Sans, source_Serif_Pro, work_Sans } from '@/lib/fonts'
import Header from './header'
import Footer from './footer'
import { Session } from 'next-auth'
import io from 'socket.io-client';
const socket = io('http://localhost:3000');


const HTMLayout = ({ children, session }:{ children: React.ReactNode, session: Session | null }) => {
    const { modeState } = useContext(DarkLightContext)

    useEffect(() => {
        socket.on('message2', (data) => {
            console.log("Recieved from SERVER ::", data)
            // Execute any command
        })
    }, [socket]);

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