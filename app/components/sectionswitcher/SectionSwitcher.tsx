'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface ProgramItem {
  id: string
  name: string
  title: string
  subtitle?: string
  description: string[]
  location?: string
  tags?: string[]
  images: {
    src: string
    alt: string
    caption?: string
  }[]
}

export interface SectionSwitcherProps {
  items: ProgramItem[]
  accentColor?: string
  locationcolor?: string
  title?: string
  description?: string
}


export default function SectionSwitcher({
  items = [],
  accentColor = '#75bc20',
  locationcolor = '',
  title = 'Programs',
  description
}: SectionSwitcherProps) {
  const firstItem = items[0]
  const [selectedId, setSelectedId] = useState<string>(firstItem?.id || '')

  const activeItem = items.find((item) => item.id === selectedId) || firstItem

  if (!items || items.length === 0) {
    return null
  }

  const handleSelectProgram = (id: string) => {
    setSelectedId(id)
  }

  return (
    <div className="w-full">
      {title && (
        <div className="mb-8 text-left">
          <h2 className="text-3xl sm:text-4xl font-bold text-root-text tracking-tight mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-base text-root-text font-light max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Main Switcher Box */}
      <div className=" ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT SIDEBAR: Program Selector List */}
          <div className="lg:col-span-4 h-full bg-white p-4 border border-[#d9d9d9]">
            <div className="flex flex-col gap-2">
              {items.map((item) => {
                const isSelected = activeItem && item.id === activeItem.id
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectProgram(item.id)}
                    className={`w-full text-left px-4 py-3.5 transition-colors duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-[#FEF9F1] border font-semibold'
                        : 'hover:bg-gray-50 border border-transparent text-root-text'
                    }`}
                    style={{
                      borderColor: isSelected ? accentColor : 'transparent',
                      color: isSelected ? '#1a1a1a' : undefined
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors shrink-0 ${
                          isSelected ? 'border-transparent' : 'border-gray-300'
                        }`}
                        style={{
                          backgroundColor: isSelected ? accentColor : 'transparent'
                        }}
                      >
                        {isSelected && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      <span className="text-sm font-medium leading-snug">
                        {item.name}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT SIDE: Program Details */}
          {activeItem && (
            <div className="lg:col-span-8 h-full bg-white border border-[#d9d9d9] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Active Program Header */}
                <div className="border-b border-gray-100 pb-5 mb-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-root-text">
                    {activeItem.title}
                  </h3>
                  {activeItem.subtitle && (
                    <p className="text-sm text-roots-text mt-1">
                      {activeItem.subtitle}
                    </p>
                  )}
                </div>

                {/* Active Program Descriptions */}
                <div className="space-y-4 text-sm sm:text-base text-[#4A4749] font-light mb-6">
                  {activeItem.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                {/* Location Tags */}
                {activeItem.tags && activeItem.tags.length > 0 && (
                  <div className="pt-2 mb-2">
                    <div className="text-xs font-semibold text-roots-text mb-3">
                      Location(s)
                    </div>
                    <div className="flex flex-wrap gap-3">
                      {activeItem.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-4 py-2.5 text-white"
                          style={{ backgroundColor: locationcolor }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM: Dynamic Image Gallery */}
        {activeItem && activeItem.images && activeItem.images.length > 0 && (
          <div className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
              {activeItem.images.map((img, idx) => (
                <div
                  key={idx}
                  className="group relative h-28 sm:h-32 hover:z-30"
                >
                  {/* Thumbnail */}
                  <div className="relative h-full w-full overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
                    />
                  </div>

                  {/* Hover preview, pops up above the thumbnail */}
                  <div
                    className={`pointer-events-none absolute bottom-full mb-3 hidden md:block w-80 h-52 overflow-hidden shadow-2xl ring-4 ring-white opacity-0 translate-y-2 scale-95 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 ${
                      idx === 0
                        ? "left-0 origin-bottom-left"
                        : idx === activeItem.images.length - 1
                        ? "right-0 origin-bottom-right"
                        : "left-1/2 -translate-x-1/2 origin-bottom"
                    }`}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 