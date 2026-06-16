'use client'

import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import TrackOverlay from './TrackOverlay'
import RunnerOverlay from './RunnerOverlay'
import { SlideData } from '../../../types/sports'

interface FeaturedSlideProps {
  slide: SlideData
  isReady?: boolean
}

export default function FeaturedSlide({ slide, isReady = false }: FeaturedSlideProps) {
  const bgControls = useAnimation()
  const panelControls = useAnimation()
  const textControls = useAnimation()

  useEffect(() => {
    if (!isReady) {
      bgControls.set({ opacity: 0 })
      panelControls.set({ y: '-100%' })
      textControls.set({ opacity: 0, y: 20 })
      return
    }

    let cancelled = false

    const runSequence = async () => {
      bgControls.set({ opacity: 0 })
      panelControls.set({ y: '-100%' })
      textControls.set({ opacity: 0, y: 20 })

      await bgControls.start({ opacity: 1, transition: { duration: 0.75 } })
      if (cancelled) return

      panelControls.start({ y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } })

      await new Promise((r) => setTimeout(r, 450))
      if (cancelled) return

      textControls.start({ opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } })
    }

    runSequence()
    return () => { cancelled = true }
  }, [isReady, bgControls, panelControls, textControls])

  return (
    <div className="relative h-full w-full overflow-hidden">
      <motion.div className="absolute inset-0" animate={bgControls} initial={{ opacity: 0 }}>
        <Image
          src={slide.image}
          alt="featured background"
          fill
          className="object-cover"
          sizes="(min-width: 1536px) 20vw, (min-width: 1280px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
          priority={slide.id === 1}
        />
      </motion.div>

      <div className="absolute inset-y-0 left-[15%] md:left-[20%] z-10 flex pointer-events-none w-[25%] sm:w-[35%] md:w-[50%]">
        
        <motion.div
          className="flex h-full w-full flex-col pt-34 bg-[#0AA7E4]/95 px-4 pointer-events-auto  backdrop-blur-sm"
          animate={panelControls}
          initial={{ y: '-100%' }}
        >
          <motion.div animate={textControls} initial={{ opacity: 0, y: 20 }} className="space-y-4 text-left">
            
            <p className=" font-light  leading-snug text-white text-sm">
              {'What happens when a'} <br/>
              <span className="font-bold">{ 'girl who loves running '}</span>
              {'is'}
            </p>
            
            <h2 className="text-[2.5rem] font-black uppercase leading-[1.05] tracking-tight text-white pb-4 ">
              {<>GIVEN A <br/> CHANCE</>}
            </h2>
            
            <p className="text-[13px] font-light text-white sm:text-sm md:text-base pt-4">
              to run on a <span className="font-bold">track?</span>
            </p>

          </motion.div>
        </motion.div>

      </div>

      <TrackOverlay src={slide.track} animated isReady={isReady} delay={1.35} customClass={slide.trackClass}/>
      <RunnerOverlay src={slide.runner} animated isReady={isReady} delay={2.25} customClass={slide.runnerClass} />
    </div>
  )
}