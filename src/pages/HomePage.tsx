import { Link } from 'react-router-dom'
import CountdownTimer from '../components/CountdownTimer'
import HeroSlider from '../components/HeroSlider'
import SectionHeading from '../components/SectionHeading'
import VenueMap, { VENUES } from '../components/VenueMap'
import { useScrollReveal } from '../hooks/useScrollReveal'
import hero1 from '../assets/gallery_1.jpeg'
import hero2 from '../assets/homepage.jpeg'
import hero3 from '../assets/together1.jpeg'
import coupleImage from '../assets/emmanual_1.jpeg'
import galleryA from '../assets/slideshow1.jpeg'
import galleryB from '../assets/slideshow_22.jpeg'
import galleryC from '../assets/IMG_7724.jpg.jpeg'
import galleryD from '../assets/IMG_7727.jpg.jpeg'
import galleryE from '../assets/together1.jpeg'
import galleryF from '../assets/gallery_3.jpeg'
import galleryG from '../assets/emmanual_2.jpeg'
import invitePhoto from '../assets/emmanual_1.jpeg'

const HERO_SLIDES = [hero1, hero2, hero3]

// All photos for the marquee strip — duplicated inside the JSX for seamless looping
const MARQUEE_PHOTOS = [
  { src: hero1, alt: 'Together' },
  { src: galleryA, alt: 'Moment' },
  { src: galleryB, alt: 'Love' },
  { src: galleryC, alt: 'Celebration' },
  { src: galleryD, alt: 'Portrait' },
  { src: galleryE, alt: 'Us' },
  { src: galleryF, alt: 'Joy' },
  { src: galleryG, alt: 'Smiles' },
  { src: hero2, alt: 'Forever' },
  { src: coupleImage, alt: 'Couple' },
]

export default function HomePage() {
  const pageRef = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="page">
      {/* ── HERO ── */}
      <header className="hero">
        <HeroSlider images={HERO_SLIDES} alt="Emmanuel and Elizabeth" />

        <div className="hero__content animate-fade-up">
          <span className="hero__eyebrow">We Are Getting Married</span>
          <h1 className="hero__names">
            <span className="hero__names-line">Emmanuel</span>
            <span className="hero__ampersand">&amp;</span>
            <span className="hero__names-line">Elizabeth</span>
          </h1>
          <p className="hero__date">Saturday, 31st October 2026</p>

          <div className="hero__countdown-wrap">
            <CountdownTimer variant="hero" />
          </div>

          <div className="hero__actions">
            <a href="#invitation" className="btn btn--gold">View Details</a>
            <a href="#rsvp" className="btn btn--outline">RSVP</a>
          </div>
        </div>

        <div className="hero__scroll">
          <span className="material-symbols-outlined">expand_more</span>
        </div>
      </header>

      {/* ── YOU ARE INVITED — redesigned editorial split layout ── */}
      <section id="invitation" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="You Are Invited"
            title="Cordially Invites You"
            subtitle="To witness and celebrate the union of two hearts becoming one"
          />

          <div className="invitation-redesign reveal--scale">
            {/* LEFT: photo with overlay quote */}
            <div className="invitation-redesign__media">
              <img
                src={invitePhoto}
                alt="Emmanuel and Elizabeth"
                className="invitation-redesign__photo"
              />
              <div className="invitation-redesign__photo-overlay" />
              <div className="invitation-redesign__quote">
                <span className="invitation-redesign__quote-text">
                  "Two are better than one; because they have a good reward
                  for their labour."
                </span>
                <span className="invitation-redesign__quote-attr">
                  — Ecclesiastes 4:9
                </span>
              </div>
            </div>

            {/* RIGHT: invitation card */}
            <div className="invitation-redesign__card">
              {/* Monogram */}
              <div className="invitation-monogram">
                <span className="invitation-monogram__text">E&amp;E</span>
              </div>

              <p className="invitation-redesign__eyebrow">You Are Cordially Invited</p>

              {/* Family 1 */}
              <p className="invitation-redesign__families">
                The Family of Mr. &amp; Mrs. Tembo
                <br />
                <span style={{ fontSize: '0.88em', opacity: 0.75 }}>
                  of Mwazika Village, T/A Maseya, Chikwawa
                </span>
              </p>

              {/* &amp; divider */}
              <div className="invitation-redesign__and">and</div>

              {/* Family 2 */}
              <p className="invitation-redesign__families">
                The Family of Pastor &amp; Mrs. Kapala
                <br />
                <span style={{ fontSize: '0.88em', opacity: 0.75 }}>
                  of Njati Village, T/A Kayembe, Dowa
                </span>
              </p>

              {/* Gold divider with heart */}
              <div className="invitation-redesign__separator">
                <span
                  className="invitation-redesign__separator-icon material-symbols-outlined"
                >
                  favorite
                </span>
              </div>

              <p className="invitation-redesign__invite-text">
                joyfully invite you to the wedding of their children
              </p>

              <h3 className="invitation-redesign__couple">
                <span>Emmanuel</span> &amp; <span>Elizabeth</span>
              </h3>

              {/* Date badge */}
              <div className="invitation-redesign__date-badge">
                <span className="invitation-redesign__date-badge-label">Save the Date</span>
                <span className="invitation-redesign__date-badge-date">
                  31 · October · 2026
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* ── COUNTDOWN ── */}
      <section className="section section--dark">
        <div className="container text-center">
          <div className="reveal--scale">
            <span className="font-label" style={{ color: 'var(--gold-light)', display: 'block', marginBottom: '16px' }}>
              Counting Down
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#fff', marginBottom: '40px', fontStyle: 'italic' }}>
              The Big Day Approaches
            </h2>
            <CountdownTimer variant="section" />
            <p className="font-script" style={{ fontSize: '22px', color: 'var(--gold)', marginTop: '40px', opacity: 0.85 }}>
              31 · 10 · 2026
            </p>
          </div>
        </div>
      </section>


      {/* ── WEDDING COLORS ── */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="Guest Attire" title="Wedding Colors" subtitle="We kindly request our guests to dress modestly" />
          <div className="dress-grid reveal-stagger">
            <div className="dress-card">
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-accent)', marginBottom: '12px' }}>apparel</span>
              <h3 className="dress-card__title">Ladies</h3>
              <p className="dress-card__desc">Blush Pink, Mauve, Champagne Gold, and White</p>
              <div className="color-swatches">
                <div className="color-swatch" style={{ background: '#E8B4B8' }} title="Blush Pink" />
                <div className="color-swatch" style={{ background: '#9B7B9E' }} title="Mauve" />
                <div className="color-swatch" style={{ background: '#C9A86C' }} title="Champagne Gold" />
                <div className="color-swatch" style={{ background: '#FFFFFF' }} title="White" />
              </div>
            </div>
            <div className="dress-card">
              <span className="material-symbols-outlined" style={{ fontSize: '32px', color: 'var(--color-accent)', marginBottom: '12px' }}>dry_cleaning</span>
              <h3 className="dress-card__title">Gentlemen</h3>
              <p className="dress-card__desc">Formal suits in black and nude colors</p>
              <div className="color-swatches">
                <div className="color-swatch" style={{ background: '#1A1618' }} title="Black" />
                <div className="color-swatch" style={{ background: '#D5C8B5' }} title="Nude" />
              </div>
            </div>
            <div className="dress-card dress-card--photo">
              <img src={galleryB} alt="Dress code inspiration" />
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY MARQUEE ── */}
      <section className="section section--dark">
        <div className="container container--wide">
          <SectionHeading eyebrow="Memories" title="Gallery" />

          <div className="gallery-marquee reveal">
            <div className="gallery-marquee__track">
              {/* First set */}
              {MARQUEE_PHOTOS.map(({ src, alt }) => (
                <div key={`a-${alt}`} className="gallery-marquee__item">
                  <img src={src} alt={alt} loading="lazy" />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {MARQUEE_PHOTOS.map(({ src, alt }) => (
                <div key={`b-${alt}`} className="gallery-marquee__item">
                  <img src={src} alt={alt} loading="lazy" aria-hidden="true" />
                </div>
              ))}
            </div>
          </div>

          <div className="text-center" style={{ marginTop: '36px' }}>
            <Link to="/gallery" className="btn btn--outline-dark">View Full Gallery</Link>
          </div>
        </div>
      </section>
      {/* ── WHERE TO FIND US ── */}
      <section id="details" className="section">
        <div className="container">
          <SectionHeading
            eyebrow="The Celebration"
            title="Where to Find Us"
            subtitle="Tap a map to open directions in your preferred maps app"
          />

          <div className="details-grid reveal">
            <VenueMap {...VENUES.church} />
            <VenueMap {...VENUES.reception} />
          </div>

          <div className="text-center" style={{ marginTop: '40px' }}>
            <Link to="/program" className="btn btn--gold">View Full Program</Link>
          </div>
        </div>
      </section>


      {/* ── RSVP ── */}
      <section id="rsvp" className="section section--muted rsvp-section">
        <div className="container">
          <SectionHeading eyebrow="Join Us" title="Will You Join Us?" subtitle="Please let us know if you will celebrate with us" />
          <div className="reveal">
            <p className="font-body-lg text-muted" style={{ maxWidth: '520px', margin: '0 auto 16px' }}>
              Kindly confirm your attendance by contacting one of our representatives.
            </p>
            <div className="rsvp-contacts">
              <div className="rsvp-contact">
                <div className="rsvp-contact__row">
                  <div className="rsvp-contact__avatar img-rounded-full">WK</div>
                  <div>
                    <p className="rsvp-contact__name">Mr. Wisdom Kapala</p>
                    <p className="rsvp-contact__phone">0994 478 217</p>
                  </div>
                </div>
                <div className="rsvp-contact__actions">
                  <a href="tel:+265994478217" className="rsvp-contact__btn rsvp-contact__btn--call">Call</a>
                  <a href="https://wa.me/265994478217" target="_blank" rel="noopener noreferrer" className="rsvp-contact__btn rsvp-contact__btn--wa">WhatsApp</a>
                </div>
              </div>
              <div className="rsvp-contact">
                <div className="rsvp-contact__row">
                  <div className="rsvp-contact__avatar img-rounded-full">GT</div>
                  <div>
                    <p className="rsvp-contact__name">Mr. Goodwin Tembo</p>
                    <p className="rsvp-contact__phone">0888 332 586</p>
                  </div>
                </div>
                <div className="rsvp-contact__actions">
                  <a href="tel:+265888332586" className="rsvp-contact__btn rsvp-contact__btn--call">Call</a>
                  <a href="https://wa.me/265888332586" target="_blank" rel="noopener noreferrer" className="rsvp-contact__btn rsvp-contact__btn--wa">WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

