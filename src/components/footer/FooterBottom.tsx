const FooterBottom = () => (
  <div className="absolute bottom-0 left-0 w-full pointer-events-none overflow-hidden" style={{ height: '440px' }}>
    <svg width="1440" height="440" viewBox="0 0 1440 440" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <g opacity="0.04" filter="url(#bottomGlowFilter)">
        <ellipse cx="720" cy="478.386" rx="720" ry="278.386" fill="url(#bottomGlowGradient)" />
      </g>
      <defs>
        <filter id="bottomGlowFilter" x="-200" y="0" width="1840" height="956.772" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur" />
        </filter>
        <linearGradient id="bottomGlowGradient" x1="344.541" y1="-387.128" x2="1436.28" y2="287.262" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00B4FD" />
          <stop offset="1" stopColor="#003ACE" />
        </linearGradient>
      </defs>
    </svg>
  </div>
)

export default FooterBottom
