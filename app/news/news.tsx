'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface NewsArticleItem {
  id: number
  title: string
  image: string
  url: string
}

const newsArticles: NewsArticleItem[] = [
  {
    id: 1,
    title: 'CSR Times Coverage',
    image: '/news/1.png',
    url: 'https://csrtimes.org'
  },
  {
    id: 2,
    title: 'Times of India Coverage',
    image: '/news/2.png',
    url: 'https://timesofindia.indiatimes.com'
  },
  {
    id: 3,
    title: 'NGO Box Coverage',
    image: '/news/3.png',
    url: 'https://ngobox.org'
  },
  {
    id: 4,
    title: 'Jagran Coverage',
    image: '/news/4.png',
    url: 'https://www.jagran.com'
  },
  {
    id: 5,
    title: 'Financial Express Coverage',
    image: '/news/5.png',
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
          <h2 className="text-2xl sm:text-3xl font-medium text-roots-text">News</h2>
          <p className="text-sm font-light text-roots-text mt-2">
            Media coverage and articles documenting our work and impact
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
              className="relative w-[280px] h-[360px] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="280px"
              />
            </motion.div>
          </a>
        ))}
      </div>
    </section>
  )
}