'use client'

import Image from 'next/image'

const values = [
  {
    icon: '/about/ownership.svg',
    title: 'Ownership Mindset',
    description:
      'Going beyond traditional implementation by actively co-funding projects where required. This demonstrates our deep commitment and ownership mindset.',
  },
  {
    icon: '/about/impactfirst.svg',
    title: 'Impact First',
    description:
      'Our work is guided by measurable social returns and sustainable change.',
  },
  {
    icon: '/about/integrity.svg',
    title: 'Integrity',
    description:
      'We maintain transparency and trust in every relationship with communities, donors, and partners.',
  },
  {
    icon: '/about/empathy.svg',
    title: 'Empathy',
    description:
      'We listen deeply, respect local realities, and co-create solutions with the communities we serve.',
  },
]

export default function CoreValues() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-20">
      {/* Heading */}
      <div className="mb-12">
        <h2 className="text-4xl font-semibold text-roots-text">
          Our Core Values
        </h2>

        <p className="mt-3 text-[#666] max-w-2xl">
          We are committed to delivering every project with precision and
          accountability at the last mile.
        </p>
      </div>

      {/* Content */}
      {/* Changed items-start to items-stretch to make columns equal height */}
      {/* Added a gap for mobile when items are stacked */}
      <div className="grid lg:grid-cols-5 items-stretch gap-10 lg:gap-0">
        
        {/* Left Image (40%) */}
        {/* Applied relative directly to the column, gave it a fixed height for mobile and h-auto for desktop so it stretches */}
        <div className="lg:col-span-2 relative w-full h-[300px] sm:h-[400px] lg:h-auto overflow-hidden rounded-xl lg:rounded-none">
          <Image
            src="/about/coreimg.png"
            alt="Mustard Field"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Values (60%) */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2">
          {values.map((item, index) => (
            <div
              key={index}
              className={`
                flex flex-col items-center text-center
                px-6 py-5

                ${index % 2 === 0 ? 'sm:border-r sm:border-[#7d7d7d]' : ''}
                ${index < 2 ? 'sm:border-b sm:border-[#7d7d7d]' : ''}
              `}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={58}
                height={58}
                className="mb-5"
              />

              <h3 className="text-xl font-semibold text-roots-text mb-3">
                {item.title}
              </h3>

              <p className="text-roots-text leading-7 text-sm max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}