'use client'

import React, { useState } from 'react'
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
  // Touch devices have no hover, so tapping toggles the zoom around the tapped point
  const [tapZoom, setTapZoom] = useState(false)
  const [origin, setOrigin] = useState('center')

  const handleTap = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!window.matchMedia('(hover: none)').matches) return
    if (tapZoom) return setTapZoom(false)
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setOrigin(`${x}% ${y}%`)
    setTapZoom(true)
  }

  return (
    <section className="relative py-10 overflow-hidden bg-roots-beige">
      <div className="absolute left-0 right-0 top-[65%] h-22 bg-roots-primary z-0" />

      <div className="max-w-7xl mx-auto px-2 md:px-10 grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 items-start relative z-10">
        <div className="lg:col-span-1 lg:pt-4">
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

        <div className="lg:col-span-3">
          <div
            onClick={handleTap}
            style={{ transformOrigin: origin }}
            className={`relative w-full transition-transform duration-500 ease-out hover:scale-125 cursor-zoom-in ${
              tapZoom ? 'scale-150' : ''
            }`}
          >
            <Image
              src="/about/map.png"
              alt="Map of India showing our presence across sectors"
              width={1069}
              height={769}
              priority
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 75vw, 900px"
              className="w-full h-auto drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}