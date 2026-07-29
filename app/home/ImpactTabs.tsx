'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

interface TabData {
  id: string
  tabTitle: string
  title: string
  description: string
  statValue: string
  statLabel: string
  image: string
  color: string
  href: string
}

const tabs: TabData[] = [
  {
    id: 'agriculture',
    tabTitle: 'Agriculture and Environment',
    title: 'Agriculture and Environment',
    description:
      'We work with farmers and rural communities to design and implement sustainable agricultural practices that address local challenges. Our initiatives focus on improving productivity, managing natural resources, and supporting climate aware solutions that ensure long term resilience.',
    statValue: '10,00,000 +',
    statLabel: 'Farmers trained in good practices',
    image: '/home/agri.jpg',
    color: 'var(--roots-agriculture)',
    href: '/impact/agriculture',
  },
  {
    id: 'sports',
    tabTitle: 'Sports and Physical Literacy',
    title: 'Sports and Physical Literacy',
    description:
      'We work with farmers and rural communities to design and implement sustainable agricultural practices that address local challenges. Our initiatives focus on improving productivity, managing natural resources, and supporting climate aware solutions that ensure long term resilience.',
    statValue: '85,000 +',
    statLabel: 'Farmers trained in good practices',
    image: '/home/sports.jpg',
    color: 'var(--roots-sports)',
    href: '/sports',
  },
  {
    id: 'education',
    tabTitle: 'Education and Career Readiness',
    title: 'Education and Career Readiness',
    description:
      'We work with farmers and rural communities to design and implement sustainable agricultural practices that address local challenges. Our initiatives focus on improving productivity, managing natural resources, and supporting climate aware solutions that ensure long term resilience.',
    statValue: '60,000 +',
    statLabel: 'Farmers trained in good practices',
    image: '/home/edu.jpg',
    color: 'var(--roots-education)',
    href: '/impact/education',
  },
  {
    id: 'skills',
    tabTitle: 'Skill and Community Development',
    title: 'Skill and Community Development',
    description:
      'We work with farmers and rural communities to design and implement sustainable agricultural practices that address local challenges. Our initiatives focus on improving productivity, managing natural resources, and supporting climate aware solutions that ensure long term resilience.',
    statValue: '75,000 +',
    statLabel: 'Farmers trained in good practices',
    image: '/home/skills.jpg',
    color: 'var(--roots-skilled)',
    href: '/impact/skills',
  },
]

export default function ImpactTabs() {
  const [activeTabId, setActiveTabId] = useState('agriculture')
  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0]

  return (
    <section className=" py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-[var(--roots-text)] mb-8">
          <span style={{ color:"#FF383C" }} >
            Engineering real change,
          </span>{' '}
          rooted in measurable impact.
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                style={{
                  borderColor: isActive ? tab.color : '#d1d5db',
                  backgroundColor: isActive ? tab.color : '#f8f2eb',
                  color: isActive ? '#f8f2eb' : '#374151',
                }}
                className="px-4 py-2 rounded-sm border text-xs sm:text-sm font-semibold transition-colors duration-300 cursor-pointer"
              >
                {tab.tabTitle}
              </button>
            )
          })}
        </div>

        {/* Content Box */}
        <div
          style={{ borderColor: activeTab.color }}
          className="w-full border-2 rounded-lg p-6 sm:p-8 md:p-10 bg-[var(--roots-beige)] transition-colors duration-500 text-left"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start"
            >
              {/* Left column: title + stat */}
              <div className="flex flex-col justify-between h-full">
                <h3
                  style={{ color: activeTab.color }}
                  className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-6 transition-colors duration-500"
                >
                  {activeTab.title}
                </h3>

                <div>
                  <p
                    style={{ color: activeTab.color }}
                    className="text-2xl sm:text-3xl md:text-4xl font-black mb-1 transition-colors duration-500"
                  >
                    {activeTab.statValue}
                  </p>
                  <p className="text-xs sm:text-sm font-medium text-[var(--roots-text)]">
                    {activeTab.statLabel}
                  </p>
                </div>
              </div>

              {/* Right column: description + image + read more */}
              <div className="flex flex-col">
                <p className="text-[var(--roots-text)] text-sm leading-relaxed mb-4">
                  {activeTab.description}
                </p>

                <div className="relative w-full h-[130px] sm:h-[150px] md:h-[170px] rounded-md overflow-hidden mb-3">
                  <Image
                    src={activeTab.image}
                    alt={activeTab.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>

                <Link
                  href={activeTab.href}
                  style={{ color: activeTab.color }}
                  className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold hover:underline transition-colors duration-500 w-fit"
                >
                  Read More <span>›</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}