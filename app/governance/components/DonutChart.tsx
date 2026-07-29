'use client'

import React from 'react'
import Image from 'next/image'

interface ChartSegment {
  name: string
  value: number
  color: string
}

interface DonutChartProps {
  title: string
  data: ChartSegment[]
}

export default function DonutChart({ title, data }: DonutChartProps) {
  // Determine which pre-rendered SVG to use based on the year title
  let svgSrc = '/governance/year25.svg'
  if (title.includes('24 - 25') || title.includes('2024')) {
    svgSrc = '/governance/year24.svg'
  } else if (title.includes('23 - 24') || title.includes('2023')) {
    svgSrc = '/governance/year23.svg'
  }

  return (
    <div className="w-full flex flex-col items-center bg-transparent select-none h-full">
      {/* Chart SVG wrapper with padding */}
      <div className="w-full p-6 flex justify-center items-center flex-1">
        <div className="w-full max-w-[280px]">
          <Image
            src={svgSrc}
            alt={title}
            width={442}
            height={395}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
      {/* Label wrapper stretching full width at bottom of column */}
      <div className="w-full border-t border-gray-200 bg-gray-50/20 text-center text-sm font-semibold text-[#4A4749] py-3 mt-auto">
        {title}
      </div>
    </div>
  )
}
