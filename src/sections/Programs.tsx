import { Section } from '../components/Section'
import type { ProgramItem } from '../content/profile'

type ProgramsProps = {
  programs: ProgramItem[]
}

export function Programs({ programs }: ProgramsProps) {
  return (
    <Section
      id="programs"
      number="04"
      title="Обучение"
      description="Программы и методики, которые использую в работе"
    >
      <div className="space-y-6">
        {programs.map((program) => (
          <div key={program.title} className="flex flex-col gap-2 border-b border-black/10 pb-4 last:border-none last:pb-0">
            <h3 className="font-display text-2xl font-semibold text-black">{program.title}</h3>
            <p className="text-base leading-relaxed text-black/80">{program.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
