import Nav from './components/Nav'
import Hero from './components/Hero'
import Essays from './components/Essays'
import Thesis from './components/Thesis'
import Work from './components/Work'
import Questions from './components/Questions'
import Timeline from './components/Timeline'
import Talks from './components/Talks'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative">
      <Nav />
      <main>
        <Hero />
        <Essays />
        <Thesis />
        <Work />
        <Questions />
        <Timeline />
        <Talks />
      </main>
      <Footer />
    </div>
  )
}
