'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
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
    url: 'https://ngobox.org/full-news_Transforming-Futures--Football-Initiative-by-Skyline-Builders-and-Roots-Foundation-Roots-Foundation_41973',
  },
  {
    id: 2,
    title: 'Times of India Coverage',
    image: '/news/2.png',
    url: 'https://ngobox.org/full-news_Transforming-Futures--Football-Initiative-by-Skyline-Builders-and-Roots-Foundation-Roots-Foundation_41973',
  },
  {
    id: 3,
    title: 'NGO Box Coverage',
    image: '/news/3.png',
    url: 'https://smartbusinesnews.com/business/skyline-foundation-joins-hands-with-roots-foundation-for-youth-football-development-drive/',
  },
  {
    id: 4,
    title: 'Jagran Coverage',
    image: '/news/4.png',
    url: 'https://businessnewsweek.in/business/skyline-foundation-roots-foundation-launch-football-program-to-empower-youth/',
  },
  {
    id: 5,
    title: 'Financial Express Coverage',
    image: '/news/5.png',
    url: 'https://businessnewsthisweek.com/business/transforming-futures-football-initiative-by-skyline-foundation-structures-p-ltd-and-roots-foundation/',
  },
]

export default function NewsArticlesSection() {
  const newsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (newsRef.current) {
      const { scrollLeft } = newsRef.current
      const offset = direction === 'left' ? -310 : 310

      newsRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="max-w-7xl mx-auto py-15 px-2 md:px-10 text-roots-text">
      <div className="w-full">
        {/* Heading + Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium ">
              News
            </h2>

            <p className="mt-2 text-roots-text text-lg font-light">
              Media coverage and articles documenting our work and impact
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

        {/* News Articles */}
        <div
          ref={newsRef}
          className="flex gap-6 overflow-x-hidden md:overflow-x-auto lg:overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {newsArticles.map((article) => (
            <a
              key={article.id}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 snap-start block group"
            >
              <div
                className="
                  relative
                  w-[280px]
                  h-[360px]
                  overflow-hidden
                  transition-transform
                  duration-300
                  hover:border-b
                  hover:border-roots-text
                "
              >
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-contain"
                  sizes="280px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}