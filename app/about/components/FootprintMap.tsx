'use client'

import React from 'react'
import Image from 'next/image'

// Define the legend items with their respective text and colors from the map
const SECTORS = [
  { label: 'Sustainable\nAgriculture', color: '#6b9c3e' }, // Green
  { label: 'Community\nDevelopment', color: '#745199' }, // Purple
  { label: 'Skill\nDevelopment', color: '#c72761' }, // Pink
  { label: 'Education', color: '#e88d14' }, // Orange
  { label: 'Sports', color: '#3174b5' }, // Blue
]

// Reusable SVG Pin component to exactly match the map's aesthetic
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
  <section className="py-16 px-10 font-sans">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">

    {/* Left */}
    <div className="lg:col-span-2">
      <h2 className="inline-block text-3xl font-medium text-roots-text">
        Our Presence
      </h2>

      <p className="mt-4 text-[#4A4749]">
        We work across India in sectors
      </p>

      <div className="mt-8 grid grid-cols-2 lg:grid-cols-1 gap-x-6 gap-y-5">
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

    {/* Right */}
    <div className="lg:col-span-3">
      <div className="relative w-full h-[70vw] sm:h-[55vw] lg:h-[42vw]">
        <Image
          src="/about/map.png"
          alt="Map of India showing our presence across sectors"
          fill
          priority
          className="object-contain"
        />
      </div>
    </div>

  </div>
</section>
)}