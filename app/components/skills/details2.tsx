export const communityData = [
  {
    id: 1,
    imgSrc: "/skills/icon2/1.svg", // Update with your actual folder path
    title: "30 students",
    text: "Supported through scholarships and education continuity initiatives",
    type: "banner"
  },
  {
    id: 2,
    imgSrc: "/skills/icon2/2.svg",
    title: "32.5-acre lake",
    text: "Rejuvenated to restore ecological and community value",
    type: "card"
  },
  {
    id: 3,
    imgSrc: "/skills/icon2/3.svg",
    title: "~2 km road",
    text: "Renovated to improve connectivity and daily commute for local residents",
    type: "card"
  },
  {
    id: 4,
    imgSrc: "/skills/icon2/4.svg",
    title: "2 states",
    text: "Community development programmes implemented across Karnataka and Tamil Nadu",
    type: "card"
  },
  {
    id: 5,
    imgSrc: "/skills/icon2/5.svg",
    title: "2 rural clinics",
    text: "Healthcare consultations, preventive care, and wellness support enabled in rural communities",
    type: "card"
  }
];

import React from 'react';

const CommunityImpactSection = () => {
  // Separate the top banner from the grid cards based on the "type" property
  const bannerItem = communityData.find(item => item.type === 'banner');
  const gridItems = communityData.filter(item => item.type === 'card');

  return (
    <section className="p-10 w-full max-w-7xl mx-auto">
      <div className=" flex flex-col gap-6">
        
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
            <h2 className="text-2xl md:text-3xl font-bold text-roots-skilled mb-4 md:mb-0 md:mr-8 whitespace-nowrap">
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
              <h3 className="text-xl font-bold text-roots-skilled mb-3">
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

export default CommunityImpactSection;