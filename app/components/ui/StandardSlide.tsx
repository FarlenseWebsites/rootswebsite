'use client'

import Image from 'next/image'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import TrackOverlay from './TrackOverlay'
import RunnerOverlay from './RunnerOverlay'
import { SlideData } from '../../../types/sports'

interface StandardSlideProps {
  slide: SlideData
  isReady?: boolean
}

export default function StandardSlide({ slide, isReady = false }: StandardSlideProps) {
  const bgControls = useAnimation()

  useEffect(() => {
    if (!isReady) {
      bgControls.set({ opacity: 0 })
      return
    }

    const run = async () => {
      bgControls.set({ opacity: 0 })
      await bgControls.start({ opacity: 1, transition: { duration: 0.75 } })
    }

    run()
  }, [isReady, bgControls])

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div className="absolute inset-0" animate={bgControls} initial={{ opacity: 0 }}>
        <Image
          src={slide.image}
          alt={`slide ${slide.id}`}
          fill
          className="object-cover"
          sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </motion.div>

      <TrackOverlay src={slide.track} animated isReady={isReady} delay={1.1} customClass={slide.trackClass} />
      
      {/* Conditionally render the runner only if slide.runner exists */}
      {slide.runner && (
        <RunnerOverlay src={slide.runner} animated isReady={isReady} delay={1.9} customClass={slide.runnerClass} />
      )}
    </div>
  )
}