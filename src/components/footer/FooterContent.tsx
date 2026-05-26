import FooterOptions from './FooterOptions'

const locations = [
  {
    city: 'London',
    address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom',
  },
  {
    city: 'Dubai',
    address: 'Dubai Silicon Oasis, DDP, Building A1, Dubai, UAE',
  },
  {
    city: 'London',
    address: '124 City Road, London, EC1V 2NX, United Kingdom',
  },
]

const FooterContent = () => (
  <div className="flex flex-col h-full lg:pl-12">
    <div className="flex-1 flex flex-col min-h-0">
      <div className="grid grid-cols-3 gap-6">
        {locations.map((loc, i) => (
          <div key={i}>
            <p className="font-chivo-mono text-xs lg:text-sm text-slate-300 tracking-widest uppercase mb-1">
              {loc.city}
            </p>
            <p className="text-sm lg:text-base text-slate-400 leading-relaxed">
              {loc.address}
            </p>
          </div>
        ))}
      </div>

      <div className="flex-1 py-12 lg:py-16 border-t border-white/5">
        <FooterOptions />
      </div>
    </div>

    <div className="border-t border-white/5 py-4">
      <p className="text-xs text-slate-500 leading-relaxed">
        Copyright &copy; 2022 by Linktia Infosystems Limited &mdash; [CB7 and N7 as Commercial Brand] &mdash; [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
      </p>
    </div>
  </div>
)

export default FooterContent
