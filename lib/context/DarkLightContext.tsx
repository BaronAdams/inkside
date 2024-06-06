'use client'
import { createContext, useState, useEffect } from "react";

interface ThemeProps{
    modeState?: string,
    toggleMode?:() => void
}

export const DarkLightContext = createContext<ThemeProps>({})

export const DarkLightContextProvider = ({ children }: {children: React.ReactNode} ) => {
    const [modeState, setModeState] = useState<string>(localStorage.getItem('inkside-theme-color') || 'light')

    useEffect(() => {
        localStorage.setItem('inkside-theme-color',modeState)
    }, [modeState])

    const toggleMode = ()=>{
        if(modeState === 'light') setModeState('dark')
        else setModeState('light')
    }

   return(
    <DarkLightContext.Provider value={{ modeState, toggleMode }}>
        {children}
    </DarkLightContext.Provider>
   )

}