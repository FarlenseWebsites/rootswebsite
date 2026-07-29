import React from 'react'
import Image from 'next/image'
import { heroStats } from './data'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-16 px-6 sm:px-10">
      <div className="absolute inset-0 z-0">
        <Image
          src="/agri/hero.jpg"
          alt="Agriculture and Environment Hero"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-roots-beige/0 via-roots-beige/5 to-roots-beige/10 to-roots-beige/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        <div className="lg:col-span-8 text-white space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
            Agriculture and <br /> Environment
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl font-light leading-relaxed drop-shadow">
            We work with farming communities to support sustainable, climate-responsive, and economically viable agricultural practices.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8 ">
          {heroStats.map((stat, index) => (
            <div key={index} className="bg-[#7aa547] text-white p-6 ">
              <div className=" bg-roots-beige text-2xl sm:text-3xl font-medium text-[#7aa547] tracking-tight p-2 mb-1">
                {stat.value}
              </div>
              <p className="text-sm pt-3 font-regular ">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
