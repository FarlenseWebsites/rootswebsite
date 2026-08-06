'use client'

import React from 'react'
import HeroSection from '../../components/education/HeroSection'
import FocusAreasSection from '../../components/education/FocusAreasSection'
import ProgramsSection from '../../components/education/ProgramsSection'
import VerticalFilmSection from '../../components/education/VerticalFilmSection'

export default function EducationImpactPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR FOCUS AREAS SECTION */}
      <FocusAreasSection />

      {/* 3. PROGRAMS SECTION */}
      <ProgramsSection />

      {/* 4. VERTICAL FILM SECTION */}
      <VerticalFilmSection />
    </div>
  )
}