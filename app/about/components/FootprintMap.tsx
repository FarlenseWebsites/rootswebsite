'use client'

import React from 'react'
import Image from 'next/image'

const SECTORS = [
  { label: 'Sustainable\nAgriculture', color: '#6b9c3e' },
  { label: 'Community\nDevelopment', color: '#745199' },
  { label: 'Skill\nDevelopment', color: '#c72761' },
  { label: 'Education', color: '#e88d14' },
  { label: 'Sports', color: '#3174b5' },
]

const LocationIcon = ({ color }: { color: string }) => (
  <svg
    width="22"
    height="30"
    viewBox="0 0 24 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="shrink-0 mt-0.5"
  >
    <path
      d="M12 0C5.37258 0 0 5.37258 0 12C0 21 12 32 12 32C12 32 24 21 24 12C24 5.37258 18.6274 0 12 0Z"
      fill={color}
    />
    <circle cx="12" cy="11.5" r="4.5" fill="white" />
  </svg>
)

export default function FootprintMap() {
  return (
    <section className="relative py-10 overflow-hidden bg-roots-beige">
      <div className="absolute left-0 right-0 top-[65%] h-22 bg-roots-primary z-0" />

      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 items-start relative z-10">
        <div className="lg:col-span-1">
          <h2 className="inline-block text-3xl font-medium text-roots-text leading-tight m-0">
            Our Presence
          </h2>

          <p className="mt-4 text-roots-text text-sm leading-[1.4]">
            We work across India in sectors
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-1 gap-x-2 gap-y-5">
            {SECTORS.map((sector, index) => (
              <div key={index} className="flex items-start gap-4">
                <LocationIcon color={sector.color} />

                <span className="text-sm font-medium text-[#4A4749] whitespace-pre-line leading-[1.4]">
                  {sector.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-[5/4]">
            <Image
              src="/about/map.svg"
              alt="Map of India showing our presence across sectors"
              fill
              priority
              className="object-contain object-top drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}