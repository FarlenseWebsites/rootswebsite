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
  // Custom flex-basis values to perfectly match the 4-3-4 grid shown in the screenshot.
  // The percentages are kept slightly under 100% per row to account for the gap space, 
  // and flex-grow (the '1' in 1_1_X%) stretches them flush to the edges.
  const layoutClasses = [
    // Row 1 (4 images)
    'md:flex-[1_1_20%]', 
    'md:flex-[1_1_35%]', 
    'md:flex-[1_1_15%]', 
    'md:flex-[1_1_20%]', 
    // Row 2 (3 images)
    'md:flex-[1_1_40%]', 
    'md:flex-[1_1_20%]', 
    'md:flex-[1_1_30%]', 
    // Row 3 (4 images)
    'md:flex-[1_1_20%]', 
    'md:flex-[1_1_20%]', 
    'md:flex-[1_1_20%]', 
    'md:flex-[1_1_30%]', 
  ]

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <div className="mb-8 text-left">
        <h2 className="text-3xl font-bold text-gray-900 font-sans">Gallery</h2>
        <p className="text-sm text-gray-600 mt-1">
          Visual glimpse of our ground operations and impact.
        </p>
      </div>

      {/* Flexbox Layout Matching Screenshot */}
      <div className="flex flex-wrap gap-4">
        {galleryImages.map((image, index) => {
          const flexClass = layoutClasses[index]

          return (
            <div
              key={image.id}
              // Base class spans full width on mobile, uses custom width on desktop (md:)
              className={`relative h-64 md:h-72 flex-[1_1_100%] w-full ${flexClass}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}