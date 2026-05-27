import trustedBySrc from '../../assets/hero/Trustedby.svg'
import HeroImage from './HeroImage'
import HeroBottom from '../HeroBottom'

const Hero = () => {
  return (
    <section id="hero" className="bg-[#000D12]">
      <div className="flex min-h-screen items-center">
        <div className="container mx-auto flex items-center justify-center gap-8 px-4">
          <div className="max-w-3xl space-y-6">

            <h1 className="font-archivo text-7xl font-medium leading-tight text-white">
              The new foundation
              <br />
              of modern banking
            </h1>

            <p className="font-archivo text-lg leading-relaxed text-slate-400">
              we drive innovation and growth, provide seamless customar experience and operational excelience.
            </p>

            <div className="flex items-center gap-4 pt-4">
              <a
                href="#"
                className="rounded-lg bg-gradient-to-r from-[#00B4FD] to-[#003ACE] px-8 py-3 font-chivo-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                GET STARTED
              </a>

              <a
                href="#"
                className="rounded-lg border border-[#E9F4F9] px-8 py-3 font-chivo-mono text-sm font-medium text-[#E9F4F9] transition-opacity hover:opacity-80"
              >
                LEARN MORE
              </a>
            </div>

            <div className="pt-12">
              <img src={trustedBySrc} alt="Trusted by" className="w-full max-w-[622px]" />
            </div>
          </div>

          <div className="hidden lg:block w-[500px]">
            <HeroImage />
          </div>
        </div>
      </div>

      <HeroBottom />
    </section>
  )
}

export default Hero
