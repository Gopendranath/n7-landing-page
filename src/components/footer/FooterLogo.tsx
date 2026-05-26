const FooterLogo = () => (
  <div className="group w-full max-w-[440px]">
    <svg width="440" height="233" viewBox="0 0 440 233" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
      <defs>
        <style>{`
          @keyframes blue-move {
            0% { transform: translate(0px, 0px); opacity: 1; }
            25% { transform: translate(-121.594px, -112.021px); opacity: 0.5; }
            50% { transform: translate(-306.181px, -84.722px); opacity: 0.7; }
            100% { transform: translate(0px, 0px); opacity: 1; }
          }
          @keyframes green-move {
            0% { transform: translate(0px, 0px); }
            25% { transform: translate(63.191px, 23.936px); }
            50% { transform: translate(196.463px, -14.847px); }
            100% { transform: translate(0px, 0px); }
          }
          .group:hover .glow-blue { animation: blue-move 6s ease-in-out infinite; }
          .group:hover .glow-green { animation: green-move 6s ease-in-out infinite; }
        `}</style>
        <filter id="footerLogoFilter0" x="-240" y="-160" width="740" height="580" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
        <filter id="footerLogoFilter1" x="-40" y="-10" width="540" height="380" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur" />
        </filter>
      </defs>
      <mask id="footerLogoMask" mask-type="alpha" maskUnits="userSpaceOnUse" x="27" y="0" width="401" height="233">
        <path d="M27.4022 232.073V-0.000133192H63.9384L169.826 145.468C171.179 146.821 172.645 148.739 174.224 151.219C176.028 153.7 177.72 156.181 179.298 158.662C180.877 161.143 182.005 163.173 182.681 164.751H184.373C184.373 161.368 184.373 158.098 184.373 154.941C184.373 151.783 184.373 148.626 184.373 145.468V-0.000133192H220.909V232.073H185.726L78.4853 84.9128C76.681 82.2064 74.4257 78.8235 71.7193 74.7639C69.0129 70.4788 66.9831 67.2085 65.6299 64.9532H63.9384C63.9384 68.1107 63.9384 71.3809 63.9384 74.7639C63.9384 77.9213 63.9384 81.3043 63.9384 84.9128V232.073H27.4022ZM297.83 232.073C297.83 212 300.311 192.605 305.272 173.885C310.234 154.941 316.887 137.011 325.232 120.096C333.802 102.955 343.049 87.0554 352.972 72.3958C363.121 57.5106 373.158 44.2042 383.081 32.4765H262.647V-0.000133192H427.06V22.6659C419.166 32.1382 410.934 42.6255 402.364 54.1277C393.794 65.4043 385.562 77.4703 377.668 90.3256C369.775 103.181 362.67 116.487 356.355 130.245C350.266 144.002 345.417 158.098 341.808 172.532C338.2 186.741 336.396 201.062 336.396 215.496V232.073H297.83Z" fill="#D9D9D9" />
      </mask>
      <g mask="url(#footerLogoMask)">
        <rect x="-99.47" y="-9.98291" width="680.725" height="301.868" fill="#01B4FD" />
        <g filter="url(#footerLogoFilter0)">
          <g className="glow-blue">
            <circle cx="301.465" cy="179.508" r="125.72" fill="#013ACF" />
          </g>
        </g>
        <g filter="url(#footerLogoFilter1)" style={{ mixBlendMode: 'color-dodge' }}>
          <g className="glow-green">
            <circle cx="131.073" cy="173.016" r="63.7764" fill="#74F1AE" />
          </g>
        </g>
      </g>
    </svg>
  </div>
)

export default FooterLogo
