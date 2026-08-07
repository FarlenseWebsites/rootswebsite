'use client'

import { motion } from 'framer-motion'
import NewslettersSection from './newsletter'
import ReportsSection from './reports'
import LinkedInPostsSection from './linkedinpost'
import NewsArticlesSection from './news'
import GallerySection from './gallery'

export default function NewsPage() {
  return (
    <div className="bg-roots-beige min-h-screen text-roots-text pb-20">
      {/* 1. Header Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto text-left">
        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl sm:text-5xl font-bold text-roots-text mb-4 font-sans"
        >
          News and Insights
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg sm:text-xl text-roots-text/70 font-light mb-2"
        >
          Capturing Impact Through Updates and Perspectives
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg text-roots-text/80 font-normal"
        >
          Documenting outcomes with <span className="font-bold text-roots-text">clarity and accountability.</span>
        </motion.p>
      </section>

      {/* 2. Newsletters Section */}
      {/* <NewslettersSection /> */}

      {/* 3. Reports & Publications Section */}
      {/* <ReportsSection /> */}

      {/* 4. LinkedIn Posts Section */}
      <LinkedInPostsSection />

      {/* 5. News & Media Articles Section */}
      {/* <NewsArticlesSection /> */}

      {/* 6. Gallery Section */}
      <GallerySection />
    </div>
  )
}
