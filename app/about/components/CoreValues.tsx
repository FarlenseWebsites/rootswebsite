'use client'

import Image from 'next/image'

const values = [
  {
    icon: '/about/c1.svg',
    title: 'Ownership Mindset',
    description:
      'We take responsibility for delivering every programme with care, precision, and accountability.',
  },
  {
    icon: '/about/c2.svg',
    title: 'Impact First',
    description:
      'Our work is guided by measurable social returns and sustainable change.',
  },
  {
    icon: '/about/c3.svg',
    title: 'Integrity',
    description:
      'We uphold transparency, trust, and accountability across our relationships and work.',
  },
  {
    icon: '/about/c4.svg',
    title: 'Empathy',
    description:
      'We listen closely, respect local realities, and work with communities to shape solutions.',
  },
]

export default function CoreValues() {
  // Helper to generate precise borders based on screen size so it matches the image perfectly
  const getBorderClasses = (index: number) => {
    switch (index) {
      case 0:
        // Col 1: Bottom on mobile, Right on tablet, Right on desktop
        return 'border-b  border-roots-text md:border-r lg:border-b-0'
      case 1:
        // Col 2: Bottom on mobile, Bottom on tablet, Right on desktop
        return 'border-b border-roots-text md:border-r-0 lg:border-r lg:border-b-0'
      case 2:
        // Col 3: Bottom on mobile, Right on tablet, Right on desktop
        return 'border-b border-roots-text md:border-b-0 md:border-r lg:border-r lg:border-b-0'
      case 3:
        // Col 4: No borders needed at the very end
        return ''
      default:
        return ''
    }
  }

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-10 py-15 ">
      {/* Heading */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#4a4a4a] text-center">
          Our Core Values
        </h2>
      </div>

      {/* Grid Layout (Default stretch ensures vertical dividers are equal height) */}
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 p-10">
        {values.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center px-4 py-4 lg:px-8 ${getBorderClasses(
              index
            )}`}
          >
            {/* Image Wrapper */}
            <div className="h-40 w-full flex items-center justify-center mb-6">
              <Image
                src={item.icon}
                alt={item.title}
                width={200}
                height={160}
                className="object-contain h-full w-auto"
              />
            </div>

            <h3 className="text-[17px] font-bold text-[#145391] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-500 leading-relaxed text-[15px] max-w-[240px]">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}