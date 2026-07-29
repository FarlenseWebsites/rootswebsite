'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface StoryItem {
  id: number
  title: string
  subtitle: string
  image: string
  textColorClass: string
  borderClass: string
}

const stories: StoryItem[] = [
  {
    id: 1,
    title: 'From Abandoned Fields to Thriving Farms:',
    subtitle: 'Sustainable Agriculture Success',
    image: '/storychange/img1.jpg',
    textColorClass: 'text-roots-text',
    borderClass: 'border-roots-agriculture',
  },
  {
    id: 2,
    title: 'The power of sports:',
    subtitle: 'How Ajay Found His Calling',
    image: '/storychange/img2.jpg',
    textColorClass: 'text-roots-text',
    borderClass: 'border-roots-sports',
  },
  {
    id: 3,
    title: 'From Fields to Classrooms:',
    subtitle: "Rekha's Journey to Education",
    image: '/storychange/img3.jpg',
    textColorClass: 'text-roots-text',
    borderClass: 'border-roots-education',
  },
  {
    id: 4,
    title: 'Access to health and hygiene:',
    subtitle: "Aradhna's journey to live a healthy life",
    image: '/storychange/img4.jpg',
    textColorClass: 'text-roots-text',
    borderClass: 'border-roots-health',
  },
  {
    id: 5,
    title: 'Skilled Hands, Empowered Lives:',
    subtitle: "Sunita's Rise as an Entrepreneur",
    image: '/storychange/img5.jpg',
    textColorClass: 'text-roots-text',
    borderClass: 'border-roots-skilled',
  },
]

export default function StoriesOfChange() {
  return (
    <section className="bg-roots-beige py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-roots-primary mb-2">
          Stories of Change
        </h2>
        <p className="text-roots-text/80 font-medium mb-10 text-sm sm:text-base">
          Real people, real experiences, real change
        </p>

        {/* Stories Grid/Carousel Container */}
        <div className="flex gap-5 overflow-x-auto pb-6 scrollbar-thin md:grid md:grid-cols-5 md:overflow-x-visible md:pb-0">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              className={`flex-shrink-0 w-[220px] md:w-auto bg-white rounded-md overflow-hidden border-2 ${story.borderClass} shadow-sm flex flex-col text-left hover:shadow-lg transition-shadow`}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Image with title overlaid */}
              <div className="relative h-[220px] w-full overflow-hidden bg-black">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 220px, 20vw"
                />
                {/* Dark gradient so white text stays legible */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <h3 className="absolute top-3 left-3 right-3 text-white font-bold text-[15px] leading-snug drop-shadow-sm">
                  {story.title}
                </h3>
              </div>

              {/* Text Body */}
              <div className=" bg-roots-beige p-4 flex-1 flex flex-col justify-between">
                <p className="text-roots-text font-medium text-sm mb-4">
                  {story.subtitle}
                </p>

                <div className="flex items-center gap-1">
                  <span
                    className={`text-xs font-semibold underline underline-offset-4 decoration-1 cursor-pointer ${story.textColorClass}`}
                  >
                    Read Case Study
                  </span>
                  <span className={`text-xs font-bold ${story.textColorClass}`}>
                    ›
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}