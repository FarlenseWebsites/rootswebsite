'use client'

import React from 'react'

interface TimelineItem {
  title: string
  subtitle: string
}

const items: TimelineItem[] = [
  {
    title: 'The Launchpad',
    subtitle: 'Insights to Imapct',
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
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-10">
        <h2 className="text-3xl font-medium tracking-tight text-roots-text mb-12 text-center">
          How We Work
        </h2>
      </div>

      {/* Full-width blue section */}
      <div className="bg-roots-primary text-white py-15">
        <div className="max-w-7xl mx-auto px-10">

          {/* Desktop */}
          <div className="hidden md:block relative">
            {/* Timeline line */}
            <div className="absolute top-4 left-[12%] right-[12%] h-[2px] bg-white" />

            <div className="grid grid-cols-3 gap-10 relative z-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative mb-6">
                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-[roots-primary]" />
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
          <div className="md:hidden relative ml-4">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-white" />

            <div className="space-y-10">
              {items.map((item, index) => (
                <div
                  key={index}
                  className="relative flex items-start gap-6"
                >
                  {/* Circle */}
                  <div className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-[roots-primary]" />
                  </div>

                  <div className="pt-1">
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