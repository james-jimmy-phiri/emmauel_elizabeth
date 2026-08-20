interface FloralDecorProps {
  variant?: 'corner-tl' | 'corner-br' | 'divider' | 'hero-accent'
  className?: string
}

export default function FloralDecor({ variant = 'divider', className = '' }: FloralDecorProps) {
  if (variant === 'corner-tl') {
    return (
      <svg
        className={`floral-svg floral-svg--corner-tl ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 120 Q40 80 80 100 T160 60 T200 20"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <ellipse cx="160" cy="60" rx="12" ry="8" fill="currentColor" opacity="0.25" transform="rotate(-30 160 60)" />
        <ellipse cx="80" cy="100" rx="10" ry="6" fill="currentColor" opacity="0.2" transform="rotate(20 80 100)" />
        <circle cx="200" cy="20" r="6" fill="currentColor" opacity="0.3" />
        <path d="M155 55 Q158 50 163 52 Q158 54 155 55" fill="currentColor" opacity="0.35" />
        <path d="M75 95 Q78 90 83 92 Q78 94 75 95" fill="currentColor" opacity="0.3" />
      </svg>
    )
  }

  if (variant === 'corner-br') {
    return (
      <svg
        className={`floral-svg floral-svg--corner-br ${className}`}
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M200 80 Q160 120 120 100 T40 140 T0 180"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
          opacity="0.4"
        />
        <ellipse cx="40" cy="140" rx="12" ry="8" fill="currentColor" opacity="0.25" transform="rotate(30 40 140)" />
        <ellipse cx="120" cy="100" rx="10" ry="6" fill="currentColor" opacity="0.2" transform="rotate(-20 120 100)" />
        <circle cx="0" cy="180" r="6" fill="currentColor" opacity="0.3" />
      </svg>
    )
  }

  if (variant === 'hero-accent') {
    return (
      <svg
        className={`floral-svg floral-svg--hero ${className}`}
        viewBox="0 0 400 120"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M0 60 Q100 20 200 60 T400 60"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.5"
        />
        <ellipse cx="100" cy="40" rx="16" ry="10" fill="currentColor" opacity="0.2" />
        <ellipse cx="200" cy="60" rx="20" ry="12" fill="currentColor" opacity="0.25" />
        <ellipse cx="300" cy="40" rx="16" ry="10" fill="currentColor" opacity="0.2" />
        <circle cx="200" cy="60" r="4" fill="currentColor" opacity="0.4" />
      </svg>
    )
  }

  return (
    <div className={`floral-divider ${className}`} aria-hidden="true">
      <span className="floral-divider__line" />
      <svg className="floral-divider__icon" viewBox="0 0 48 24" fill="none">
        <ellipse cx="24" cy="12" rx="10" ry="6" fill="currentColor" opacity="0.6" />
        <ellipse cx="14" cy="12" rx="6" ry="4" fill="currentColor" opacity="0.35" transform="rotate(-25 14 12)" />
        <ellipse cx="34" cy="12" rx="6" ry="4" fill="currentColor" opacity="0.35" transform="rotate(25 34 12)" />
        <circle cx="24" cy="12" r="2" fill="currentColor" />
      </svg>
      <span className="floral-divider__line" />
    </div>
  )
}
