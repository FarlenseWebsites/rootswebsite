'use client'

import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const verticals = [
  {
    title: 'Agriculture & Environment',
    description: 'Empowering smallholder farmers with sustainable practices, modern tools, water-use efficiency, and climate resilience.',
    color: '#75bc20',
    borderClass: 'border-[#75bc20]',
    textClass: 'text-[#75bc20]',
    bgClass: 'bg-[#75bc20]/10',
    href: '/impact/agriculture',
  },
  {
    title: 'Sports & Physical Literacy',
    description: 'Unlocking young potential through structured sports curriculums, mentoring, coaching, and grassroots tournaments.',
    color: '#ef7f3a',
    borderClass: 'border-[#ef7f3a]',
    textClass: 'text-[#ef7f3a]',
    bgClass: 'bg-[#ef7f3a]/10',
    href: '/sports',
  },
  {
    title: 'Education & Career Readiness',
    description: 'Equipping rural children and youth with digital classrooms, smart resources, teacher mentoring, and professional guidance.',
    color: '#febc20',
    borderClass: 'border-[#febc20]',
    textClass: 'text-[#febc20]',
    bgClass: 'bg-[#febc20]/10',
    href: '/impact/education',
  },
  {
    title: 'Skill & Community Development',
    description: 'Building self-reliance and household income through vocational workshops in tailoring, craftsmanship, and technology.',
    color: '#dc3b83',
    borderClass: 'border-[#dc3b83]',
    textClass: 'text-[#dc3b83]',
    bgClass: 'bg-[#dc3b83]/10',
    href: '/impact/skills',
  },
]

export default function ImpactHubPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* Page Header */}
      <section className="bg-roots-primary py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Our Impact Hub
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto font-light">
            Providing tailored, on-ground programs that deliver sustained socio-economic outcomes across India.
          </p>
        </div>
      </section>

      {/* Verticals List */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-roots-text mb-4">
            Our Primary Focus Areas
          </h2>
          <p className="text-sm sm:text-base text-[#4A4749]/80 leading-relaxed">
            By coordinating structured, customized campaigns across these four critical verticals, we help address complex community needs in a holistic manner.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {verticals.map((v, i) => (
            <div
              key={i}
              className={`p-8 bg-white rounded-xl shadow-md border-2 ${v.borderClass} flex flex-col justify-between h-[260px]`}
            >
              <div>
                <span
                  style={{ backgroundColor: v.color }}
                  className="inline-block text-[10px] font-extrabold text-white uppercase tracking-wider px-3 py-1 rounded-full mb-4"
                >
                  VERTICAL {i + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[#1a1a1a] mb-2">
                  {v.title}
                </h3>
                <p className="text-sm sm:text-base text-[#4A4749]/80 leading-relaxed line-clamp-3">
                  {v.description}
                </p>
              </div>

              <Link
                href={v.href}
                style={{ color: v.color }}
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-extrabold hover:underline group mt-4 w-fit"
              >
                <span>EXPLORE FOCUS AREA</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
