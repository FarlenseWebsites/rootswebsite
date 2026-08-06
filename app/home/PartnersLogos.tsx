'use client'

import React from 'react'

const logoFiles = [
  'cl1.svg', 'cl2.svg', 'cl3.svg', 'cl4.svg', 'cl5.svg',
  'cl6.svg', 'cl7.svg', 'cl8.svg', 'cl9.svg', 'cl10.svg',
  'cl11.svg', 'cl12.svg', 'cl13.svg', 'cl14.svg', 'cl15.svg',
  'cl16.svg', 'cl17.svg', 'cl18.svg', 'cl19.svg', 'cl20.svg',
  'cl21.svg','cl22.svg','cl23.svg'
]

// Row 1 has 11 logos, Row 2 has 10 logos
const row1Files = logoFiles.slice(0, 12)
const row2Files = logoFiles.slice(12, 23)

// Map to paths
const row1Paths = row1Files.map(file => `/companylogos/${file}`)
const row2Paths = row2Files.map(file => `/companylogos/${file}`)

// Duplicate arrays to create a seamless infinite loop
const marqueeRow1 = [...row1Paths, ...row1Paths]
const marqueeRow2 = [...row2Paths, ...row2Paths]

export default function PartnersLogos() {
  return (
    <section className="py-10 overflow-hidden mt-10">
      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Speed matching */
        .animate-scroll-left {
          animation: scroll-left 27.5s linear infinite;
        }
        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto mb-8 px-6 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-roots-text">
          Partnerships
        </h2>
      </div>

      {/* Unified Background Container */}
      <div className="w-full bg-[#FAF1EC] py-10 flex flex-col gap-10">
        
        {/* Row 1: Moving Left */}
        <div className="w-full overflow-hidden relative flex items-center">
          <div className="flex whitespace-nowrap min-w-max items-center gap-16 animate-scroll-left hover:[animation-play-state:paused]">
            {marqueeRow1.map((path, idx) => (
              <div
                key={`row1-${idx}`}
                className="inline-flex items-center justify-center shrink-0 w-[160px] h-[80px] relative"
              >
                {/* Changed image classes to prevent cutting */}
                <img
                  src={path}
                  alt={`Partner Logo Row 1 - ${idx + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain duration-100 filter"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: Moving Right */}
        <div className="w-full overflow-hidden relative flex items-center">
          <div className="flex whitespace-nowrap min-w-max items-center gap-16 animate-scroll-right hover:[animation-play-state:paused]">
            {marqueeRow2.map((path, idx) => (
              <div
                key={`row2-${idx}`}
                className="inline-flex items-center justify-center shrink-0 w-[160px] h-[80px] relative"
              >
                {/* Changed image classes to prevent cutting */}
                <img
                  src={path}
                  alt={`Partner Logo Row 2 - ${idx + 1}`}
                  className="max-w-full max-h-full w-auto h-auto object-contain duration-100 filter"
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}