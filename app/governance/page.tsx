'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

// Import custom chart components
import DonutChart from './components/DonutChart'
import LineChart from './components/LineChart'
import StackedBarChart from './components/StackedBarChart'

interface FrameworkItem {
  title: string
  description: string
  icon: string
}

const frameworks: FrameworkItem[] = [
  {
    title: 'Ethical Governance Framework',
    icon: '/governance/ethical.svg',
    description: 'Terms of reference guidelines are designed to evaluate compliance across key statutory requirements, ensuring key aspects of integrity are maintained.',
  },
  {
    title: 'Values-Driven Conduct',
    icon: '/governance/values.svg',
    description: 'Guiding behavior from standard codes to deep ethical alignment, promoting transparency, accountability, and professional conduct across operations.',
  },
  {
    title: 'Board & Leadership Oversight',
    icon: '/governance/board.svg',
    description: 'Strategic oversight and leadership through committees, advisors, and audits, aligning programs with organization objectives, maintaining code values and core scaling goals.',
  },
  {
    title: 'Transparency & Disclosures',
    icon: '/governance/transparency.svg',
    description: 'Sharing reports, audits, and program metrics in public domains, providing stakeholders with clear insights into funds deployment and program outcomes.',
  },
  {
    title: 'Independant Assurance Mechanisms',
    icon: '/governance/independent.svg',
    description: 'External assessment, audits, and feedback channels, providing objective assurance on compliance, efficiency, and effectiveness of operations.',
  },
  {
    title: 'Robust Monitoring & Evaluation Systems',
    icon: '/governance/robust.svg',
    description: 'Track, measure, and analyze on-ground data, real-time monitoring and reporting, ensure projects remain efficient, adaptable, and learning-focused.',
  },
  {
    title: 'Risk Management & Internal Controls',
    icon: '/governance/risk.svg',
    description: 'Proactive risk assessment, mitigation strategies, and internal check mechanisms to safeguard resources, maintain integrity, and ensure project compliance.',
  },
  {
    title: 'Stakeholder-Centric Governance',
    icon: '/governance/stakeholder.svg',
    description: 'Empowering local communities and on-ground stakeholders, prioritizing local needs, and tracking feedbacks, active participation makes governance robust.',
  },
  {
    title: 'Responsible Partnerships',
    icon: '/governance/responsible.svg',
    description: 'Structuring collaborations through agreements, transparent resource allocation, and mutual accountability, aligning values to deliver long-term impact.',
  },
  {
    title: 'Sustainable Program Governance',
    icon: '/governance/sustainable.svg',
    description: 'Systematic design that ensures post-implementation transition to local leadership, building community ownership for longevity beyond the project life cycle.',
  },
]

// Data definitions for donut charts
const donutData2526 = [
  { name: 'Sustainable Agriculture & Environment', value: 68, color: '#75bc20' },
  { name: 'Education', value: 14, color: '#febc20' },
  { name: 'Community Development', value: 7, color: '#d32f2f' },
  { name: 'Healthcare', value: 4, color: '#8353ec' },
  { name: 'Skill Development', value: 3, color: '#dc3b83' },
  { name: 'Sports', value: 2, color: '#ef7f3a' },
  { name: 'Others', value: 2, color: '#4A4749' },
]

const donutData2425 = [
  { name: 'Sustainable Agriculture & Environment', value: 62, color: '#75bc20' },
  { name: 'Education', value: 18, color: '#febc20' },
  { name: 'Community Development', value: 8, color: '#d32f2f' },
  { name: 'Skill Development', value: 5, color: '#dc3b83' },
  { name: 'Healthcare', value: 3, color: '#8353ec' },
  { name: 'Sports', value: 2, color: '#ef7f3a' },
  { name: 'Others', value: 2, color: '#4A4749' },
]

const donutData2324 = [
  { name: 'Sustainable Agriculture & Environment', value: 58, color: '#75bc20' },
  { name: 'Education', value: 20, color: '#febc20' },
  { name: 'Community Development', value: 9, color: '#d32f2f' },
  { name: 'Skill Development', value: 5, color: '#dc3b83' },
  { name: 'Healthcare', value: 4, color: '#8353ec' },
  { name: 'Sports', value: 2, color: '#ef7f3a' },
  { name: 'Others', value: 2, color: '#4A4749' },
]

const legendItems = [
  { name: 'Sustainable Agriculture & Environment', color: '#75bc20' },
  { name: 'Education', color: '#febc20' },
  { name: 'Community Development', color: '#d32f2f' },
  { name: 'Sports', color: '#ef7f3a' },
  { name: 'Skill Development', color: '#dc3b83' },
  { name: 'Healthcare', color: '#8353ec' },
  { name: 'Others', color: '#4A4749' },
]



const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
}

export default function GovernancePage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen pb-16">
      {/* 1. Page Header */}
      <section className="pt-16 pb-6 px-6 max-w-7xl mx-auto text-left">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-3">
            Governance
          </h1>
          <p className="text-lg sm:text-xl text-[#4A4749]/80 font-light leading-relaxed">
            Turning Grassroots Potential Into Lasting Change
          </p>
        </motion.div>
      </section>

      {/* 2. Frameworks Grid Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {frameworks.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="flex gap-5 items-start group"
            >
              <div className="shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain w-16 h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[#09569a] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A4749]/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Spacer / Divider */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="border-t border-gray-200/50" />
      </div>

      {/* 3. Financials Section */}
      <section className="py-8 px-6 max-w-7xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-2">
            Financials
          </h2>
          <h3 className="text-lg font-bold text-[#1a1a1a] mb-6">
            % Contribution for each thematic area to the overall T/O
          </h3>
        </motion.div>

        {/* Thematic Allocation Box */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className=" rounded-xl border border-gray-200 shadow-sm overflow-hidden"
        >
          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <DonutChart title="FY 2025 - 26" data={donutData2526} />
            <DonutChart title="FY 2024 - 25" data={donutData2425} />
            <DonutChart title="FY 2023 - 24" data={donutData2324} />
          </div>
        </motion.div>

        {/* Unified Legend */}
        <div className="pt-2">
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center text-xs font-semibold">
            {legendItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#4A4749]">
                <span
                  className="w-5 h-5 "
                  style={{ backgroundColor: item.color }}
                />
                {item.name}
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <LineChart />
        </motion.div>

        {/* Stacked Bar Chart */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
        >
          <StackedBarChart />
        </motion.div>
      </section>
    </div>
  )
}
