import { Nav } from './components/Nav'
import { profile } from './content/profile'
import { Activities } from './sections/Activities'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Position } from './sections/Position'
import { Programs } from './sections/Programs'
import { Skills } from './sections/Skills'
import { Summary } from './sections/Summary'
import { Testimonials } from './sections/Testimonials'

function App() {
  const navItems = [
    { label: 'Резюме', href: '#summary' },
    { label: 'Компетенции', href: '#skills' },
    { label: 'Опыт', href: '#experience' },
    { label: 'Обучение', href: '#programs' },
    { label: 'Отзывы', href: '#testimonials' },
    { label: 'Контакты', href: '#contacts' },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      <Nav name={profile.name} navItems={navItems} ctaUrl={profile.contacts.telegramUrl} />
      <main>
        <Hero
          name={profile.name}
          role={profile.role}
          subtitle={profile.subtitle}
          telegramUrl={profile.contacts.telegramUrl}
          photoUrl={profile.photoUrl}
        />
        <Summary profile={profile} />
        <Skills skills={profile.skills} />
        <Experience experience={profile.experience} />
        <Programs programs={profile.programs} />
        <Testimonials testimonials={profile.testimonials} />
        <Position profile={profile} />
        <Activities activities={profile.activities} />
      </main>
      <Footer contacts={profile.contacts} />
    </div>
  )
}

export default App
