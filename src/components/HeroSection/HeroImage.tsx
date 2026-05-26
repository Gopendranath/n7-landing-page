import { useEffect, useRef, useState } from 'react'

import glowSrc from '../../assets/hero/backgroundiHeroImageglow.svg'
import normalPicSrc from '../../assets/hero/Heroimageone_normalpic.svg'
import imageTwoSrc from '../../assets/hero/HeroImagetwo.svg'
import imageThreeSrc from '../../assets/hero/HeroImagethree.svg'

const images = [
  { src: normalPicSrc, label: 'one' },
  { src: imageTwoSrc, label: 'two' },
  { src: imageThreeSrc, label: 'three' },
]

const HeroImage = () => {
  const [index, setIndex] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isTilted, setIsTilted] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isHovered) return

    intervalRef.current = setInterval(() => {
      setFadeOut(true)
    }, 3000)

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isHovered])

  useEffect(() => {
    if (!fadeOut) return
    const t = setTimeout(() => {
      setIndex((prev) => (prev + 1) % images.length)
      setFadeOut(false)
    }, 400)
    return () => clearTimeout(t)
  }, [fadeOut])

  const handleMouseEnter = () => {
    setIsHovered(true)
    if (index === 0) setIsTilted(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setIsTilted(false)
  }

  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={glowSrc} alt="" className="absolute opacity-60 pointer-events-none" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%) scale(1.5)', transformOrigin: 'center' }} />


      <div
        className="relative w-full max-w-[500px] h-[422px]"
        style={{
          perspective: '1000px',
        }}
      >
        <img
          src={images[index].src}
          alt={`Hero ${images[index].label}`}
          className={`absolute inset-0 w-full h-full object-contain ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
          style={{
            transition: 'opacity 400ms, transform 500ms',
            transformOrigin: 'bottom right',
            transform: index === 0 && isTilted
              ? 'perspective(600px) rotateX(3deg) rotateY(-6deg) scale(0.95)'
              : 'perspective(600px) rotateX(0deg) rotateY(0deg) scale(1)',
          }}
        />
      </div>
    </div>
  )
}

export default HeroImage
