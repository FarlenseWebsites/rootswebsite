'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface LinkedInPostItem {
  id: number
  image: string
  url: string
}

export const posts: LinkedInPostItem[] = [
  {
    id: 1,
    image: '/linkedin/l1.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-sportsfordevelopment-communitysports-activity-7466481701062381568-7Bvo/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
  {
    id: 2,
    image: '/linkedin/l2.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_talent-scouting-begins-long-before-training-activity-7480243777224318976-fmfm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
  {
    id: 3,
    image: '/linkedin/l3.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_a-playing-ground-can-become-one-of-a-village-activity-7485301595384246272-MyIn/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
  {
    id: 4,
    image: '/linkedin/l4.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-projectleap-stellantis-activity-7484930092041707520-wveF/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
  {
    id: 5,
    image: '/linkedin/l5.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-communitydevelopment-education-activity-7482428695425503233-u0ju/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
  {
    id: 6,
    image: '/linkedin/l6.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_worldruraldevelopmentday-rootsfoundation-activity-7479836644624461824-cn2t/?utm_source=share&utm_medium=member_desktop&rcm=ACoAADV54xwBAKGln4cEt_bbsvjnhRpmzvgoHPw',
  },
]

export default function LinkedInPosts() {
  const postsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (postsRef.current) {
      const { scrollLeft } = postsRef.current
      const offset = direction === 'left' ? -380 : 380
      postsRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="bg-[#FEF9F1] py-12 px-6">
      <div className="max-w-7xl mx-auto relative group">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-medium text-roots-text">
              LinkedIn Posts
            </h2>
            <p className="text-sm text-roots-text font-light mt-1">
              Live updates and insights from our work on the ground
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
          ref={postsRef}
          className="flex gap-6 overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 snap-start block group"
            >
              <motion.div
                className="relative w-[280px] md:w-[380px] aspect-[16/9] overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
                whileHover={{ scale: 1.01 }}
              >
                <Image
                  src={post.image}
                  alt={`LinkedIn post ${post.id}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-w-768px) 280px, 380px"
                />
              </motion.div>
            </a>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/company/roots-foundation-india/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-10 py-3 bg-[#0d559d] text-white text-base font-medium transition-opacity hover:opacity-90"
          >
            View More
          </a>
        </div>
      </div>
    </section>
  )
}
