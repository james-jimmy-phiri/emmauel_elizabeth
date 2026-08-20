import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Our Story', to: '/our-story' },
  { label: 'Program', to: '/program' },
  { label: 'Gallery', to: '/gallery' },
]
//  { label: 'Classic', to: '/classic' },

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isTransparent = location.pathname === '/' && !scrolled

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollToRsvp = () => {
    setMobileOpen(false)
    const scroll = () => document.getElementById('rsvp')?.scrollIntoView({ behavior: 'smooth' })
    if (location.pathname === '/' || location.pathname === '/classic') {
      scroll()
    } else {
      navigate('/')
      setTimeout(scroll, 350)
    }
  }

  const navClass = [
    'navbar',
    scrolled ? 'navbar--scrolled' : '',
    isTransparent ? 'navbar--transparent' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <nav className={navClass} role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          Emmanuel &amp; Elizabeth
        </Link>

        <div className="navbar__links">
          {NAV_LINKS.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              className={`navbar__link${location.pathname === to ? ' navbar__link--active' : ''}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="navbar__actions">
          <ThemeToggle light={isTransparent} />
          <button type="button" className="navbar__rsvp" onClick={scrollToRsvp}>
            RSVP
          </button>
          <button
            type="button"
            className="navbar__menu-btn"
            onClick={() => setMobileOpen(v => !v)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span className="material-symbols-outlined">
              {mobileOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`mobile-drawer${mobileOpen ? ' mobile-drawer--open' : ''}`}
        aria-hidden={!mobileOpen}
      >
        {NAV_LINKS.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className={`mobile-drawer__link${location.pathname === to ? ' mobile-drawer__link--active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
        <button type="button" className="btn btn--gold" onClick={scrollToRsvp}>
          RSVP
        </button>
      </div>
    </>
  )
}
