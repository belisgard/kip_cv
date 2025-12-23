import { Section } from '../components/Section'
import type { ExperienceItem } from '../content/profile'

type ExperienceProps = {
  experience: ExperienceItem[]
}

export function Experience({ experience }: ExperienceProps) {
  return (
    <Section
      id="experience"
      number="03"
      title="Опыт"
      description="Практическая работа с командами, стратегией и продуктом"
    >
      <div className="space-y-10">
        {experience.map((item) => (
          <article key={item.role + item.company} className="space-y-4">
            <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
              <div className="space-y-1">
                <h3 className="font-display text-3xl leading-tight md:text-4xl">{item.role}</h3>
                {item.company ? <p className="text-lg text-black/70">{item.company}</p> : null}
              </div>
            </div>
            {item.responsibilities && item.responsibilities.length > 0 ? (
              <ul className="space-y-2 text-lg leading-relaxed text-black/80 md:columns-2 md:gap-10">
                {item.responsibilities.map((res) => (
                  <li key={res} className="break-inside-avoid">
                    <span className="mr-3 inline-block h-[1px] w-8 align-middle bg-black" aria-hidden />
                    {res}
                  </li>
                ))}
              </ul>
            ) : null}
            {item.results && item.results.length > 0 ? (
              <div className="space-y-2 pt-2">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-black/50">Результаты</span>
                <ul className="list-disc list-outside space-y-2 pl-5 text-lg leading-relaxed text-black">
                  {item.results.map((result) => (
                    <li key={result}>{result}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </article>
        ))}
      </div>
    </Section>
  )
}
