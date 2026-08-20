import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import { VENUES } from '../components/VenueMap'
import './classic-home.css'
import hero1 from '../assets/homepage.jpeg'
import hero2 from '../assets/together1.jpeg'
import hero3 from '../assets/gallery_1.jpeg'
import photo1 from '../assets/emmanual_1.jpeg'
import photo2 from '../assets/emmanual_2.jpeg'
import photo3 from '../assets/emmanual_3.jpeg'
import photo4 from '../assets/slideshow1.jpeg'
import photo5 from '../assets/slideshow_22.jpeg'
import photo6 from '../assets/IMG_7724.jpg.jpeg'
import rsvpPhoto from '../assets/together1.jpeg'
import locationPhoto from '../assets/emmanual_1.jpeg'

const WEDDING_DATE = new Date('October 31, 2026 08:00:00').getTime()

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function mapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}

function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
}

function useCountdown() {
  const calc = () => {
    const d = WEDDING_DATE - Date.now()
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d % 86400000) / 3600000),
      minutes: Math.floor((d % 3600000) / 60000),
      seconds: Math.floor((d % 60000) / 1000),
    }
  }
  const [t, setT] = useState(calc)
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000)
    return () => clearInterval(id)
  }, [])
  return t
}

const TIMELINE = [
  {
    time: '08:00 AM',
    title: 'Officiation Ceremony',
    desc: 'The sacred moment when Emmanuel and Elizabeth exchange their vows before God and loved ones at Mchinji Bible Believers Church.',
  },
  {
    time: '01:00 PM',
    title: 'Wedding Reception',
    desc: 'A joyful afternoon of celebration, music, feasting and dancing with family and friends at CeeBex Events Garden.',
  },
]

const RSVP_CONTACTS = [
  { name: 'Mr. Wisdom Kapala', phone: '0994 478 217', tel: '+265994478217', wa: '265994478217' },
  { name: 'Mr. Goodwin Tembo', phone: '0888 332 586', tel: '+265888332586', wa: '265888332586' },
]

export default function ClassicHomePage() {
  const countdown = useCountdown()
  const pad = (n: number) => String(n).padStart(2, '0')

  return (
    <div className="classic-page">
      {/* ── HERO ── */}
      <header className="classic-hero" id="home">
        <HeroSlider images={[hero1, hero2, hero3]} alt="Emmanuel and Elizabeth" />
        <div className="classic-hero__inner">
          <p className="classic-hero__eyebrow">We Are Getting Married</p>
          <h1 className="classic-hero__names">Emmanuel &amp; Elizabeth</h1>
          <p className="classic-hero__date">Saturday, 31st October 2026</p>
          <p className="classic-hero__tagline">
            Together with their families, they joyfully invite you to celebrate their wedding day.
          </p>

          <nav className="classic-hero__nav" aria-label="Page sections">
            <a href="#home">Home</a>
            <a href="#details">Details</a>
            <a href="#timeline">Timeline</a>
            <a href="#location">Location</a>
            <a href="#rsvp">RSVP</a>
          </nav>

          <div className="classic-hero__btns">
            <a href="#details" className="classic-btn classic-btn--white">See More</a>
            <a href="#rsvp" className="classic-btn classic-btn--outline">RSVP</a>
          </div>
        </div>
      </header>

      {/* ── WEDDING DETAILS ── */}
      <section className="classic-section classic-section--cream" id="details">
        <div className="classic-container">
          <div className="classic-heading">
            <div className="classic-heading__line" />
            <h2 className="classic-heading__title">Wedding Details</h2>
            <p className="classic-heading__sub">Saturday, 31st October 2026 — a day we have long awaited.</p>
          </div>

          <div className="classic-details-cards">
            <div className="classic-detail-card">
              <div className="classic-detail-card__icon">
                <span className="material-symbols-outlined">church</span>
              </div>
              <p className="classic-detail-card__label">Ceremony</p>
              <h3 className="classic-detail-card__venue">Mchinji Bible Believers Church</h3>
              <p className="classic-detail-card__time">08:00 AM</p>
            </div>
            <div className="classic-detail-card">
              <div className="classic-detail-card__icon">
                <span className="material-symbols-outlined">celebration</span>
              </div>
              <p className="classic-detail-card__label">Reception</p>
              <h3 className="classic-detail-card__venue">CeeBex Events Garden</h3>
              <p className="classic-detail-card__time">01:00 PM</p>
            </div>
          </div>

          <div className="classic-details-photos">
            <div className="classic-photo classic-photo--tall">
              <img src={photo1} alt="Emmanuel and Elizabeth" className="classic-bw" />
            </div>
            <div className="classic-photo classic-photo--tall">
              <img src={photo2} alt="Couple portrait" className="classic-bw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── COUNTDOWN ── */}
      <section className="classic-section classic-section--purple" id="countdown">
        <div className="classic-container">
          <div className="classic-heading">
            <h2 className="classic-heading__title">The Big Day Approaches</h2>
            <p className="classic-heading__sub" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Every moment brings us closer to the day we say &ldquo;I do.&rdquo;
            </p>
          </div>

          <div className="classic-countdown">
            {[
              { label: 'Days', value: pad(countdown.days) },
              { label: 'Hours', value: pad(countdown.hours) },
              { label: 'Minutes', value: pad(countdown.minutes) },
              { label: 'Seconds', value: pad(countdown.seconds) },
            ].map(({ label, value }) => (
              <div key={label} className="classic-countdown__box">
                <span className="classic-countdown__value">{value}</span>
                <span className="classic-countdown__label">{label}</span>
              </div>
            ))}
          </div>

          <p className="classic-countdown__footer">
            Tap to view where to be ♥{' '}
            <a href="#location">See more</a>
          </p>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="classic-section classic-section--white" id="timeline">
        <div className="classic-container classic-container--wide">
          <div className="classic-heading classic-heading--left">
            <h2 className="classic-heading__title">Wedding Timeline</h2>
            <p className="classic-heading__sub">A beautiful day unfolds in two moments of joy.</p>
          </div>

          <div className="classic-timeline-grid">
            <div className="classic-timeline-photos">
              <div className="classic-photo classic-photo--square">
                <img src={photo3} alt="Timeline" className="classic-bw" />
              </div>
              <div className="classic-photo classic-photo--square">
                <img src={photo4} alt="Timeline" className="classic-bw" />
              </div>
            </div>

            <div className="classic-timeline-list">
              {TIMELINE.map(item => (
                <div key={item.time} className="classic-timeline-item">
                  <p className="classic-timeline-item__time">{item.time}</p>
                  <h3 className="classic-timeline-item__title">{item.title}</h3>
                  <p className="classic-timeline-item__desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── DRESS CODE ── */}
      <section className="classic-section classic-section--blush" id="dresscode">
        <div className="classic-container classic-container--wide">
          <div className="classic-heading">
            <h2 className="classic-heading__title">Dress Code</h2>
            <p className="classic-heading__sub">We kindly request our guests to dress modestly.</p>
          </div>

          <div className="classic-dress-grid">
            <div className="classic-dress-card">
              <h3 className="classic-dress-card__title">Gentlemen</h3>
              <p className="classic-dress-card__desc">Formal suits in black and nude colors.</p>
              <div className="classic-swatches">
                <div className="classic-swatch" style={{ background: '#1A1618' }} title="Black" />
                <div className="classic-swatch" style={{ background: '#D5C8B5' }} title="Nude" />
              </div>
            </div>
            <div className="classic-dress-card">
              <h3 className="classic-dress-card__title">Ladies</h3>
              <p className="classic-dress-card__desc">Blush Pink, Mauve, Champagne Gold, and White.</p>
              <div className="classic-swatches">
                <div className="classic-swatch" style={{ background: '#E8B4B8' }} title="Blush Pink" />
                <div className="classic-swatch" style={{ background: '#9B7B9E' }} title="Mauve" />
                <div className="classic-swatch" style={{ background: '#C9A86C' }} title="Gold" />
                <div className="classic-swatch" style={{ background: '#FFFFFF' }} title="White" />
              </div>
            </div>
            <div className="classic-photo classic-photo--tall">
              <img src={photo5} alt="Dress code inspiration" className="classic-bw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── PHOTO STRIP ── */}
      <div className="classic-strip">
        <div className="classic-strip__item">
          <img src={photo1} alt="Gallery" className="classic-bw" />
        </div>
        <div className="classic-strip__item">
          <img src={photo2} alt="Gallery" className="classic-bw" />
        </div>
        <div className="classic-strip__item">
          <img src={photo6} alt="Gallery" className="classic-bw" />
        </div>
      </div>

      {/* ── WHERE TO BE ── */}
      <section className="classic-section classic-section--cream" id="location">
        <div className="classic-container classic-container--wide">
          <div className="classic-heading classic-heading--left">
            <h2 className="classic-heading__title">Where to Be</h2>
            <p className="classic-heading__sub">Two beautiful venues for an unforgettable day.</p>
          </div>

          <div className="classic-location-grid">
            <div className="classic-location-cards">
              {[VENUES.church, VENUES.reception].map(venue => (
                <div key={venue.name} className="classic-location-card">
                  <div className="classic-location-card__header">
                    <span className="material-symbols-outlined classic-location-card__icon">location_on</span>
                    <span className="classic-location-card__time">{venue.time}</span>
                  </div>
                  <h3 className="classic-location-card__name">{venue.name}</h3>
                  <p className="classic-location-card__desc">{venue.description}</p>
                  <div className="classic-location-card__map">
                    <iframe
                      title={`Map of ${venue.name}`}
                      src={mapsEmbedUrl(venue.query)}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="classic-location-card__links">
                    <a href={mapsSearchUrl(venue.query)} target="_blank" rel="noopener noreferrer" className="link-map">
                      View Map
                    </a>
                    <a href={mapsDirectionsUrl(venue.query)} target="_blank" rel="noopener noreferrer" className="link-dir">
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="classic-location-photo">
              <img src={locationPhoto} alt="Venue" className="classic-bw" />
            </div>
          </div>
        </div>
      </section>

      {/* ── RSVP ── */}
      <section className="classic-section classic-section--white" id="rsvp">
        <div className="classic-container">
          <div className="classic-heading">
            <h2 className="classic-heading__title">Will You Join Us?</h2>
            <p className="classic-heading__sub">
              Kindly confirm your attendance before the big day. We would love to celebrate with you.
            </p>
          </div>

          <div className="classic-rsvp-grid">
            <div className="classic-rsvp-photo">
              <img src={rsvpPhoto} alt="Emmanuel and Elizabeth" className="classic-bw" />
            </div>
            <div className="classic-rsvp-cards">
              {RSVP_CONTACTS.map(c => (
                <div key={c.name} className="classic-rsvp-card">
                  <p className="classic-rsvp-card__name">{c.name}</p>
                  <p className="classic-rsvp-card__phone">{c.phone}</p>
                  <div className="classic-rsvp-card__actions">
                    <a href={`tel:${c.tel}`} className="btn-call">Call</a>
                    <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noopener noreferrer" className="btn-wa">WhatsApp</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="classic-footer">
        <p className="classic-footer__title">The Wedding of Emmanuel &amp; Elizabeth</p>
        <p className="classic-footer__date">31 · October · 2026</p>
        <p className="classic-footer__venues">
          Mchinji Bible Believers Church · CeeBex Events Garden
        </p>
        <p className="classic-footer__credit">
          With love, Emmanuel &amp; Elizabeth © 2026
        </p>
        <p className="classic-footer__credit" style={{ marginTop: '12px' }}>
          <Link to="/" style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>
            View modern version →
          </Link>
        </p>
      </footer>
    </div>
  )
}
