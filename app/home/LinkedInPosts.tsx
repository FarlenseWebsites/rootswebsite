'use client'

import React from 'react'
import Image from 'next/image'

export interface LinkedInPostItem {
  id: number
  image: string
  url: string
}

export const posts: LinkedInPostItem[] = [
  {
    id: 1,
    image: '/linkedin/l1.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 2,
    image: '/linkedin/l2.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 3,
    image: '/linkedin/l3.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 4,
    image: '/linkedin/l4.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 5,
    image: '/linkedin/l5.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
  {
    id: 6,
    image: '/linkedin/l6.png',
    url: 'https://www.linkedin.com/company/roots-foundation-india',
  },
]

// Duplicate the array to create a seamless infinite loop
const scrollPosts = [...posts, ...posts]

export default function LinkedInPosts() {
  return (
    <section className="bg-[#FEF9F1] py-20 overflow-hidden">
      <style>{`
        @keyframes scroll-posts {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        .animate-scroll-posts {
          /* Adjust the '35s' to make it scroll faster or slower */
          animation: scroll-posts 35s linear infinite;
        }
      `}</style>

      {/* Header Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-2">
            LinkedIn Posts
          </h2>
          <p className="text-lg text-gray-500 font-light">
            Live updates and insights from our work on the ground
          </p>
        </div>
      </div>

      {/* 
        Auto-scrolling Single Row Section:
        Breaks out of the max-width container so it scrolls edge-to-edge
      */}
      <div className="w-full overflow-hidden relative flex items-center mb-12">
        {/* The hover class pauses the animation so users can click links easily */}
        <div className="flex whitespace-nowrap min-w-max items-center gap-6 animate-scroll-posts hover:[animation-play-state:paused] px-6">
          {scrollPosts.map((post, index) => (
            <a
              // Using index combined with ID since we have duplicated the array
              key={`${post.id}-${index}`}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              // Fixed width ensures all posts are the same size across the row
              className="block shrink-0 w-[280px] md:w-[380px] group"
            >
              {/* Image Container with Hover Blue Border */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-gray-100 border-[3px] border-transparent transition-colors duration-300 group-hover:border-[#0f5ca8]">
                <Image
                  src={post.image}
                  alt={`LinkedIn post ${post.id}`}
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 280px, 380px"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Button Container */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center">
          <a
            href="https://www.linkedin.com/company/roots-foundation-india"
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