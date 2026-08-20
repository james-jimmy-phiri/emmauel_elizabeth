import { Link, useNavigate, useLocation } from 'react-router-dom'

interface RsvpLinkProps {
  className?: string
  children: React.ReactNode
}

export default function RsvpLink({ className = 'btn btn--gold', children }: RsvpLinkProps) {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    const scroll = () => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
    if (location.pathname === '/') {
      scroll()
    } else {
      navigate('/')
      setTimeout(scroll, 350)
    }
  }

  return (
    <Link to="/" className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
