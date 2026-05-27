import bgTextUrl from './assets/backgroungtext.svg'

const CtaSectionTwo = () => {
  return (
    <section className="relative bg-[#000D12] overflow-hidden">
      <div className="container mx-auto px-26">
        <div className="relative rounded-[27px] bg-gradient-to-r from-[#042A3A] to-[#010A14] my-20 lg:my-28">
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none overflow-hidden rounded-[27px]">
            <img
              src={bgTextUrl}
              alt=""
              className="w-full h-full object-cover opacity-50"
            />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 md:px-16 lg:px-20 py-16 md:py-20 lg:py-24 gap-10 lg:gap-20">
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-[#E9F4F9] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Take the full advantage of going paper-less now.
              </h2>
              <p className="text-[#E9F4F9] opacity-70 text-base md:text-lg leading-relaxed">
                <span className="text-[#00B4FD] font-bold">CB7</span> helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.
              </p>
            </div>
            <div className="lg:w-1/2 flex flex-col sm:flex-row items-center gap-6 lg:justify-end">
              <a
                href="#"
                className="w-full sm:w-auto px-14 py-3.5 border border-[#E9F4F9] text-[#E9F4F9] rounded-lg font-chivo-mono text-sm font-medium text-center hover:bg-white/5 transition-colors whitespace-nowrap"
              >
                CONTACT US
              </a>
              <a
                href="#"
                className="w-full sm:w-auto px-14 py-3.5 rounded-lg font-chivo-mono text-sm font-medium text-center text-white bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:opacity-90 transition-opacity whitespace-nowrap"
              >
                REQUEST DEMO
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSectionTwo
