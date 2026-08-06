import React from 'react'
import SectionSwitcher from '../sectionswitcher/SectionSwitcher'
import { SkillsPrograms } from './data'

export default function ProgramsSection() {
  return (
    <section className="py-16 px-6 sm:px-10 max-w-7xl mx-auto">
      <SectionSwitcher items={SkillsPrograms} accentColor="#FEBF04" locationcolor="#FEBF04" title="Programs" />
    </section>
  )
}
