'use client'

import React from 'react'
import Image from 'next/image'

export default function JoyOfSharingBanner() {
  return (
    <section className="relative w-full min-h-[40vh] md:min-h-[50vh] lg:min-h-[40vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/about/hands.jpg"
        alt="Celebrating the Joy of Sharing"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center"
      />
      
      {/* Dark Overlay for readability */}
      <div className="absolute inset-0 bg-black/10 z-10" />

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-2 md:px-10 py-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start justify-start text-white">
        
        {/* Left text */}
        <div>
          <h2 className="text-4xl md:text-5xl leading-tight font-light">
            Celebrating the <br className="hidden sm:block" />
            <span className="font-bold italic">Joy of Sharing</span>
          </h2>
        </div>

        {/* Right content */}
        <div>
          <p className="text-roots-beige font-light text-sm sm:text-base md:text-lg leading-relaxed">
            The joy of sharing goes beyond traditional implementation of programs.
            We actively co-funding projects when required to ensure change happens.
            This unique approach reflects our deep commitment and ownership mindset, 
            ensuring that every initiative we undertake is not just executed but sustained with accountability.      
          </p>
        </div>
        
      </div>
    </section>
  )
}