'use client'

import Image from 'next/image'

export default function SDGSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10 font-poppins">
      <div className="ml-4">
        <h2 className="text-3xl md:text-4xl font-medium text-roots-text">
          We work across SDGs
        </h2>

        <p className="mt-6 text-lg leading-8 text-roots-text font-light">
          We are committed to the UN SDG 2030 mission and continue to expand
          our impact footprint.
        </p>
      </div>

      {/* Image wrapper — scrolls horizontally on small screens instead of
          shrinking the sprite until it's unreadable */}
      <div className="mt-8 -mx-6 px-6 overflow-x-auto sm:overflow-visible">
        <div className="relative w-[640px] sm:w-full aspect-[16/7.5] sm:aspect-[16/6] lg:aspect-[16/5]">
          <Image
            src="/about/sustainablepoints.svg"
            alt="UN Sustainable Development Goals"
            fill
            className="object-contain"
            sizes="(max-width: 640px) 640px, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  )
}