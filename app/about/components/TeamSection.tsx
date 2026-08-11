'use client'

import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";

interface TeamMember {
  name: string
  role: string
  image: string
  linkedin: string
}

const founders: TeamMember[] = [
  {
    name: 'Ritwik Bahuguna',
    role: 'Founder and General Secretary',
    image: '/teams/ritwik.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ridhima Bahuguna',
    role: 'Founder and President',
    image: '/teams/ridhima.png',
    linkedin: 'https://linkedin.com',
  },
]

const advisors: TeamMember[] = [
  {
    name: 'A.P Sinha',
    role: '(One line description)',
    image: '/teams/apsinha.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Nidhi Nautiyal',
    role: '(One line description)',
    image: '/teams/nidhi.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Ankit Bhatia',
    role: '(One line description)',
    image: '/teams/ankit.png',
    linkedin: 'https://linkedin.com',
  },
]

const verticalLeads: TeamMember[] = [
  {
    name: 'Trapti Moonat',
    role: 'Head – Partnerships and Business Development',
    image: '/teams/trapti.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Vikas Gupta',
    role: 'Vertical Lead – Agriculture',
    image: '/teams/vikas.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Anirudh Singare',
    role: 'Senior Program Manager – Sports',
    image: '/teams/anirudh.png',
    linkedin: 'https://linkedin.com',
  },
  {
    name: 'Sonia Singh',
    role: 'Program Manager – Education and Community Development',
    image: '/teams/sonia.png',
    linkedin: 'https://linkedin.com',
  },
]

export default function TeamSection() {
  const renderVerticalGrid = (
    members: TeamMember[],
    columnsClass: string
  ) => (
    <div className={`grid ${columnsClass} gap-10`}>
      {members.map((member, idx) => (
        <div key={idx}>
          <div className="relative w-40 h-40 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          </div>

          <h4 className="mt-4 text-lg font-medium text-roots-primary">
            {member.name}
          </h4>

          <p className="mt-2 text-xs text-roots-primary leading-6 max-w-[220px]">
            {member.role}
          </p>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 text-roots-primary hover:opacity-70 transition-opacity"
          >
           <FaLinkedin size={20} />
          </a>
        </div>
      ))}
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-10 py-5 sm:py-1 md:py-10">
      <h2 className="text-4xl font-medium text-roots-text mb-2">
        Team
      </h2>
      <p className="text-roots-text font-light mb-5"  >The people behind the work</p>
      <p className=" text-black mb-16 text-lg font-light tracking-wide">Roots Foundation is built on the belief that the right team makes the difference between a programme that runs and one that lasts. Across our organisation, no two people share the same background, discipline, or lived experience. 

      <br/> <br/>
      That diversity shows up in how we design programmes, how we solve problems in the field, and how we stay honest about what is working and what isn't.</p>
      {/* Founders */}
      <div className="mb-16">
        <h3 className="text-2xl mb-8 font-light">
          Founders
        </h3>

        {renderVerticalGrid(
          founders,
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        )}
      </div>

      {/* Advisory Board */}
      <div className="mb-16">
        <h3 className="text-2xl mb-8 font-light">
          Advisory Board
        </h3>

        {renderVerticalGrid(
          advisors,
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        )}
      </div>

      {/* Vertical Leads */}
      <div>
        <h3 className="text-2xl mb-8 font-light">
          Vertical Leads
        </h3>

        {renderVerticalGrid(
          verticalLeads,
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
        )}
      </div>
    </section>
  )
}