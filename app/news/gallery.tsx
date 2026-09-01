'use client'

import React from 'react'
import Image from 'next/image'

interface GalleryImage {
  id: number
  src: string
  alt: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/gallery/1.png', alt: 'Agriculture program crop monitoring' },
  { id: 2, src: '/gallery/2.png', alt: 'Community gathering in village' },
  { id: 3, src: '/gallery/3.png', alt: 'Girls hockey team training on field' },
  { id: 4, src: '/gallery/4.png', alt: 'Bags of harvested mustard crops' },
  { id: 5, src: '/gallery/5.png', alt: 'Children using tablets in smart classroom' },
  { id: 6, src: '/gallery/6.png', alt: 'Students raising hands during interactive class' },
  { id: 7, src: '/gallery/7.png', alt: 'Girls studying inside modern library room' },
  { id: 8, src: '/gallery/8.png', alt: 'Boys soccer team celebrating trophy win' },
  { id: 9, src: '/gallery/9.png', alt: 'Woman working at tailoring workshop sewing machine' },
  { id: 10, src: '/gallery/10.png', alt: 'School boys sitting at desk reading books' },
  { id: 11, src: '/gallery/11.png', alt: 'Students holding Sports Lab footprint banner' }
]

export default function GallerySection() {
  // A 12-column grid system is the industry standard.
  // We define how many columns each image spans on mobile (out of 2 cols) 
  // and desktop (out of 12 cols).
  const gridSpans = [
    // Row 1 (4 images - desktop)
    'col-span-2 md:col-span-3', // Mobile: Full width | Desktop: 3/12
    'col-span-1 md:col-span-4', // Mobile: Half width | Desktop: 4/12
    'col-span-1 md:col-span-2', // Mobile: Half width | Desktop: 2/12
    'col-span-2 md:col-span-3', // Mobile: Full width | Desktop: 3/12
    
    // Row 2 (3 images - desktop)
    'col-span-1 md:col-span-5', // Mobile: Half width | Desktop: 5/12
    'col-span-1 md:col-span-3', // Mobile: Half width | Desktop: 3/12
    'col-span-2 md:col-span-4', // Mobile: Full width | Desktop: 4/12
    
    // Row 3 (4 images - desktop)
    'col-span-1 md:col-span-3', // Mobile: Half width | Desktop: 3/12
    'col-span-1 md:col-span-3', // Mobile: Half width | Desktop: 3/12
    'col-span-1 md:col-span-3', // Mobile: Half width | Desktop: 3/12
    'col-span-1 md:col-span-3', // Mobile: Half width | Desktop: 3/12
  ]

  return (
    <section className="py-12 md:py-16 px-10 md:px-10 max-w-7xl mx-auto">
      <div className="mb-6 md:mb-8 text-left">
        <h2 className="text-3xl md:text-4xl font-medium text-roots-text">Gallery</h2>
        <p className="text-lg text-roots-text font-light mt-2">
          Visual glimpse of our ground operations and impact.
        </p>
      </div>

      {/* 
        GRID CONTAINER:
        Mobile: 2 columns
        Desktop: 12 columns 
      */}
      <div className="grid grid-cols-2 md:grid-cols-12 gap-1 md:gap-2 auto-rows-[200px] md:auto-rows-[280px]">
        {galleryImages.map((image, index) => {
          // Fallback to a standard 1-col/3-col span if the array ever grows beyond 11 items
          const spanClass = gridSpans[index] || 'col-span-1 md:col-span-3'

          return (
            <div
              key={image.id}
              className={`relative w-full h-full  overflow-hidden group ${spanClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}