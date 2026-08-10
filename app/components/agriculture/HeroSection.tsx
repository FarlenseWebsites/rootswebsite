import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative aspect-[21/11] flex overflow-hidden w-full">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/agri/hero.png"
          alt="Agriculture and Environment Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Text Content Container */}
      {/* p-[clamp(1.25rem,4vw,4rem)] scales padding fluidly from 20px on mobile to 64px on large screens */}
      <div className="relative z-10 w-full max-w-7xl mx-auto p-[clamp(1.25rem,4vw,4rem)]">
        
        {/* We can also make the container width fluid, ensuring natural text wrapping */}
        <div className="w-[clamp(16rem,40vw,32rem)] pb-10"> 
          
          {/* Fluid Heading: Scales smoothly between 1.5rem (24px) and 3.75rem (60px) */}
          <h1 className="text-[clamp(1.5rem,4vw,3.75rem)] font-bold text-white leading-[1.15] mb-[clamp(0.75rem,2vw,1.5rem)] tracking-wide">
            Agriculture and <br /> Environment
          </h1>
          
          {/* Fluid Paragraph: Scales smoothly between 0.875rem (14px) and 1.125rem (18px) */}
          {/* Note: I removed the hardcoded <br/> tags. Fluid containers wrap text naturally, making hard breaks unnecessary. */}
          <p className="text-[clamp(0.875rem,1.5vw,1.125rem)] text-white leading-relaxed font-light">
            We work with farming communities to support sustainable, climate-responsive, and economically viable agricultural practices.
          </p>
        </div>
      </div>
      
    </section>
  )
}