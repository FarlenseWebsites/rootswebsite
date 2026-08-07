'use client'

import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  '/home/agribanner1.png',
  '/home/sportsbanner1.png',
  '/home/edubanner1.png',
  '/home/skillsbanner1.png',
]

export default function HeroBanner() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  return (
    <div className="group  relative aspect-[21/9] overflow-hidden bg-roots-beige">
      {/* Embla Viewport */}
      <div className="overflow-hidden w-full h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((imagePath, index) => (
            <div
              className="relative flex-[0_0_100%] min-w-0 h-full w-full select-none"
              key={index}
            >
              {/* Slide Image */}
              <div className="absolute inset-0 select-none pointer-events-none">
                <Image
                  src={imagePath}
                  alt={`Roots Banner Slide ${index + 1}`}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manual Navigation - Prev Arrow */}
      <button
        onClick={scrollPrev}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black/15 hover:bg-black/35 text-white/80 hover:text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hidden md:flex"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Manual Navigation - Next Arrow */}
      <button
        onClick={scrollNext}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 rounded-full bg-black/15 hover:bg-black/35 text-white/80 hover:text-white border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-300 cursor-pointer hidden md:flex"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2.5 z-20">
        {scrollSnaps.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            className={`h-2 rounded-full transition-all duration-300 ${
              idx === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
