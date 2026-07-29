'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, BookOpen, Share2, ThumbsUp, Calendar, Heart, FileText, Globe, Award } from 'lucide-react'

interface PageProps {
  params: {
    category: string
    id: string
  }
}

export default function DetailPlaceholderPage({ params }: PageProps) {
  const { category, id } = params
  
  // Format category name for presentation
  const getCategoryTitle = (cat: string) => {
    switch (cat) {
      case 'newsletter':
        return 'Newsletter Archive'
      case 'linkedin':
        return 'LinkedIn Insight Post'
      case 'article':
        return 'Media Coverage & Press Article'
      default:
        return 'News Resource'
    }
  }

  // Get specific details for category
  const getCategoryDetails = (cat: string, itemId: string) => {
    switch (cat) {
      case 'newsletter':
        return {
          title: itemId === '3' ? 'Sports Lab Performance Report 2025' : `Roots से - Issue #${itemId}`,
          description: `This newsletter issue contains a detailed coverage of the on-ground program operations, community engagements, and financial transparency outcomes for the period. It details how local agricultural, sports, and educational initiatives are driving sustainable development and empowerment.`,
          icon: <BookOpen className="w-12 h-12 text-roots-primary" />,
          meta: [
            { label: 'Document Type', value: 'Quarterly Newsletter PDF' },
            { label: 'Publication Date', value: itemId === '1' ? 'March 2026' : itemId === '2' ? 'December 2025' : 'Mid Year Review' },
            { label: 'Pages', value: '16 pages' },
            { label: 'Language', value: 'English / Hindi' }
          ]
        }
      case 'linkedin':
        return {
          title: `LinkedIn Story #${itemId}`,
          description: `This page is a placeholder for the LinkedIn post update. It details real-time events, field workshops, crop residue reduction outcomes, classroom progress, and physical literacy sessions. Click on "View original" below to view the interactive LinkedIn feed discussion.`,
          icon: <ThumbsUp className="w-12 h-12 text-roots-sports" />,
          meta: [
            { label: 'Platform', value: 'LinkedIn Official' },
            { label: 'Author', value: 'Roots Foundation India' },
            { label: 'Status', value: 'Published Online' },
            { label: 'Read Time', value: '2 min read' }
          ]
        }
      case 'article':
        return {
          title: `Press Coverage - Article #${itemId}`,
          description: `This page represents media and newspaper clippings highlighting the achievements, awards, and corporate partnership milestones of Roots Foundation. Read about how our model of structured, on-ground programs addresses real needs in various states.`,
          icon: <Globe className="w-12 h-12 text-roots-agriculture" />,
          meta: [
            { label: 'Media Source', value: itemId === '1' ? 'CSR TIMES' : itemId === '2' ? 'THE TIMES OF INDIA' : itemId === '3' ? 'NGOBOX' : 'National Press' },
            { label: 'Coverage Scope', value: 'Regional & National Print' },
            { label: 'Format', value: 'Press Release Scanned Clip' },
            { label: 'Category', value: 'Corporate Social Responsibility' }
          ]
        }
      default:
        return {
          title: `Resource #${itemId}`,
          description: `General resource file placeholder.`,
          icon: <FileText className="w-12 h-12 text-roots-text" />,
          meta: []
        }
    }
  }

  const details = getCategoryDetails(category, id)

  return (
    <div className="bg-[#FEF9F1] min-h-screen text-[#4A4749] py-16 px-6 flex items-center justify-center">
      <div className="max-w-3xl w-full">
        {/* Back Link */}
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-roots-primary font-semibold hover:opacity-85 transition-opacity mb-8 text-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to News and Insights
        </Link>

        {/* main container card */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white border border-gray-200/80 shadow-xl rounded-2xl p-8 sm:p-12 relative overflow-hidden"
        >
          {/* Accent decoration line */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-roots-primary" />

          {/* Category Tag */}
          <span className="inline-block px-3 py-1 bg-[#FEF9F1] text-roots-primary text-xs font-bold rounded-full border border-roots-primary/10 mb-6 uppercase tracking-wider">
            {getCategoryTitle(category)}
          </span>

          <div className="flex flex-col sm:flex-row items-start gap-6 mb-8">
            {/* Visual Icon */}
            <div className="w-20 h-20 rounded-2xl bg-[#FEF9F1] border border-gray-100 flex items-center justify-center flex-shrink-0">
              {details.icon}
            </div>
            
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-roots-text mb-3 leading-snug">
                {details.title}
              </h1>
              <p className="text-sm text-gray-500 leading-relaxed">
                Resource Reference ID: <span className="font-mono bg-gray-100 px-1.5 py-0.5 rounded text-xs">{category}-{id}</span>
              </p>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-6 mt-6">
            <h3 className="text-sm font-bold text-roots-text uppercase tracking-wider mb-3">
              Description / Overview
            </h3>
            <p className="text-sm sm:text-base text-[#4A4749]/90 leading-relaxed mb-8">
              {details.description}
            </p>
          </div>

          {/* Metadata Grid */}
          {details.meta.length > 0 && (
            <div className="bg-[#FEF9F1]/60 border border-gray-150/50 rounded-xl p-6 mb-8">
              <h3 className="text-xs font-bold text-[#4A4749]/60 uppercase tracking-widest mb-4">
                Metadata Details
              </h3>
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                {details.meta.map((m, i) => (
                  <div key={i} className="text-left">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                      {m.label}
                    </p>
                    <p className="text-xs sm:text-sm font-semibold text-roots-text mt-0.5">
                      {m.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Call to Actions / Placeholders */}
          <div className="flex flex-wrap gap-4 border-t border-gray-100 pt-8">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault()
                alert(`Downloading: ${category}_document_placeholder_${id}.pdf`)
              }}
              className="px-6 py-3 bg-roots-primary text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-sm cursor-pointer"
            >
              Download Full Document
            </a>
            <Link
              href="/news"
              className="px-6 py-3 border border-gray-200 bg-white hover:bg-gray-50 text-roots-text text-sm font-semibold rounded-lg transition-colors shadow-sm"
            >
              Return to Insights Directory
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
