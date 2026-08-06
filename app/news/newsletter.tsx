'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsletterItem {
  id: number
  title: string
  issue: string
  date: string
  pdfUrl: string
  isSpecial?: boolean
  specialTitle?: string
  accentColor: string
  images: string[]
}

const newsletters: NewsletterItem[] = [
  {
    id: 1,
    title: 'Roots से',
    issue: 'Q1 2026 Issue',
    date: 'Jan - Mar 2026',
    pdfUrl: '/pdfs/newsletter/roots-newsletter-q1-2026.pdf',
    accentColor: 'bg-roots-primary',
    images: ['/images/img-1.jpg', '/images/img-2.jpg', '/images/img-3.jpg', '/images/img-4.jpg']
  },
  {
    id: 2,
    title: 'Roots से',
    issue: 'Q4 2025 Issue',
    date: 'Oct - Dec 2025',
    pdfUrl: '/pdfs/newsletter/roots-newsletter-q4-2025.pdf',
    accentColor: 'bg-roots-agriculture',
    images: ['/images/img-4.jpg', '/images/img-5.jpg', '/storychange/img1.jpg', '/storychange/img2.jpg']
  },
  {
    id: 3,
    title: 'Sports Lab',
    issue: 'Performance Report 2025',
    date: 'Annual Review',
    pdfUrl: '/pdfs/newsletter/sports-lab-report-2025.pdf',
    isSpecial: true,
    specialTitle: 'Sports Lab',
    accentColor: 'bg-roots-sports',
    images: ['/images/img-2.jpg']
  },
  {
    id: 4,
    title: 'Roots से',
    issue: 'Q3 2025 Issue',
    date: 'Jul - Sep 2025',
    pdfUrl: '/pdfs/newsletter/roots-newsletter-q3-2025.pdf',
    accentColor: 'bg-roots-education',
    images: ['/storychange/img3.jpg', '/storychange/img4.jpg', '/storychange/img5.jpg', '/about/mustard.jpg']
  },
  {
    id: 5,
    title: 'Roots से',
    issue: 'Annual Review 2024',
    date: 'Full Year Review',
    pdfUrl: '/pdfs/newsletter/annual-newsletter-2024.pdf',
    accentColor: 'bg-roots-skilled',
    images: ['/images/img-1.jpg', '/images/img-3.jpg', '/images/img-5.jpg', '/about/hands.jpg']
  }
]

export default function NewslettersSection() {
  const newslettersRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (newslettersRef.current) {
      const { scrollLeft } = newslettersRef.current
      const offset = direction === 'left' ? -310 : 310
      newslettersRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative group">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-roots-text">Newsletters</h2>
          <p className="text-sm text-roots-text/70 mt-1">
            Click any issue to open its PDF document directly.
          </p>
        </div>
        
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

      {/* Horizontal Slider - Collage Thumbnail Cards */}
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
            <motion.div
              className="w-[240px] h-[340px] bg-white shadow-md hover:shadow-xl rounded-xl p-3 flex flex-col justify-between select-none relative transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              <div className="flex-1 flex flex-col justify-between">
                <div className="text-center border-b border-gray-100 pb-1.5 mb-1.5">
                  <h3 className="text-xl font-bold tracking-tight text-roots-primary mt-0.5">
                    {newsletter.isSpecial ? newsletter.specialTitle : (
                      <span>
                        Roots <span className="text-roots-education font-serif italic">से</span>
                      </span>
                    )}
                  </h3>
                </div>

                {/* Collage Thumbnail Grid */}
                <div className="flex-1 relative bg-gray-50 rounded-lg overflow-hidden p-0.5">
                  {newsletter.isSpecial ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={newsletter.images[0]}
                        alt={newsletter.title}
                        fill
                        className="object-cover rounded group-hover:scale-105 transition-transform duration-500"
                        sizes="240px"
                      />
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-0.5 h-full w-full">
                      {newsletter.images.map((img, i) => (
                        <div key={i} className="relative w-full h-full bg-gray-100 overflow-hidden">
                          <Image
                            src={img}
                            alt="newsletter thumb"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="120px"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-left">
                  <div>
                    <p className="text-[11px] font-bold text-roots-text leading-tight">
                      {newsletter.issue}
                    </p>
                    <p className="text-[10px] text-roots-text/60">
                      {newsletter.date}
                    </p>
                  </div>
                </div>
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 ${newsletter.accentColor} rounded-b-xl`} />
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}