import React from 'react'
import SectionSwitcher from '../sectionswitcher/SectionSwitcher'
import { agriculturePrograms } from './data'

export default function ProgramsSection() {
  return (
    <section className="py-15 px-2 md:px-10 max-w-7xl mx-auto">
      <SectionSwitcher items={agriculturePrograms} accentColor="#75bc20" locationcolor="#75bc20" title="Programs" />
    </section>
  )
}
