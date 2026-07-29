'use client'

import React from 'react'

// Import Section Components
import HeroSection from './components/HeroSection'
import JoyOfSharingBanner from './components/JoyOfSharingBanner'
import HowWeWork from './components/HowWeWork'
import StrategicFocus from './components/StrategicFocus'
import CoFundingSection from './components/CoFundingSection'
import CoreValues from './components/CoreValues'
import FootprintMap from './components/FootprintMap'
import TeamSection from './components/TeamSection'
import SharedCommitmentSection from './components/sharedcommitment'
import Sustainablegoals from './components/sustainablegoals'

export default function AboutPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-[#4A4749] pb-16 font-sans">
      {/* 1. Hero Introduction */}
      <HeroSection />

      {/* 2. Joy of Sharing Banner */}
      <JoyOfSharingBanner />

      {/* 3. How We Work Timeline */}
      <HowWeWork />


      {/* 5. Strategic Focus Cards connected to Center Node */}
      <StrategicFocus />

      {/* 6. Why Co-Funding Matters Columns */}
      <CoFundingSection />

      {/* 7. Shared Commitment Section */}
      <SharedCommitmentSection />

      {/* 7. Our Core Values Masonry Collage */}
      <CoreValues />

      {/* 8. Sustainable Development Goals */}
      <Sustainablegoals />

      {/* 8. Active States & Footprint Map */}
      <FootprintMap />

      {/* 9. Trustees, Advisory Board, and Project Leads */}
      <TeamSection />
    </div>
  )
}
