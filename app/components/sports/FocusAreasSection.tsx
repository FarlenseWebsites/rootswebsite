import React from 'react'
import { focusAreas, gridCells, focusAreaImages } from './data'
import Image from 'next/image'

export default function FocusAreasSection() {
  return (
    <section className="py-20 px-6 sm:px-10 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#2a2a2a] uppercase tracking-widest">
          OUR FOCUS AREAS
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
       {gridCells.map((cell, i) =>
                         cell.type === 'image' ? (
                           // Wrapped in a relative container with h-full and w-full
                           <div key={i} className="relative w-full h-full min-h-[220px] bg-[#afafaf] overflow-hidden">
                             <Image 
                               src={focusAreaImages[cell.idx as number]} 
                               alt={`Focus Area ${cell.idx}`} 
                               fill 
                               className="object-cover" 
                               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                             />
                           </div>
                         ): (
            <div
              key={i}
              className="bg-[#FEF9F1] text-center border border-roots-sports p-8 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <h3 className="text-lg font-bold text-roots-text mb-3">
                  {focusAreas[cell.idx as number].title}
                </h3>
                <p className="text-sm text-roots-text leading-relaxed">
                  {focusAreas[cell.idx as number].description}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
