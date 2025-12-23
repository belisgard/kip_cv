import { Button } from '../components/Button'
import { Container } from '../components/Container'
import type { Profile } from '../content/profile'

type FooterProps = {
  contacts: Profile['contacts']
}

export function Footer({ contacts }: FooterProps) {
  return (
    <footer id="contacts" className="border-t border-black/10 bg-white">
      <Container className="flex flex-col gap-6 py-12 sm:flex-row sm:items-center sm:justify-between sm:py-16">
        <div className="space-y-2">
          <p className="text-sm uppercase tracking-[0.2em] text-black/50">Свяжитесь со мной</p>
          <h3 className="font-display text-3xl font-semibold text-black sm:text-4xl">Открыт к диалогу</h3>
          <div className="text-base font-medium text-black">
            <a href={`tel:${contacts.phone}`} className="underline decoration-black/40 underline-offset-4">
              {contacts.phone}
            </a>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button as="a" href={contacts.telegramUrl} variant="solid" target="_blank" rel="noreferrer">
            Написать в Telegram
          </Button>
        </div>
      </Container>
    </footer>
  )
}
