'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Impact Hub', href: '/impact' },
  { label: 'Governance', href: '/governance' },
  { label: 'News and Insights', href: '/news' },
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className="w-full bg-roots-beige  sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logos/rootslogo.png"
            alt="Roots Foundation"
            width={120}
            height={60}
            className="object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`text-sm transition-colors ${
                    isActive
                      ? 'text-roots-primary font-semibold'
                      : 'text-roots-text font-medium hover:text-roots-primary'
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
          className="hidden md:inline-flex items-center px-5 py-2.5 bg-roots-primary text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
        >
          Partner With Us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
