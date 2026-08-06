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
    value: 'Production-linked skilling centre',
    label: 'Enabling women to train through live orders and hands-on production work'
  },
  {
    value: '₹12 lakh in production value',
    label: 'Secured through work orders linked to the Unnati Centre'
  },
  {
    value: '6+ brand collaborations',
    label: 'Built for product development, production, and artisan-led engagement'
  }
]

export const heroStats2: HeroStat[] = [
  {
    value: '30 students',
    label: 'Supported through scholarships and education continuity initiatives'
  },
  {
    value: '32.5-acre lake',
    label: 'Rejuvenated to restore ecological and community value'
  },
  {
    value: '~2 km road',
    label: 'Renovated to improve connectivity and daily commute for local residents'
  }
]

export const focusAreas: FocusArea[] = [
  { title: 'Market-Linked Skilling', description: 'Connecting training with real production and work opportunities.' },
  { title: 'Women-Led Livelihoods', description: 'Creating income pathways for women through skill-based work.' },
  { title: 'Production-Based Learning', description: 'Building skills through live orders and practical assignments.' },
  { title: 'Artisan Development and Quality', description: 'Strengthening production systems, and quality standards.' },
  { title: 'Textile and Embroidery Training', description: 'Training women in sewing, embroidery, and textile production.' },
  { title: 'Employment and Enterprise Pathways', description: 'Supporting flexible work, entrepreneurship, and long-term livelihoods.' }
]

export const focusAreas2: FocusArea[] = [
  { title: 'Community Infrastructure', description: 'Creating safer, more usable assets for local communities.' },
  { title: 'Rural Healthcare Access', description: 'Enabling primary care, preventive services, and wellness support.' },
  { title: 'Education and Digital Learning', description: 'Supporting scholarships, digital literacy, and community learning.' },
  { title: 'Disability Inclusion', description: 'Improving mobility, independence, and access to public life.' },
  { title: 'Livelihoods and SHG Engagement', description: 'Strengthening income pathways through skills and group enterprise.' },
  { title: 'Public Space and Environmental Restoration', description: 'Restoring ecological assets and shared community spaces.' }
]

// 12-cell checkerboard: gray box at even index, text card at odd index
export const focusAreaImages1: string[] = [
  '/skills/focus1/img1.png',
  '/skills/focus1/img2.png',
  '/skills/focus1/img3.png',
  '/skills/focus1/img4.png',
  '/skills/focus1/img5.png',
  '/skills/focus1/img6.png',
]
export const focusAreaImages2: string[] = [
  '/skills/focus2/img1.png',
  '/skills/focus2/img2.png',
  '/skills/focus2/img3.png',
  '/skills/focus2/img4.png',
  '/skills/focus2/img5.png',
  '/skills/focus2/img6.png',
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

export const LivelihoodPrograms: ProgramItem[] = [
  {
    id: 'unnati',
    name: 'Unnati',
    title: 'UNNATI',
    description: [
      'A women-led skilling and livelihood programme supported by Acuity Knowledge Partners and Futures First.',
      'The programme trains women in sewing, hand embroidery, machine embroidery, and textile production through flexible, production-linked learning.',
      'It connects trainees to live work orders, quality systems, product finishing, and industry collaborations.',
      'Project Unnati has secured ₹8 lakh worth of work orders through collaborative production partnerships.',
      'Collaborations include Dressfolk, Amala Earth, Saffron House, Raghavendra Rathore, Aseem Design Studio, and Skinvest.'
    ],
    tags: [
      'Haryana'
    ],
    images: [
      { src: '/skills/unnati/1.png', alt: 'Women sewing training', caption: 'Women receiving stitching and tailoring training' },
      { src: '/skills/unnati/2.png', alt: 'Machine embroidery', caption: 'Hands-on machine embroidery practice' },
      { src: '/skills/unnati/3.png', alt: 'Production mentoring', caption: 'Production-linked learning session' },
      { src: '/skills/unnati/4.png', alt: 'Textile production unit', caption: 'Women working in the production centre' },
      { src: '/skills/unnati/5.png', alt: 'Embroidery work', caption: 'Skilled embroidery and finishing work' },
      { src: '/skills/unnati/6.png', alt: 'Garment stitching', caption: 'Developing professional garment production skills' },
      { src: '/skills/unnati/7.png', alt: 'Women entrepreneurs', caption: 'Building sustainable livelihoods through textile production' }
    ]
  },

  {
    id: 'project-parali',
    name: 'Project Parali',
    title: 'PROJECT PARALI',
    description: [
      'A women-led livelihood and circular economy initiative that trains Self-Help Group members to create marketable products from paddy residue.',
      'The programme connects crop residue management with skill-building, product development, and market linkage support.',
      'It enables women to explore supplementary income opportunities while participating in sustainable production systems.',
      'Through the project, agricultural waste is converted into environmentally conscious, value-added products.'
    ],
    tags: [
      'Haryana'
    ],
    images: [
      { src: '/skills/parali/1.png', alt: 'Parali products exhibition', caption: 'Display of products made from paddy residue' },
      { src: '/skills/parali/2.png', alt: 'Handcrafted basket', caption: 'Value-added handcrafted products' },
      { src: '/skills/parali/3.png', alt: 'Women artisans', caption: 'Traditional weaving and craft production' },
      { src: '/skills/parali/4.png', alt: 'Craft production', caption: 'Women producing eco-friendly handicrafts' },
      { src: '/skills/parali/5.png', alt: 'Finished products', caption: 'Market-ready sustainable products' },
      { src: '/skills/parali/6.png', alt: 'Paddy residue processing', caption: 'Preparing agricultural residue for production' },
      { src: '/skills/parali/7.png', alt: 'Handcrafted mat', caption: 'Finished handcrafted paddy residue product' }
    ]
  }
];

export const CommunityPrograms: ProgramItem[] = [
  {
    id: 'community-development-devanahalli',
    name: 'Community Development Project, Devanahalli',
    title: 'Community Development Project, Devanahalli',
    description: [
      'A multi-sector community development programme in Devanahalli Taluk, Bengaluru Rural, Karnataka.',
      'The project supports education, primary healthcare, livestock care, disability inclusion, rural infrastructure, environmental initiatives, and technology-enabled skilling.',
      'Key interventions include student scholarships, a community clinic, animal health camps, assistive mobility support, plantation drives, and VR-based training at GTTC College.',
      'The programme has supported 30 students through scholarships, conducted 6 animal health camps, distributed 8 battery-operated tricycles, and created community assets including a centre in Polanahalli and a 12-metre high mast light in Channahalli.'
    ],
    tags: [
      'Devanahalli Taluk',
      'Bengaluru Rural',
      'Karnataka'
    ],
    images: [
      { src: '/skills/devanahalli/1.png', alt: 'Community centre', caption: 'Community infrastructure development' },
      { src: '/skills/devanahalli/2.png', alt: 'Education support', caption: 'Student engagement programme' },
      { src: '/skills/devanahalli/3.png', alt: 'Scholarship event', caption: 'Scholarship distribution programme' },
      { src: '/skills/devanahalli/4.png', alt: 'Classroom session', caption: 'Educational support for students' },
      { src: '/skills/devanahalli/5.png', alt: 'Community outreach', caption: 'Community awareness and outreach activities' },
      { src: '/skills/devanahalli/6.png', alt: 'Animal health camp', caption: 'Livestock healthcare camp' },
      { src: '/skills/devanahalli/7.png', alt: 'Infrastructure inauguration', caption: 'Community asset development' }
    ]
  },

  {
    id: 'community-development-hosur',
    name: 'Community Development Project, Hosur',
    title: 'Community Development Project, Hosur',
    description: [
      'An integrated environmental restoration and infrastructure development programme in Hosur, Krishnagiri, Tamil Nadu.',
      'The project focuses on restoring a 32.5-acre lake, improving water security, strengthening public safety, and enhancing last-mile connectivity.',
      'The lake rejuvenation includes desilting, bund strengthening, pathway development, solar lighting, CCTV installation, fencing, drainage improvements, and controlled public access.',
      'The programme also supported the construction of a key road stretch from Kallupalli Gate to Atthipalli Main Road, improving mobility for residents, commuters, and local businesses.',
      'Together, the interventions benefit approximately 10,000 residents around the lake and support safer, smoother movement for nearly 50,000 road users.'
    ],
    tags: [
      'Hosur',
      'Krishnagiri',
      'Tamil Nadu'
    ],
    images: [
      { src: '/skills/hosur/1.png', alt: 'Lake restoration aerial view', caption: 'Aerial view of lake rejuvenation project' },
      { src: '/skills/hosur/2.png', alt: 'Environmental restoration', caption: 'Restoration of water bodies and green spaces' },
      { src: '/skills/hosur/3.png', alt: 'Lake development', caption: 'Infrastructure development around the lake' },
      { src: '/skills/hosur/4.png', alt: 'Aerial landscape', caption: 'Community infrastructure improvement' },
      { src: '/skills/hosur/5.png', alt: 'Construction work', caption: 'Lake restoration and civil works' },
      { src: '/skills/hosur/6.png', alt: 'Project team', caption: 'Project stakeholders during site visit' },
      { src: '/skills/hosur/7.png', alt: 'Restored lake', caption: 'Rejuvenated lake supporting local communities' }
    ]
  }
];
