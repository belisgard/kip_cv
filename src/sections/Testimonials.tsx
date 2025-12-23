import { Quote } from '../components/Quote'
import { Section } from '../components/Section'
import type { Testimonial } from '../content/profile'

type TestimonialsProps = {
  testimonials: Testimonial[]
}

export function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <Section
      id="testimonials"
      number="05"
      title="Отзывы"
      description="Что говорят коллеги и руководители"
    >
      <div className="space-y-8">
        {testimonials.map((testimonial) => (
          <Quote
            key={testimonial.author}
            text={testimonial.text}
            author={testimonial.author}
            role={testimonial.role}
          />
        ))}
      </div>
    </Section>
  )
}
