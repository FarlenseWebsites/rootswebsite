'use client'

import React from 'react'
import HeroSection from '../../components/skills/HeroSection'
import FocusAreasSection from '../../components/skills/FocusAreasSection'
import ProgramsSection from '../../components/skills/ProgramsSection'
import VerticalFilmSection from '../../components/skills/VerticalFilmSection'
import HeroSection2 from '../../components/skills/HeroSection2'
import FocusAreasSection2 from '../../components/skills/FocusAreasSection2'
import ProgramsSection2 from '../../components/skills/ProgramsSection2'

export default function skillsImpactPage() {
  return (
    <div className="bg-roots-beige min-h-screen text-left">
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. OUR FOCUS AREAS SECTION */}
      <FocusAreasSection />

      {/* 3. PROGRAMS SECTION */}
      <ProgramsSection />

      {/* 4. HERO SECTION 2*/}
      <HeroSection2 />

      {/* 5. OUR FOCUS AREAS SECTION2 */}
      <FocusAreasSection2 />

      {/* 6. PROGRAMS SECTION2 */}
      <ProgramsSection2 />

      {/* 4. VERTICAL FILM SECTION */}
      <VerticalFilmSection />
    </div>
  )
}