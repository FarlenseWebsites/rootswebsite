'use client'

import React from 'react'
import Image from 'next/image'

export default function StrategicFocus() {
  return (
    <section className=" px-10 py-15 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-left max-w-3xl mb-14">
        <h2 className="text-3xl font-bold tracking-tight text-roots-text mb-4">
          Our Strategic Focus
        </h2>

        <p className="text-base text-roots-text leading-relaxed">
          We work from strategy to last-mile delivery, combining local
          <br className="hidden sm:block" />
          knowledge, strong partnerships, and accountable implementation.
        </p>
      </div>

      {/* ---------------- Mobile Layout ---------------- */}
      <div className="sm:hidden space-y-5">
        <div className="border-2 border-[#09569a] p-5 flex items-center gap-4">
          <Image
            src="/about/community.svg"
            alt="Community-Centric Approach"
            width={60}
            height={60}
            className="flex-shrink-0"
          />

          <div>
            <h3 className="text-[#09569a] font-semibold mb-2">
              Community-Centric Approach
            </h3>

            <p className="text-[#09569a] text-sm leading-relaxed">
              We listen to local voices and design programmes around community priorities.
            </p>
          </div>
        </div>

        <div className="border-2 border-[#09569a] p-5 flex items-center gap-4">
          <Image
            src="/about/partnership.svg"
            alt="Partnership-Driven Impact"
            width={60}
            height={60}
            className="flex-shrink-0"
          />

          <div>
            <h3 className="text-[#09569a] font-semibold mb-2">
              Partnership-Driven Impact
            </h3>

            <p className="text-[#09569a] text-sm leading-relaxed">
              We work with corporates, public institutions, and communities to develop aligned solutions.
            </p>
          </div>
        </div>

        <div className="border-2 border-[#09569a] p-5 flex items-center gap-4">
          <Image
            src="/about/scalability.svg"
            alt="Scalability with Integrity"
            width={60}
            height={60}
            className="flex-shrink-0"
          />

          <div>
            <h3 className="text-[#09569a] font-semibold mb-2">
              Scalability with Integrity
            </h3>

            <p className="text-[#09569a] text-sm leading-relaxed">
              Building models that can be replicated across India without compromising authenticity.
            </p>
          </div>
        </div>
      </div>

      {/* ---------------- Desktop Layout ---------------- */}
      <div className="hidden sm:grid sm:grid-cols-3 items-center">
        {/* Row 1 */}

        <div className="border-2 border-[#09569a] p-5 h-full">
          <h3 className="text-[#09569a] font-semibold mb-2">
            Community-Centric Approach
          </h3>

          <p className="text-[#09569a] text-sm leading-relaxed">
            We listen to local voices and design programmes around community priorities.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/about/partnership.svg"
            alt="Partnership"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
        <div className="border-2 border-[#09569a] p-5 h-full">
          <h3 className="text-[#09569a] font-semibold mb-2">
            Scalability with Integrity
          </h3>

          <p className="text-[#09569a] text-sm leading-relaxed">
            Building models that can be replicated across India without
            compromising authenticity.
          </p>
        </div>

       

        {/* Row 2 */}

        <div className="flex justify-center">
          <Image
            src="/about/community.svg"
            alt="Community"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
         <div className="border-2 border-[#09569a] p-5 h-full">
          <h3 className="text-[#09569a] font-semibold mb-2">
            Partnership-Driven Impact
          </h3>

          <p className="text-[#09569a] text-sm leading-relaxed">
            We work with corporates, public institutions, and communities to develop aligned solutions.

          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/about/scalability.svg"
            alt="Scalability"
            width={90}
            height={90}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}