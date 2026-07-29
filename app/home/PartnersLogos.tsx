'use client'

import React from 'react'

const logoFiles = [
  'cl1.svg', 'cl2.svg', 'cl3.svg', 'cl4.svg', 'cl5.svg',
  'cl6.svg', 'cl7.svg', 'cl8.svg', 'cl9.svg', 'cl10.svg',
  'cl11.svg', 'cl12.svg', 'cl13.svg', 'cl14.svg', 'cl15.svg',
  'cl16.svg', 'cl17.svg', 'cl18.svg', 'cl19.svg', 'cl20.svg',
  'cl21.svg'
]

const logoPaths = logoFiles.map(file => `/companylogos/${file}`)
const marqueeLogos = [...logoPaths, ...logoPaths]

export default function PartnersLogos() {
  return (
    <section className="py-10 overflow-hidden">
      {/* Marquee Outer Container */}
      <div className="marquee-container w-full overflow-hidden relative flex items-center py-6">
        {/* Marquee Moving Track */}
        <div className="marquee-track flex whitespace-nowrap min-w-full justify-around items-center gap-16">
          {marqueeLogos.map((path, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center shrink-0 w-[140px] h-[55px] relative"
            >
              <img
                src={path}
                alt={`Partner Logo ${idx + 1}`}
                className="h-20 w-auto max-w-[130px] object-contain duration-300 filter "
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
