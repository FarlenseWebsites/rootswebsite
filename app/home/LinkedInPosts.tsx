'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ThumbsUp, MessageSquare, Share2 } from 'lucide-react'

interface LinkedInPostItem {
  id: number
  text: string
  image: string
  likes: number
  comments: number
  date: string
}

const posts: LinkedInPostItem[] = [
  {
    id: 1,
    text: 'Thrilled to witness the final match of the Roots Football Cup! Nurturing young talent and physical literacy in grassroots communities.',
    image: '/images/img-2.jpg',
    likes: 342,
    comments: 18,
    date: '2d ago',
  },
  {
    id: 2,
    text: 'Empowering smallholder farmers with climate-resilient agriculture workshops. Transforming crop yield and preserving local soil health.',
    image: '/images/img-1.jpg',
    likes: 512,
    comments: 29,
    date: '4d ago',
  },
  {
    id: 3,
    text: 'Installing micro-irrigation systems across semi-arid regions. Helping farmers save up to 40% water while maintaining optimal growth.',
    image: '/images/img-5.jpg',
    likes: 219,
    comments: 12,
    date: '1w ago',
  },
  {
    id: 4,
    text: 'Our smart classrooms are igniting curiosity in STEM subjects! Bridging the digital divide for over 10,000 rural children.',
    image: '/images/img-3.jpg',
    likes: 405,
    comments: 31,
    date: '1w ago',
  },
  {
    id: 5,
    text: 'Fostering vocational training for rural women. Creating direct opportunities for local tailoring and craftsmanship entrepreneurship.',
    image: '/images/img-4.jpg',
    likes: 288,
    comments: 15,
    date: '2w ago',
  },
]

export default function LinkedInPosts() {
  return (
    <section className="bg-[#FEF9F1] py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <svg className="w-6 h-6 text-roots-primary fill-roots-primary" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
          </svg>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-roots-text">
            LinkedIn Posts
          </h2>
        </div>
        <p className="text-sm text-[#4A4749]/70 mb-12">
          Latest updates and insights from our youth and work on the ground.
        </p>

        {/* Horizontal scroll on mobile, flex row wrap on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin md:grid md:grid-cols-5 md:overflow-x-visible md:pb-0 mb-12">
          {posts.map((post) => (
            <motion.div
              key={post.id}
              className="flex-shrink-0 w-[260px] md:w-auto bg-white rounded-xl overflow-hidden border border-gray-200/80 shadow-md flex flex-col justify-between h-[380px] md:h-[410px] text-left hover:shadow-lg transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            >
              {/* Image */}
              <div className="relative h-44 w-full select-none">
                <Image
                  src={post.image}
                  alt="Post update image"
                  fill
                  className="object-cover"
                  sizes="(max-w-768px) 260px, 18vw"
                />
                <span className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-[10px] font-medium text-white px-2 py-0.5 rounded-full">
                  {post.date}
                </span>
              </div>

              {/* Text Body */}
              <div className="p-4 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-roots-text leading-relaxed font-normal line-clamp-4">
                  {post.text}
                </p>

                {/* Interaction info */}
                <div className="border-t border-gray-100 pt-3 mt-3 flex items-center justify-between text-gray-500 text-xs font-semibold">
                  <div className="flex items-center gap-1.5 hover:text-roots-primary cursor-pointer">
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1.5 hover:text-roots-primary cursor-pointer">
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{post.comments}</span>
                  </div>
                  <div className="hover:text-roots-primary cursor-pointer">
                    <Share2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Feed Button */}
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-3 bg-roots-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          VIEW MORE
        </a>
      </div>
    </section>
  )
}
