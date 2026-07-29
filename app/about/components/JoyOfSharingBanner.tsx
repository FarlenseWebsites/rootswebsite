'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function JoyOfSharingBanner() {
  return (
    <section className="relative w-full h-[70vh] md:h-[60vh] lg:h-[40vw] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about/hands.jpg"
        alt="Celebrating the Joy of Sharing"
        fill
        sizes="100vw"
        priority
        className="object-cover"
        
      />
      {/* Dark Overlay for readability */}
      

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto mt-10 px-6 w-full text-white grid grid-cols-1 md:grid-cols-2 gap-8 ">
        {/* Left text */}
        <div>
          
         <h2 className="text-4xl sm:text-xl md:text-3xl leading-tight font-normal">
          Celebrating the <span className="font-bold">Joy of<br />Sharing</span>
        </h2>
        </div>

        {/* Right metrics */}
        <div className="space-y-10 ">
          <p className="text-white/80 font-light text-sm sm:text-base leading-relaxed md:mt-15">
            The joy of sharing goes beyond traditional implementation of programs.
            We actively co-funding projects when required to ensure change happens.
            This unique approach reflects our deep commitment and ownership mindset, 
            ensuring that every initiative we undertake is not just executed but sustained with accountability.      
          </p>

         
            <div className="text-5xl font-extrabold text-white flex items-center gap-1">
              100 +
            </div>
            <p className="text-sm  tracking-wider text-white mt-1">
                 Projects supported through collaboration  
             </p>
          
        </div>
      </div>
    </section>
  )
}
