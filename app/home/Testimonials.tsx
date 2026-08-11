'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const testimonialData = [
  // ... (keep your existing testimonial data exactly the same)
  {
    id: 1,
    image: '/home/sania.png',
    quote: 'I would like to extend my heartfelt gratitude to Roots Foundation and Hyundai for initiating the Sports Lab program. This initiative demonstrates a keen understanding of the needs of sports persons, providing them with essential resources such as this fitness centre in Hisar. By addressing these needs, they ensure that athletes can focus solely on their sports without any hindrances.',
    name: 'Sania Nehwal',
    designation: 'Indian Badminton Player and Olympic Medalist'
  },
  {
    id: 2,
    image: '/home/saurabh.png', 
    quote: 'It has been a rewarding partnership with Roots Foundation. Through our collaboration on a unique and creatively curated Sports lab project, we have achieved notable results in promoting fitness and sports, creating a hub for athletes and fitness enthusiasts, and a grassroots level approach fostering a culture of health and sportsmanship in India. The professionalism, dedication, and expertise Roots team brought to these initiatives made a significant difference, and we truly value the synergy we built. I am glad to be associated with an organization that consistently drives positive change.',
    name: 'Saurabh Sharma',
    designation: 'General Manager & Domain Head\nCreating Shared Value (CSV) \nHyundai Motor India Limited'
  },
  {
    id: 3,
    image: '/home/pardeep.png', 
    quote: 'As someone who has been deeply involved in sports coaching for years, I have witnessed firsthand the challenges and limitations faced by aspiring athletes at the grassroots level. Roots Foundation is playing an important role in addressing these gaps, particularly in North India. Their commitment to nurturing raw talent and providing young athletes with world-class training facilities is truly commendable. What sets the Roots Foundation apart is their holistic approach—blending technical training, fitness development, and mental conditioning with a strong focus on values like discipline and teamwork. I have personally seen many young athletes from underserved communities transform under their guidance, gaining not just skills but also the confidence to pursue their dreams.',
    name: 'Pradeep Sahu',
    designation: 'Indian Cricketer and Cricket Coach'
  },
  {
    id: 4,
    image: '/home/lokesh.png', 
    quote: 'Utkarsh: Centre of Excellence for Sports, a joint initiative by the District Administration, Khunti, and Roots Foundation, is truly a unique program. It aims to provide world-class training to young athletes in the region. Despite being a relatively new initiative, the Roots Foundation has delivered exceptional results in a short time. Their dedicated coaching and holistic approach have enabled students to participate in prestigious tournaments like the Nehru Cup. The commitment of the coaches and the quality of training provided is commendable. With programs like this, I am confident these young athletes will not only excel in sports but also bring immense pride to Khunti district in the years ahead.',
    name: 'Shri. Lokesh Mishra',
    designation: 'Deputy Commissioner, Khunti'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const currentTestimonial = testimonialData[currentIndex]

  return (
    <section className="bg-[#faf1ec] py-15">
      
      <div className="max-w-7xl mx-auto p-10">
        
        {/* Heading */}
        <div className="mb-10">
          <p className="text-2xl sm:text-3xl md:text-4xl font-medium text-roots-text mb-2">
            Testimonials
          </p>
          <h2 className="text-lg font-light text-roots-text">
            What our partners and communities say about us
          </h2>
        </div>

       
        <div 
          key={currentTestimonial.id}
          className="flex flex-col md:flex-row w-full gap-6 md:gap-8 items-stretch animate-[fadeIn_0.5s_ease-in-out]"
        >
          <div className="relative w-full md:w-4/12 h-72 sm:h-96 md:h-auto overflow-hidden shrink-0">
            <Image
              src={currentTestimonial.image}
              alt={currentTestimonial.name}
              fill
              className="object-cover object-top transition-opacity duration-500"
            />
          </div>

          <div className="w-full md:w-8/12 bg-[#FEF9F1] flex flex-col justify-between text-left p-6 md:p-10 transition-opacity duration-500">
            <p className="text-base sm:text-lg text-roots-text leading-relaxed mb-8 min-h-[320px] md:min-h-[220px]">
              {currentTestimonial.quote}
            </p>

            <div>
              <h3 className="text-base font-bold text-[#1a1a1a]">
                {currentTestimonial.name}
              </h3>
              <p className="text-sm text-roots-text/70 mt-1 whitespace-pre-line">
                {currentTestimonial.designation}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 gap-2">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-[#1a1a1a] w-6'
                  : 'bg-gray-400 hover:bg-gray-600'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  )
}