import { Section } from '../components/Section'
import type { Profile } from '../content/profile'

type SummaryProps = {
  profile: Profile
}

export function Summary({ profile }: SummaryProps) {
  return (
    <Section id="summary" number="01" title="Резюме">
      <div className="grid gap-6 text-lg leading-relaxed text-black/80 sm:text-xl">
        {profile.summary.map((item) => (
          <p key={item} className="max-w-4xl">
            {item}
          </p>
        ))}
      </div>
    </Section>
  )
}
