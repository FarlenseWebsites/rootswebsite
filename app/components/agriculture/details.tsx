export const agricultureData = [
  {
    id: 1,
    imgSrc: "/agri/icon/1.svg", // Update with your actual folder path
    title: "2,00,000+ acres",
    text: "Brought under crop residue management systems",
    type: "banner"
  },
  {
    id: 2,
    imgSrc: "/agri/icon/2.svg",
    title: "4,00,000+ tonnes",
    text: "Paddy residue connected to sustainable management pathways",
    type: "card"
  },
  {
    id: 3,
    imgSrc: "/agri/icon/3.svg",
    title: "50,000+ farmers",
    text: "Reached through campaigns, demonstrations, and field engagement",
    type: "card"
  },
  {
    id: 4,
    imgSrc: "/agri/icon/4.svg",
    title: "~5.5 lakh tonnes",
    text: "CO₂ emissions avoided through crop residue management interventions",
    type: "card"
  },
  {
    id: 5,
    imgSrc: "/agri/icon/5.svg",
    title: "10-12 crore litres",
    text: "Irrigation water saved through Direct Seeding of Rice adoption",
    type: "card"
  }
];



import React from 'react';

const AgricultureImpactSection = () => {
  // Separate the top banner from the grid cards based on the "type" property
  const bannerItem = agricultureData.find(item => item.type === 'banner');
  const gridItems = agricultureData.filter(item => item.type === 'card');

  return (
    <section className=" p-8 md:p-10 max-w-7xl py-15 mx-auto">
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
            <h2 className="text-2xl md:text-3xl font-bold text-roots-agriculture mb-4 md:mb-0 md:mr-8 whitespace-nowrap">
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
              <h3 className="text-xl font-bold text-roots-agriculture mb-3">
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

export default AgricultureImpactSection;