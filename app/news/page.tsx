'use client'

import NewslettersSection from './newsletter'
import ReportsSection from './reports'
import LinkedInPostsSection from './linkedinpost'
import NewsArticlesSection from './news'
import GallerySection from './gallery'

export default function NewsPage() {
  return (
    <div className="bg-roots-beige max-w-7xl  mx-auto text-roots-text">
      {/* 1. Header Section */}
      <section className="max-w-7xl mx-auto py-10 px-2 md:px-10 text-roots-text ">
        <h1
         
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-roots-text mb-3"
        >
          News and Insights
        </h1>
        <p
          
          className="text-lg sm:text-xl text-roots-text font-light "
        >
          Updates, perspectives, and stories from across our work.
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
