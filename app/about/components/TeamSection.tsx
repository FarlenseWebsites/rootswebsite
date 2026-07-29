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
  const renderHorizontalGrid = (
  members: TeamMember[],
  columnsClass: string
) => (
  <div className={`grid ${columnsClass} gap-10`}>
    {members.map((member, idx) => (
      <div key={idx} className="flex items-start gap-5">
        {/* Image */}
        <div className="relative w-36 h-36 shrink-0 overflow-hidden">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-contain"
          />
        </div>

        {/* Text */}
        <div className="flex h-36 flex-col justify-between">
          <div>
            <h4 className="text-lg font-medium text-roots-primary leading-tight">
              {member.name}
            </h4>

            <p className="mt-2 text-xs text-roots-primary leading-6 max-w-[180px]">
              {member.role}
            </p>
          </div>

          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-roots-primary hover:opacity-70 transition-opacity"
          >
              <FaLinkedin />

            </a>
          </div>
        </div>
      ))}
    </div>
  )

  const renderVerticalGrid = (
    members: TeamMember[],
    columnsClass: string
  ) => (
    <div className={`grid ${columnsClass} gap-10`}>
      {members.map((member, idx) => (
        <div key={idx}>
          <div className="relative w-38 h-38 overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-fit"
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
            className="inline-block mt-3 text-roots-primary"
          >
           <FaLinkedin />

          </a>
        </div>
      ))}
    </div>
  )

  return (
    <section className="max-w-7xl mx-auto px-10 py-5 sm:py-1 md:py-10">
      <h2 className="text-4xl font-medium text-roots-text mb-14">
        Team
      </h2>

      {/* Founders */}
      <div className="mb-16">
        <h3 className="text-2xl  mb-8">
          Founders
        </h3>

        {renderHorizontalGrid(
          founders,
          'grid-cols-1 md:grid-cols-3'
        )}
      </div>

      {/* Advisory Board */}
      <div className="mb-16">
        <h3 className="text-2xl mb-8">
          Advisory Board
        </h3>

        {renderHorizontalGrid(
          advisors,
          'grid-cols-1 sm:grid-cols-3 lg:grid-cols-3'
        )}
      </div>

      {/* Vertical Leads */}
      <div>
        <h3 className="text-2xl  mb-8">
          Vertical Leads
        </h3>

        {renderVerticalGrid(
          verticalLeads,
          'grid-cols-2 lg:grid-cols-6'
        )}
      </div>
    </section>
  )
}