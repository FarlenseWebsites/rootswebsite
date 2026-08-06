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
    value: '3,200+ students',
    label: 'Targeted through adolescent life skills and employability programmes'
  },
  {
    value: '3,000+ students',
    label: 'Supported through school transformation and healthcare interventions'
  },
  {
    value: '22 schools',
    label: 'Supported across low-income private and government school ecosystems'
  }
]

export const focusAreas: FocusArea[] = [
  { title: 'STEM and Digital Learning', description: 'Introducing practical, future-facing learning through technology and STEM.' },
  { title: 'Foundational Learning', description: 'Strengthening literacy, numeracy, and core classroom understanding.' },
  { title: 'Life Skills and Future Readiness', description: 'Building life skills, confidence, leadership, and self-awareness.' },
  { title: 'School Ecosystem Strengthening', description: 'Working with teachers, schools, and institutions to improve learning environments.' },
  { title: 'Career Guidance and Counselling', description: 'Supporting students with mentorship, aspirations, and future pathways.' },
  { title: 'Holistic Learning and Retention', description: 'Improving participation, continuity, and engagement through co-curricular support.' }
]

export const focusAreaImages: string[] = [
  '/education/focus/img1.png',
  '/education/focus/img2.png',
  '/education/focus/img3.png',
  '/education/focus/img4.png',
  '/education/focus/img5.png',
  '/education/focus/img6.png',
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

export const SkillsPrograms: ProgramItem[] = [
  {
    id: 'leap',
    name: 'L.E.A.P',
    title: 'LIFE AND EMPLOYABILITY SKILLS FOR ADOLESCENTS PROGRAM (L.E.A.P)',
    description: [
      'A school-based programme that helps adolescents build life skills, functional English, leadership, and career readiness.',
      'The programme supports students through structured classroom sessions, reading and communication modules, and career guidance.',
      'It helps adolescents build confidence, decision-making abilities, and future-readiness for life beyond school.',
      'LEAP works across targeted schools and is designed to benefit 3,200+ students.'
    ],
    tags: [
      'Bangalore',
      'Delhi',
      'Pune'
    ],
    images: [
      { src: '/education/leap/1.png', alt: 'LEAP classroom session', caption: 'Students participating in classroom activities' },
      { src: '/education/leap/2.png', alt: 'Reading session', caption: 'Reading and communication module' },
      { src: '/education/leap/3.png', alt: 'Career guidance', caption: 'Interactive student engagement session' },
      { src: '/education/leap/4.png', alt: 'Teacher interaction', caption: 'Teacher conducting classroom training' },
      { src: '/education/leap/5.png', alt: 'Student participation', caption: 'Students building confidence and leadership skills' },
      { src: '/education/leap/6.png', alt: 'School programme', caption: 'Career readiness programme in schools' },
      { src: '/education/leap/7.png', alt: 'Learning environment', caption: 'Structured classroom learning' }
    ]
  },

  {
    id: 'school-transformation-healthcare',
    name: 'School Transformation and Healthcare',
    title: 'SCHOOL TRANSFORMATION AND HEALTHCARE',
    description: [
      'A school-strengthening programme focused on improving learning environments, healthcare access, and student well-being.',
      'The programme combines WASH support, infrastructure upgrades, school transformation, innovation, and life-skills training.',
      'It also works with School Management Committees to strengthen local participation and accountability.',
      'Implemented in Hosur, Tamil Nadu, the programme covers 5 targeted schools and is expected to benefit 3,000+ students.'
    ],
    tags: [
      'Tamil Nadu',
      '5 Targeted Schools in Hosur'
    ],
    images: [
      { src: '/education/school/1.png', alt: 'Classroom activity', caption: 'Improving classroom learning environments' },
      { src: '/education/school/2.png', alt: 'Student engagement', caption: 'Interactive classroom session' },
      { src: '/education/school/3.png', alt: 'School programme', caption: 'School transformation activities' },
      { src: '/education/school/4.png', alt: 'Children in classroom', caption: 'Students participating in learning activities' },
      { src: '/education/school/5.png', alt: 'Group learning', caption: 'Collaborative classroom engagement' },
      { src: '/education/school/6.png', alt: 'School support', caption: 'Supporting child-centred education' },
      { src: '/education/school/7.png', alt: 'Teacher with students', caption: 'Teacher-led learning session' }
    ]
  },

  {
    id: 'project-utkarsh',
    name: 'Project Utkarsh',
    title: 'PROJECT UTKARSH',
    description: [
      'An education initiative focused on strengthening foundational learning, analytical thinking, and student engagement.',
      'The programme combines remedial education, teacher support, community engagement, life-skills activities, and STEM-based learning.',
      'It helps students improve classroom participation, subject understanding, and confidence in learning.',
      'Implemented in Karnataka, the programme has benefited 1,933 students, with 255 students attending summer camps.'
    ],
    tags: [
      'Karnataka'
    ],
    images: [
      { src: '/education/utkarsh/1.png', alt: 'Hands-on learning', caption: 'Interactive classroom activity' },
      { src: '/education/utkarsh/2.png', alt: 'School programme', caption: 'Student presentation session' },
      { src: '/education/utkarsh/3.png', alt: 'Digital classroom', caption: 'Technology-enabled learning' },
      { src: '/education/utkarsh/4.png', alt: 'Reading activity', caption: 'Strengthening foundational literacy' },
      { src: '/education/utkarsh/5.png', alt: 'Classroom learning', caption: 'Students participating in lessons' },
      { src: '/education/utkarsh/6.png', alt: 'Community education', caption: 'Classroom engagement activities' },
      { src: '/education/utkarsh/7.png', alt: 'Teacher session', caption: 'Teacher facilitating learning' }
    ]
  }
];
