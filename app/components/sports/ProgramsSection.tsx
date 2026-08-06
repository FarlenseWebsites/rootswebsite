import React from 'react'
import SectionSwitcher from '../sectionswitcher/SectionSwitcher'
import { sportsprograms } from './data'

export default function ProgramsSection() {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      <SectionSwitcher items={sportsprograms} accentColor="#ef7f3a" locationcolor="#ef7f3a" title="Programs" />
    </section>
  )
}
