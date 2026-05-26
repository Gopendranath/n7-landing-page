const CtaSection = () => {
  return (
    <section className="bg-slate-950">
      <div className="container mx-auto px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between py-32 md:py-42 lg:py-56 gap-30">
          <div className="lg:w-1/2">
            <h2 className="text-[#E9F4F9] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-[#E9F4F9] opacity-70 text-base md:text-lg leading-relaxed">
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations.
            </p>
          </div>
          <div className="lg:w-1/2 flex flex-col sm:flex-row items-center gap-10 lg:justify-end">
            <button className="w-full sm:w-auto px-12 py-3 border border-[#E9F4F9] text-[#E9F4F9] rounded-lg font-normal text-sm hover:bg-white/5 transition-colors whitespace-nowrap">
              CONTACT US
            </button>
            <button className="w-full sm:w-auto px-12 py-3 rounded-lg font-normal text-sm text-white bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:opacity-90 transition-opacity whitespace-nowrap">
              REQUEST DEMO
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CtaSection
