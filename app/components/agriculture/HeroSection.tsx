import React from 'react'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative aspect-[21/11] flex items-center justify-center overflow-hidden ">
      <div className="absolute inset-0 z-0">
        <Image
          src="/agri/hero.png"
          alt="Agriculture and Environment Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  )
}