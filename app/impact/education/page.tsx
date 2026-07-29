'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GraduationCap, Award, BookOpen, Monitor } from 'lucide-react'

const keyInits = [
  {
    icon: <Monitor className="w-5 h-5 text-roots-education" />,
    title: 'Smart Classrooms Setup',
    desc: 'Installing digital screens, audio-visual study materials, and smart boards to make core STEM learning fun and interactive.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-roots-education" />,
    title: 'Teacher Mentoring Programs',
    desc: 'Running structured training courses for local teachers to update classroom management, digital tools, and active learning models.',
  },
  {
    icon: <Award className="w-5 h-5 text-roots-education" />,
    title: 'Career Paths Guidance',
    desc: 'Conducting counseling sessions and tech bootcamps to guide rural students toward secondary education and modern workforce paths.',
  },
]

export default function EducationImpactPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* Page Header */}
      <section className="bg-roots-education py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <GraduationCap className="w-12 h-12 mb-4 animate-bounce-slow" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Education & Career Readiness
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
            Equipping young students and school systems with modern learning tools to secure a brighter tomorrow.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-roots-text mb-6">
              Igniting Minds, Enhancing Classrooms
            </h2>
            <p className="text-[#4A4749] text-base leading-relaxed mb-6">
              Primary education in remote areas often lacks the resources to prepare children for a digital future. We address this by upgrading classrooms with smart learning kits and training educators to utilize digital content effectively.
            </p>
            <p className="text-[#4A4749] text-base leading-relaxed">
              By working in alignment with local school boards, we help reduce dropout rates and improve core learning levels in Math, Science, and English. We also conduct career guidance workshops to assist high school students in selecting professional pathways.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg select-none">
            <Image
              src="/images/img-3.jpg"
              alt="Rural children learning"
              fill
              className="object-cover"
              sizes="(max-w-768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="bg-white py-20 px-6 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-roots-text text-center mb-16">
            Key Education Initiatives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {keyInits.map((item, idx) => (
              <div key={idx} className="p-8 bg-[#FEF9F1]/50 rounded-xl border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="mb-4 bg-white w-10 h-10 rounded-lg flex items-center justify-center shadow-sm">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a1a] mb-2">{item.title}</h3>
                  <p className="text-sm text-[#4A4749]/80 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-roots-text mb-6">
          Support Our Education Programs
        </h2>
        <p className="text-sm sm:text-base text-[#4A4749]/70 mb-8 max-w-xl mx-auto">
          Help us scale smart classrooms to more government schools. Partner with Roots Foundation to build structured educational campaigns.
        </p>
        <Link
          href="/partner"
          className="inline-flex items-center px-8 py-3.5 bg-roots-education text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          Partner in Education
        </Link>
      </section>
    </div>
  )
}
