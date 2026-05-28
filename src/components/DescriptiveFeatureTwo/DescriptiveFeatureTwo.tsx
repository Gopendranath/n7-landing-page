import leftMockupUrl from './assets/leftmockup.svg'
import CheckIcon from '../CheckIcon'

const features = [
  { title: 'Real-time Processing', desc: 'Instant transaction processing with real-time validation and reconciliation.' },
  { title: 'Multi-currency Support', desc: 'Handle transactions across multiple currencies seamlessly.' },
  { title: 'Advanced Analytics', desc: 'Comprehensive reporting and analytics for data-driven decisions.' },
  { title: 'Regulatory Compliance', desc: 'Built-in compliance with global banking regulations and standards.' },
  { title: 'Secure Infrastructure', desc: 'Enterprise-grade security with end-to-end encryption and monitoring.' },
  { title: 'API Integration', desc: 'Open APIs for seamless integration with third-party services.' },
]

const DescriptiveFeatureTwo = () => {
  return (
    <section className="relative bg-[#000D12] overflow-hidden">
      <div className="relative z-10">
        <div className="container mx-auto px-26">
          <div className="flex flex-col lg:flex-row items-center min-h-[619px] py-20 lg:py-0">
            <div className="lg:w-1/2 flex justify-start">
              <img
                src={leftMockupUrl}
                alt="Product dashboard mockup"
                className="flex-shrink-0"
                style={{ minWidth: '550px' }}
              />
            </div>

            <div className="lg:w-1/2 space-y-10">
              <h2 className="font-archivo text-4xl lg:text-5xl leading-tight text-white max-w-lg">
                Everything you need to scale
              </h2>

              <div className="grid grid-cols-2 gap-x-6 gap-y-7">
                {features.map((f, i) => (
                  <div key={i} className="flex gap-3 mt-1">
                    <CheckIcon />
                    <div>
                      <h3 className="font-archivo text-base text-white">{f.title}</h3>
                      <p className="font-archivo text-sm text-white/60 mt-1 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href="#"
                  className="inline-block rounded-lg border border-[#E9F4F9] px-15 py-3.5 font-chivo-mono text-sm font-medium text-[#E9F4F9] transition-opacity hover:opacity-80"
                >
                  EXPLORE FEATURES
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DescriptiveFeatureTwo
