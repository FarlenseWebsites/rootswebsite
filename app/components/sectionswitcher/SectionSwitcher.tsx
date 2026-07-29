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
  title?: string
  description?: string
}

export default function SectionSwitcher({
  items = [],
  accentColor = '#75bc20',
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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2a2a2a] tracking-tight mb-2">
            {title}
          </h2>
          {description && (
            <p className="text-base text-[#4A4749]/80 max-w-3xl leading-relaxed">
              {description}
            </p>
          )}
        </div>
      )}

      {/* Main Switcher Box */}
      <div className="p-6 sm:p-8">
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
                        : 'hover:bg-gray-50 border border-transparent text-[#4A4749]'
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#1a1a1a]">
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
                          style={{ backgroundColor: '#7AA547' }}
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
                  className="group relative h-28 sm:h-32 overflow-hidden"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 14vw"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 