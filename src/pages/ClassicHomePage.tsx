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
    desc: 'A joyful afternoon of celebration, music, feasting and dancing with family and friends at Mchinji TTC hall.',
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
              <h3 className="classic-detail-card__venue">Mchinji TTC hall</h3>
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
                    <a href={`tel:${c.tel}`} className="btn-call">
                      <span className="material-symbols-outlined" style={{ fontSize: '1.4em' }}>call</span>
                      Call
                    </a>
                    <a href={`https://wa.me/${c.wa}`} target="_blank" rel="noopener noreferrer" className="btn-wa">
                      <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                      </svg>
                      WhatsApp
                    </a>
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
          Mchinji Bible Believers Church · Mchinji TTC hall
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
