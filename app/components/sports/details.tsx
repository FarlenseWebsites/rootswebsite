export const sportsData = [
  {
    id: 1,
    imgSrc: "/sports/icon/1.svg",
    title: "181 students",
    text: "Engaged across three schools under Sports for All, with progression into state and national-level competitions",
    type: "banner"
  },
  {
    id: 2,
    imgSrc: "/sports/icon/2.svg",
    title: "10,000+ children",
    text: "Engaged through grassroots sports programmes, school initiatives, leagues and athlete development pathways",
    type: "card"
  },
  {
    id: 3,
    imgSrc: "/sports/icon/3.svg",
    title: "5,000 students",
    text: "Reached through scouting initiatives across 450+ schools and 6 blocks under Project Utkarsh",
    type: "card"
  },
  {
    id: 4,
    imgSrc: "/sports/icon/4.svg",
    title: "Centres of Excellence",
    text: "Established to support structured athlete development and long-term training ecosystems",
    type: "card"
  },
  {
    id: 5,
    imgSrc: "/sports/icon/5.svg",
    title: "Multi-sport pathways",
    text: "Created across athletics, football, cricket, kho-kho, and other disciplines",
    type: "card"
  }
];



import React from 'react';

const SportsImpactSection = () => {
  // Separate the top banner from the grid cards based on the "type" property
  const bannerItem = sportsData.find(item => item.type === 'banner');
  const gridItems = sportsData.filter(item => item.type === 'card');

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
            <h2 className="text-2xl md:text-3xl font-bold text-roots-sports mb-4 md:mb-0 md:mr-8 whitespace-nowrap">
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
              <h3 className="text-xl font-bold text-roots-sports mb-3">
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

export default SportsImpactSection;