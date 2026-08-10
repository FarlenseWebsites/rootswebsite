import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative aspect-[21/11] flex  overflow-hidden w-full">
      
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/skills/hero2.png"
          alt="skills  Hero"
          fill
          priority
          className="object-cover"
        />
        {/* Subtle gradient overlay to ensure text remains readable against the background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
      </div>

      {/* Text Content Container */}
      {/* z-10 keeps it above the image, mx-auto and max-w-7xl constrain it nicely on wide screens */}
      <div className="relative z-10 w-full max-w-7xl p-[clamp(1.25rem,3vw,3rem)] ">
        <div className="w-[clamp(16rem,40vw,32rem)] pb-10"> {/* w-[clamp(16rem,40vw,32rem)] wraps the text exactly like the image */}
          <h1 className="text-[clamp(1.5rem,4vw,3.75rem)] font-bold text-white leading-[1.15] mb-[clamp(0.75rem,2vw,1.5rem)] tracking-wide">
            Community Development
          </h1>
          <p className="text-[clamp(0.775rem,1.5vw,1.125rem)] text-white leading-relaxed font-light ">
            We work with communities to strengthen access to healthcare, education, livelihoods, infrastructure, inclusion, and shared public resources.
          </p>
        </div>
      </div>
      
    </section>
  )
}