'use client'

import React from 'react'
import Image from 'next/image'

interface AwardItem {
  id: number
  year: string
  title: string
  subtitle: string
  color: string
  image: string // 1. Added image property to the interface
}

const awards: AwardItem[] = [
  {
    id: 1,
    year: '2023',
    title: 'Best Non-Profit in grassroots Sports Development of the Year ',
    subtitle: 'INDIA',
    color: '#09569a', // primary blue
    image: '/award/1.svg', // 2. Added image path
  },
  {
    id: 2,
    title: 'The CSR Universe, Social Impact Conference & Award ',
    year: '2024',
    subtitle: 'INDIA',
    color: '#75bc20', // agriculture green
    image: '/award/2.svg', // Replace with actual paths if different
  },
  {
    id: 3,
    title: 'World CSR Day, North India Leadership Awards',
    year: '2024',
    subtitle: 'INDIA',
    color: '#febc20', // education gold
    image: '/award/3.svg',
  },
  {
    id: 4,
    title: 'CSR Times National CSR & ESG Award',
    year: '2026',
    subtitle: 'INDIA',
    color: '#dc3b83', // skilled pink
    image: '/award/4.svg',
  },
]

export default function Awards() {
  return (
    <section className="bg-roots-beige py-15 w-full">
      <div className="max-w-7xl mx-auto px-2 md:px-10 py-10 text-center">
        
        <div className="flex items-center justify-center gap-2 mb-25">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-regular text-roots-text">
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
                  src={award.image} // 3. Updated src to pull from the array
                  alt={`${award.title} Badge`} // Updated alt tag for better accessibility
                  fill
                  className="object-contain"
                />
              </div>

              {/* Award Details Text */}
              <p className="text-xs sm:text-sm font-bold font-roots-text tracking-tight">{award.year}</p>
              <h3 className="text-base sm:text-lg font-semibold font-roots-text mb-1">
                {award.title}
              </h3>
              
            </div>
          ))}
        </div>
        
      </div>
    </section>
  )
}