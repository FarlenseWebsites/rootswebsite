export const skillingData = [
  {
    id: 1,
    imgSrc: "/skills/icon1/1.svg", // Update with your actual folder path
    title: "Production-linked skilling centre",
    text: "Enabling women to train through live orders and hands-on production work",
    type: "banner"
  },
  {
    id: 2,
    imgSrc: "/skills/icon1/2.svg",
    title: "₹12 lakh in production value",
    text: "Secured through work orders linked to the Unnati Centre",
    type: "card"
  },
  {
    id: 3,
    imgSrc: "/skills/icon1/3.svg",
    title: "6+ brand collaborations",
    text: "Built for product development, production, and artisan-led engagement",
    type: "card"
  },
  {
    id: 4,
    imgSrc: "/skills/icon1/4.svg",
    title: "Textile-based training",
    text: "Delivered in sewing, embroidery, textile production, and related skills",
    type: "card"
  },
  {
    id: 5,
    imgSrc: "/skills/icon1/5.svg",
    title: "Artisan-led workshops",
    text: "Conducted through hands-on textile, upcycling, embroidery, and product creation activities",
    type: "card"
  }
];


import React from 'react';

const SkillingImpactSection = () => {
  // Separate the top banner from the grid cards based on the "type" property
  const bannerItem = skillingData.find(item => item.type === 'banner');
  const gridItems = skillingData.filter(item => item.type === 'card');

  return (
    <section className="px-2 md:px-10 py-10 w-full max-w-7xl mx-auto">
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

export default SkillingImpactSection;