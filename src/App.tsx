import {
  Navbar,
  Hero,
  Features,
  About,
  Services,
  Portfolio,
  Testimonials,
  Pricing,
  FAQ,
  Contact,
  Footer,
} from './components'

const App = () => {
  return (
    <div className="container mx-auto px-4">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
