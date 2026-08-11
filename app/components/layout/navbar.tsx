'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown } from 'lucide-react'

const impactSubLinks = [
  {
    label: 'Agriculture',
    href: '/impact/agriculture',
  },
  {
    label: 'Sports',
    href: '/impact/sports',
  },
  {
    label: 'Education',
    href: '/impact/education',
  },
  {
    label: 'Skills',
    href: '/impact/skills',
  },
]

const newsSubLinks = [
  {
    label: 'Newsletters Archive',
    href: '/news/newsletter',
  },
  {
    label: 'Official Reports',
    href: '/news/reports',
  },
  {
    label: 'News & Media Articles',
    href: '/news/article',
  },
  {
    label: 'Visual Gallery',
    href: '/news/gallery',
  },
  {
    label: 'LinkedIn Feed',
    href: '/news/linkedin',
  },
]

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Impact Hub', href: '/impact/agriculture', hasDropdown: true, dropdownType: 'impact' },
  { label: 'Governance', href: '/governance' },
  { label: 'News and Insights', href: '/news' },
]

const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'impact' | null>(null)
  const [mobileImpactOpen, setMobileImpactOpen] = useState(false)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Auto-close menu when route changes
  useEffect(() => {
    setIsOpen(false)
    setActiveDropdown(null)
    setMobileImpactOpen(false)
  }, [pathname])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown('impact')
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  return (
    <nav className="w-full bg-roots-beige sticky top-0 z-50 shadow-sm border-b border-gray-200/20">
      <div className="max-w-7xl mx-auto px-10 h-25 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/rootslogo.png"
            alt="Roots Foundation"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const hasDropdown = link.hasDropdown
            const isActive = link.href === '/impact'
              ? pathname.startsWith('/impact') || pathname === '/sports'
              : pathname === link.href

            if (hasDropdown) {
              const isDropdownOpen = activeDropdown === 'impact'

              return (
                <li
                  key={link.href}
                  className="relative group py-6"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                      href={link.href}
                      className={`text-md transition-colors flex items-center gap-1.5 ${
                        isActive
                          ? 'text-roots-primary font-bold'
                          : 'text-roots-text font-light hover:text-roots-primary'
                      }`}
                    >
                      {link.label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isDropdownOpen ? 'rotate-180 text-roots-primary' : ''
                        }`}
                      />
                    </Link>
                  </div>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div
                      className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-gray-100 py-3 z-50 transition-all duration-200 animate-in fade-in slide-in-from-top-2"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      {impactSubLinks.map((sub) => {
                        const isSubActive = pathname === sub.href
                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className={`flex items-center gap-3 px-4 py-2.5 text-md transition-colors ${
                              isSubActive
                                ? 'bg-gray-50 font-bold text-roots-primary'
                                : 'font-light hover:bg-gray-50/80 text-roots-text hover:text-roots-primary'
                            }`}
                          >
                            <span className="truncate">{sub.label}</span>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </li>
              )
            }

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-md transition-colors ${
                    isActive
                      ? 'text-roots-primary font-bold'
                      : 'text-roots-text font-light hover:text-roots-primary'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <Link
          href="/partner"
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-roots-primary text-white text-md font-bold rounded hover:opacity-90 transition-opacity"
        >
          Partner With Us
        </Link>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-roots-text hover:text-roots-primary transition-colors focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Dropdown Drawer */}
      {isOpen && (
        <div className="md:hidden w-full bg-roots-beige border-t border-gray-200/50 shadow-lg absolute left-0 right-0 top-20 z-40 transition-all duration-300 py-6 px-6 flex flex-col gap-6">
          <ul className="flex flex-col gap-4 text-left">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <li key={link.href} className="flex flex-col">
                    <div className="flex items-center justify-between py-1.5">
                      <Link
                        href={link.href}
                        className={`text-base transition-colors ${
                          pathname.startsWith(link.href)
                            ? 'text-roots-primary font-bold border-l-4 border-roots-primary pl-3'
                            : 'text-roots-text font-light hover:text-roots-primary pl-4'
                        }`}
                      >
                        {link.label}
                      </Link>
                      <button
                        onClick={() => setMobileImpactOpen(!mobileImpactOpen)}
                        className="p-1 text-roots-text hover:text-roots-primary focus:outline-none"
                      >
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-200 ${
                            mobileImpactOpen ? 'rotate-180 text-roots-primary' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Mobile Submenu */}
                    {mobileImpactOpen && (
                      <div className="flex flex-col gap-2 pl-6 pt-2 pb-1 border-l-2 border-roots-primary/20 ml-4">
                        {impactSubLinks.map((sub) => {
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`flex items-center gap-2.5 py-1.5 text-base transition-colors ${
                                pathname === sub.href
                                  ? 'text-roots-primary font-bold'
                                  : 'text-roots-text/80 font-light hover:text-roots-primary'
                              }`}
                            >
                              <span>{sub.label}</span>
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </li>
                )
              }

              const isActive = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-base block py-1.5 transition-colors ${
                      isActive
                        ? 'text-roots-primary font-bold border-l-4 border-roots-primary pl-3'
                        : 'text-roots-text font-light hover:text-roots-primary pl-4'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <Link
            href="/partner"
            className="inline-flex w-full items-center justify-center py-3 bg-roots-primary text-white text-base font-light  hover:opacity-90 transition-opacity "
          >
            Partner With Us
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar