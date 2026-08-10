import React from 'react';
import Image from 'next/image';

export default function CaseStories() {
  return (
    <section className="w-full max-w-7xl p-10">
      <h2 className="text-3xl sm:text-4xl font-bold text-root-text tracking-tight">
        Case Stories
      </h2>

      {/* Scrollable container */}
      <div className="overflow-x-auto hide-scrollbar mt-15 w-full">
        
        {/* 
          1. 'max-w-none' prevents the image from shrinking to fit the screen.
          2. Adjust 'width' and 'height' to match the true aspect ratio of your long image.
          3. 'h-auto' keeps the proportions correct as it scales.
        */}
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