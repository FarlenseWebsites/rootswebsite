'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Briefcase, Scissors, Wrench, Laptop } from 'lucide-react'

const keyInits = [
  {
    icon: <Scissors className="w-5 h-5 text-roots-skilled" />,
    title: 'Womens Tailoring & Crafts Workshops',
    desc: 'Setting up local sewing and design centers to teach professional tailoring, helping rural women start home micro-businesses.',
  },
  {
    icon: <Laptop className="w-5 h-5 text-roots-skilled" />,
    title: 'Computer & Office Literacy',
    desc: 'Teaching coding, word processing, billing systems, and basic internet usage to local youth, qualifying them for municipal jobs.',
  },
  {
    icon: <Wrench className="w-5 h-5 text-roots-skilled" />,
    title: 'Technical & Maintenance Trades',
    desc: 'Conducting intensive training in plumbing, electronics repair, and assembly to meet direct local maintenance labor demands.',
  },
]

export default function SkillsImpactPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* Page Header */}
      <section className="bg-roots-skilled py-20 px-6 text-white text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <Briefcase className="w-12 h-12 mb-4 animate-bounce-slow" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
            Skill & Community Development
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto font-light">
            Building community self-reliance and household income through vocational workshops and local entrepreneurship support.
          </p>
        </div>
      </section>

      {/* Program Details */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-roots-text mb-6">
              Fostering Rural Entrepreneurship
            </h2>
            <p className="text-[#4A4749] text-base leading-relaxed mb-6">
              Lack of local employment often forces rural youth to migrate, leaving communities fragmented. Our skill development centers address this by delivering certified vocational training tailored directly to local demand.
            </p>
            <p className="text-[#4A4749] text-base leading-relaxed">
              We focus heavily on empowering women through tailoring and artisanal design hubs, providing sewing machines and helping them form self-help groups (SHGs). For youth, we offer computer literacy and essential technical trade skills.
            </p>
          </div>

          <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg select-none">
            <Image
              src="/images/img-5.jpg"
              alt="Vocational workshop center"
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
            Key Skill Initiatives
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
          Support Our Skill Centers
        </h2>
        <p className="text-sm sm:text-base text-[#4A4749]/70 mb-8 max-w-xl mx-auto">
          Partner with us to open new skill development centers in underserved blocks. Let's create measurable livelihood changes.
        </p>
        <Link
          href="/partner"
          className="inline-flex items-center px-8 py-3.5 bg-roots-skilled text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-md"
        >
          Co-invest in Skills
        </Link>
      </section>
    </div>
  )
}
