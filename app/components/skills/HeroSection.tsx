import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative aspect-[21/11] flex  overflow-hidden w-full">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/skills/hero1.png"
          alt="Skills Hero"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle gradient overlay to ensure text remains readable against the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Text Content Container */}
      {/* z-10 keeps it above the image, mx-auto and max-w-7xl constrain it nicely on wide screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-5 md:p-15 ">
        <div className="w-[clamp(16rem,40vw,32rem)] pb-10"> 
          <h1 className="text-[clamp(1.25rem,4vw,3.75rem)] font-bold text-white leading-[1.15]  mb-6 tracking-wide">
            Skill Development
          </h1>
          <p className="text-[clamp(0.775rem,1.5vw,1.125rem)] text-white leading-relaxed font-light ">
           We support women and youth with practical, market-linked skills that connect training to livelihood opportunities.
          </p>
        </div>
      </div>
      
    </section>
  )
}