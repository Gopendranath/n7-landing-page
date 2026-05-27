import {
  Navbar,
  Hero,
  DescriptiveFeatureOne,
  DescriptiveFeatureTwo,
  CtaSectionTwo,
  AutoScrollingBanner,
  SolutionSectionOne,
  Features,
  About,
  Services,
  Portfolio,
  Testimonials,
  Pricing,
  FAQ,
  Contact,
  CtaSection,
  Footer,
} from './components'

const App = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <Navbar />
        <Hero />
        <DescriptiveFeatureOne />
        <DescriptiveFeatureTwo />
        <CtaSectionTwo />
        <AutoScrollingBanner />
        <SolutionSectionOne />
        <Features />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </div>
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
