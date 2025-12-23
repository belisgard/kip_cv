import { Section } from '../components/Section'

type ActivitiesProps = {
  activities: string[]
}

export function Activities({ activities }: ActivitiesProps) {
  return (
    <Section
      id="activities"
      number="07"
      title="Дополнительно"
      description="Публичные активности и площадки, где делюсь опытом"
    >
      <ul className="space-y-4 text-base leading-relaxed text-black/80 sm:text-lg">
        {activities.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-[10px] h-1 w-8 bg-black" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
