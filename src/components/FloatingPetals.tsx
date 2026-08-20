import { useEffect, useRef } from 'react'

interface Petal {
  el: HTMLDivElement
  timeoutId: ReturnType<typeof setTimeout>
}

export default function FloatingPetals() {
  const containerRef = useRef<HTMLDivElement>(null)
  const petalsRef = useRef<Petal[]>([])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function createPetal() {
      if (!container) return
      const petal = document.createElement('div')
      petal.classList.add('petal')

      const size = Math.random() * 8 + 4
      petal.style.width = `${size}px`
      petal.style.height = `${size}px`
      petal.style.left = `${Math.random() * 100}vw`
      petal.style.animationDuration = `${Math.random() * 10 + 10}s`
      petal.style.opacity = String(Math.random() * 0.5 + 0.2)

      container.appendChild(petal)

      const timeoutId = setTimeout(() => {
        petal.remove()
      }, 22000)

      petalsRef.current.push({ el: petal, timeoutId })
    }

    // Initial batch
    for (let i = 0; i < 15; i++) {
      setTimeout(createPetal, Math.random() * 5000)
    }

    const interval = setInterval(createPetal, 1500)

    return () => {
      clearInterval(interval)
      petalsRef.current.forEach(({ timeoutId }) => clearTimeout(timeoutId))
      petalsRef.current = []
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'fixed', inset: 0, zIndex: 15, pointerEvents: 'none', overflow: 'hidden' }}
      aria-hidden="true"
    />
  )
}
