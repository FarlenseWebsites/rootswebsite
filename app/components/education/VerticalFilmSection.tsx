import React from 'react'

export default function VerticalFilmSection() {
  return (
    <section className="py-20 px-2 md:px-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-roots-text tracking-tight">
          Vertical Film
        </h2>
      </div>
      
      {/* Video Container */}
      <div className="w-full h-[400px] sm:h-[500px] md:h-[580px] bg-black rounded-xl overflow-hidden">
        <video 
          className="w-full h-full object-contain"
          src="/films/Education.mp4" 
          controls 
          autoPlay 
          muted 
          playsInline
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}