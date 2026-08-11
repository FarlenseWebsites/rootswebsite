'use client'

import React from 'react'
import Image from 'next/image'

interface StoryItem {
  id: number
  title: string
  subtitle: string
  image: string
  textColorClass: string
  borderClass: string
  url: string // Added URL property
}

const stories: StoryItem[] = [
  {
    id: 1,
    title: 'Stitching a Brighter Future',
    subtitle: "Skill and Community Development",
    image: '/home/sunita.png',
    textColorClass: 'text-roots-skilled',
    borderClass: 'border-roots-skilled',
    url: '/impact/skills#case-story',
  },
  {
    id: 2,
    title: 'From Conventional Farming to Climate-Smart Practice',
    subtitle: 'Agriculture and Environment',
    image: '/home/fields.png',
    textColorClass: 'text-roots-agriculture',
    borderClass: 'border-roots-agriculture',
    url: '/impact/agriculture#case-story',
  },
  {
    id: 3,
    title: 'From Barefoot Runs to the National Track',
    subtitle: 'Sports and Physical Literacy',
    image: '/home/ajay.png',
    textColorClass: 'text-roots-sports',
    borderClass: 'border-roots-sports',
    url: '/impact/sports#case-story',
  },
  {
    id: 4,
    title: 'From Fields to Classrooms:',
    subtitle: "Education and Career Readiness",
    image: '/home/rekha.png',
    textColorClass: 'text-roots-education',
    borderClass: 'border-roots-education',
    url: '/impact/education#case-story',
  },
  {
    id: 5,
    title: 'Community Development Project, Devanahalli',
    subtitle: "Skills and Community Development",
    image: '/home/skill2.png',
    textColorClass: 'text-roots-skilled',
    borderClass: 'text-roots-skilled',
    url: '/impact/skills#case-story2',
  },
]

export default function StoriesOfChange() {
  return (
    <section className="bg-roots-beige py-15 w-full">
      {/* Container to enforce max-width and center alignment with padding for smaller screens */}
      <div className="max-w-7xl mx-auto px-10 text-center">
        <h2 className="text-3xl md:text-5xl font-semibold text-roots-primary mb-2">
          Stories of Change
        </h2>
        <p className="text-roots-text font-light mb-10 md:text-lg text-md">
          Real people, real experiences, real change
        </p>

        {/* Fully responsive Grid instead of scrollable flex container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stories.map((story) => (
            <a
              key={story.id}
              href={story.url}
              className={`group bg-white rounded-md overflow-hidden border-2 ${story.borderClass} shadow-sm flex flex-col text-left hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out`}
            >
              {/* Image with title overlaid */}
              <div className="relative h-[300px] w-full overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  // Added grayscale, transition, and group-hover:grayscale-0 here
                  className="object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Kept a light gradient only so the white text remains legible over bright images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                
                <h3 className="absolute top-3 left-3 right-3 text-white font-bold text-[15px] leading-snug drop-shadow-md">
                  {story.title}
                </h3>
              </div>

              {/* Text Body */}
              <div className="bg-roots-beige p-4 flex-1 flex flex-col justify-between">
                <p className="text-roots-text font-light text-sm mb-4">
                  {story.subtitle}
                </p>

                <div className="flex items-center gap-1">
                  <span
                    className={`text-xs font-medium underline underline-offset-4 decoration-1 group-hover:decoration-2 ${story.textColorClass}`}
                  >
                    Read Case Study
                  </span>
                  {/* Subtle arrow animation on hover to indicate clickability */}
                  <span className={`text-xs font-bold ${story.textColorClass} group-hover:translate-x-1 transition-transform`}>
                    ›
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}