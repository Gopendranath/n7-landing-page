import {
  Navbar,
  Hero,
  DescriptiveFeatureOne,
  DescriptiveFeatureTwo,
  CtaSectionTwo,
  AutoScrollingBanner,
  SolutionSectionOne,
  CaseStudiesSection,
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
        <CaseStudiesSection />
      </div>
      <CtaSection />
      <Footer />
    </>
  )
}

export default App
