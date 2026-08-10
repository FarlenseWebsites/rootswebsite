import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative aspect-[21/11] flex  overflow-hidden w-full">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/education/hero.png"
          alt="Education Hero"
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
          <h1 className="text-[clamp(1.rem,4vw,3.75rem)] font-bold text-white leading-[1.15]  mb-6 tracking-wide">
            Education & Career Rediness
          </h1>
          <p className="text-[clamp(0.575rem,1.5vw,1.125rem)] text-white leading-relaxed font-light ">
            We work with schools and communities to strengthen  <br className="hidden md:block"/> 
            learning, confidence, life skills, and long-term <br className="hidden md:block"/> 
            educational continuity for children and adolescents. 
          </p>
        </div>
      </div>
      
    </section>
  )
}