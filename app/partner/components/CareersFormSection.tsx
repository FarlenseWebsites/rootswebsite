'use client'

import React, { useState } from 'react'
import { Mail, Phone, Info, GraduationCap, Briefcase, Pencil } from 'lucide-react'

export default function CareersFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    fullName: '',
    highestQualification: '',
    email: '',
    positionApplyFor: '',
    contactNo: '',
    aboutYou: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: '',
        highestQualification: '',
        email: '',
        positionApplyFor: '',
        contactNo: '',
        aboutYou: '',
      })
    }, 3000)
  }

  return (
    <section className="max-w-7xl mx-auto px-10 py-12 ">
      <div className="mb-10 text-left">
        <h2 className="text-4xl font-bold tracking-tight text-roots-text mb-2">
          Apply for a Position
        </h2>
        <p className="text-lg text-roots-text/80 font-light">
          Fill out the form below and we will get back to you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="space-y-6 flex flex-col justify-between">
          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Full Name*
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Pencil className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Enter your full name"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Email Address*
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Mail className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Enter your email address"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Contact No.*
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Phone className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="tel"
                required
                value={formData.contactNo}
                onChange={(e) => setFormData({ ...formData, contactNo: e.target.value })}
                placeholder="Enter your contact no."
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          {/* Submit button on desktop */}
          <div className="hidden lg:block pt-4">
            <button
              type="submit"
              className="w-full py-3.5 bg-roots-primary text-white text-sm font-semibold rounded hover:opacity-95 transition-opacity cursor-pointer shadow-sm text-center"
            >
              {submitted ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Highest Qualification*
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <GraduationCap className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.highestQualification}
                onChange={(e) => setFormData({ ...formData, highestQualification: e.target.value })}
                placeholder="Enter your highest qualification"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Position Apply for*
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Briefcase className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.positionApplyFor}
                onChange={(e) => setFormData({ ...formData, positionApplyFor: e.target.value })}
                placeholder="Enter the position you are applying for"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col h-full">
          <label className="block text-sm font-semibold text-roots-text mb-2">
            About You*
          </label>
          <div className="flex-1 flex items-start gap-3 px-4 py-4 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200 min-h-[220px]">
            <Info className="w-5 h-5 text-roots-primary shrink-0 mt-1" />
            <textarea
              required
              value={formData.aboutYou}
              onChange={(e) => setFormData({ ...formData, aboutYou: e.target.value })}
              placeholder="Write about yourself"
              className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797] resize-none h-full min-h-[180px]"
            />
          </div>
        </div>

        {/* Submit button on mobile */}
        <div className="block lg:hidden pt-2">
          <button
            type="submit"
            className="w-full py-3.5 bg-roots-primary text-white text-sm font-semibold rounded hover:opacity-95 transition-opacity cursor-pointer shadow-sm text-center"
          >
            {submitted ? 'Submitting...' : 'Submit'}
          </button>
        </div>
      </form>

      {submitted && (
        <div className="mt-6 p-4 rounded bg-roots-agriculture/10 border border-roots-agriculture/20 text-roots-agriculture text-sm font-medium text-center transition-all duration-350">
          ✓ Thank you! Your job application has been submitted successfully.
        </div>
      )}
    </section>
  )
}
