export const educationData = [
  {
    id: 1,
    imgSrc: "/education/icons/1.svg", // Update with your actual folder path
    title: "3,200+ students",
    text: "targeted through adolescent life skills and employability programmes",
    type: "banner"
  },
  {
    id: 2,
    imgSrc: "/education/icons/2.svg",
    title: "3,000+ students",
    text: "Supported through school transformation and healthcare interventions",
    type: "card"
  },
  {
    id: 3,
    imgSrc: "/education/icons/3.svg",
    title: "22 schools",
    text: "Supported across low-income private and government school ecosystems",
    type: "card"
  },
  {
    id: 4,
    imgSrc: "/education/icons/4.svg",
    title: "5 cities",
    text: "Reached through school-based and community learning interventions",
    type: "card"
  },
  {
    id: 5,
    imgSrc: "/education/icons/5.svg",
    title: "4 states",
    text: "Covered through structured education programmes",
    type: "card"
  }
];



import React from 'react';

const EducationImpactSection = () => {
  // Separate the top banner from the grid cards based on the "type" property
  const bannerItem = educationData.find(item => item.type === 'banner');
  const gridItems = educationData.filter(item => item.type === 'card');

  return (
    <section className=" p-8 md:p-10  w-full">
      <div className="max-w-7xl mx-auto flex flex-col gap-6">
        
        {/* TOP BANNER */}
        {bannerItem && (
          <div className="bg-white flex flex-col md:flex-row items-center p-6 md:p-8 shadow-sm">
            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <img 
                src={bannerItem.imgSrc} 
                alt="Banner Icon" 
                className="w-24 h-24 object-contain"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-roots-education mb-4 md:mb-0 md:mr-8 whitespace-nowrap">
              {bannerItem.title}
            </h2>
            <p className="text-roots-text text-sm md:text-base leading-relaxed">
              {bannerItem.text}
            </p>
          </div>
        )}

        {/* BOTTOM GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gridItems.map((item) => (
            <div 
              key={item.id} 
              className="bg-white flex flex-col items-center text-center p-6 shadow-sm"
            >
              <div className="mb-4 h-20 flex items-center justify-center">
                <img 
                  src={item.imgSrc} 
                  alt={item.title} 
                  className="w-16 h-16 object-contain" 
                />
              </div>
              <h3 className="text-xl font-bold text-roots-education mb-3">
                {item.title}
              </h3>
              <p className="text-roots-text text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EducationImpactSection;