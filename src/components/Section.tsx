import type { ReactNode } from 'react'
import { Container } from './Container'

type SectionProps = {
  id: string
  number?: string
  title: string
  description?: string
  children: ReactNode
  withDivider?: boolean
}

export function Section({ id, title, description, children, withDivider = true }: SectionProps) {
  return (
    <section id={id} className={withDivider ? 'border-b border-black/10' : ''}>
      <Container className="py-16 sm:py-20">
        <div className="mb-10 flex flex-col gap-3">
          <h2 className="font-display text-4xl leading-[1.1] sm:text-5xl md:text-6xl">{title}</h2>
          {description ? <p className="max-w-3xl text-base text-black/70 sm:text-lg">{description}</p> : null}
        </div>
        <div className="space-y-8">{children}</div>
      </Container>
    </section>
  )
}
