'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface PartnerCardItem {
  id: number
  title: string
  subtitle: string
  description: string
  image: string
}

const cards: PartnerCardItem[] = [
  {
    id: 1,
    title: 'The Catalyst / Fulcrum',
    subtitle: 'Strategic CSR co-investors',
    description:
      'Co-investing with us — working together with communities to support and scale programs that build long-term impact and drive transformation.',
    image: '/images/img-2.jpg',
  },
  {
    id: 2,
    title: 'The Launchpad',
    subtitle: 'Workforce enablement',
    description:
      'Creating a ready, responsible workforce tailored to meet corporate strategic needs, empower local youth, and deliver sustained socio-economic value.',
    image: '/images/img-3.jpg',
  },
  {
    id: 3,
    title: 'The Anchor',
    subtitle: 'On-ground implementation',
    description:
      'On-ground execution partners who direct and manage custom-designed programs to achieve high social return on investment (SROI) across villages.',
    image: '/images/img-4.jpg',
  },
]

export default function PartnerCards() {
  return (
    <section className="bg-[#FEF9F1] py-10 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-roots-text mb-12">
          Partner with us to co-create measurable impact
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative h-[400px] md:h-[450px] rounded-xl overflow-hidden shadow-lg flex flex-col justify-end text-left group"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0 select-none">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
              </div>

              {/* Dark Gradient Mask Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/20" />

              {/* Card Contents */}
              <div className="relative p-6 sm:p-8 z-10 text-white">
                <h3 className="text-xl sm:text-2xl font-bold mb-1 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs font-semibold text-roots-education uppercase tracking-widest mb-3">
                  {card.subtitle}
                </p>
                <p className="text-sm text-white/80 leading-relaxed mb-6">
                  {card.description}
                </p>

                <Link
                  href="/partner"
                  className="inline-flex w-full items-center justify-center py-2.5 border-2 border-white rounded-lg text-sm font-semibold hover:bg-white hover:text-roots-primary transition-all duration-300"
                >
                  Partner With Us
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
