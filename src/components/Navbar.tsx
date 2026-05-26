const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M3.5 5.25L7 8.75L10.5 5.25" stroke="#E9F4F9" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

interface NavLink {
  label: string
  hasDropdown?: boolean
}

const links: NavLink[] = [
  { label: 'SOLUTIONS', hasDropdown: true },
  { label: 'RESOURCES', hasDropdown: true },
  { label: 'ABOUT US' },
]

const Navbar = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50">
      <div className="backdrop-blur-[7.5px] bg-[#2F2F2F]/70 rounded-xl flex items-center w-[90vw] max-w-3xl px-4 h-[47px]">
        <span className="font-archivo font-normal text-[#E9F4F9] text-2xl leading-none flex-1">N7</span>

        <div className="flex items-center gap-6 font-chivo-mono text-sm text-[#E9F4F9]">
          {links.map((link) => (
            <a
              key={link.label}
              href={`#${link.label.toLowerCase()}`}
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              {link.label}
              {link.hasDropdown && <ChevronDown />}
            </a>
          ))}
        </div>

        <div className="flex-1 flex justify-end">
          <div className="border border-[#E9F4F9] rounded-md h-7 flex items-center px-8">
            <span className="font-chivo-mono text-xs text-[#E9F4F9]">REQUEST DEMO</span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
