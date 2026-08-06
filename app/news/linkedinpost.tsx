'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface LinkedInPostItem {
  id: number
  text: string
  image: string
  likes: number
  comments: number
  shares?: number
  date: string
  url: string
}

export const posts: LinkedInPostItem[] = [
  {
    id: 1,
    text: 'Thrilled to witness the final match of the Roots Football Cup! Nurturing young talent and physical literacy in grassroots communities.',
    image: '/images/img-2.jpg',
    likes: 342,
    comments: 18,
    shares: 9,
    date: '2d ago',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 2,
    text: 'Empowering smallholder farmers with climate-resilient agriculture workshops. Transforming crop yield and preserving local soil health.',
    image: '/images/img-1.jpg',
    likes: 512,
    comments: 29,
    shares: 14,
    date: '4d ago',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 3,
    text: 'Installing micro-irrigation systems across semi-arid regions. Helping farmers save up to 40% water while maintaining optimal growth.',
    image: '/images/img-5.jpg',
    likes: 219,
    comments: 12,
    shares: 6,
    date: '1w ago',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 4,
    text: 'Our smart classrooms are igniting curiosity in STEM subjects! Bridging the digital divide for over 10,000 rural children.',
    image: '/images/img-3.jpg',
    likes: 405,
    comments: 31,
    shares: 11,
    date: '1w ago',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 5,
    text: 'Fostering vocational training for rural women. Creating direct opportunities for local tailoring and craftsmanship entrepreneurship.',
    image: '/images/img-4.jpg',
    likes: 288,
    comments: 15,
    shares: 7,
    date: '2w ago',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
]

export default function LinkedInPostsSection() {
  const postsRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    if (postsRef.current) {
      const { scrollLeft } = postsRef.current
      const offset = direction === 'left' ? -310 : 310
      postsRef.current.scrollTo({ left: scrollLeft + offset, behavior: 'smooth' })
    }
  }

  return (
    <section className="py-12 px-6 max-w-7xl mx-auto relative group">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
        <div>
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6 text-roots-primary fill-roots-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <h2 className="text-2xl sm:text-3xl font-bold text-roots-text">LinkedIn Posts</h2>
          </div>
          <p className="text-sm text-roots-text/70 mt-1">
            Latest updates and insights from our work on the ground.
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
              className="w-[280px] h-[360px] bg-white border border-gray-200/85 shadow-md hover:shadow-xl rounded-xl overflow-hidden flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1.5"
              whileHover={{ scale: 1.01 }}
            >
              {/* Image Thumbnail */}
              <div className="relative w-full h-[180px] bg-gray-100 overflow-hidden">
                <Image
                  src={post.image}
                  alt="Post update image"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="280px"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] font-medium text-white px-2 py-0.5 rounded-full">
                  {post.date}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-[12px] sm:text-[13px] font-bold text-roots-text leading-snug line-clamp-3 group-hover:text-roots-primary transition-colors">
                  {post.text}
                </p>

                <div className="flex items-center gap-4 mt-3 pt-3 border-t border-gray-100 text-[10px] text-roots-text/50 font-medium">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                    {post.comments}
                  </span>
                  {post.shares && (
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
                      {post.shares}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </div>

      {/* View Feed Button */}
      <div className="mt-4 text-left">
        <a
          href="https://www.linkedin.com/company/roots-foundation-india"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 bg-roots-primary text-white text-xs font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm"
        >
          VIEW MORE ON LINKEDIN
        </a>
      </div>
    </section>
  )
}
