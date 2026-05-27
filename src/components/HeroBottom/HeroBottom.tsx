import CoreBankingLogo from "./logos/CoreBankingLogo";
import DigitalBankingLogo from "./logos/DigitalBankingLogo";
import OpenBankingLogo from "./logos/OpenBankingLogo";
import LoanOriginationLogo from "./logos/LoanOriginationLogo";
import LoanManagementLogo from "./logos/LoanManagementLogo";

const LearnMoreButton = () => {
  return (
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
  );
};

const productsData = {
  col1: [
    {
      id: "core-banking",
      title: "Core Banking CB7",
      logo: <CoreBankingLogo />,
      description:
        "Power your financial operations with a robust, scalable core banking platform designed for the modern era.",
    },
    {
      id: "digital-banking",
      title: "Digital Banking N7",
      logo: <DigitalBankingLogo />,
      description:
        "Deliver seamless, omnichannel digital experiences that meet the expectations of todays customers.",
    },
    {
      id: "open-banking",
      title: "Open Banking",
      logo: <OpenBankingLogo />,
      description:
        "Connect and innovate with secure, API-driven open banking solutions.",
    },
  ],
  col2: [
    {
      id: "loan-origination",
      title: "Loan Origination System",
      logo: <LoanOriginationLogo />,
      description:
        "Streamline loan origination with intelligent automation and real-time decisioning.",
    },
    {
      id: "loan-management",
      title: "Loan Management System",
      logo: <LoanManagementLogo />,
      description:
        "Manage your entire loan lifecycle efficiently with end-to-end oversight.",
    },
  ],
};

const HeroBottom = () => {
  return (
    <div className="relative pb-24 overflow-hidden">
      <svg
        width="672"
        height="930"
        viewBox="0 0 672 930"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute pointer-events-none"
        style={{ right: 0, top: "50%", transform: "translateY(-50%)" }}
      >
        <g opacity="0.1" filter="url(#filter0_f_24_4031)">
          <circle
            cx="478.386"
            cy="478.386"
            r="278.386"
            fill="url(#paint0_linear_24_4031)"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_24_4031"
            x="0"
            y="0"
            width="956.772"
            height="956.772"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_24_4031" />
          </filter>
          <linearGradient
            id="paint0_linear_24_4031"
            x1="333.216"
            y1="-387.128"
            x2="884.931"
            y2="-255.355"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#00B4FD" />
            <stop offset="1" stopColor="#003ACE" />
          </linearGradient>
        </defs>
      </svg>
      <div className="container mx-auto px-26 relative z-10">
        <div className="border-t border-white/10 pt-16">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-10">
            <div className="lg:w-1/2 space-y-8">
              <p className="font-archivo text-4xl leading-snug text-white max-w-lg">
                All of our solutions are tailor-made to your needs
              </p>

              <a
                href="#"
                className="inline-block rounded-lg border border-[#E9F4F9] px-15 py-3 font-chivo-mono text-sm font-medium text-[#E9F4F9] transition-opacity hover:opacity-80"
              >
                REQUEST DEMO
              </a>
            </div>

            <div className="lg:w-1/2 grid grid-cols-2 gap-x-10 gap-y-10">
              {productsData.col1.map((card, i) => {
                const card2 = productsData.col2[i];
                return (
                  <div key={card.id} className="contents">
                    {card.logo}
                    {card2?.logo ?? <div />}
                    <h3 className="-mt-5 font-archivo text-xl text-white">
                      {card.title}
                    </h3>
                    {card2 ? (
                      <h3 className="-mt-5 font-archivo text-xl text-white">
                        {card2.title}
                      </h3>
                    ) : (
                      <div />
                    )}
                    <p className="-mt-5 font-archivo text-md leading-relaxed text-slate-400">
                      {card.description}
                    </p>
                    {card2 ? (
                      <p className="-mt-5 font-archivo text-md leading-relaxed text-slate-400">
                        {card2.description}
                      </p>
                    ) : (
                      <div />
                    )}
                    <div className="-mt-5"><LearnMoreButton /></div>
                    {card2 ? <div className="-mt-5"><LearnMoreButton /></div> : <div />}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
