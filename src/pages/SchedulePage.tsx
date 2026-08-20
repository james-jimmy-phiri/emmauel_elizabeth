import { useScrollReveal } from '../hooks/useScrollReveal'
import homePhoto from '../assets/home_photo.jpeg'
import smallMediaHome from '../assets/small_media_home.jpeg'
import emmanual1 from '../assets/emmanual_1.jpeg'
import emmanual2 from '../assets/emmanual_2.jpeg'

const COUPLE_IMG = homePhoto
const ATTIRE_IMG = smallMediaHome
const VENUE1_IMG = emmanual1
const VENUE2_IMG = emmanual2

const TIMELINE_EVENTS = [
  {
    time: '07:30 AM',
    title: 'The Vows',
    desc: 'A solemn and beautiful ceremony at the Highway Bride Tabernacle, witnessing the union of two souls.',
    side: 'left',
    color: 'var(--color-primary)',
    ringColor: 'rgba(237,220,255,0.5)',
  },
  {
    time: '10:00 AM',
    title: 'Couple Portraits',
    desc: 'The newlyweds steal a private moment in the gardens for editorial-style photography capturing their first hours as husband and wife.',
    side: 'right',
    color: 'var(--color-secondary)',
    ringColor: 'rgba(213,232,203,0.5)',
  },
  {
    time: '12:30 PM',
    title: 'Grand Entrance',
    desc: 'The celebration kicks off at the Greek Orthodox Garden with vibrant music and traditional Malawian hospitality.',
    side: 'left',
    color: 'var(--color-primary)',
    ringColor: 'rgba(237,220,255,0.5)',
  },
]

export default function SchedulePage() {
  const pageRef = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef}>
      {/* ═══ HERO HEADER ═══ */}
      <header
        style={{
          paddingTop: '160px',
          paddingBottom: '80px',
          padding: '160px var(--spacing-margin-desktop) 80px',
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
        }}
      >
        <span
          className="font-section-header"
          style={{ textTransform: 'uppercase', letterSpacing: '0.3em', color: 'var(--color-outline)', display: 'block', marginBottom: '24px' }}
        >
          The Day
        </span>
        <h1
          className="font-display-xl"
          style={{ fontSize: 'clamp(48px, 7vw, 84px)', color: 'var(--color-primary)', marginBottom: '32px' }}
        >
          Wedding Details
        </h1>
        <p
          className="font-body-lg"
          style={{ color: 'var(--color-on-surface-variant)', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}
        >
          Saturday, 9 August 2026 — a day we have long awaited. Join us as we celebrate the beginning of our forever in two cherished locations.
        </p>
      </header>

      {/* ═══ KEY EVENTS ═══ */}
      <section
        style={{
          padding: '0 var(--spacing-margin-desktop)',
          display: 'grid',
          gridTemplateColumns: '7fr 5fr',
          gap: 'var(--spacing-gutter)',
          alignItems: 'center',
          maxWidth: '1440px',
          margin: '0 auto',
          marginBottom: 'var(--spacing-section-gap)',
        }}
        className="reveal events-grid"
      >
        <div style={{ overflow: 'hidden' }}>
          <img
            src={COUPLE_IMG}
            alt="Enock and Gloria wedding portrait"
            style={{
              width: '100%',
              aspectRatio: '4/5',
              objectFit: 'cover',
              transition: 'transform 0.7s',
            }}
            className="editorial-shadow"
            onMouseEnter={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.05)')}
            onMouseLeave={e => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
          />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', paddingLeft: '48px' }}>
          {/* Event 1 */}
          <div style={{ borderLeft: '2px solid var(--color-primary-fixed)', paddingLeft: '32px' }}>
            <span className="font-section-header" style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-outline)' }}>07:30 AM</span>
            <h3 className="font-headline-lg" style={{ fontSize: '40px', color: 'var(--color-primary)', margin: '8px 0 4px' }}>Officiation</h3>
            <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Highway Bride Tabernacle</p>
            <p className="font-label-sm" style={{ color: 'var(--color-outline)', marginTop: '8px', fontStyle: 'italic' }}>
              The sacred union ceremony where vows will be exchanged.
            </p>
          </div>

          {/* Event 2 */}
          <div style={{ borderLeft: '2px solid var(--color-secondary-fixed)', paddingLeft: '32px' }}>
            <span className="font-section-header" style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'var(--color-outline)' }}>12:30 PM</span>
            <h3 className="font-headline-lg" style={{ fontSize: '40px', color: 'var(--color-primary)', margin: '8px 0 4px' }}>Reception</h3>
            <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>Greek Orthodox Garden</p>
            <p className="font-label-sm" style={{ color: 'var(--color-outline)', marginTop: '8px', fontStyle: 'italic' }}>
              Dinner, dancing, and heartfelt celebrations under the Malawian sky.
            </p>
          </div>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .events-grid { grid-template-columns: 1fr !important; }
            .events-grid > div:last-child { padding-left: 0 !important; }
          }
        `}</style>
      </section>

      {/* ═══ ELEGANT TIMELINE ═══ */}
      <section style={{ background: 'var(--color-surface-container-low)', padding: '96px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 var(--spacing-margin-mobile)' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
            <span className="font-section-header" style={{ textTransform: 'uppercase', color: 'var(--color-outline)', letterSpacing: '0.2em' }}>Order of Events</span>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)', marginTop: '16px' }}>Wedding Timeline</h2>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Center Line */}
            <div
              className="timeline-line"
              style={{
                position: 'absolute',
                left: '50%',
                top: 0,
                bottom: 0,
                width: '1px',
                transform: 'translateX(-50%)',
              }}
            />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '96px' }}>
              {TIMELINE_EVENTS.map(({ time, title, desc, side, color, ringColor }, i) => (
                <div
                  key={i}
                  className="reveal"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    position: 'relative',
                  }}
                >
                  {/* Left Content */}
                  <div
                    style={{
                      width: '50%',
                      paddingRight: side === 'left' ? '64px' : 0,
                      textAlign: side === 'left' ? 'right' : 'left',
                      paddingLeft: side === 'right' ? '64px' : 0,
                      order: side === 'left' ? 0 : 2,
                    }}
                  >
                    {side === 'left' && (
                      <>
                        <span className="font-section-header" style={{ color, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{time}</span>
                        <h4 className="font-headline-lg" style={{ fontSize: '24px', color: 'var(--color-primary)', margin: '8px 0' }}>{title}</h4>
                        <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{desc}</p>
                      </>
                    )}
                  </div>

                  {/* Dot */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      background: color,
                      border: '4px solid var(--color-background)',
                      boxShadow: `0 0 0 4px ${ringColor}`,
                      zIndex: 2,
                    }}
                  />

                  {/* Right Content */}
                  <div
                    style={{
                      width: '50%',
                      paddingLeft: side === 'right' ? '64px' : 0,
                      order: side === 'left' ? 2 : 0,
                    }}
                  >
                    {side === 'right' && (
                      <>
                        <span className="font-section-header" style={{ color, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{time}</span>
                        <h4 className="font-headline-lg" style={{ fontSize: '24px', color: 'var(--color-primary)', margin: '8px 0' }}>{title}</h4>
                        <p className="font-body-md" style={{ color: 'var(--color-on-surface-variant)' }}>{desc}</p>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ DRESS CODE ═══ */}
      <section style={{ padding: 'var(--spacing-section-gap) var(--spacing-margin-desktop)', maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-section-gap)', alignItems: 'center' }}
          className="reveal dress-grid-sched"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <span className="font-section-header" style={{ textTransform: 'uppercase', color: 'var(--color-outline)', letterSpacing: '0.2em' }}>Guest Attire</span>
            <h2 className="font-headline-lg" style={{ color: 'var(--color-primary)' }}>Dress Code</h2>
            <p className="font-body-lg" style={{ color: 'var(--color-on-surface-variant)' }}>
              We kindly invite our guests to dress formally and modestly in line with the wedding color palette. Let us create a visual harmony that mirrors the joy of our union.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
              {/* Gentlemen */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontVariationSettings: "'FILL' 1" }}>man</span>
                  <span className="font-section-header" style={{ textTransform: 'uppercase', letterSpacing: '0.2em' }}>Gentlemen</span>
                </div>
                <p className="font-label-sm" style={{ color: 'var(--color-outline)' }}>Formal suits in black or nude tones. Ties and pocket squares welcome.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#1b1c19', border: '1px solid rgba(123,117,126,0.2)' }} title="Black" />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E5D5C4', border: '1px solid rgba(123,117,126,0.2)' }} title="Nude" />
                </div>
              </div>
              {/* Ladies */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontVariationSettings: "'FILL' 1" }}>woman</span>
                  <span className="font-section-header" style={{ textTransform: 'uppercase', letterSpacing: '0.2em' }}>Ladies</span>
                </div>
                <p className="font-label-sm" style={{ color: 'var(--color-outline)' }}>Modest dresses or formal wear using the wedding color palette below.</p>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#B7A9C5', border: '1px solid rgba(123,117,126,0.2)' }} title="Lavender" />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'var(--color-primary)', border: '1px solid rgba(123,117,126,0.2)' }} title="Plum" />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#AEC6CF', border: '1px solid rgba(123,117,126,0.2)' }} title="Blue" />
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C1E1C1', border: '1px solid rgba(123,117,126,0.2)' }} title="Green" />
                </div>
              </div>
            </div>
          </div>

          {/* Attire Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ aspectRatio: '1', background: 'var(--color-surface-container-high)', overflow: 'hidden' }} className="editorial-shadow">
              <img src={ATTIRE_IMG} alt="Wedding attire flat lay" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div
              style={{
                position: 'absolute',
                bottom: '-32px',
                right: '-32px',
                background: 'var(--color-primary)',
                padding: '32px',
                maxWidth: '280px',
              }}
              className="attire-quote"
            >
              <p className="font-headline-lg" style={{ fontSize: '18px', fontStyle: 'italic', color: 'var(--color-on-primary)' }}>
                "Dress as if you are attending a celebration of great love."
              </p>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .dress-grid-sched { grid-template-columns: 1fr !important; }
            .attire-quote { display: none !important; }
          }
        `}</style>
      </section>

      {/* ═══ VENUES ═══ */}
      <section
        style={{
          background: 'var(--color-tertiary)',
          color: 'var(--color-on-tertiary)',
          padding: '128px var(--spacing-margin-desktop)',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }} className="reveal">
            <span className="font-section-header" style={{ textTransform: 'uppercase', letterSpacing: '0.2em', color: 'rgba(183,169,197,0.7)' }}>Locations</span>
            <h2 className="font-headline-lg" style={{ marginTop: '16px' }}>Where to Be</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-gutter)' }} className="venues-grid">
            {/* Venue 1 */}
            <div
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.5s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.10)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--color-primary-fixed-dim)' }}>church</span>
                  <span className="font-section-header" style={{ color: 'rgba(183,169,197,0.7)', textTransform: 'uppercase' }}>07:30 AM</span>
                </div>
                <h3 className="font-headline-lg" style={{ fontSize: '28px', marginBottom: '16px' }}>Highway Bride Tabernacle</h3>
                <p className="font-body-md" style={{ color: 'rgba(183,169,197,0.8)', marginBottom: '32px' }}>
                  Area 49, Lilongwe. The ceremony venue is known for its peaceful atmosphere and beautiful architecture.
                </p>
              </div>
              <div>
                <div style={{ height: '192px', overflow: 'hidden', marginBottom: '16px' }}>
                  <img
                    src={VENUE1_IMG}
                    alt="Highway Bride Tabernacle"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)', opacity: 0.5, transition: 'all 0.7s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0)'; (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(50%)'; (e.currentTarget as HTMLImageElement).style.opacity = '0.5' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '16px', paddingTop: '16px' }}>
                  <button className="font-section-header" style={{ flex: 1, padding: '16px', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'inherit', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background 0.3s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.15)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
                  >View Map</button>
                  <button className="font-section-header" style={{ flex: 1, padding: '16px', background: 'var(--color-primary-fixed)', color: 'var(--color-primary)', cursor: 'pointer', border: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background 0.3s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary-fixed-dim)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-primary-fixed)')}
                  >Get Directions</button>
                </div>
              </div>
            </div>

            {/* Venue 2 */}
            <div
              className="reveal"
              style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(12px)',
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'background 0.5s',
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.10)')}
              onMouseLeave={e => ((e.currentTarget as HTMLDivElement).style.background = 'rgba(255,255,255,0.05)')}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '40px', color: 'var(--color-secondary-fixed-dim)' }}>park</span>
                  <span className="font-section-header" style={{ color: 'rgba(183,169,197,0.7)', textTransform: 'uppercase' }}>12:30 PM</span>
                </div>
                <h3 className="font-headline-lg" style={{ fontSize: '28px', marginBottom: '16px' }}>Greek Orthodox Garden</h3>
                <p className="font-body-md" style={{ color: 'rgba(183,169,197,0.8)', marginBottom: '32px' }}>
                  A lush, sprawling garden venue perfect for an elegant outdoor reception filled with joy and light.
                </p>
              </div>
              <div>
                <div style={{ height: '192px', overflow: 'hidden', marginBottom: '16px' }}>
                  <img
                    src={VENUE2_IMG}
                    alt="Greek Orthodox Garden"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(50%)', opacity: 0.5, transition: 'all 0.7s' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(0)'; (e.currentTarget as HTMLImageElement).style.opacity = '1' }}
                    onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.filter = 'grayscale(50%)'; (e.currentTarget as HTMLImageElement).style.opacity = '0.5' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '16px', paddingTop: '16px' }}>
                  <button className="font-section-header" style={{ flex: 1, padding: '16px', border: '1px solid rgba(255,255,255,0.3)', background: 'transparent', color: 'inherit', cursor: 'pointer', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background 0.3s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.15)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'transparent')}
                  >View Map</button>
                  <button className="font-section-header" style={{ flex: 1, padding: '16px', background: 'var(--color-secondary-fixed)', color: 'var(--color-secondary)', cursor: 'pointer', border: 'none', textTransform: 'uppercase', letterSpacing: '0.1em', transition: 'background 0.3s' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-secondary-fixed-dim)')}
                    onMouseLeave={e => ((e.currentTarget as HTMLButtonElement).style.background = 'var(--color-secondary-fixed)')}
                  >Get Directions</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 767px) {
            .venues-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>
    </div>
  )
}
