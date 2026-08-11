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
}

const cards: PartnerCardItem[] = [
  {
    id: 1,
    title: 'The Catalyst / Fulcrum',
    subtitle: 'Leverage All Stakeholders',
    description:
      'Collaboration is key — we bring together all stakeholders to drive your tailor-made initiative for a lasting impact.',
  },
  {
    id: 2,
    title: 'The Launchpad',
    subtitle: 'Insights to Impact',
    description:
      'Enter ready live projects initiatives designed with a strategic backbone and seamless execution.',
  },
  {
    id: 3,
    title: 'The Anchor',
    subtitle: 'Own the Project (Multiplier Effect)',
    description:
      'Enter ready live projects initiatives designed with a strategic backbone and seamless execution.',
  },
]

export default function PartnerCards() {
  return (
    <section className="bg-[#09569A] py-15 px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className=" text-white text-2xl sm:text-3xl md:text-4xl font-regular  mb-12">
          Partner with us to co-create measurable impact
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
          {cards.map((card) => (
            <motion.div
              key={card.id}
              className="relative flex h-full min-h-[320px] flex-col overflow-hidden bg-white"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex h-full flex-col p-6 sm:p-8 lg:p-10 text-center">
                <h3 className="text-roots-primary text-xl sm:text-2xl font-medium tracking-tight">
                  {card.title}
                </h3>

                <p className="mt-2 text-[11px] sm:text-xs font-light uppercase tracking-[0.2em] text-roots-text">
                  {card.subtitle}
                </p>

                <p className="mt-5 flex-1 text-sm sm:text-base leading-relaxed text-roots-text">
                  {card.description}
                </p>

                <Link
                  href="/partner"
                  className="mt-6 inline-flex w-full items-center justify-center py-3 bg-roots-primary text-white border-2 border-roots-primary text-sm font-medium hover:bg-white hover:text-roots-primary transition-all duration-300"
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
