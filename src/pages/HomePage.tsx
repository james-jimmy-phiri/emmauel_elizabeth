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
            title="You Are Invited"
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

              <p className="invitation-redesign__eyebrow">You Are Invited</p>

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
      <section className="section" style={{ background: 'var(--color-primary)' }}>
        <div className="container text-center">
          <div className="reveal--scale">
            <span className="font-label" style={{ color: 'var(--champagne)', display: 'block', marginBottom: '16px', opacity: 0.85 }}>
              Counting Down
            </span>
            <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#ffffff', marginBottom: '40px', fontStyle: 'italic' }}>
              The Big Day Approaches
            </h2>
            <CountdownTimer variant="hero" />
            <p className="font-script" style={{ fontSize: '22px', color: 'var(--champagne)', marginTop: '40px', opacity: 0.9 }}>
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
      <section className="section--dark" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ width: '100%' }}>
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

          <div className="text-center" style={{ margin: '36px 0' }}>
            <Link to="/gallery" className="btn btn--outline-dark btn--square" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Full Gallery</Link>
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
            <Link to="/program" className="btn btn--mauve btn--square">View Full Program</Link>
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
                  <a href="tel:+265994478217" className="rsvp-contact__btn rsvp-contact__btn--call">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.4em' }}>call</span>
                    Call
                  </a>
                  <a href="https://wa.me/265994478217" target="_blank" rel="noopener noreferrer" className="rsvp-contact__btn rsvp-contact__btn--wa">
                    <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
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
                  <a href="tel:+265888332586" className="rsvp-contact__btn rsvp-contact__btn--call">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.4em' }}>call</span>
                    Call
                  </a>
                  <a href="https://wa.me/265888332586" target="_blank" rel="noopener noreferrer" className="rsvp-contact__btn rsvp-contact__btn--wa">
                    <svg width="1.4em" height="1.4em" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.015c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.885m8.413-18.297A11.81 11.81 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.88 11.88 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413Z"/>
                    </svg>
                    WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

