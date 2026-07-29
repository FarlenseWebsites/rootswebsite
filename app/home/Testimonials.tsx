'use client'

import React from 'react'
import Image from 'next/image'

export default function Testimonials() {
  return (
    <section className="bg-[#faf1ec] py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-2xl font-medium text-roots-text mb-2">
            Testimonials
          </p>
          <h2 className="text-sm font-light text-roots-text">
            What our partners and communities say about us
          </h2>
        </div>

        {/* Testimonial Row - image and text card are separate siblings, stretched to equal height */}
        <div className="grid grid-cols-1 md:grid-cols-12 max-w-5xl mx-auto gap-6 md:gap-8 items-stretch">
          {/* Athlete Profile Column - no card, sits directly on section bg */}
          <div className="relative md:col-span-4 h-72 sm:h-96 md:h-auto overflow-hidden">
            <Image
              src="/home/sania.png"
              alt="Sania Nehwal"
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Testimonial Quote Column - its own cream card, matches image height on desktop */}
          <div className="md:col-span-8 bg-[#FEF9F1] flex flex-col justify-center text-left p-6 md:p-10">
            <p className="text-base sm:text-lg text-roots-text leading-relaxed mb-8">
              I would like to extend my heartfelt gratitude to Roots
              Foundation and Hyundai for initiating the{' '}
              <span className="text-orange-500 font-medium">
                Sports Lab program
              </span>
              . This initiative demonstrates a keen understanding of the
              needs of sportspersons, providing them with essential
              resources such as this fitness centre in Hisar. By addressing
              these needs, they ensure that athletes can focus solely on
              their sports without any hindrances.
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
                Sania Nehwal
              </h3>
              <p className="text-sm text-roots-text/70 mt-1">
                Indian Badminton Player and Olympic Medalist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}