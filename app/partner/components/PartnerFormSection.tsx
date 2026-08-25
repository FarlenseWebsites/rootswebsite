'use client'

import React, { useState } from 'react'
import { Mail, Phone, Building2, Info, ChevronDown, Handshake, Pencil } from 'lucide-react'

export default function PartnerFormSection() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    partnershipType: '',
    contact: '',
    description: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        organization: '',
        email: '',
        partnershipType: '',
        contact: '',
        description: '',
      })
    }, 3000)
  }

  return (
    <section className="max-w-7xl mx-auto px-2 md:px-10 py-12">
      <div className="mb-10 text-left">
        <h1 className="text-4xl font-bold tracking-tight text-roots-text mb-2">
          Partner With Us
        </h1>
        <p className="text-lg text-roots-text/80 font-light">
          Fill out the form below and we will get back to you
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Column 1 */}
        <div className="space-y-6 flex flex-col justify-between ">
          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Name
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Pencil className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter your full name"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Email
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
              Contact
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Phone className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="tel"
                required
                value={formData.contact}
                onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
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
              Organisation Name
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Building2 className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.organization}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Enter your organisation name"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-roots-text mb-2">
              Partnership Type
            </label>
            <div className="flex items-center gap-3 px-4 py-3.5 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200">
              <Handshake className="w-5 h-5 text-roots-primary shrink-0" />
              <input
                type="text"
                required
                value={formData.partnershipType}
                onChange={(e) => setFormData({ ...formData, partnershipType: e.target.value })}
                placeholder="Enter types of partnership"
                className="bg-transparent border-none outline-none w-full text-sm text-roots-text placeholder-[#979797]"
              />
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col h-full">
          <label className="block text-sm font-semibold text-roots-text mb-2">
            Brief Description About You
          </label>
          <div className="flex-1 flex items-start gap-3 px-4 py-4 rounded bg-[#F8F2EB] border border-transparent focus-within:bg-white focus-within:border-roots-primary/30 focus-within:shadow-sm transition-all duration-200 min-h-[220px]">
            <Info className="w-5 h-5 text-roots-primary shrink-0 mt-1" />
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
          ✓ Thank you! Your partnership request has been submitted successfully.
        </div>
      )}
    </section>
  )
}
