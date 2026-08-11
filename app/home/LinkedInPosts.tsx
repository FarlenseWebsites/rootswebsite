'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
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
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-sportsfordevelopment-communitysports-activity-7466481701062381568-7Bvo/',
  },
  {
    id: 2,
    image: '/linkedin/l3.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_a-playing-ground-can-become-one-of-a-village-activity-7485301595384246272-MyIn/',
  },
  {
    id: 3,
    image: '/linkedin/l2.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_talent-scouting-begins-long-before-training-activity-7480243777224318976-fmfm/',
  },
  
  {
    id: 4,
    image: '/linkedin/l4.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-projectleap-stellantis-activity-7484930092041707520-wveF/',
  },
  {
    id: 5,
    image: '/linkedin/l5.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_rootsfoundation-communitydevelopment-education-activity-7482428695425503233-u0ju/',
  },
  {
    id: 6,
    image: '/linkedin/l6.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_worldruraldevelopmentday-rootsfoundation-activity-7479836644624461824-cn2t/',
  },
]

export default function LinkedInPosts() {
  const postsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (postsRef.current) {
      const { scrollLeft } = postsRef.current
      const offset = direction === 'left' ? -380 : 380

      postsRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      })
    }
  }

  return (
    <section className="max-w-7xl mx-auto py-12 md:py-16">
      <div className="w-full px-6 md:px-10">
        {/* Heading + Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-roots-text mb-2 sm:mb-4">
              LinkedIn Posts
            </h2>
            <p className="text-base sm:text-lg font-light text-roots-text">
              Live updates and insights from our work on the ground
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 select-none shrink-0">
            <button
              onClick={() => handleScroll('left')}
              className="p-2 rounded-full border border-gray-200 bg-white hover:bg-roots-primary hover:text-white transition-all shadow-sm cursor-pointer focus:outline-none"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={() => handleScroll('right')}
              className="p-2 rounded-full border border-gray-200 bg-white hover:bg-roots-primary hover:text-white transition-all shadow-sm cursor-pointer focus:outline-none"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Posts Carousel */}
        <div
          ref={postsRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto pb-6 scroll-smooth snap-x scrollbar-none [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 snap-start block group"
            >
              <div
                className="
                  relative
                  w-[280px] md:w-[380px]
                  aspect-[16/9]
                  overflow-hidden
                  transition-transform
                  duration-300
                  hover:border-b
                  hover:border-roots-text
                "
              >
                <Image
                  src={post.image}
                  alt={`LinkedIn post ${post.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </div>
            </a>
          ))}

          {/* "View More" Card at the end of the carousel */}
          {/* FIX: Removed the border classes from the parent div */}
          <div className="flex-shrink-0 snap-start flex items-center justify-center w-[280px] md:w-[380px] aspect-[16/9] bg-roots-beige transition-colors">
            <a
              href="https://www.linkedin.com/company/roots-foundation-india/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#0d559d] text-white text-sm sm:text-base font-medium transition-opacity hover:opacity-90 shadow-sm"
            >
              View More 
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}