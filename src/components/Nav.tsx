import { Button } from './Button'
import { Container } from './Container'

type NavItem = {
  label: string
  href: string
}

type NavProps = {
  name: string
  navItems: NavItem[]
  ctaUrl: string
}

export function Nav({ name, navItems, ctaUrl }: NavProps) {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur">
      <Container className="flex flex-col gap-3 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4 sm:py-5">
        <span className="font-display text-xl font-semibold tracking-tight">{name}</span>
        <nav className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center sm:justify-end sm:gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium sm:gap-x-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-black/70 transition hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex flex-wrap justify-start sm:justify-end">
            <Button as="a" href={ctaUrl} variant="solid" target="_blank" rel="noreferrer">
              Написать в Telegram
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
