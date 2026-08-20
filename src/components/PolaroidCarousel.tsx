import { useState, useEffect } from 'react'

interface Slide {
  src: string
  caption: string
  rotation?: string
}

interface PolaroidCarouselProps {
  slides: Slide[]
  interval?: number
  visibleCount?: number
}

export default function PolaroidCarousel({ slides, interval = 3500, visibleCount = 4 }: PolaroidCarouselProps) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState<number[]>([])

  useEffect(() => {
    const count = Math.min(visibleCount, slides.length)
    const indices: number[] = []
    for (let i = 0; i < count; i++) {
      indices.push((active + i) % slides.length)
    }
    setVisible(indices)
  }, [active, slides.length, visibleCount])

  useEffect(() => {
    const timer = setInterval(() => {
      setActive(prev => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [slides.length, interval])

  const rotations = ['-3deg', '2deg', '-2deg', '3deg']

  return (
    <div className="polaroid-carousel">
      <div className="polaroid-carousel__stage">
        {visible.map((slideIndex, i) => {
          const slide = slides[slideIndex]
          return (
            <div
              key={`${slideIndex}-${active}`}
              className="polaroid-carousel__card polaroid-carousel__card--visible"
              style={{
                transform: `rotate(${slide.rotation ?? rotations[i % rotations.length] ?? '0deg'})`,
                zIndex: i + 1,
              }}
            >
              <div className="polaroid-carousel__photo">
                <img src={slide.src} alt={slide.caption} draggable={false} />
              </div>
              <p className="polaroid-carousel__caption">{slide.caption}</p>
            </div>
          )
        })}
      </div>
      <div className="polaroid-carousel__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            className={`polaroid-carousel__dot${i === active ? ' polaroid-carousel__dot--active' : ''}`}
            onClick={() => setActive(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
