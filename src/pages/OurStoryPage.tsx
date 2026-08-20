import RsvpLink from '../components/RsvpLink'
import HeroSlider from '../components/HeroSlider'
import PolaroidCarousel from '../components/PolaroidCarousel'
import { useScrollReveal } from '../hooks/useScrollReveal'
import hero1 from '../assets/homepage.jpeg'
import hero2 from '../assets/together1.jpeg'
import hero3 from '../assets/gallery_1.jpeg'
import img1 from '../assets/emmanual_1.jpeg'
import img2 from '../assets/emmanual_2.jpeg'
import img3 from '../assets/emmanual_3.jpeg'
import img4 from '../assets/together1.jpeg'
import img5 from '../assets/slideshow_22.jpeg'

const POLAROIDS = [
  { src: img1, caption: 'Our Beginning', rotation: '-3deg' },
  { src: img2, caption: 'Growing Together', rotation: '2deg' },
  { src: img3, caption: 'Everyday Joy', rotation: '-2deg' },
  { src: img4, caption: 'Forever Us', rotation: '3deg' },
  { src: img5, caption: 'Hand in Hand', rotation: '-1deg' },
]

export default function OurStoryPage() {
  const pageRef = useScrollReveal() as React.RefObject<HTMLDivElement>

  return (
    <div ref={pageRef} className="page">
      <header className="story-hero">
        <HeroSlider images={[hero1, hero2, hero3]} alt="Our story" />
        <div className="hero__content">
          <span className="hero__eyebrow">Our Journey Together</span>
          <h1 className="hero__names" style={{ fontSize: 'clamp(28px, 5vw, 48px)' }}>
            The Story of Us
          </h1>
        </div>
      </header>

      <section className="section">
        <div className="container">
          <div className="story-milestone reveal">
            <div className="story-milestone__media">
              <div className="story-milestone__photo">
                <img src={img1} alt="The First Meet" />
              </div>
              <div className="story-milestone__badge story-milestone__badge--br">
                <p className="story-milestone__badge-label">Est. 2018</p>
                <p className="story-milestone__badge-text">In a crowded room, our worlds collided — and the rest was history.</p>
              </div>
            </div>
            <div className="story-milestone__text">
              <h2 className="story-milestone__title">The First Meet</h2>
              <div className="story-milestone__rule" />
              <p className="story-milestone__body">
                What began as a chance encounter blossomed into a friendship rooted in faith, laughter, and shared dreams. Emmanuel and Elizabeth discovered in each other a kindred spirit — someone who understood the value of patience, kindness, and unconditional love.
              </p>
            </div>
          </div>

          <div className="story-milestone story-milestone--reverse reveal">
            <div className="story-milestone__media">
              <div className="story-milestone__photo story-milestone__photo--wide">
                <img src={img2} alt="The Quiet Sunday" />
              </div>
              <div className="story-milestone__badge story-milestone__badge--tl">
                <p className="story-milestone__badge-label">The In-Betweens</p>
                <p className="story-milestone__badge-text">The beautiful mundanity of choosing each other, every single morning.</p>
              </div>
            </div>
            <div className="story-milestone__text">
              <h2 className="story-milestone__title">The Quiet Sunday</h2>
              <div className="story-milestone__rule" />
              <p className="story-milestone__body">
                Side by side, they built a relationship founded on trust and mutual respect. They learned that love is not merely a feeling — it is a daily choice, a commitment to stand together through every joy and challenge.
              </p>
            </div>
          </div>

          <div className="story-milestone reveal">
            <div className="story-milestone__media">
              <div className="story-milestone__photo story-milestone__photo--cinema">
                <img src={img3} alt="The Proposal" />
              </div>
            </div>
            <div className="story-milestone__text">
              <h2 className="story-milestone__title">The Proposal</h2>
              <div className="story-milestone__rule" />
              <p className="story-milestone__body">
                In a moment both intimate and profound, Emmanuel asked Elizabeth to be his forever. Surrounded by the beauty of their shared journey, she said yes — and with that single word, a new chapter began.
              </p>
              <blockquote className="story-milestone__quote">
                &ldquo;Two families, two villages, one beautiful union — a testament to love that transcends distance and unites hearts.&rdquo;
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── POLAROID SLIDESHOW (SHOWING 4 AT ONCE) ── */}
      <section className="section section--muted">
        <div className="container text-center" style={{ marginBottom: '8px' }}>
          <span className="font-label text-gold">Gallery of Us</span>
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginTop: '12px', fontStyle: 'italic' }}>
            Captured Moments
          </h2>
        </div>
        <PolaroidCarousel slides={POLAROIDS} visibleCount={4} />
      </section>

      <section className="section text-center">
        <div className="container reveal">
          <h3 className="font-display" style={{ fontSize: 'clamp(28px, 4vw, 36px)', fontStyle: 'italic', marginBottom: '28px' }}>
            Will you join our next chapter?
          </h3>
          <RsvpLink>RSVP to the Wedding</RsvpLink>
        </div>
      </section>
    </div>
  )
}
