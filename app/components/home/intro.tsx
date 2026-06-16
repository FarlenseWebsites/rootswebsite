import Image from 'next/image'
import Link from 'next/link'

const impactAreas = [
  {
    title: 'Agriculture & Environment',
    description: 'Empowering farming communities with sustainable practices and environmental stewardship.',
    color: 'bg-[#75bc20]',
    href: '/impact/agriculture',
  },
  {
    title: 'Sports & Physical Literacy',
    description: 'Unlocking potential through structured sports programs and physical education.',
    color: 'bg-[#ef7f3a]',
    href: '/sports',
  },
  {
    title: 'Education & Career Readiness',
    description: 'Equipping youth with skills and knowledge to thrive in a changing world.',
    color: 'bg-[#febc20]',
    href: '/impact/education',
  },
  {
    title: 'Skill & Community Development',
    description: 'Building resilient communities through vocational training and local leadership.',
    color: 'bg-[#dc3b83]',
    href: '/impact/skills',
  },
]

const stats = [
  { value: '50,000+', label: 'Lives Impacted' },
  { value: '120+', label: 'Communities Reached' },
  { value: '15+', label: 'Years of Service' },
  { value: '4', label: 'Impact Verticals' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FEF9F1] py-24 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <p className="text-sm font-semibold text-[#09569a] uppercase tracking-widest mb-4">
              Roots Foundation
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] leading-tight mb-6">
              Building Communities.<br />
              Transforming Lives.
            </h1>
            <p className="text-base text-[#4A4749] leading-relaxed max-w-xl mb-8">
              We build structured, on-ground programs that address real needs across agriculture, sports, education, and community development — delivering sustained outcomes for underserved communities across India.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 py-3 bg-[#09569a] text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
              >
                Learn About Us
              </Link>
              <Link
                href="/partner"
                className="px-6 py-3 border border-[#09569a] text-[#09569a] text-sm font-semibold rounded hover:bg-[#09569a] hover:text-white transition-colors"
              >
                Partner With Us
              </Link>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/logos/rootslogo.png"
              alt="Roots Foundation"
              width={340}
              height={220}
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#09569a] py-14 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-blue-200">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Areas */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#09569a] uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a]">Our Impact Verticals</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area) => (
              <Link
                key={area.title}
                href={area.href}
                className="group rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className={`h-2 ${area.color}`} />
                <div className="p-6">
                  <h3 className="text-base font-bold text-[#1a1a1a] mb-3 group-hover:text-[#09569a] transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-sm text-[#4A4749] leading-relaxed">{area.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#FEF9F1]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-base text-[#4A4749] mb-8 leading-relaxed">
            Partner with Roots Foundation to co-create programs that bring real, measurable change to communities that need it most.
          </p>
          <Link
            href="/partner"
            className="inline-flex items-center px-8 py-4 bg-[#09569a] text-white text-sm font-semibold rounded hover:opacity-90 transition-opacity"
          >
            Partner With Us
          </Link>
        </div>
      </section>
    </>
  )
}
