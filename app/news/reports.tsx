'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ReportItem {
  id: number
  title: string
  image: string
  pdfUrl: string
}

const reports: ReportItem[] = [
  {
    id: 1,
    title: 'Roots Foundation Annual Report 2025-2026',
    image: '/reports/1.png',
    pdfUrl: '/reports/1.pdf',
  },
  {
    id: 2,
    title: 'Roots Impact Assessment Report 2025',
    image: '/reports/2.png',
    pdfUrl: '/reports/2.pdf',
  },
  {
    id: 3,
    title: 'Agriculture & Sustainability Study',
    image: '/reports/3.png',
    pdfUrl: '/reports/3.pdf',
  },
]

export default function ReportsSection() {
  const reportsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (reportsRef.current) {
      const { scrollLeft } = reportsRef.current
      const offset = direction === 'left' ? -310 : 310
      reportsRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative group">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-medium text-roots-text">Annual Reports</h2>
          <p className="text-sm text-roots-text font-light  mt-2">
           A curated view of our work, insights, and ongoing impact.
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

      {/* Horizontal Slider - Thumbnail Cards */}
      <div
        ref={reportsRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {reports.map((report) => (
          <a
            key={report.id}
            href={report.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 snap-start block group"
          >
            <motion.div
              className="relative w-[260px] h-[340px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={report.image}
                alt={report.title}
                fill
                className="object-fit group-hover:scale-105 transition-transform duration-500"
                sizes="260px"
              />
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}