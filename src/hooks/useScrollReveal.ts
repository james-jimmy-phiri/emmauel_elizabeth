import { useEffect, useRef } from 'react'

/**
 * Attaches an IntersectionObserver to all reveal elements inside the ref'd container.
 * Supported classes: .reveal, .reveal--left, .reveal--right, .reveal--scale, .reveal-stagger
 * Adds the 'active' class when each element scrolls into view.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )

    const selector = [
      '.reveal',
      '.reveal--left',
      '.reveal--right',
      '.reveal--scale',
      '.reveal-stagger',
    ].join(', ')

    const els = container.querySelectorAll(selector)
    els.forEach(el => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return containerRef
}
