import LinkWithArrow from "../LinkWithArrow"

const InsightsSection = () => {
  return (
    <section className="bg-[#000D12]">
      <div className="container mx-auto px-4 lg:px-26 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
          <div className="relative space-y-8">
            <div aria-hidden="true" className="absolute -top-40 -left-40 pointer-events-none z-0">
              <svg width="815" height="853" viewBox="0 0 815 853" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.1" filter="url(#filter0_f_24_4202)">
                  <circle cx="336.614" cy="438.614" r="278.386" fill="url(#paint0_linear_24_4202)"/>
                </g>
                <defs>
                  <filter id="filter0_f_24_4202" x="-141.772" y="-39.772" width="956.772" height="956.772" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                    <feGaussianBlur stdDeviation="100" result="effect1_foregroundBlur_24_4202"/>
                  </filter>
                  <linearGradient id="paint0_linear_24_4202" x1="191.444" y1="-426.899" x2="743.159" y2="-295.127" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00B4FD"/>
                    <stop offset="1" stopColor="#003ACE"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="relative z-10">
              <p className="font-archivo text-xl lg:text-2xl xl:text-4xl text-white font-extralight leading-tight">
                Get yourself up-to-speed in all the things happening in fintech
              </p>
            </div>
            <div className="relative z-10">
              <a
                href="#"
                className="inline-block px-14 py-3.5 border border-[#E9F4F9] text-[#E9F4F9] rounded-lg font-chivo-mono text-sm font-light hover:bg-white/10 transition-colors"
              >
                INSIGHTS
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="h-[320px] rounded-2xl bg-[#01141B] relative overflow-hidden">
              <div
                className="absolute bg-[#07193C] flex items-center justify-center"
                style={{ width: 295, height: 267, top: 25.5, left: 24, borderRadius: 8 }}
              >
                <div className="grid grid-cols-2 gap-12">
                  {[...Array(4)].map((_, i) => (
                    <svg key={i} width="95" height="95" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M71.2106 0L82.5275 11.3215L67.3274 26.5216C62.1605 31.693 55.3192 34.3102 48.5451 34.3012C41.7756 34.3102 34.9297 31.693 29.7627 26.5216L14.5626 11.3215L25.8797 0L41.0797 15.2001C43.1626 17.274 45.8158 18.2841 48.5406 18.2931C51.2655 18.2841 53.9185 17.2785 56.0014 15.2001L71.2016 0H71.2106ZM97.0946 71.206L81.8946 56.0059C79.8207 53.923 78.815 51.27 78.8061 48.5451C78.815 45.8157 79.8207 43.1627 81.8946 41.0842L97.0946 25.8841L85.7776 14.5626L70.5775 29.7627C65.4061 34.9297 62.789 41.7755 62.798 48.5451C62.789 55.3146 65.4061 62.1605 70.5775 67.323L85.7776 82.523L97.0991 71.206H97.0946ZM25.8842 97.0901L41.0842 81.8901C43.1671 79.8116 45.8158 78.8061 48.5451 78.7971C51.27 78.8061 53.923 79.8116 56.0059 81.8901L71.2061 97.0901L82.5275 85.7686L67.3274 70.5686C62.1605 65.3971 55.3192 62.78 48.5451 62.789C41.7756 62.78 34.9297 65.3971 29.7627 70.5686L14.5626 85.7686L25.8842 97.0901ZM0 25.8841L15.2001 41.0842C17.2741 43.1671 18.2796 45.8202 18.2886 48.5451C18.2796 51.27 17.2741 53.923 15.2001 56.0059L0 71.206L11.3215 82.5275L26.5216 67.3275C31.693 62.1605 34.3102 55.3191 34.3012 48.5496C34.3102 41.78 31.693 34.9341 26.5216 29.7672L11.3215 14.5671L0 25.8886V25.8841Z" fill="#00B4FD"/>
                    </svg>
                  ))}
                </div>
              </div>
              <div className="ml-[330px] p-6 flex flex-col h-full">
                <div className="flex flex-col">
                  <p className="text-xs font-chivo-mono text-[#2490BB] tracking-wider mb-2">GETTING STARTED</p>
                  <h3 className="text-white text-lg lg:text-2xl font-archivo font-light leading-snug mb-2">
                    How to transition from a traditional to a digital bank
                  </h3>
                  <p className="text-xs font-chivo-mono text-[#2490BB]">David Grohi &middot; 17/08/24</p>
                </div>
                <a href="#" className="mt-auto inline-block w-full text-center text-xs font-chivo-mono text-[#E9F4F980] border border-[#E9F4F980] px-6 py-2.5 rounded-md hover:bg-[#E9F4F9]/10 transition-colors">
                  READ MORE
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="h-64 lg:h-72 rounded-2xl bg-[#01141B] relative overflow-hidden p-5 flex flex-col">
                <div className="flex flex-col">
                  <p className="text-xs font-chivo-mono text-[#2490BB] tracking-wider mb-2">GETTING STARTED</p>
                  <h3 className="text-white text-lg lg:text-2xl font-archivo font-light leading-snug mb-2 line-clamp-3">
                    How to transition from a traditional to a digital bank
                  </h3>
                  <p className="text-xs font-chivo-mono text-[#2490BB]">David Grohi &middot; 17/08/24</p>
                </div>
                <a href="#" className="mt-auto block w-full text-center text-xs font-chivo-mono text-[#E9F4F980] border border-[#E9F4F980] px-6 py-2.5 rounded-md hover:bg-[#E9F4F9]/10 transition-colors">
                  READ MORE
                </a>
              </div>
              <div className="flex flex-col items-end">
                <div className="h-64 lg:h-72 rounded-2xl bg-[#01141B] relative overflow-hidden p-5 flex flex-col w-full">
                  <div className="flex flex-col">
                    <p className="text-xs font-chivo-mono text-[#2490BB] tracking-wider mb-2">GETTING STARTED</p>
                    <h3 className="text-white text-lg lg:text-2xl font-archivo font-light leading-snug mb-2 line-clamp-3">
                      How to transition from a traditional to a digital bank
                    </h3>
                    <p className="text-xs font-chivo-mono text-[#2490BB]">David Grohi &middot; 17/08/24</p>
                  </div>
                  <a href="#" className="mt-auto block w-full text-center text-xs font-chivo-mono text-[#E9F4F980] border border-[#E9F4F980] px-6 py-2.5 rounded-md hover:bg-[#E9F4F9]/10 transition-colors">
                    READ MORE
                  </a>
                </div>
                <LinkWithArrow>READ ALL INSIGHTS</LinkWithArrow>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
