'use client'

import React from 'react'
import HeroSection from '../../components/sports/HeroSection'
import FocusAreasSection from '../../components/sports/FocusAreasSection'
import ProgramsSection from '../../components/sports/ProgramsSection'
import VerticalFilmSection from '../../components/sports/VerticalFilmSection'
import Details from '../../components/sports/details'
import Development from '../../components/sports/development'
export default function sportsImpactPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-left">
      {/* 1. HERO SECTION */}
      <HeroSection />

      <Details />
      {/* 2. OUR FOCUS AREAS SECTION */}
      <FocusAreasSection />

      {/* 3. PROGRAMS SECTION */}
      <ProgramsSection />

      {/* 4. VERTICAL FILM SECTION */}

      <Development />
      <VerticalFilmSection />
    </div>
  )
}