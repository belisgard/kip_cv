import { Button } from '../components/Button'
import { Container } from '../components/Container'

type HeroProps = {
  name: string
  role: string
  subtitle: string
  telegramUrl: string
  photoUrl?: string
}

export function Hero({ name, role, subtitle, telegramUrl, photoUrl }: HeroProps) {
  return (
    <div className="border-b border-black/10 bg-white">
      <Container className="flex flex-col gap-10 py-20 sm:py-28">
        <div className="flex items-center gap-4 text-sm font-medium uppercase tracking-[0.25em] text-black/50">
          <span>Игорь Кузнецов</span>
          <div className="h-px w-16 bg-black/20" aria-hidden />
          <span>Профиль</span>
        </div>
        <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr] md:items-center">
          <div className="space-y-6">
            <h1 className="font-display text-5xl leading-[1.05] text-black sm:text-6xl md:text-7xl">
              {name}
            </h1>
            <p className="text-lg font-semibold uppercase tracking-wide text-black/70 sm:text-xl">
              {role}
            </p>
            <p className="max-w-3xl text-lg leading-relaxed text-black/80 sm:text-xl">{subtitle}</p>
            <div className="flex flex-wrap gap-4">
              <Button as="a" href={telegramUrl} variant="solid" target="_blank" rel="noreferrer">
                Написать в Telegram
              </Button>
              <Button as="a" href="#summary" variant="outline">
                Смотреть резюме
              </Button>
            </div>
          </div>
          {photoUrl ? (
            <div className="flex justify-end">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border border-black/10 shadow-[0_20px_60px_rgba(0,0,0,0.08)] sm:h-72 sm:w-72">
                <img
                  src={photoUrl}
                  alt={name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          ) : null}
        </div>
      </Container>
    </div>
  )
}
