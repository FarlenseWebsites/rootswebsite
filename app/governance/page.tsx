'use client'

import React from 'react'
import Image from 'next/image'

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

export default function GovernancePage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen pb-16">
      {/* 1. Page Header */}
      <section className="pt-12 sm:pt-16 pb-6 px-4 sm:px-6 max-w-7xl mx-auto text-left">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#1a1a1a] mb-3">
            Governance
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-[#4A4749]/80 font-light leading-relaxed">
            Turning Grassroots Potential Into Lasting Change
          </p>
        </div>
      </section>

      {/* 2. Frameworks Grid Section */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {frameworks.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-5 items-start group"
            >
              <div className="shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                  className="object-contain w-12 h-12 sm:w-16 sm:h-16"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-[#09569a] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#4A4749]/80 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Financials Section */}
      <section className="py-8 px-4 sm:px-6 max-w-7xl mx-auto space-y-8 sm:space-y-12">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-roots-text mb-2">
            Financial Snapshot
          </h2>
        </div>

        {/* Line Chart */}
        <div className="w-full overflow-x-auto min-h-[100px]">
          <div className="min-w-[600px] w-full">
            <LineChart />
          </div>
        </div>
        
        <div>
          <h2 className="text-xl sm:text-2xl font-light text-roots-text mb-2">
            % Contribution for each thematic area to the overall T/O
          </h2>
        </div>
        
        {/* Thematic Allocation Box */}
        <div className="rounded-xl border border-gray-200 shadow-sm overflow-hidden bg-white/50">
          {/* Charts Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            <div className="p-4 sm:p-6">
              <DonutChart title="FY 2025 - 26" data={donutData2526} />
            </div>
            <div className="p-4 sm:p-6">
              <DonutChart title="FY 2024 - 25" data={donutData2425} />
            </div>
            <div className="p-4 sm:p-6 md:col-span-2 lg:col-span-1 border-t md:border-t-0 lg:border-t-0">
              <DonutChart title="FY 2023 - 24" data={donutData2324} />
            </div>
          </div>
        </div>

        {/* Unified Legend */}
        <div className="pt-2">
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-4 sm:gap-x-6 gap-y-3 text-xs sm:text-sm font-semibold">
            {legendItems.map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-[#4A4749]">
                <span
                  className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="leading-tight">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}