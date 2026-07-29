'use client'

import React from 'react'
import HeroBanner from './herobanner'
import StoriesOfChange from './StoriesOfChange'
import ImpactTabs from './ImpactTabs'
import PartnerCards from './PartnerCards'
import PartnersLogos from './PartnersLogos'
import Awards from './Awards'
import Testimonials from './Testimonials'
import LinkedInPosts from './LinkedInPosts'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FEF9F1]">
      {/* 1. Hero Carousel Banner Section */}
      <HeroBanner />

      {/* 2. Stories of Change Card Grid */}
      <StoriesOfChange />

      {/* 3. Engineering Real Change Tabs Section */}
      <ImpactTabs />

      {/* 4. Partner with us Cards Section */}
      <PartnerCards />

      {/* 5. Client Corporate Partners Logos */}
      <PartnersLogos />

      {/* 6. Awards & Recognitions Laurel Wreaths */}
      <Awards />

      {/* 7. Testimonials Box */}
      <Testimonials />

      {/* 8. LinkedIn Posts Feed Cards */}
      <LinkedInPosts />
    </div>
  )
}
