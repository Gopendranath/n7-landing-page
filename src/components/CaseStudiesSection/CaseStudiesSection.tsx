import { useEffect, useState } from 'react'

const totalCards = 3
const angleStep = 360 / totalCards
const radius = 400
const cardWidth = 1015
const peek = 140
const visibleWidth = cardWidth + 2 * peek

const CaseStudiesSection = () => {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalCards)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

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
            const isFront = t.z === 0
            return (
              <div
                key={i}
                className="absolute top-0 rounded-[18px] bg-[#01141B] transition-all duration-700 ease-in-out"
                style={{
                  width: cardWidth,
                  height: 438,
                  left: peek,
                  zIndex: isFront ? 3 : 1,
                  transform: `translateX(${t.x}px) translateZ(${t.z}px)`,
                }}
              >
                <div className="flex items-center justify-center h-full">
                  <span className="font-archivo text-6xl text-white/20 font-bold">Case Study {i + 1}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesSection
