import React from 'react'
import SectionSwitcher from '../sectionswitcher/SectionSwitcher'
import { LivelihoodPrograms } from './data'

export default function ProgramsSection() {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      <SectionSwitcher items={LivelihoodPrograms} accentColor="#DC3B83" locationcolor="#DC3B83" title="Programs" />
    </section>
  )
}
