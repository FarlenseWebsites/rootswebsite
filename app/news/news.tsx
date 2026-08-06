'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsArticleItem {
  id: number
  publisher: string
  logoStyle: string
  logoBg?: string
  title: string
  date: string
  excerpt: string
  image: string
  url: string
}

const newsArticles: NewsArticleItem[] = [
  {
    id: 1,
    publisher: 'CSR TIMES',
    logoStyle: 'text-red-600 font-extrabold tracking-tighter text-lg font-sans',
    logoBg: 'bg-red-50 border border-red-200/50 px-2 py-0.5 rounded',
    title: 'Roots Foundation collaborates with Acuity Group to expand digital classrooms in Maharashtra.',
    date: 'June 18, 2026',
    excerpt: 'By integrating interactive smart boards and providing regular teacher training, the initiative aims to bridge the digital divide in rural communities.',
    image: '/images/img-3.jpg',
    url: 'https://csrtimes.org'
  },
  {
    id: 2,
    publisher: 'THE TIMES OF INDIA',
    logoStyle: 'text-gray-900 font-serif font-black tracking-widest text-xs uppercase',
    title: 'Ground Report: How organic farming is reviving soil health in 500+ Rajasthan villages.',
    date: 'May 24, 2026',
    excerpt: 'Farmers report a significant drop in chemical input costs and a steady rise in crop yields after adopting modern organic techniques.',
    image: '/images/img-1.jpg',
    url: 'https://timesofindia.indiatimes.com'
  },
  {
    id: 3,
    publisher: 'NGOBOX',
    logoStyle: 'text-[#75bc20] font-black tracking-normal text-base font-sans',
    logoBg: 'bg-green-50/50 px-2.5 py-0.5 rounded border border-green-200/30',
    title: 'Roots Foundation receives regional award for excellence in vocational skill training for women.',
    date: 'April 12, 2026',
    excerpt: 'Over 200 women graduated from tailoring and craftsmanship programs, with direct linkages to local market selling networks.',
    image: '/images/img-5.jpg',
    url: 'https://ngobox.org'
  },
  {
    id: 4,
    publisher: 'दैनिक जागरण / DAINIK JAGRAN',
    logoStyle: 'text-[#ef7f3a] font-bold text-sm',
    title: 'खेलों से संवर रहा ग्रामीण बच्चों का भविष्य: स्पोर्ट्स लैब पहल की नई उड़ान',
    date: 'March 05, 2026',
    excerpt: 'स्कूली बच्चों को खेल सामग्री और पेशेवर कोचिंग देकर उनमें शारीरिक साक्षरता और खेल भावना को बढ़ावा दिया जा रहा है।',
    image: '/storychange/img3.jpg',
    url: 'https://www.jagran.com'
  },
  {
    id: 5,
    publisher: 'THE FINANCIAL EXPRESS',
    logoStyle: 'text-gray-800 font-serif italic font-bold tracking-tight text-sm',
    title: 'Corporate Partnerships: Driving sustainable rural development through accountability.',
    date: 'February 15, 2026',
    excerpt: 'A study on the CSR initiatives executed by Roots Foundation shows high retention rates in schools and better income stability for farmers.',
    image: '/storychange/img1.jpg',
    url: 'https://www.financialexpress.com'
  }
]

export default function NewsArticlesSection() {
  const newsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (newsRef.current) {
      const { scrollLeft } = newsRef.current
      const offset = direction === 'left' ? -310 : 310
      newsRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative group">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-roots-text">News & Media Articles</h2>
          <p className="text-sm text-roots-text/70 mt-1">
            Click any article thumbnail to read full news story.
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

      {/* Horizontal Slider */}
      <div
        ref={newsRef}
        className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {newsArticles.map((article) => (
          <a
            key={article.id}
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 snap-start block group"
          >
            <motion.div
              className="w-[280px] h-[360px] bg-white border border-gray-200/85 shadow-md hover:shadow-xl rounded-xl overflow-hidden flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              <div className="p-3 bg-gray-50/30 border-b border-gray-100 h-[44px] flex items-center justify-between">
                <span className={`${article.logoBg || ''} ${article.logoStyle}`}>
                  {article.publisher}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">
                  {article.date}
                </span>
              </div>

              <div className="relative w-full h-[160px] bg-gray-50 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="280px"
                />
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-[12px] sm:text-[13px] font-bold text-roots-text leading-snug line-clamp-3 group-hover:text-roots-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}