'use client'

import React from 'react'
import HeroSection from '../../components/agriculture/HeroSection'
import FocusAreasSection from '../../components/agriculture/FocusAreasSection'
import ProgramsSection from '../../components/agriculture/ProgramsSection'
import VerticalFilmSection from '../../components/agriculture/VerticalFilmSection'
import AgricultureImpactSection from '../../components/agriculture/details'
import CaseStories from '../../components/agriculture/CaseStories'

export default function AgricultureImpactPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* 1. HERO SECTION */}
      <HeroSection />

      <AgricultureImpactSection />

      {/* 2. OUR FOCUS AREAS SECTION */}
      <FocusAreasSection />

      {/* 3. PROGRAMS SECTION */}
      <ProgramsSection />

      <CaseStories />

      {/* 4. VERTICAL FILM SECTION */}
      {/* <VerticalFilmSection /> */}
    </div>
  )
}