'use client'

import React from 'react'

interface TimelineItem {
  title: string
  subtitle: string
}

const items: TimelineItem[] = [
  {
    title: 'The Launchpad',
    subtitle: 'Insights to Impact',
  },
  {
    title: 'The Catalyst/ Fulcrum',
    subtitle: 'Leverage all Stakeholders',
  },
  {
    title: 'The Anchor',
    subtitle: 'Own the project (Multiplier Effect)',
  },
]

export default function HowWeWork() {
  return (
    <section className="py-15 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-medium tracking-tight text-roots-text mb-12 text-center">
          How We Work
        </h2>
      </div>

      {/* Full-width blue section */}
      <div className="bg-roots-primary text-white py-20 w-full overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Desktop */}
          <div className="hidden md:block relative">
            {/* 
              Changed to left-0 and right-0 so the line spans the ENTIRE width 
              of the 7xl container without getting cut off!
            */}
            <div className="absolute top-4 left-0 right-0 h-[2px] bg-white z-0" />

            {/* justify-between pushes the items to the far edges of the 7xl container */}
            <div className="flex justify-between relative z-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center w-48 lg:w-64"
                >
                  {/* Circle (bg-white perfectly hides the line passing underneath) */}
                  <div className="relative mb-6">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-[0_0_0_4px_theme(colors.roots-primary)]">
                      <div className="w-3 h-3 rounded-full bg-roots-primary" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile */}
          <div className="md:hidden relative">
            {/* Extended the vertical line to top-0 and bottom-0 so it doesn't get cut */}
            <div className="absolute left-[15px] top-0 bottom-0 w-[2px] bg-white z-0" />

            <div className="space-y-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6 z-10"
                >
                  {/* Circle */}
                  <div className="relative flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-roots-primary" />
                  </div>

                  <div className="pt-1 bg-roots-primary">
                    <h3 className="text-base font-bold mb-1">
                      {item.title}
                    </h3>

                    <p className="text-sm text-white/80">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}