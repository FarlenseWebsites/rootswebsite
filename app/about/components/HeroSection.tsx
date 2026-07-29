'use client'

import React from 'react'

export default function HeroSection() {
  return (
    <section className=" pt-10 pb-12 px-10 max-w-7xl mx-auto  ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start ">
        {/* Left Column */}
        <div className="space-y-4 ">
          <span className="text-4xl sm:text-3xl font-bold tracking-widest text-[roots-text]">
            About Us
          </span>

          <h1 className="text-xl text-[roots-text] mt-5">
            Turning Grassroots Potential
            <br />
            Into Lasting Change
          </h1>
        </div>

        {/* Right Column */}
        <div className="space-y-6 text-[#4A4749]/85 font-light leading-relaxed text-sm sm:text-base md:pt-8">
          <p>
            Roots Foundation is a social impact organisation working at the
            grassroots to create sustainable, locally relevant solutions.
            <br />
            <br />
            Since 2012, we have designed and delivered programmes across
            sustainable agriculture, education, sports, healthcare, skill
            development, and community development.
            <br />
            <br />
            Our work begins with local realities. We collaborate with
            communities, partners, and public institutions to strengthen
            capacities, improve access, and build systems that can continue
            beyond the life of a project. Through long-term, measurable
            interventions, we help create greater opportunity, stronger local
            ownership, and lasting change.
          </p>
        </div>
      </div>
    </section>
  )
}