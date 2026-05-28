interface LinkWithArrowProps {
  href?: string
  children?: React.ReactNode
}

const LinkWithArrow = ({ href = '#', children = 'LEARN MORE' }: LinkWithArrowProps) => (
  <a
    href={href}
    className="group inline-flex items-center gap-2 font-chivo-mono text-sm font-medium text-[#00B4FD]"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 h-px bg-[#00B4FD] transition-all duration-500 ease-in-out w-[30%] group-hover:w-full" />
    </span>
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-500 ease-in-out group-hover:translate-x-0.5"
    >
      <path
        d="M1 6H10.5M6 1.5L10.5 6L6 10.5"
        stroke="#00B4FD"
        strokeWidth="0.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </a>
)

export default LinkWithArrow
