import { ProgramItem } from '../sectionswitcher/SectionSwitcher'

export interface FocusArea {
  title: string
  description: string
}

export interface GridCell {
  type: 'image' | 'text'
  idx?: number
}

export interface HeroStat {
  value: string
  label: string
}

export const heroStats: HeroStat[] = [
  {
    value: '2,00,000+ acres',
    label: 'Brought under crop residue management systems'
  },
  {
    value: '4,00,000+ tonnes',
    label: 'Paddy residue connected to sustainable management pathways'
  },
  {
    value: '50,000+ farmers',
    label: 'Reached through campaigns, demonstrations, and field engagement'
  }
]

export const focusAreas: FocusArea[] = [
  { title: 'Market Linkages & Livelihood Enhancement',
     description: 'Connecting farmers to industries, FPOs, and CHCs to create value from crop residue.' },
  { title: 'Natural Resource Conservation',
     description: 'Conserving water, improving soil health, and reducing stubble burning through sustainable farm practices.' },
  { title: 'Technology Adoption and Mechanisation', 
    description: 'Improving access to farm machinery through OEM partnerships and rental-based service models.' },
  { title: 'Climate-Smart Agriculture', 
    description: 'Reducing emissions, saving water, and supporting more sustainable agricultural systems.' },
  { title: 'Capacity Building and Behaviour Change', 
    description: 'Building farmer confidence through demonstrations, training, field engagement, and IEC campaigns.' },
  { title: 'Women-Led Rural Enterprise', 
    description: 'Supporting SHGs to upcycle paddy residue into products and income opportunities.' }
]

export const focusAreaImages: string[] = [
  '/agri/focus/img1.png',   
  '/agri/focus/img2.png',   
  '/agri/focus/img3.png',   
  '/agri/focus/img4.png',   
  '/agri/focus/img5.png',   
  '/agri/focus/img6.png',   
]

// 12-cell checkerboard: gray box at even index, text card at odd index
export const gridCells: GridCell[] = [
  { type: 'image',idx:0 },
  { type: 'text', idx: 0 }, // Market Linkages
  { type: 'image',idx:1 },
  { type: 'text', idx: 1 }, // Natural Resource Conservation
  { type: 'image',idx:2 },
  { type: 'text', idx: 2 }, // Technology Adoption
  { type: 'image',idx:3 },
  { type: 'text', idx: 3 }, // Climate-Smart Agriculture
  { type: 'image',idx:4 },
  { type: 'text', idx: 4 }, // Capacity Building
  { type: 'image',idx:5 },
  { type: 'text', idx: 5 }, // Women-Led Rural Enterprise

]

export const agriculturePrograms: ProgramItem[] = [
  {
    id: 'bhoomi-haryana',
    name: 'Project Bhoomi Haryana',
    title: 'Project Bhoomi, Haryana',
    description: [
      'A climate-smart agriculture programme working across 120 villages in Jind, Fatehabad, Hisar and Sonipat.',
      'The project promotes Direct Seeding of Rice, Crop Residue Management, mechanisation support, farmer sensitisation, and market linkages.',
      'It connects farmers with service providers and end-user industries to build a stronger crop residue management ecosystem.',
      'Over multiple seasons, 700+ DSR demonstration plots have been established in 100+ villages, allowing farmers to observe the practice under real-world field conditions.',
      'In several intervention villages, farmer-led adoption is now 3 to 4 times higher than the original demonstration footprint, with the area under DSR expanding by 6 to 8 times or more.'
    ],
    tags: ['State: Haryana', 'Districts: Jind, Fatehabad, Hisar and Sonipat', 'Coverage: 120 villages'],
    images: [
      { src: '/agri/haryana/1.png', alt: 'Stubble Burning Action Photo', caption: 'Field demonstration on stubble burning prevention' },
      { src: '/agri/haryana/2.png', alt: 'CRM Machinery Equipment', caption: 'Custom hiring center crop residue machinery' },
      { src: '/agri/haryana/3.png', alt: 'Chemical Safety Worker', caption: 'Safety protocol demonstration for farmers' },
      { src: '/agri/haryana/4.png', alt: 'Tractor Operations', caption: 'Tractor mulcher operating in paddy field' },
      { src: '/agri/haryana/5.png', alt: 'Farmer Training in Field', caption: 'Farmer receiving zero-till guidance' },
      { src: '/agri/haryana/6.png', alt: 'Village Youth Outreach', caption: 'School and community awareness rally' },
      { src: '/agri/haryana/7.png', alt: 'Stubble Fire Monitoring', caption: 'Active field monitoring and fire mitigation' }
    ]
  },
  {
    id: 'bhoomi-kota',
    name: 'Project Bhoomi Kota',
    title: 'Project Bhoomi, Kota',
    description: [
      'A crop residue management programme focused on reducing wheat residue burning in Digod, Kota.',
      'The project supports full-field reaping, bhoosa collection, market linkages, and in-situ residue incorporation.',
      'By creating operational pathways for residue movement and soil preparation, it helps reduce open burning after harvest.',
      'In Rabi 2026, the programme reaped 2,400+ acres, moved 16,800+ quintals of bhoosa, and achieved an estimated 80% reduction in wheat field burning.'
    ],
    tags: ['State: Rajasthan', 'District: Kota, Block: Digod', 'Estimated 80% reduction in wheat field burning'],
    images: [
      { src: '/agri/kota/1.png', alt: 'Grain Crop Machinery', caption: 'Modern harvesting equipment in action' },
      { src: '/agri/kota/2.png', alt: 'Farmer Field Guidance', caption: 'Agronomist advising farmer on bio-inputs' },
      { src: '/agri/kota/3.png', alt: 'Bio-Fertilizer Unit', caption: 'Village bio-input production hub' },
      { src: '/agri/kota/4.png', alt: 'Community Session', caption: 'Farmers attending soil testing workshop' },
      { src: '/agri/kota/5.png', alt: 'Field Inspection', caption: 'Soil carbon and organic matter inspection' },
      { src: '/agri/kota/6.png', alt: 'Demonstration Plot', caption: 'Zero-budget farming demonstration plot' },
      { src: '/agri/kota/7.png', alt: 'Green Harvest Field', caption: 'Healthy wheat and grain field' }
    ]
  },
  {
    id: 'sahyog',
    name: 'Project Sahyog',
    title: 'Project Sahyog',
    description: [
      'A farm mechanisation and knowledge-transfer programme implemented across Haryana, Punjab, Uttar Pradesh, and Uttarakhand.',
      'The project improves access to tractor-mounted and self-propelled boom sprayers through shared-use and rental-based models.',
      'It promotes timely spraying, safer agrochemical use, reduced labour dependency, and rural agri-entrepreneurship.',
      'In one season, 55 boom sprayers covered 24,815 acres and helped farmer-entrepreneurs generate ₹55+ lakh in revenue.'
    ],
    tags: ['States: Haryana, Punjab, Uttar Pradesh, and Uttarakhand', '₹55+ lakh revenue generated by farmer-entrepreneurs'],
    images: [
      { src: '/agri/Sahyog/1.png', alt: 'Water Committee Meeting', caption: 'Village water user committee meeting' },
      { src: '/agri/Sahyog/2.png', alt: 'Solar Water Pump', caption: 'Solar pump installation in farm pond' },
      { src: '/agri/Sahyog/3.png', alt: 'Drip Line Layout', caption: 'Drip irrigation installed in mustard field' },
      { src: '/agri/Sahyog/4.png', alt: 'Heavy Machinery Dredging', caption: 'Farm pond excavation and desilting' },
      { src: '/agri/Sahyog/5.png', alt: 'Farmer Inspection', caption: 'Checking drip emitter water distribution' },
      { src: '/agri/Sahyog/6.png', alt: 'Rainwater Harvesting', caption: 'Restored community pond after monsoons' },
      { src: '/agri/Sahyog/7.png', alt: 'Irrigated Crops', caption: 'High-yield crop growth post drip installation' }
    ]
  },
  {
    id: 'harit-samriddhi',
    name: 'Project Harit Samriddhi',
    title: 'Project Harit Samriddhi',
    description: [
      'An integrated sustainable agriculture programme in Tandwa and Simariya blocks of Chatra district, Jharkhand.',
      'The programme focuses on farmer training, crop diversification, model farms, water-efficient practices, and livelihood diversification.',
      'It includes ASCI-certified training, Farmer Field Schools, demonstration plots, drip irrigation, mushroom cultivation, and vermicomposting.',
      'The programme reached 2,500+ farmers, established 75 demonstration plots, and recorded 30% water savings on the model farm.'
    ],
    tags: ['State: Jharkhand', 'District: Chatra, Blocks: Tandwa and Simariya', '30% water savings recorded on the model farm'],
    images: [
      { src: '/agri/harit/1.png', alt: 'Digital Crop Advisor', caption: 'Agritech advisor inspecting seed trials' },
      { src: '/agri/harit/2.png', alt: 'IoT Sensor Station', caption: 'On-farm micro-weather and soil moisture station' },
      { src: '/agri/harit/3.png', alt: 'Youth Training', caption: 'Training youth on digital diagnostic equipment' },
      { src: '/agri/harit/4.png', alt: 'Trial Crop Plot', caption: 'Evaluating drought-tolerant millet varieties' },
      { src: '/agri/harit/5.png', alt: 'Resilient Farm Plot', caption: 'Climate-smart trial field' },
      { src: '/agri/harit/6.png', alt: 'Field Evaluation', caption: 'Pest resistance and yield evaluation' },
      { src: '/agri/harit/7.png', alt: 'Participatory Breeding', caption: 'Farmer group selecting high-performance seeds' }
    ]
  },
  {
    id: 'samriddhi',
    name: 'Project Samriddhi',
    title: 'Project Samriddhi',
    description: [
      'A crop residue management and rural enterprise programme in Jind district, Haryana.',
      'The project links farmers to service providers and end-user industries while training Self-Help Groups to create products from paddy residue.',
      'It combines stubble management, awareness campaigns, skill-building, and market linkage creation for parali-based products.',
      'The programme diverted 5,000+ tonnes of residue from burning and trained 30 SHG women in parali handicraft production.'
    ],
    tags: ['State: Haryana', 'District: Jind', '30 SHG women trained in parali handicraft production'],
    images: [
      { src: '/agri/samriddhi/1.png', alt: 'Horticulture Orchard', caption: 'High-density guava and lemon plantation' },
      { src: '/agri/samriddhi/2.png', alt: 'Women Farmer Enterprise', caption: 'Women enterprise group harvesting vegetables' },
      { src: '/agri/samriddhi/3.png', alt: 'Agroforestry Sapling', caption: 'Planting timber saplings along field borders' },
      { src: '/agri/samriddhi/4.png', alt: 'Compost Unit Setup', caption: 'Installing household vermicompost unit' },
      { src: '/agri/samriddhi/5.png', alt: 'Livestock Integration', caption: 'Poultry and organic input integration' },
      { src: '/agri/samriddhi/6.png', alt: 'Inter-cropping Plot', caption: 'Inter-cropping pulses with fruit trees' },
      { src: '/agri/samriddhi/7.png', alt: 'Diversified Farm', caption: 'Model diversified smallholder farm' }
    ]
  },
  {
    id: 'ekl-training',
    name: 'EKL Basic and Advanced Training',
    title: 'EKL Basic And Advanced Training',
    description: [
      'A farmer capacity-building programme focused on good agricultural practices, mechanisation, soil health, crop diversification, and farm management.',
      'Implemented through structured classroom sessions, on-field demonstrations, crop advisory, and ASCI assessments.',
      'The programme has trained 3,701 farmers through two-day sessions and reached 4,343 farmers through one-day sensitisation sessions.',
      'It also established 257 advanced demonstration plots across Haryana and Karnataka.'
    ],
    tags: ['States: Haryana and Karnataka', '4,343 farmers reached through one-day sensitisation sessions'],
    images: [
      { src: '/agri/training/1.png', alt: 'Agri Machinery Operations', caption: 'Mechanized farm equipment practical training' },
      { src: '/agri/training/2.png', alt: 'Technical Classroom', caption: 'Residential classroom session on agronomy' },
      { src: '/agri/training/3.png', alt: 'Tractor Repair Workshop', caption: 'Tractor maintenance and repair drill' },
      { src: '/agri/training/4.png', alt: 'Certification Ceremony', caption: 'Graduates receiving agri-technician certificates' },
      { src: '/agri/training/5.png', alt: 'Drone Flight Demo', caption: 'Agri-drone spraying demonstration' },
      { src: '/agri/training/6.png', alt: 'Field Practical Session', caption: 'Field safety protocols and operating drills' },
      { src: '/agri/training/7.png', alt: 'Certified Agri-preneurs', caption: 'Certified young farmers leading custom hiring centers' }
    ]
  }
]
