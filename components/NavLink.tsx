"use client"

import { navigate } from '@/lib/actions/navigation'
import React from 'react'

type NavProps = {
    children: React.ReactNode ;
    path: string;
    [key:string]: any;
}

const NavLink : React.FC<NavProps> = ({ children, path, ...otherProps }) => {
  return (
    <span {...otherProps} style={{cursor:"pointer"}} onClick={() => navigate(path)}>{children}</span>
  )
}

export default NavLink