import backgroundTxtUrl from './assets/backgroundtxt.svg'
import laptopMockupUrl from './assets/rightlaptopmockup.svg'
import LinkWithArrow from '../LinkWithArrow'

const DescriptiveFeatureOne = () => {
  return (
    <section className="relative bg-[#000D12] overflow-hidden">
      <div
        className="absolute top-0 left-0 w-full lg:w-6/10 h-full pointer-events-none select-none"
        style={{
          maskImage: 'linear-gradient(to bottom, black 0%, black 25%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 25%, transparent 100%)',
        }}
      >
        <img
          src={backgroundTxtUrl}
          alt=""
          className="w-full h-full object-contain opacity-100"
        />
      </div>

      <div className="relative z-10">
        <div className="container mx-auto px-26">
          <div className="flex flex-col lg:flex-row items-center min-h-[619px] py-20 lg:py-0">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-archivo text-4xl lg:text-5xl leading-tight text-white max-w-lg">
                Built for the future of banking
              </h2>
              <p className="font-archivo text-base lg:text-lg leading-relaxed text-white/80 max-w-md">
                Empower your financial institution with a modern,
                scalable platform that streamlines operations, enhances
                customer experiences, and drives growth in the digital era.
              </p>

              <div className="pt-4">
                <a
                  href="#"
                  className="inline-block rounded-lg bg-gradient-to-r from-[#00B4FD] to-[#003ACE] px-15 py-3.5 font-chivo-mono text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  GET STARTED
                </a>
              </div>

              <LinkWithArrow />
            </div>

            <div className="lg:w-1/2 flex justify-end">
              <img
                src={laptopMockupUrl}
                alt="Product dashboard mockup"
                className="flex-shrink-0"
                style={{ minWidth: '571px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptiveFeatureOne
