"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function Navbar(){

  const [active,setActive] = useState("hero")

  useEffect(()=>{

    const sections = ["hero","about","experience","skills","projects","contact"]

    const handleScroll = () => {

      const scrollPosition = window.scrollY + 150

      for(const section of sections){

        const element = document.getElementById(section)

        if(element){

          if(
            scrollPosition >= element.offsetTop &&
            scrollPosition < element.offsetTop + element.offsetHeight
          ){
            setActive(section)
          }

        }

      }

    }

    window.addEventListener("scroll",handleScroll)

    return () => window.removeEventListener("scroll",handleScroll)

  },[])

  const navItems = [
    {name:"Home", id:"hero"},
    {name:"About", id:"about"},
    {name:"Experience",id:"experience"},
    {name:"Skills", id:"skills"},
    {name:"Projects", id:"projects"},
    {name:"Contact", id:"contact"}
  ]

  return(

    <nav className="fixed top-0 w-full backdrop-blur-md bg-black/40 z-50">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="font-bold text-xl">
          Sankalp Tiwari
        </h1>

        <div className="flex gap-8 relative">

          {navItems.map((item)=>{

            const isActive = active === item.id

            return(

              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative text-gray-300 hover:text-white transition"
              >

                {item.name}

                {isActive && (

                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-purple-500 rounded"
                  />

                )}

              </a>

            )

          })}

        </div>

      </div>

    </nav>

  )

}