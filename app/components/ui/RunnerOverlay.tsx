'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'

interface RunnerOverlayProps {
  src: string
  animated?: boolean
  isReady?: boolean
  delay?: number
  customClass?: string,
}

export default function RunnerOverlay({
  src,
  animated = false,
  isReady = true,
  delay = 2.2,
  customClass,
}: RunnerOverlayProps) {
  const controls = useAnimation()
  const positionClass = customClass ?? 'bottom-[14%]'

  useEffect(() => {
    if (!animated) return

    const run = async () => {
      if (isReady) {
        // Standard entry animation
        controls.set({ opacity: 0, x: -16 })
        controls.start({
          opacity: 1,
          x: 0,
          transition: { delay, duration: 0.8, ease: 'easeOut' },
        })
      } else {
        // FIX: Instant reset when isReady is false
        controls.set({ opacity: 0, x: -16 })
      }
    }

    run()
  }, [isReady, animated, controls, delay])

  return (
    <motion.div
      className={`pointer-events-none absolute right-[6%] z-50 w-[4.5vw] min-w-9 max-w-18 ${positionClass}`}
      animate={animated ? controls : { opacity: 1, x: 0 }}
      initial={animated ? { opacity: 0, x: -16 } : { opacity: 1, x: 0 }}
    >
      <Image
        src={src}
        alt="runner"
        width={80}
        height={120}
        className="h-auto w-full object-contain"
        sizes="(min-width: 1536px) 4vw, (min-width: 1280px) 4.5vw, (min-width: 768px) 5vw, 10vw"
      />
    </motion.div>
  )
}