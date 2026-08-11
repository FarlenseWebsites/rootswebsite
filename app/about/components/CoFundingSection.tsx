'use client'

import Image from 'next/image'

const items = [
  {
    title: 'Stronger Partner Confidence',
    description:
      'Shared investment builds trust and reflects confidence in the project.',
    image: '/about/img25.jpg',
    reverse: false,
  },
  {
    title: 'Greater Sustainability',
    description:
      'Multiple funding partners strengthen programme continuity and reduce dependence on a single source.',
    image: '/about/img27.jpg',
    reverse: true,
  },
  {
    title: 'Shared Accountability',
    description:
      'Co-funding aligns partners around measurable outcomes and the responsible use of resources.',
    image: '/about/img26.jpg',
    reverse: false,
  },
]

export default function CoFundingSection() {
  return (
    <section className="max-w-7xl mx-auto px-10 py-15">
     
      {/* Zig-Zag Sections */}
      <div className="space-y-20 pt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className={`grid md:grid-cols-2 gap-12 items-center ${
              item.reverse ? 'md:[&>*:first-child]:order-2' : ''
            }`}
          >
            {/* Image */}
            <div className="relative w-full h-[240px] md:h-[260px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Text */}
            <div
              className={`max-w-md ${
                item.reverse ? 'md:text-right md:justify-self-start' : ''
              }`}
            >
              <h3 className="text-2xl font-semibold text-roots-text mb-4">
                {item.title}
              </h3>

              <p className="text-[#666] leading-7">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}