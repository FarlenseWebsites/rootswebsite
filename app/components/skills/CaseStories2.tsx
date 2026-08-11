'use client';
import React, { useRef } from 'react';
import Image from 'next/image';

export default function CaseStories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-7xl py-15 px-10 mx-auto">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-3xl sm:text-4xl font-bold text-root-text tracking-tight">
          Case Story
        </h2>
        <div className="flex items-center gap-2 text-roots-text/80">
          <button onClick={scrollLeft} className="p-2 bg-white hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm transition-colors" aria-label="Scroll left">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>
          <button onClick={scrollRight} className="p-2 bg-white hover:bg-gray-100 rounded-full border border-gray-200 shadow-sm transition-colors" aria-label="Scroll right">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>
      </div>

      {/* Scrollable container */}
      <div ref={scrollContainerRef} className="overflow-x-auto mt-15 w-full hide-scrollbar">
        
        {/* 
          1. 'max-w-none' prevents the image from shrinking to fit the screen.
          2. Adjust 'width' and 'height' to match the true aspect ratio of your long image.
          3. 'h-auto' keeps the proportions correct as it scales.
        */}
        <Image
          src="/skills/casestories/2.svg"
          alt="Case Story Journey"
          width={2400} 
          height={500} 
          className="max-w-none w-500 h-auto object-contain"
          priority
        />
        
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}