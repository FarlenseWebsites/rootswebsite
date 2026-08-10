'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsletterItem {
  id: number
  title: string
  image: string
  pdfUrl: string
}

const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: 'Newsletter Issue 1',
    image: '/newsletter/1.png',
    pdfUrl: '/newsletter/1.pdf',
  },
  {
    id: 2,
    title: 'Newsletter Issue 2',
    image: '/newsletter/2.png',
    pdfUrl: '/newsletter/2.pdf',
  },
  {
    id: 3,
    title: 'Newsletter Issue 3',
    image: '/newsletter/3.png',
    pdfUrl: '/newsletter/3.pdf',
  },
  {
    id: 4,
    title: 'Newsletter Issue 4',
    image: '/newsletter/4.png',
    pdfUrl: '/newsletter/4.pdf',
  },
  {
    id: 5,
    title: 'Newsletter Issue 5',
    image: '/newsletter/5.png',
    pdfUrl: '/newsletter/5.pdf',
  },
]

export default function NewslettersSection() {
  const newslettersRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (newslettersRef.current) {
      const { scrollLeft } = newslettersRef.current
      const offset = direction === 'left' ? -310 : 310

      newslettersRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="max-w-7xl mx-auto p-10">
      <div className="w-full">
        {/* Heading + Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold">
              Newsletters
            </h2>

            <p className="mt-2 text-gray-600">
              A curated view of our work, insights, and ongoing impact
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 mt-4 md:mt-0 select-none">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-gray-200 bg-white hover:bg-roots-primary hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-gray-200 bg-white hover:bg-roots-primary hover:text-white transition-all shadow-sm cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Horizontal Slider - Thumbnail Cards */}
        <div
          ref={newslettersRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {newsletters.map((newsletter) => (
            <a
              key={newsletter.id}
              href={newsletter.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 snap-start block group"
            >
              <div
                className="
                  relative
                  w-[260px]
                  h-[340px]
                  overflow-hidden
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                <Image
                  src={newsletter.image}
                  alt={newsletter.title}
                  fill
                  className="object-cover"
                  sizes="260px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}