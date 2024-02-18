"use client"
import React, { useState } from 'react'
import { Roboto } from 'next/font/google'
import  styles  from "../style.module.css";


const protest = Roboto({ subsets: ["latin"], weight: ["700"]})


export default function Nav() {
   const [menuOpen, setMenuOpen] = useState(false)
   const navHide = ()=> {
    setMenuOpen(!menuOpen)
   }
  return (
    <div>
          <nav className={`${styles.dev} `}>
          <h1 className={ ` px-5 text-green-600 fixed top-2 left-1 lg:text-[40px] ${protest.className}`}>Felicia</h1>
                <ul className={`lg:flex hidden justify-around pl-24 mt-10`}>
                    
                    <li>Home</li>
                    <li>About Author</li>
                    <li>Contact </li>
                    <li>Books </li>
                    <li>Amazon</li>
                </ul>
            </nav>
        
    </div>
  )
}
