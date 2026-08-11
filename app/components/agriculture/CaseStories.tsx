import React from 'react';
import Image from 'next/image';

export default function CaseStories() {
  return (
    <section className="max-w-7xl mx-auto py-15 px-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-root-text tracking-tight">
        Case Stories
      </h2>

      {/* Scrollable container */}
      <div className="overflow-x-auto  mt-15 w-full">
  
        <Image
          src="/agri/casestories/1.svg"
          alt="Case Story Journey"
          width={2400} 
          height={500} 
          className="max-w-none w-1000 h-auto object-contain"
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