'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import FeaturedSlide from './FeaturedSlide'
import StandardSlide from './StandardSlide'
import { slides } from '../../../utils/sportsData'

const VISIBLE_COUNT = 3
const LOOP_END = slides.length + VISIBLE_COUNT - 1
const LOOP_START = VISIBLE_COUNT - 1
const allSlides = [...slides, ...slides.slice(0, VISIBLE_COUNT)]

export default function SportsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [itemWidth, setItemWidth] = useState(0)
  const [snapBack, setSnapBack] = useState(false)
  const itemRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (itemRef.current) {
      setItemWidth(itemRef.current.offsetWidth)
    }
    const handleResize = () => {
      if (itemRef.current) setItemWidth(itemRef.current.offsetWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Progression timer: advances the active index every 3.5s
  useEffect(() => {
    if (snapBack) return

    const interval = setInterval(() => {
      if (activeIndex < LOOP_END) {
        setActiveIndex(activeIndex + 1)
      } else {
        setSnapBack(true)
      }
    }, 3500)

    return () => clearInterval(interval)
  }, [activeIndex, snapBack])

  // Reset phase: once snapBack is true, instantly reset to LOOP_START and disable snapBack after 50ms
  useEffect(() => {
    if (!snapBack) return

    const timeout = setTimeout(() => {
      setActiveIndex(LOOP_START)
      setSnapBack(false)
    }, 50)

    return () => clearTimeout(timeout)
  }, [snapBack])

  const snapShiftAmount = Math.max(0, LOOP_START - 2) * itemWidth
  const shiftAmount = snapBack
    ? snapShiftAmount
    : (activeIndex >= 3 ? (activeIndex - 2) * itemWidth : 0)

  return (
    <div className="w-full aspect-[12/10] sm:aspect-[16/10] md:aspect-[21/10] overflow-hidden bg-roots-beige flex items-center">
      <motion.div
        className="flex h-full"
        animate={{ x: -shiftAmount }}
        transition={snapBack ? { duration: 0 } : { duration: 1, ease: 'easeInOut' }}
      >
        {allSlides.map((slide, index) => {
          const isVisible = index <= activeIndex

          return (
            <motion.div
              key={index}
              ref={index === 0 ? itemRef : null}
              className="relative h-full aspect-[4/5] shrink-0 min-w-0 bg-[#F4ECE0] overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: isVisible ? 0.3 : 0.6, ease: 'easeOut' }}
            >
              {slide.featured ? (
                <FeaturedSlide slide={slide} isReady={isVisible} />
              ) : (
                <StandardSlide slide={slide} isReady={isVisible} />
              )}
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}
