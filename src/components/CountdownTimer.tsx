import { useState, useEffect } from 'react'

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
  isOver: boolean
}

const WEDDING_DATE = new Date('October 31, 2026 08:00:00').getTime()

function calculateTimeLeft(): TimeLeft {
  const distance = WEDDING_DATE - Date.now()
  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true }
  }
  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((distance % (1000 * 60)) / 1000),
    isOver: false,
  }
}

function pad(n: number) {
  return String(n).padStart(2, '0')
}

interface CountdownTimerProps {
  variant?: 'hero' | 'section'
}

export default function CountdownTimer({ variant = 'hero' }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000)
    return () => clearInterval(interval)
  }, [])

  if (timeLeft.isOver) {
    return (
      <p className="font-display" style={{ fontSize: '2rem', textAlign: 'center' }}>
        Today is the Day!
      </p>
    )
  }

  const units = [
    { label: 'Days', value: pad(timeLeft.days) },
    { label: 'Hours', value: pad(timeLeft.hours) },
    { label: 'Minutes', value: pad(timeLeft.minutes) },
    { label: 'Seconds', value: pad(timeLeft.seconds) },
  ]

  return (
    <div className={`countdown${variant === 'section' ? ' countdown--section' : ''}`}>
      {units.map(({ label, value }) => (
        <div key={label} className="countdown__unit">
          <span className="countdown__value">{value}</span>
          <span className="countdown__label">{label}</span>
        </div>
      ))}
    </div>
  )
}
