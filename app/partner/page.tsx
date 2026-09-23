'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export default function WorkWithUsPage() {
  const [partnerForm, setPartnerForm] = useState({
    organizationName: '',
    contactPerson: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });
  const [partnerStatus, setPartnerStatus] = useState({ loading: false, message: '', error: false });

  const [joinForm, setJoinForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    interestArea: '',
    location: '',
    resumeLink: '',
    message: ''
  });
  const [joinStatus, setJoinStatus] = useState({ loading: false, message: '', error: false });

  const handlePartnerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setPartnerForm(prev => ({ ...prev, [name]: value }));
  };

  const handleJoinChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJoinForm(prev => ({ ...prev, [name]: value }));
  };

  const handlePartnerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPartnerStatus({ loading: true, message: '', error: false });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'partner', ...partnerForm })
      });
      if (res.ok) {
        setPartnerStatus({ loading: false, message: 'Enquiry submitted successfully!', error: false });
        setPartnerForm({ organizationName: '', contactPerson: '', email: '', phone: '', partnershipType: '', message: '' });
      } else {
        setPartnerStatus({ loading: false, message: 'Failed to submit. Please try again.', error: true });
      }
    } catch (error) {
      setPartnerStatus({ loading: false, message: 'An error occurred. Please try again later.', error: true });
    }
  };

  const handleJoinSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setJoinStatus({ loading: true, message: '', error: false });
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'join', ...joinForm })
      });
      if (res.ok) {
        setJoinStatus({ loading: false, message: 'Application submitted successfully!', error: false });
        setJoinForm({ fullName: '', email: '', phone: '', interestArea: '', location: '', resumeLink: '', message: '' });
      } else {
        setJoinStatus({ loading: false, message: 'Failed to submit. Please try again.', error: true });
      }
    } catch (error) {
      setJoinStatus({ loading: false, message: 'An error occurred. Please try again later.', error: true });
    }
  };

  return (
    <div className="bg-[#FEF9F1] min-h-screen pb-20 text-roots-text flex flex-col items-center">
      
      {/* 1. Page Header */}
      <section className="pt-10 md:pt-14 pb-16 px-10 w-full max-w-[1400px] flex flex-col items-center text-center mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-roots-text mb-4 w-full">
          Work With Us
        </h1>
        <p className="text-lg md:text-xl font-light leading-relaxed text-roots-text max-w-3xl w-full">
          Collaborate with Roots Foundation to build programmes, partnerships, and teams that strengthen impact at the grassroots.
        </p>
      </section>

      {/* 2. Forms Section */}
      <section className="px-10 w-full max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 w-full">
          
          {/* Partner With Us Card */}
          <div className="border border-roots-text/30 p-8 sm:p-12 flex flex-col items-center text-center w-full">
            {/* Icon */}
            <div className="w-24 h-24 bg-roots-primary rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 overflow-hidden">
              <Image
                src="/about/partner.png"
                alt="Partner With Us Icon"
                width={56}
                height={56}
                className="object-contain w-14 h-14"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="mb-8 max-w-sm text-lg font-light leading-relaxed">
              For CSR partners, institutions, government bodies, funders, and collaborators.
            </p>
            <h3 className="text-lg font-bold mb-6">Partnership Enquiry form</h3>
            
            <form onSubmit={handlePartnerSubmit} className="w-full space-y-4 text-left font-light">
              <input required name="organizationName" value={partnerForm.organizationName} onChange={handlePartnerChange} type="text" placeholder="Organisation Name" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input required name="contactPerson" value={partnerForm.contactPerson} onChange={handlePartnerChange} type="text" placeholder="Contact Person" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input required name="email" value={partnerForm.email} onChange={handlePartnerChange} type="email" placeholder="Email Address" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input required name="phone" value={partnerForm.phone} onChange={handlePartnerChange} type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              
              <input required name="partnershipType" value={partnerForm.partnershipType} onChange={handlePartnerChange} type="text" placeholder="Types of Partnership" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 text-roots-text" />

              <textarea required name="message" value={partnerForm.message} onChange={handlePartnerChange} placeholder="Tell us about your organisation and how you'd like to collaborate" rows={5} className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 resize-none"></textarea>
              
              {partnerStatus.message && (
                <div className={`text-sm ${partnerStatus.error ? 'text-red-500' : 'text-green-600'}`}>
                  {partnerStatus.message}
                </div>
              )}
              
              <div className="pt-2">
                <button disabled={partnerStatus.loading} type="submit" className="w-full bg-[#09569a] text-white py-4 rounded-md font-medium hover:bg-[#074682] transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                  {partnerStatus.loading ? 'Submitting...' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          </div>

          {/* Join Our Team Card */}
          <div className="border border-roots-text/30 p-8 sm:p-12 flex flex-col items-center text-center w-full">
            {/* Icon */}
            <div className="w-24 h-24 bg-[#09569a] rounded-full flex items-center justify-center mx-auto mb-6 shrink-0 overflow-hidden">
              <Image
                src="/about/join.png"
                alt="Join Our Team Icon"
                width={56}
                height={56}
                className="object-contain w-14 h-14"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="mb-8 max-w-md text-lg font-light leading-relaxed">
              For professionals interested in working with Roots Foundation across programmes, field implementation, research, operations, and communications.
            </p>
            <h3 className="text-lg font-bold mb-6">Application form</h3>
            
            <form onSubmit={handleJoinSubmit} className="w-full space-y-4 text-left font-light">
              <input required name="fullName" value={joinForm.fullName} onChange={handleJoinChange} type="text" placeholder="Full Name" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input required name="email" value={joinForm.email} onChange={handleJoinChange} type="email" placeholder="Email Address" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input required name="phone" value={joinForm.phone} onChange={handleJoinChange} type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              
              <input required name="interestArea" value={joinForm.interestArea} onChange={handleJoinChange} type="text" placeholder="Area of Interest" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 text-roots-text" />

              <input required name="location" value={joinForm.location} onChange={handleJoinChange} type="text" placeholder="Current Location" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 text-roots-text" />

              {/* Drive Link Input */}
              <div className="relative w-full">
                <input 
                  required
                  name="resumeLink"
                  value={joinForm.resumeLink}
                  onChange={handleJoinChange}
                  type="url" 
                  placeholder="Resume Link (Google Drive / Cloud Link)" 
                  className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] text-roots-text placeholder-roots-text/60 pr-12" 
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                  <svg className="w-5 h-5 text-roots-text/70" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
              </div>

              <textarea required name="message" value={joinForm.message} onChange={handleJoinChange} placeholder="Tell us about yourself and why you want to work with us" rows={5} className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 resize-none"></textarea>
              
              {joinStatus.message && (
                <div className={`text-sm ${joinStatus.error ? 'text-red-500' : 'text-green-600'}`}>
                  {joinStatus.message}
                </div>
              )}
              
              <div className="pt-2">
                <button disabled={joinStatus.loading} type="submit" className="w-full bg-[#09569a] text-white py-4 rounded-md font-medium hover:bg-[#074682] transition-colors text-lg disabled:opacity-70 disabled:cursor-not-allowed">
                  {joinStatus.loading ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}