import { Section } from '../components/Section'
import type { SkillCategory } from '../content/profile'

type SkillsProps = {
  skills: SkillCategory[]
}

export function Skills({ skills }: SkillsProps) {
  return (
    <Section
      id="skills"
      number="02"
      title="Компетенции"
      description="Сочетание управленческих практик, фасилитации и работы с командами"
    >
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        {skills.map((category) => (
          <div key={category.title} className="space-y-3">
            <h3 className="font-display text-2xl font-semibold text-black">{category.title}</h3>
            <ul className="space-y-2 list-disc list-outside pl-5 text-base leading-relaxed text-black/80">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
