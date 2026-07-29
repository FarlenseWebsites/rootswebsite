'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface TrackOverlayProps {
  src: string
  animated?: boolean
  isReady?: boolean
  delay?: number
  customClass?: string // 1. Add the new prop here
}

function AnimatedTrack({ src, isReady = true, delay = 1.3, customClass }: { src: string; isReady?: boolean; delay?: number; customClass?: string }) {
  // 2. Decide which class to use
  const positionClass = customClass || 'bottom-[8%] h-auto'

  return (
    <motion.div
      className={`pointer-events-none absolute inset-x-0 z-30 opacity-75 ${positionClass}`}
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={isReady ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
      transition={{ duration: isReady ? 1.15 : 0, delay: isReady ? delay : 0, ease: 'easeInOut' }}
    >
      <Image
        src={src}
        alt="track"
        width={800}
        height={200}
        // Render image from edge-to-edge preserving exact aspect ratio without cropping
        className="w-full h-auto object-contain" 
        sizes="(min-width: 1536px) 18vw, (min-width: 1280px) 22vw, (min-width: 768px) 28vw, 72vw"
      />
    </motion.div>
  )
}

export default function TrackOverlay({
  src,
  animated = false,
  isReady = true,
  delay = 1.3,
  customClass, // Receive it here
}: TrackOverlayProps) {
  if (animated) return <AnimatedTrack src={src} isReady={isReady} delay={delay} customClass={customClass} />

  const positionClass = customClass || 'bottom-[8%] h-auto'

  return (
    <div className={`pointer-events-none absolute inset-x-0 z-30 opacity-75 ${positionClass}`}>
      <Image
        src={src}
        alt="track"
        width={800}
        height={200}
        className="w-full h-auto object-contain"
        sizes="(min-width: 1536px) 18vw, (min-width: 1280px) 22vw, (min-width: 768px) 28vw, 72vw"
      />
    </div>
  )
}