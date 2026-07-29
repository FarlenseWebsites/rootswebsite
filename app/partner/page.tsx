'use client'

import React from 'react'
import PartnerFormSection from './components/PartnerFormSection'
import CareersFormSection from './components/CareersFormSection'

export default function PartnerPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen text-[#4A4749] pb-16 font-sans">
      {/* 1. Partner With Us Form Section */}
      <PartnerFormSection />

      {/* 2. Apply for a Position Form Section */}
      <CareersFormSection />
    </div>
  )
}
