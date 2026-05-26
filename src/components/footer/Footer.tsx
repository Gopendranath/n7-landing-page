import FooterLogo from './FooterLogo'
import FooterContent from './FooterContent'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <footer id="footer" className="relative bg-slate-950 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row min-h-[509px] lg:py-0">
          <div className="lg:w-1/3 flex justify-center items-start">
            <FooterLogo />
          </div>
          <div className="lg:w-2/3 flex flex-col">
            <FooterContent />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  )
}

export default Footer
