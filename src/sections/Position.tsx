import { Section } from '../components/Section'
import type { Profile } from '../content/profile'

type PositionProps = {
  profile: Profile
}

export function Position({ profile }: PositionProps) {
  return (
    <Section
      id="position"
      number="06"
      title="Управленческая позиция"
      description="Коротко о подходе к построению команд и результатов"
    >
      <div className="space-y-4 text-lg leading-relaxed text-black/85 sm:text-xl">
        <p className="font-display text-3xl font-semibold leading-tight text-black sm:text-4xl">
          {profile.position.headline}
        </p>
        <p>{profile.position.detail}</p>
      </div>
    </Section>
  )
}
