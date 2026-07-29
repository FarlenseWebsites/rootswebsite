'use client'

import React from 'react'
import Image from 'next/image'

export default function StackedBarChart() {
  return (
    <div className="w-full flex justify-center bg-transparent select-none">
      <Image
        src="/governance/overallvalue.svg"
        alt="Overall Projects' Value"
        width={1250}
        height={703}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  )
}
