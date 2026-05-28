import { useCallback, useEffect, useState } from 'react'
import LinkWithArrow from '../LinkWithArrow'

const totalCards = 3
const angleStep = 360 / totalCards
const radius = 400
const cardWidth = 1015
const peek = 140
const visibleWidth = cardWidth + 2 * peek

const ArrowButton = ({ direction, onClick }: { direction: 'prev' | 'next'; onClick: () => void }) => (
  <button onClick={onClick} className="cursor-pointer" aria-label={direction === 'prev' ? 'Previous case study' : 'Next case study'}>
    <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      {direction === 'prev' ? (
        <path d="M31.5769 21L12.41 21M21 31.577L13.6649 24.2419C11.8745 22.4515 11.8745 19.5486 13.6649 17.7581L21 10.4231" stroke="#00B4FD" strokeWidth="0.951876" strokeLinecap="round" strokeLinejoin="round"/>
      ) : (
        <path d="M10.4231 21L29.59 21M21 31.577L28.3351 24.2419C30.1255 22.4515 30.1255 19.5486 28.3351 17.7581L21 10.4231" stroke="#00B4FD" strokeWidth="0.951876" strokeLinecap="round" strokeLinejoin="round"/>
      )}
      <circle cx="21" cy="21" r="20.3196" stroke="#00B4FD" strokeWidth="1.36074" transform={direction === 'prev' ? 'matrix(-1 0 0 1 42 0)' : ''} />
    </svg>
  </button>
)

const CaseStudiesSection = () => {
  const [current, setCurrent] = useState(0)

  const goNext = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalCards)
  }, [])

  const goPrev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalCards) % totalCards)
  }, [])

  useEffect(() => {
    const interval = setInterval(goNext, 4000)
    return () => clearInterval(interval)
  }, [goNext])

  const getCardData = (i: number) => {
    const angle = (i * angleStep - current * angleStep) * (Math.PI / 180)
    const x = radius * Math.sin(angle)
    const z = radius * (Math.cos(angle) - 1)
    return { x, z }
  }

  return (
    <section className="bg-[#000D12]">
      <div className="container mx-auto px-4 lg:px-26 py-20 lg:py-28">
        <h2 className="text-center font-archivo text-4xl lg:text-5xl font-normal text-white mb-16">
          Our Case Studies
        </h2>
        <div
          className="relative mx-auto overflow-hidden"
          style={{ width: visibleWidth, height: 438, perspective: '1200px' }}
        >
          {[...Array(totalCards)].map((_, i) => {
            const t = getCardData(i)
            const isFront = Math.abs(t.z) < 0.001
            return (
              <div
                key={i}
                className="absolute top-0 rounded-[18px] bg-[#01141B] overflow-hidden transition-all duration-700 ease-in-out"
                style={{
                  width: cardWidth,
                  height: 438,
                  left: peek,
                  zIndex: isFront ? 3 : 1,
                  transform: `translateX(${t.x}px) translateZ(${t.z}px)`,
                }}
              >
                <div className="absolute bg-[#07193C] flex items-center justify-center"
                  style={{ width: 421.51, height: 381.5, top: 25.5, left: 24, borderRadius: 11.43 }}
                >
                  <div className="grid grid-cols-2 gap-16">
                    {[...Array(4)].map((_, j) => (
                      <svg key={j} width="140" height="140" viewBox="0 0 98 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M71.2106 0L82.5275 11.3215L67.3274 26.5216C62.1605 31.693 55.3192 34.3102 48.5451 34.3012C41.7756 34.3102 34.9297 31.693 29.7627 26.5216L14.5626 11.3215L25.8797 0L41.0797 15.2001C43.1626 17.274 45.8158 18.2841 48.5406 18.2931C51.2655 18.2841 53.9185 17.2785 56.0014 15.2001L71.2016 0H71.2106ZM97.0946 71.206L81.8946 56.0059C79.8207 53.923 78.815 51.27 78.8061 48.5451C78.815 45.8157 79.8207 43.1627 81.8946 41.0842L97.0946 25.8841L85.7776 14.5626L70.5775 29.7627C65.4061 34.9297 62.789 41.7755 62.798 48.5451C62.789 55.3146 65.4061 62.1605 70.5775 67.323L85.7776 82.523L97.0991 71.206H97.0946ZM25.8842 97.0901L41.0842 81.8901C43.1671 79.8116 45.8158 78.8061 48.5451 78.7971C51.27 78.8061 53.923 79.8116 56.0059 81.8901L71.2061 97.0901L82.5275 85.7686L67.3274 70.5686C62.1605 65.3971 55.3192 62.78 48.5451 62.789C41.7756 62.78 34.9297 65.3971 29.7627 70.5686L14.5626 85.7686L25.8842 97.0901ZM0 25.8841L15.2001 41.0842C17.2741 43.1671 18.2796 45.8202 18.2886 48.5451C18.2796 51.27 17.2741 53.923 15.2001 56.0059L0 71.206L11.3215 82.5275L26.5216 67.3275C31.693 62.1605 34.3102 55.3191 34.3012 48.5496C34.3102 41.78 31.693 34.9341 26.5216 29.7672L11.3215 14.5671L0 25.8886V25.8841Z" fill="#00B4FD"/>
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="ml-[460px] p-12 flex flex-col h-full">
                  <div className="flex flex-col">
                    <p className="text-xs font-chivo-mono text-[#2490BB] tracking-wider mb-2">GETTING STARTED</p>
                    <h3 className="text-white text-lg lg:text-4xl font-archivo font-light leading-snug mb-4">
                      How we help brand reach out to more people
                    </h3>
                    <svg width="125" height="31" viewBox="0 0 125 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M15.0057 30.0114C23.2931 30.0114 30.0114 23.2931 30.0114 15.0057C30.0114 6.71828 23.2931 0 15.0057 0C6.71826 0 0 6.71828 0 15.0057C0 23.2931 6.71826 30.0114 15.0057 30.0114Z" fill="#586E84"/>
                    </svg>
                  </div>
                  <a href="#" className="mt-auto inline-block w-full text-center text-xs font-chivo-mono text-[#E9F4F980] border border-[#E9F4F980] px-6 py-2.5 rounded-md hover:bg-[#E9F4F9]/10 transition-colors">
                    READ MORE
                  </a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="flex items-center justify-between mt-10">
          <div />
          <div className="flex items-center gap-6">
            <ArrowButton direction="prev" onClick={goPrev} />
            <div className="flex items-center gap-3">
              {[...Array(totalCards)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    i === current ? 'bg-[#0B4B63] w-10' : 'bg-transparent border border-[#0B4B63]'
                  }`}
                  aria-label={`Go to case study ${i + 1}`}
                />
              ))}
            </div>
            <ArrowButton direction="next" onClick={goNext} />
          </div>
          <div className="flex justify-end">
            <LinkWithArrow>View All</LinkWithArrow>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
