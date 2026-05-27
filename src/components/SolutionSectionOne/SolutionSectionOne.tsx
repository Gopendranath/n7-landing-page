import row1MockupUrl from '../../assets/mobilefeatures/row1-mockup.svg'
import row2MockupUrl from '../../assets/mobilefeatures/row2-mockup.svg'
import row3MockupUrl from '../../assets/mobilefeatures/row3-mockup.svg'

const features = [
  { title: 'Core Banking CB7', desc: 'A powerful and modular core banking system designed for the modern financial landscape.' },
  { title: 'Digital Banking N7', desc: 'Next-generation digital banking platform for seamless customer experiences.' },
  { title: 'Open Banking', desc: 'Secure APIs and data-sharing capabilities for an interconnected ecosystem.' },
  { title: 'Loan Origination', desc: 'Streamlined loan processing from application to approval and funding.' },
  { title: 'Loan Management', desc: 'End-to-end loan lifecycle management with automated workflows.' },
]

const CheckIcon = () => (
  <div className="w-[22px] h-[22px] rounded-full bg-gradient-to-r from-[#00B4FD] to-[#003ACE] flex items-center justify-center flex-shrink-0 mt-0.5">
    <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 5.5L4.5 9L11 1" stroke="#E9F4F9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </div>
)

const mobileRows = [
  {
    mockup: row1MockupUrl,
    reverse: false,
    title: 'Mobile-First Banking Experience',
    desc: 'Empower your customers with a full-featured mobile banking platform that brings the branch to their fingertips. Seamless, secure, and always on.',
    items: [
      { title: 'Digital Wallet Hub', desc: 'Integrated mobile wallet with contactless payments and tokenized card storage for secure transactions.' },
      { title: 'Biometric Security', desc: 'Advanced fingerprint and facial recognition authentication for effortless and secure logins.' },
      { title: 'Instant Push Alerts', desc: 'Real-time transaction notifications and customizable alerts for complete account visibility.' },
    ],
  },
  {
    mockup: row2MockupUrl,
    reverse: true,
    title: 'Seamless Everyday Banking',
    desc: 'From deposits to payments, manage every aspect of your financial life from a single, intuitive mobile dashboard designed for speed and simplicity.',
    items: [
      { title: 'Mobile Check Deposit', desc: 'Deposit checks anytime with intelligent image capture and instant balance updates.' },
      { title: 'Card Management', desc: 'Instantly lock, unlock, or replace cards with full control over spending limits and regions.' },
      { title: 'P2P Transfers', desc: 'Send money to anyone instantly using phone numbers or email with real-time settlement.' },
    ],
  },
  {
    mockup: row3MockupUrl,
    reverse: false,
    title: 'Smarter Financial Insights',
    desc: 'Help customers take control of their finances with intelligent budgeting tools, spending analytics, and automated savings features right in the app.',
    items: [
      { title: 'Spending Analytics', desc: 'AI-powered categorization and visual spending insights to understand financial habits better.' },
      { title: 'Bill Pay Management', desc: 'Schedule, track, and manage all bill payments from one centralized dashboard.' },
      { title: 'Budget Planning', desc: 'Set custom budgets and get intelligent recommendations to achieve financial goals faster.' },
    ],
  },
]

const SolutionSectionOne = () => {
  return (
    <>
      <section className="bg-[#E9F4F9] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-26">
          <div className="flex flex-col lg:flex-row items-stretch py-20 lg:py-0">
            <div className="lg:w-1/2 py-20 lg:py-28 flex flex-col justify-start">
              <h2 className="font-archivo text-3xl lg:text-4xl font-bold text-[#000D12] leading-tight max-w-md">
                Digital Banking <span className="text-[#00B4FD]">out-of-the-box</span>
              </h2>
              <p className="font-archivo text-sm text-[#000D12]/70 leading-relaxed max-w-md mt-6">
                N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations, and scale with confidence in an increasingly competitive market.
              </p>
              <div className="flex flex-col gap-4 mt-10">
                <a
                  href="#"
                  className="w-full sm:w-auto sm:max-w-[200px] px-14 py-3.5 rounded-lg font-chivo-mono text-sm font-medium text-center text-white bg-gradient-to-r from-[#00B4FD] to-[#003ACE] hover:opacity-90 transition-opacity whitespace-nowrap"
                >
                  REQUEST DEMO
                </a>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 font-chivo-mono text-sm font-medium text-[#00B4FD]"
                >
                  <span className="relative">
                    LEARN MORE
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
              </div>
            </div>

            <div className="lg:w-1/2 py-20 lg:py-28">
              {mobileRows.map((row, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${row.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16 ${idx < mobileRows.length - 1 ? 'mb-16 lg:mb-24' : ''}`}
                >
                  <div className="w-full lg:w-1/2 flex justify-center">
                    <img
                      src={row.mockup}
                      alt="Mobile app mockup"
                      className="max-w-full h-auto"
                      style={{ maxWidth: '220px' }}
                    />
                  </div>
                  <div className="w-full lg:w-1/2 space-y-6">
                    <div className="space-y-3">
                      <h3 className="font-archivo text-xl lg:text-2xl font-bold text-[#000D12] leading-tight">
                        {row.title}
                      </h3>
                      <p className="font-archivo text-sm text-[#000D12]/70 leading-relaxed">
                        {row.desc}
                      </p>
                    </div>
                    <div className="space-y-4">
                      {row.items.map((item, i) => (
                        <div key={i} className="flex gap-3">
                          <CheckIcon />
                          <div>
                            <h4 className="font-archivo text-sm font-semibold text-[#000D12]">{item.title}</h4>
                            <p className="font-archivo text-xs text-[#000D12]/60 mt-0.5 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#E9F4F9] overflow-hidden">
        <div className="container mx-auto px-4 lg:px-26">
          <div className="relative rounded-[27px] bg-gradient-to-r from-[#042A3A] to-[#010A14] my-20 lg:my-28 overflow-hidden">
            <div aria-hidden="true" className="absolute left-0 top-0 h-full w-1/3 pointer-events-none z-0">
              <svg className="h-full w-full" viewBox="0 0 515 819" preserveAspectRatio="xMinYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.12" filter="url(#filter0_f_40_4594)">
                  <circle cx="25.1379" cy="489.371" r="389.371" fill="url(#paint0_linear_40_4594)"/>
                </g>
                <defs>
                  <filter id="filter0_f_40_4594" x="-464.234" y="0" width="978.743" height="978.743" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_40_4594"/>
                  </filter>
                  <linearGradient id="paint0_linear_40_4594" x1="-29.6767" y1="74.5053" x2="390.348" y2="155.505" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00CFFD"/>
                    <stop offset="1" stopColor="#0015CE"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/2 pointer-events-none z-0">
              <svg className="h-full w-full" viewBox="0 0 614 376" preserveAspectRatio="xMaxYMid slice" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.5">
                  <mask id="path-1-outside-1_24_4200" maskUnits="userSpaceOnUse" x="-0.796989" y="-20.7178" width="681" height="397" fill="black">
                    <rect fill="white" x="-0.796989" y="-20.7178" width="681" height="397"/>
                    <path d="M1.5862 374.282V-18.5433H63.4305L242.664 227.688C244.955 229.979 247.436 233.224 250.108 237.423C253.163 241.622 256.026 245.822 258.698 250.021C261.37 254.22 263.279 257.656 264.424 260.328H267.287C267.287 254.602 267.287 249.067 267.287 243.722C267.287 238.378 267.287 233.033 267.287 227.688V-18.5433H329.132V374.282H269.578L88.0536 125.187C84.9996 120.606 81.182 114.88 76.601 108.008C72.0199 100.755 68.5841 95.2196 66.2936 91.402H63.4305C63.4305 96.7466 63.4305 102.282 63.4305 108.008C63.4305 113.353 63.4305 119.079 63.4305 125.187V374.282H1.5862ZM459.334 374.282C459.334 340.306 463.533 307.475 471.932 275.79C480.33 243.722 491.592 213.373 505.717 184.741C520.224 155.728 535.876 128.814 552.673 104C569.852 78.8041 586.84 56.2806 603.637 36.4294H399.78V-18.5433H678.079V19.823C664.718 35.8567 650.784 53.6083 636.277 73.0778C621.77 92.1655 607.836 112.589 594.475 134.349C581.114 156.109 569.088 178.633 558.399 201.92C548.092 225.207 539.884 249.067 533.776 273.499C527.668 297.55 524.614 321.791 524.614 346.223V374.282H459.334Z"/>
                  </mask>
                  <path d="M1.5862 374.282H0V375.868H1.5862V374.282ZM1.5862 -18.5433V-20.1295H0V-18.5433H1.5862ZM63.4305 -18.5433L64.7129 -19.4768L64.2378 -20.1295H63.4305V-18.5433ZM242.664 227.688L241.382 228.622L241.455 228.722L241.543 228.81L242.664 227.688ZM250.108 237.423L248.77 238.275L248.797 238.316L248.826 238.356L250.108 237.423ZM258.698 250.021L260.036 249.169V249.169L258.698 250.021ZM264.424 260.328L262.966 260.953L263.378 261.915H264.424V260.328ZM267.287 260.328V261.915H268.874V260.328H267.287ZM267.287 -18.5433V-20.1295H265.701V-18.5433H267.287ZM329.132 -18.5433H330.718V-20.1295H329.132V-18.5433ZM329.132 374.282V375.868H330.718V374.282H329.132ZM269.578 374.282L268.296 375.216L268.771 375.868H269.578V374.282ZM88.0536 125.187L86.7338 126.067L86.7522 126.095L86.7717 126.121L88.0536 125.187ZM76.601 108.008L75.2599 108.855L75.2703 108.872L75.2812 108.888L76.601 108.008ZM66.2936 91.402L67.6538 90.5859L67.1917 89.8158H66.2936V91.402ZM63.4305 91.402V89.8158H61.8443V91.402H63.4305ZM63.4305 374.282V375.868H65.0167V374.282H63.4305ZM3.1724 374.282V-18.5433H0V374.282H3.1724ZM1.5862 -16.9571H63.4305V-20.1295H1.5862V-16.9571ZM62.148 -17.6098L241.382 228.622L243.947 226.755L64.7129 -19.4768L62.148 -17.6098ZM241.543 228.81C243.72 230.988 246.131 234.127 248.77 238.275L251.447 236.572C248.742 232.321 246.189 228.97 243.786 226.567L241.543 228.81ZM248.826 238.356C251.861 242.53 254.706 246.702 257.36 250.873L260.036 249.169C257.346 244.941 254.464 240.715 251.391 236.49L248.826 238.356ZM257.36 250.873C260.013 255.043 261.87 258.396 262.966 260.953L265.882 259.704C264.688 256.917 262.727 253.398 260.036 249.169L257.36 250.873ZM264.424 261.915H267.287V258.742H264.424V261.915ZM268.874 260.328V243.722H265.701V260.328H268.874ZM268.874 227.688V-18.5433H265.701V227.688H268.874ZM267.287 -16.9571H329.132V-20.1295H267.287V-16.9571ZM327.546 -18.5433V374.282H330.718V-18.5433H327.546ZM329.132 372.696H269.578V375.868H329.132V372.696ZM270.86 373.348L89.3355 124.253L86.7717 126.121L268.296 375.216L270.86 373.348ZM75.2812 108.888C72.1347 103.885 68.3833 98.2657 63.8306 91.6588L61.3714 93.5017C65.9808 100.195 69.8645 105.904 73.9208 111.128L75.2812 108.888ZM67.1917 89.8158H63.4305V92.9882H67.1917V89.8158ZM61.8443 91.402C61.8443 96.8489 61.8612 102.39 61.8783 108.012C61.8954 113.26 61.9125 118.99 61.9125 125.187H65.0167C65.0167 119.079 65.0017 113.354 64.9846 108.104C64.9675 102.481 64.9488 96.9409 64.9488 91.402H61.8443ZM61.9125 125.187V374.282H65.0167V125.187H61.9125ZM63.4305 372.696H1.5862V375.868H63.4305V372.696ZM459.334 374.282H457.748V375.868H459.334V374.282ZM471.932 275.79L470.381 275.284L470.381 275.284L471.932 275.79ZM505.717 184.741L507.15 185.483L507.15 185.483L505.717 184.741ZM552.673 104L551.379 103.082L551.379 103.082L552.673 104ZM603.637 36.4294L602.424 35.3953L598.868 39.0158H603.637V36.4294ZM399.78 36.4294V39.0158H402.366V36.4294H399.78ZM399.78 -18.5433V-21.1295H397.194V-18.5433H399.78ZM678.079 -18.5433H680.665V-21.1295H678.079V-18.5433ZM678.079 19.823L680.255 21.3981L680.665 20.8407V19.823H678.079ZM636.277 73.0778L634.944 72.2298L634.944 72.2298L636.277 73.0778ZM594.475 134.349L593.129 133.522L593.129 133.522L594.475 134.349ZM558.399 201.92L556.928 201.338L556.928 201.338L558.399 201.92ZM533.776 273.499L532.224 272.993L532.224 272.993L533.776 273.499ZM524.614 346.223H522.028V346.8L522.099 347.376L524.614 346.223ZM460.92 374.282C460.92 340.605 465.082 307.952 473.483 276.296L470.381 275.284C461.983 306.998 457.748 340.007 457.748 374.282H460.92ZM473.483 276.296C481.873 244.258 493.118 213.963 507.15 185.483L504.284 184C490.067 212.784 478.788 243.187 470.381 275.284L473.483 276.296ZM507.15 185.483C521.638 156.504 537.271 129.623 553.967 104.918L551.379 103.082C534.481 128.005 518.811 154.951 504.284 184L507.15 185.483ZM553.967 104.918C571.13 79.7463 588.102 57.2407 604.85 37.4617L602.424 35.3972C585.578 55.3205 568.574 77.862 551.379 103.082L553.967 104.918ZM603.637 33.8432H399.78V39.0158H603.637V33.8432ZM402.366 36.4294V-18.5433H397.194V36.4294H402.366ZM399.78 -15.9571H678.079V-21.1295H399.78V-15.9571ZM675.493 -18.5433V19.823H680.665V-18.5433H675.493ZM677.903 18.2479C664.572 34.2433 650.665 51.9563 636.277 71.498L640.277 75.3817C654.903 55.2603 668.864 37.4701 680.255 21.3981L677.903 18.2479ZM636.277 71.498C621.792 90.5564 607.874 110.947 594.551 132.637L597.287 134.434C610.521 112.916 624.428 92.5296 638.768 73.4051L636.277 71.498ZM594.551 132.637C581.213 154.359 569.206 176.845 558.508 200.097L561.47 201.333C572.173 178.100 584.179 155.615 597.398 133.917L594.551 132.637ZM558.508 200.097C548.217 223.346 540.027 247.166 533.935 271.559L537.024 272.632C543.112 248.240 551.303 224.421 561.59 201.171L558.508 200.097ZM533.935 271.559C527.842 295.549 524.8 319.724 524.8 346.223H528.084C528.084 321.858 531.121 297.684 537.128 273.775L533.935 271.559ZM524.8 346.223V374.282H528.084V346.223H524.8ZM525.358 374.282H459.334V371.097H525.358V374.282Z" fill="url(#paint0_linear_24_4200)"/>
                  <path d="M459.334 374.282H460.92V371.097H459.334V374.282ZM459.334 -18.5433V-20.1295H457.748V-18.5433H459.334ZM678.079 -18.5433V-20.1295H675.493V-18.5433H678.079ZM678.079 19.823V21.4092H680.665V19.823H678.079ZM399.78 19.823H397.194V21.4092H399.78V19.823ZM399.78 -18.5433H397.194V-20.1295H399.78V-18.5433ZM63.4305 -18.5433H65.0167V-20.1295H63.4305V-18.5433ZM63.4305 374.282V375.868H65.0167V374.282H63.4305ZM1.5862 374.282H0V375.868H1.5862V374.282ZM1.5862 -18.5433V-20.1295H0V-18.5433H1.5862ZM524.614 374.282V375.868H526.2V374.282H524.614ZM524.614 346.223H526.2V345.647L526.129 345.071L524.614 346.223ZM459.334 372.696H525.358V375.868H459.334V372.696ZM525.358 374.282V346.223H522.074V374.282H525.358ZM525.382 345.071C523.679 324.473 518.872 303.575 511.372 283.838C503.891 264.156 493.591 245.128 481.153 228.1C468.736 211.102 453.968 196.065 437.867 183.973L436.133 186.771C452.157 198.803 466.854 213.77 479.213 230.685C491.55 247.569 501.80 266.523 509.254 286.141C516.691 305.703 521.476 326.533 523.174 347.062L525.382 345.071ZM437.867 183.973C428.676 177.219 419.721 170.563 411.068 164.384C402.406 158.199 393.689 152.63 385.074 147.82L383.926 151.18C392.506 155.969 401.182 161.506 409.801 167.659C418.43 173.818 427.341 180.437 436.133 186.771L437.867 183.973ZM385.074 147.82C376.908 143.132 368.601 139.226 360.281 136.028C351.973 132.834 343.318 130.285 334.545 128.275C325.778 126.267 316.51 124.854 306.886 123.878C297.264 122.902 286.869 122.414 275.855 122.414V127.828C286.818 127.828 297.154 128.315 306.724 129.286C316.292 130.256 325.477 131.659 334.162 133.651C342.842 135.642 351.414 138.169 359.649 141.336C367.873 144.499 376.11 148.377 384.212 153.041L385.074 147.82ZM275.855 122.414H241.76V127.828H275.855V122.414ZM241.76 122.414C241.76 199.57 218.312 258.953 174.252 301.955C130.274 344.876 69.8308 367.414 1.5862 372.668L1.744 378.008C70.4122 372.728 131.282 350.074 175.586 306.678C219.808 263.361 242.952 203.752 242.952 127.828L241.76 127.828L241.76 122.414ZM1.5862 372.668V-18.5433H0V372.668H1.5862ZM458.142 -18.5433H678.079V-20.1295H458.142V-18.5433ZM675.493 -18.5433V19.823H680.665V-18.5433H675.493ZM678.079 18.2368H399.78V21.4092H678.079V18.2368ZM402.366 19.823V-18.5433H397.194V19.823H402.366ZM399.78 -16.9571H63.4305V-20.1295H399.78V-16.9571ZM65.0167 -18.5433V374.282H61.8443V-18.5433H65.0167ZM63.4305 372.696H1.5862V375.868H63.4305V372.696ZM437.59 374.282H524.614V371.097H437.59V374.282Z" fill="url(#paint1_linear_24_4200)"/>
                </g>
                <defs>
                  <linearGradient id="paint0_linear_24_4200" x1="133.216" y1="-885.173" x2="943.454" y2="-624.796" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4FD"/>
                    <stop offset="1" stopColor="#003ACE"/>
                  </linearGradient>
                  <linearGradient id="paint1_linear_24_4200" x1="245.94" y1="351.072" x2="476.346" y2="-38.5223" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#02171F"/>
                    <stop offset="1" stopOpacity="0"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-10 md:px-16 lg:px-20 py-16 md:py-20 lg:py-24 gap-10 lg:gap-20">
              <div className="lg:w-7/12 space-y-6">
                <h2 className="text-[#E9F4F9] text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Core Banking{' '}
                  <span className="text-[#00B4FD]">CB7</span>
                </h2>
                <p className="text-[#E9F4F9]/70 text-base md:text-lg leading-relaxed max-w-2xl">
                  <span className="text-[#00B4FD] font-bold">CB7</span> helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations, and scale with confidence in an increasingly competitive market.
                </p>
              </div>
              <div className="lg:w-5/12 flex flex-col sm:flex-row items-center gap-6 lg:justify-end">
                <a
                  href="#"
                  className="w-full sm:w-auto px-14 py-3.5 border border-[#E9F4F9] text-[#E9F4F9] rounded-lg font-chivo-mono text-sm font-medium text-center hover:bg-white/5 transition-colors whitespace-nowrap"
                >
                  LEARN MORE
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
    </>
  )
}

export default SolutionSectionOne
