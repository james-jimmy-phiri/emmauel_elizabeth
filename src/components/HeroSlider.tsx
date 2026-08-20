import { useState, useEffect } from 'react'

interface HeroSliderProps {
  images: string[]
  alt?: string
  interval?: number
}

export default function HeroSlider({ images, alt = 'Wedding', interval = 8000 }: HeroSliderProps) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length)
    }, interval)
    return () => clearInterval(timer)
  }, [images.length, interval])

  return (
    <div className="hero-slider">
      {images.map((src, i) => (
        <div
          key={src}
          className={`hero-slider__slide${i === current ? ' hero-slider__slide--active' : ''}`}
        >
          <img src={src} alt={`${alt} ${i + 1}`} />
        </div>
      ))}
      <div className="hero-slider__overlay" />
      {images.length > 1 && (
        <div className="hero-slider__dots">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`hero-slider__dot${i === current ? ' hero-slider__dot--active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
