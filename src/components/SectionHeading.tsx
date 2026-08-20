import FloralDecor from './FloralDecor'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  subtitle?: string
  align?: 'center' | 'left'
  light?: boolean
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading section-heading--${align}${light ? ' section-heading--light' : ''}`}>
      <span className="section-heading__eyebrow">{eyebrow}</span>
      <FloralDecor />
      <h2 className="section-heading__title">{title}</h2>
      {subtitle && <p className="section-heading__subtitle">{subtitle}</p>}
    </div>
  )
}
