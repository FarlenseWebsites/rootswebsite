'use client'

import React from 'react'
import Image from 'next/image'

interface AwardItem {
  id: number
  year: string
  title: string
  subtitle: string
  color: string
}

const awards: AwardItem[] = [
  {
    id: 1,
    year: '2021',
    title: 'Best NGO Award',
    subtitle: 'INDIA',
    color: '#09569a',
     // primary blue
  },
  {
    id: 2,
    title: 'Global Award',
    year: '2022',
    subtitle: 'INDIA',
    color: '#75bc20', // agriculture green
  },
  {
    id: 3,
    title: 'CSR Award',
    year: '2024',
    subtitle: 'INDIA',
    color: '#febc20', // education gold
  },
  {
    id: 4,
    title: 'NGO of the Year Award',
    year: '2025',
    subtitle: 'INDIA',
    color: '#dc3b83', // skilled pink
  },
]

export default function Awards() {
  return (
    <section className="bg-roots-beige py-10">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-10 ">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-regular text-roots-text">
            Awards & Recognitions
          </h2>
        </div>
       

        {/* Awards Columns Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {awards.map((award) => (
            <div key={award.id} className="flex flex-col items-center">
              {/* Laurel Wreath Year Indicator */}
              <div className="relative w-28 h-28 flex items-center justify-center mb-5">
                <Image 
                  src="/award/AwardBadge.svg"
                  alt="AwardBadge"
                  fill
                  className='object-contain'
                  />
               
                
              </div>

              {/* Award Details Text */}
              <p className="text-xs sm:text-sm font-roots-text tracking-tight">{award.year}</p>
              <h3 className="text-base sm:text-lg font-semibold font-roots-text mb-1">
                {award.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#4A4749]/80 font-medium">
                {award.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
