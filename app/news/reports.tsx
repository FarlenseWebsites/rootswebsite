'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ReportItem {
  id: number
  title: string
  category: string
  year: string
  pdfUrl: string
  coverImage: string
  accentColor: string
}

const reports: ReportItem[] = [
  {
    id: 1,
    title: 'Roots Foundation Annual Report 2025-2026',
    category: 'Annual Report',
    year: '2025-2026',
    pdfUrl: '/pdfs/reports/annual-report-2025-2026.pdf',
    coverImage: '/about/img27.jpg',
    accentColor: 'bg-roots-primary'
  },
  {
    id: 2,
    title: 'Roots Impact Assessment Report 2025',
    category: 'Impact Study',
    year: '2025',
    pdfUrl: '/pdfs/reports/impact-assessment-report-2025.pdf',
    coverImage: '/images/img-1.jpg',
    accentColor: 'bg-roots-agriculture'
  },
  {
    id: 3,
    title: 'Agriculture & Sustainability Study',
    category: 'Sector Study',
    year: '2025',
    pdfUrl: '/pdfs/reports/agriculture-sustainability-report.pdf',
    coverImage: '/about/mustard.jpg',
    accentColor: 'bg-roots-agriculture'
  },
  {
    id: 4,
    title: 'Education Readiness Program Outcomes',
    category: 'Program Review',
    year: '2025',
    pdfUrl: '/pdfs/reports/education-readiness-report.pdf',
    coverImage: '/images/img-3.jpg',
    accentColor: 'bg-roots-education'
  },
  {
    id: 5,
    title: 'Grassroots Sports Progress Report',
    category: 'Sports Review',
    year: '2024-2025',
    pdfUrl: '/pdfs/reports/sports-development-report.pdf',
    coverImage: '/storychange/img3.jpg',
    accentColor: 'bg-roots-sports'
  }
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
          <h2 className="text-2xl sm:text-3xl font-bold text-roots-text">Reports & Publications</h2>
          <p className="text-sm text-roots-text/70 mt-1">
            Click any report thumbnail to open the PDF document directly.
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

      {/* Horizontal Slider - Collage/Thumbnail Cards */}
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
              className="w-[260px] h-[340px] bg-white border border-gray-200/85 shadow-md hover:shadow-xl rounded-xl overflow-hidden flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              <div className="relative w-full h-[210px] bg-gray-100 overflow-hidden">
                <Image
                  src={report.coverImage}
                  alt={report.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="260px"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] font-semibold text-white px-2 py-0.5 rounded-full">
                  {report.year}
                </span>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-roots-primary block mb-1">
                    {report.category}
                  </span>
                  <h3 className="text-xs font-bold text-roots-text leading-snug line-clamp-3 group-hover:text-roots-primary transition-colors">
                    {report.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}