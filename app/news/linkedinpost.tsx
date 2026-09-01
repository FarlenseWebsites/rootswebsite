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
    image: '/linkedin/l2.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_talent-scouting-begins-long-before-training-activity-7480243777224318976-fmfm/',
  },
  {
    id: 3,
    image: '/linkedin/l3.png',
    url: 'https://www.linkedin.com/posts/roots-foundation-india_a-playing-ground-can-become-one-of-a-village-activity-7485301595384246272-MyIn/',
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
    <section className="max-w-7xl mx-auto py-15 px-2 md:px-10 text-roots-text">
      <div className="w-full">
        {/* Heading + Navigation */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-medium">
              LinkedIn Posts
            </h2>

            <p className="mt-2  text-lg text-roots-text font-light">
              Live updates and insights from our work on the ground
            </p>
          </div>

          {/* Navigation buttons */}
          <div className="flex gap-2 mt-4 md:mt-5 select-none">
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

        {/* Posts */}
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
                  className="object-contain"
                  sizes="(max-width: 768px) 280px, 380px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}