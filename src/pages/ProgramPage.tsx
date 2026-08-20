import { Link } from 'react-router-dom'
import RsvpLink from '../components/RsvpLink'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'
import coupleImage from '../assets/homepage.jpeg'

const PROGRAM_EVENTS = [
  {
    time: '07:00 AM',
    title: 'Guest Arrival',
    location: 'Mchinji Bible Believers Church',
    description: 'Guests are welcomed and seated as we prepare for the sacred ceremony ahead.',
    side: 'left' as const,
  },
  {
    time: '08:00 AM',
    title: 'Wedding Officiation',
    location: 'Mchinji Bible Believers Church',
    description: 'The solemn and joyful exchange of vows before God, family, and dear friends.',
    side: 'right' as const,
  },
  {
    time: '09:30 AM',
    title: 'Photo Session',
    location: 'Church Grounds',
    description: 'Capturing precious moments with family, bridal party, and the newlyweds.',
    side: 'left' as const,
  },
  {
    time: '11:30 AM',
    title: 'Departure to Reception',
    location: 'En Route to CeeBex Events Garden',
    description: 'A brief journey to our reception venue where the celebration continues.',
    side: 'right' as const,
  },
  {
    time: '01:00 PM',
    title: 'Reception Begins',
    location: 'CeeBex Events Garden',
    description: 'Grand entrance of the newlyweds, followed by warm welcomes and opening remarks.',
    side: 'left' as const,
  },
  {
    time: '02:00 PM',
    title: 'Lunch & Celebrations',
    location: 'CeeBex Events Garden',
    description: 'A delightful feast shared with loved ones, accompanied by toasts and tributes.',
    side: 'right' as const,
  },
  {
    time: '04:00 PM',
    title: 'Cake Cutting',
    location: 'CeeBex Events Garden',
    description: 'A sweet tradition marking the beginning of our shared life together.',
    side: 'left' as const,
  },
  {
    time: '05:00 PM',
    title: 'Dancing & Entertainment',
    location: 'CeeBex Events Garden',
    description: 'Music, dance, and merriment as we celebrate into the evening hours.',
    side: 'right' as const,
  },
  {
    time: '08:00 PM',
    title: 'Send-Off',
    location: 'CeeBex Events Garden',
    description: 'With grateful hearts, we bid farewell as we embark on our new journey together.',
    side: 'left' as const,
  },
]

export default function ProgramPage() {
  const pageRef = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="page">
      <header className="page-hero">
        <span className="font-label text-gold">The Day</span>
        <h1 className="page-hero__title">Wedding Details</h1>
        <p className="page-hero__subtitle">
          Saturday, 31st October 2026 — a day we have long awaited.
        </p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="schedule-intro reveal">
          <div className="schedule-intro__photo img-rounded">
            <img src={coupleImage} alt="Emmanuel and Elizabeth" />
          </div>
          <div className="schedule-intro__events">
            <div className="schedule-event-block">
              <p className="schedule-event-block__time">08:00 AM</p>
              <h3 className="schedule-event-block__title">Officiation</h3>
              <p className="schedule-event-block__venue">Mchinji Bible Believers Church</p>
              <p className="schedule-event-block__note">The sacred union ceremony where vows will be exchanged.</p>
            </div>
            <div className="schedule-event-block">
              <p className="schedule-event-block__time">01:00 PM</p>
              <h3 className="schedule-event-block__title">Reception</h3>
              <p className="schedule-event-block__venue">CeeBex Events Garden</p>
              <p className="schedule-event-block__note">Dinner, dancing, and heartfelt celebrations with loved ones.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="Order of Events" title="Wedding Timeline" subtitle="A beautiful day unfolds in cherished moments" />

          <div className="program-timeline reveal">
            <div className="program-timeline__line" />
            {PROGRAM_EVENTS.map((event, i) => (
              <div key={i} className={`program-event program-event--${event.side}`}>
                <div className="program-event__dot" />
                <div className="program-event__content">
                  <p className="program-event__time">{event.time}</p>
                  <h4 className="program-event__title">{event.title}</h4>
                  <p className="program-event__location">{event.location}</p>
                  <p className="program-event__desc">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="section text-center">
        <div className="container reveal">
          <h2 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 40px)', marginBottom: '24px', fontStyle: 'italic' }}>
            Will you join us?
          </h2>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <RsvpLink>RSVP Now</RsvpLink>
            <Link to="/" className="btn btn--outline-dark">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
