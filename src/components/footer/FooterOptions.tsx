const columns = [
  {
    title: 'Solutions',
    items: ['Core banking CB7', 'Digital Banking N7', 'Open Banking', 'Loan Origination System', 'Loan Management System', 'Digital Transformation'],
  },
  {
    title: 'The N7 Banking',
    items: ['About Us', 'Solutions', 'Contact', 'Company', 'Careers', 'Insights', 'Core Team', 'Band Center'],
  },
  {
    title: 'Our Socials',
    items: ['Linkedin', 'X'],
  },
]

const ArrowRight = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.5 7H11" stroke="#00B4FD" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7.5 3L11 7L7.5 11" stroke="#00B4FD" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const FooterOptions = () => (
  <div className="grid grid-cols-3 gap-6">
    {columns.map((col) => (
      <div key={col.title}>
        <p className="text-slate-300 text-sm lg:text-base font-archivo border-b border-white/5 pb-3 mb-3">
          {col.title}
        </p>
        <ul className="space-y-2">
          {col.items.map((item) => (
            <li key={item} className="flex items-center justify-between text-slate-400 text-sm lg:text-base">
              <span>{item}</span>
              <span className="text-cyan-400 shrink-0">
                <ArrowRight />
              </span>
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
)

export default FooterOptions
