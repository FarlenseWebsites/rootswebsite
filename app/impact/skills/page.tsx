'use client'

import React from 'react'
import HeroSection from '../../components/skills/HeroSection'
import FocusAreasSection from '../../components/skills/FocusAreasSection'
import ProgramsSection from '../../components/skills/ProgramsSection'
import VerticalFilmSection from '../../components/skills/VerticalFilmSection'
import HeroSection2 from '../../components/skills/HeroSection2'
import FocusAreasSection2 from '../../components/skills/FocusAreasSection2'
import ProgramsSection2 from '../../components/skills/ProgramsSection2'
import CommunityImpactSection from '../../components/skills/details2'
import SkillingImpactSection from '../../components/skills/details'
import VerticalFilmSection2 from '../../components/skills/VerticalFilmSection2'


import CaseStories1 from '../../components/skills/CaseStories1';
import CaseStories2 from '../../components/skills/CaseStories2';

export default function skillsImpactPage() {
  return (
    <div className="bg-roots-beige min-h-screen text-left">
      {/* 1. HERO SECTION */}
      <HeroSection />

      <SkillingImpactSection />

      {/* 2. OUR FOCUS AREAS SECTION */}
      <FocusAreasSection />

      {/* 3. PROGRAMS SECTION */}
      <ProgramsSection />

      <CaseStories1 />
      
      {/* <VerticalFilmSection2 /> */}

      {/* 4. HERO SECTION 2*/}
      <HeroSection2 />
      
      <CommunityImpactSection />

      {/* 5. OUR FOCUS AREAS SECTION2 */}
      <FocusAreasSection2 />

      {/* 6. PROGRAMS SECTION2 */}
      <ProgramsSection2 />

      <CaseStories2 />

      {/* 4. VERTICAL FILM SECTION */}
      {/* <VerticalFilmSection /> */}
    </div>
  )
}