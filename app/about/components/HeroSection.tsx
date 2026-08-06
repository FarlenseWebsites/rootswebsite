'use client'

import React from 'react'

export default function HeroSection() {
  return (
    <section className="pt-10 pb-12 px-10 max-w-7xl mx-auto">
      {/* Top Section: Text and Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Headings & First Two Paragraphs */}
        <div className="space-y-10">
          <div className="space-y-3">
            <h1 className="text-5xl font-bold tracking-tight text-gray-800">
              About Us
            </h1>
            <h2 className="text-lg text-gray-500 font-light">
              Turning Grassroots Potential into Lasting Change
            </h2>
          </div>

          <div className="space-y-6 text-[#4A4749]/85 font-normal leading-relaxed text-base md:pr-8">
            <p>
              Roots Foundation is a social impact organisation working at the
              grassroots to create sustainable, locally relevant solutions.
            </p>
            <p>
              Since 2012, we have designed and delivered programmes across
              sustainable agriculture, education, sports, healthcare, skill
              development, and community development.
            </p>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="w-full flex justify-center lg:justify-end">
          {/* Assuming the image is inside public/about/heroimage.png */}
          <img 
            src="/about/heroimage.png" 
            alt="Roots Foundation Grassroots Illustration" 
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>

      {/* Bottom Section: Full Width Paragraph */}
      <div className="mt-12 text-[#4A4749]/85 font-normal leading-relaxed text-base">
        <p>
          Our work begins with local realities. We collaborate with communities, 
          partners, and public institutions to strengthen capacities, improve access, 
          and build systems that can continue beyond the life of a project. Through 
          long-term, measurable interventions, we help create greater opportunity, 
          stronger local ownership, and lasting change.
        </p>
      </div>
    </section>
  )
}