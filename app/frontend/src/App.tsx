import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import PracticeAreas from './components/PracticeAreas'
import FeaturedCases from './components/FeaturedCases'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <PracticeAreas />
      <FeaturedCases />
      <Team />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  )
}

export default App
