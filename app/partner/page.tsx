'use client'

import React from 'react'
import Image from 'next/image'

export default function WorkWithUsPage() {
  return (
    <div className="bg-[#FEF9F1] min-h-screen pb-20 text-roots-text">
      {/* 1. Page Header */}
      <section className="pt-5 md:pt-14 pb-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold tracking-tight text-roots-text mb-2">
            Work With Us
          </h1>
          <p className="text-xl md:text-xl font-light leading-relaxed text-roots-text">
            Collaborate with Roots Foundation to build programmes,<br/> partnerships, and teams that strengthen impact at the grassroots.
          </p>
        </div>
      </section>

      {/* 2. Forms Section */}
      <section className="px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Partner With Us Card */}
          <div className="border border-roots-text/30 p-8 sm:p-12 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-[#09569a] rounded-full flex items-center justify-center mb-6 shrink-0 overflow-hidden">
              <Image
                src="/about/partner.svg" // Update this path to your actual image
                alt="Partner With Us Icon"
                width={48}
                height={48}
                className="object-contain w-12 h-12"
              />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">Partner With Us</h2>
            <p className="mb-8 max-w-sm text-lg font-light leading-relaxed">
              For CSR partners, institutions, government bodies, funders, and collaborators.
            </p>
            <h3 className="text-lg font-bold mb-6">Partnership Enquiry form</h3>
            
            <form className="w-full space-y-4 text-left font-light">
              <input type="text" placeholder="Organisation Name" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input type="text" placeholder="Contact Person" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              
              <div className="relative">
                <select className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md appearance-none focus:outline-none focus:border-[#09569a] text-roots-text/60" defaultValue="">
                  <option value="" disabled>Types of Partnership</option>
                  <option value="csr">CSR</option>
                  <option value="institution">Institution</option>
                  <option value="government">Government Body</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-roots-text">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              <textarea placeholder="Tell us about your organisation and how you'd like to collaborate" rows={5} className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 resize-none"></textarea>
              
              <div className="pt-2">
                <button type="button" className="w-full bg-[#09569a] text-white py-4 rounded-md font-medium hover:bg-[#074682] transition-colors text-lg">
                  Submit Enquiry
                </button>
              </div>
            </form>
          </div>

          {/* Join Our Team Card */}
          <div className="border border-roots-text/30 p-8 sm:p-12 flex flex-col items-center text-center">
            {/* Icon */}
            <div className="w-24 h-24 bg-[#09569a] rounded-full flex items-center justify-center mb-6 shrink-0 overflow-hidden">
              <Image
                src="/about/join.png" // Update this path to your actual image
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
            
            <form className="w-full space-y-4 text-left font-light">
              <input type="text" placeholder="Full Name" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input type="email" placeholder="Email Address" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              <input type="tel" placeholder="Phone Number" className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60" />
              
              <div className="relative">
                <select className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md appearance-none focus:outline-none focus:border-[#09569a] text-roots-text/60" defaultValue="">
                  <option value="" disabled>Area of Interest</option>
                  <option value="programmes">Programmes</option>
                  <option value="research">Research</option>
                  <option value="operations">Operations</option>
                  <option value="communications">Communications</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-roots-text">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

              <div className="relative">
                <select className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md appearance-none focus:outline-none focus:border-[#09569a] text-roots-text/60" defaultValue="">
                  <option value="" disabled>Current Location</option>
                  <option value="delhi">Delhi</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="bangalore">Bangalore</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-roots-text">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                </div>
              </div>

            {/* Drive Link Input */}
              <div className="relative w-full">
                <input 
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

              <textarea placeholder="Tell us about yourself and why you want to work with us" rows={5} className="w-full p-4 bg-[#F8F2EB] border border-roots-text/30 rounded-md focus:outline-none focus:border-[#09569a] placeholder-roots-text/60 resize-none"></textarea>
              
              <div className="pt-2">
                <button type="button" className="w-full bg-[#09569a] text-white py-4 rounded-md font-medium hover:bg-[#074682] transition-colors text-lg">
                  Submit Application
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </div>
  )
}