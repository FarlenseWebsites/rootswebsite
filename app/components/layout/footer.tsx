'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'
import { useState } from 'react'

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Governance', href: '/governance' },
  { label: 'News and Insights', href: '/news' },
  { label: 'Careers', href: '/careers' },
]

const impactVerticals = [
  { label: 'Agriculture and Environment', href: '/impact/agriculture' },
  { label: 'Sports and Physical Literacy', href: '/impact/sports' },
  { label: 'Education and Career Readiness', href: '/impact/education' },
  { label: 'Skill and Community Development', href: '/impact/skills' },
]

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-roots-footer-gray">
      <div className="max-w-7xl mx-auto px-10 py-10">
        
        {/* Logo Section - Placed outside the grid so nothing sits horizontally next to it */}
        <div className="mb-10">
          <Link href="/" className="inline-block">
            <Image
              src="/logos/rootslogo.png"
              alt="Roots Foundation"
              width={110}
              height={55}
              className="object-contain"
            />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Column 1 – Newsletter + Address */}
          <div className="flex flex-col gap-6">
            <div>
              <p className="text-sm text-[#4A4749] mb-3 leading-snug">
                Sign up to receive newsletter
              </p>
              <div className="flex border border-[#09569a] rounded overflow-hidden">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Mail"
                  className="flex-1 px-3 py-2 text-sm text-[#4A4749] bg-white outline-none placeholder-gray-400"
                />
                <button className="px-4 py-2 bg-[#09569a] text-white text-sm font-medium hover:opacity-90 transition-opacity">
                  Submit
                </button>
              </div>
              <p className="text-xs text-[#4A4749] mt-3 leading-relaxed">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from us.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#09569a] mt-0.5 shrink-0" />
              <p className="text-xs text-[#4A4749] leading-relaxed">
                UNITECH BUSINESS PARK, Sector 17-B,<br />
                Block F, South City I, Sector 41,<br />
                Gurugram, Haryana 122003
              </p>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-5">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#4A4749] hover:text-[#09569a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Impact Verticals */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-5">Impact Verticals</h3>
            <ul className="flex flex-col gap-3">
              {impactVerticals.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[#4A4749] hover:text-[#09569a] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Partner With Us */}
          <div className="flex flex-col">
            <h3 className="text-sm font-bold text-[#1a1a1a] mb-4">Partner With Us</h3>
            <p className="text-sm text-[#4A4749] leading-relaxed mb-6">
              Partner with us to build structured, on-ground programs that address real needs and deliver sustained outcomes.
            </p>
            <Link
              href="/partner"
              className="inline-flex items-center justify-center w-full px-5 py-3 bg-[#09569a] text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#4A4749]">
            Copyright @ Roots Foundation 2026. All Rights Reserved
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4749] hover:text-[#09569a] transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57A1.46 1.46 0 0 1 14.38 12.11A1.46 1.46 0 0 1 15.84 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4A4749] hover:text-[#09569a] transition-colors"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3z" />
              </svg>
            </a>
          </div>

          <a
            href="mailto:contact@rootsfoundation.in"
            className="flex items-center gap-2 text-sm text-[#09569a] hover:underline"
          >
            <Mail className="w-4 h-4" />
            contact@rootsfoundation.in
          </a>
        </div>
      </div>
    </footer>
  )
}