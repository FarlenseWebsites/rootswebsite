'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Maximize2, X } from 'lucide-react'

interface GalleryImage {
  id: number
  src: string
  alt: string
  category: string
  title: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/img-1.jpg', alt: 'Agriculture program crop monitoring', category: 'Agriculture', title: 'Sustainable Farming & Soil Moisture Testing' },
  { id: 2, src: '/storychange/img1.jpg', alt: 'Community gathering in village', category: 'Skills', title: 'Community Mobilization & Farmer Meeting' },
  { id: 3, src: '/storychange/img3.jpg', alt: 'Girls hockey team training on field', category: 'Sports', title: 'Grassroots Girls Hockey Practice' },
  { id: 4, src: '/about/mustard.jpg', alt: 'Bags of harvested mustard crops', category: 'Agriculture', title: 'Mustard Crop Yield Harvest' },
  { id: 5, src: '/images/img-3.jpg', alt: 'Children using tablets in smart classroom', category: 'Education', title: 'Smart Classroom Digital Literacy' },
  { id: 6, src: '/storychange/img2.jpg', alt: 'Students raising hands during interactive class', category: 'Education', title: 'Interactive Learning in Primary School' },
  { id: 7, src: '/about/img27.jpg', alt: 'Girls studying inside modern library room', category: 'Education', title: 'Village Community Library Session' },
  { id: 8, src: '/images/img-2.jpg', alt: 'Boys soccer team celebrating trophy win', category: 'Sports', title: 'Roots Youth Cup Championship' },
  { id: 9, src: '/images/img-5.jpg', alt: 'Woman working at tailoring workshop sewing machine', category: 'Skills', title: 'Women Vocational Tailoring Workshop' },
  { id: 10, src: '/storychange/img4.jpg', alt: 'School boys sitting at desk reading books', category: 'Education', title: 'Early Childhood Reading Corner' },
  { id: 11, src: '/storychange/img5.jpg', alt: 'Students holding Sports Lab footprint banner', category: 'Sports', title: 'Sports Lab Physical Literacy Drive' }
]

export default function GallerySection() {
  const [activeModalImage, setActiveModalImage] = useState<GalleryImage | null>(null)

  return (
    <>
      {/* Gallery Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-roots-text font-sans">Gallery</h2>
          <p className="text-sm text-roots-text/70 mt-1">
            Visual glimpse of our ground operations and impact. Click any thumbnail to view full image.
          </p>
        </div>

        {/* Masonry Collage Layout */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-2 space-y-2">
          {galleryImages.map((image, index) => {
            // Assign varied heights for a natural mosaic feel
            const heights = ['h-52', 'h-72', 'h-60', 'h-44', 'h-80', 'h-56', 'h-64', 'h-48', 'h-76', 'h-40', 'h-68']
            const heightClass = heights[index % heights.length]

            return (
              <motion.div
                key={image.id}
                onClick={() => setActiveModalImage(image)}
                className={`group relative ${heightClass} rounded-lg overflow-hidden shadow-sm cursor-pointer break-inside-avoid`}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3">
                  <div className="flex justify-end">
                    <span className="p-1.5 bg-white/20 backdrop-blur-md rounded-full text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-snug">
                      {image.title}
                    </h3>
                    <p className="text-[10px] text-white/70 mt-0.5 line-clamp-1">
                      {image.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-6 flex items-center justify-center cursor-pointer"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-black/40 rounded-2xl overflow-hidden border border-white/10"
            >
              <button
                onClick={() => setActiveModalImage(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 hover:bg-black text-white rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="relative h-[65vh] w-full bg-black">
                <Image
                  src={activeModalImage.src}
                  alt={activeModalImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <div className="p-6 bg-gray-900 text-white border-t border-white/10">
                <h3 className="text-xl font-bold mb-2">
                  {activeModalImage.title}
                </h3>
                <p className="text-sm text-gray-300">
                  {activeModalImage.alt}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}