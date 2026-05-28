interface CheckIconProps {
  size?: number
}

const CheckIcon = ({ size = 18 }: CheckIconProps) => (
  <div
    className="rounded-full bg-gradient-to-r from-[#00B4FD] to-[#003ACE] flex items-center justify-center flex-shrink-0"
    style={{ width: size, height: size }}
  >
    <svg
      width={Math.round(size * 0.5)}
      height={Math.round(size * 0.4)}
      viewBox="0 0 10 8"
      fill="none"
    >
      <path
        d="M1 3.5L4 6.5L9 1"
        stroke="#E9F4F9"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
)

export default CheckIcon
