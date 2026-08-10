'use client'

import NewslettersSection from './newsletter'
import ReportsSection from './reports'
import LinkedInPostsSection from './linkedinpost'
import NewsArticlesSection from './news'
import GallerySection from './gallery'

export default function NewsPage() {
  return (
    <div className="bg-roots-beige max-w-7xl text-roots-text p-10">
      {/* 1. Header Section */}
      <section className="p-10 max-w-7xl mx-auto text-left">
        <h1
         
          className="text-3xl sm:text-4xl font-bold text-roots-text mb-4 font-sans"
        >
          News and Insights
        </h1>
        <p
          
          className="text-lg sm:text-xl text-roots-text font-light "
        >
          Capturing Impact Through Updates and Perspectives
        </p>
       
      </section>

      {/* 2. Newsletters Section */}
      <NewslettersSection />

      {/* 3. Reports & Publications Section */}
      <ReportsSection />

      {/* 4. LinkedIn Posts Section */}
      <LinkedInPostsSection />

      {/* 5. News & Media Articles Section */}
      <NewsArticlesSection />

      {/* 6. Gallery Section */}
      <GallerySection />
    </div>
  )
}
