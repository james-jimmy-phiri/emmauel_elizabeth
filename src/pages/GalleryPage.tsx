import { useState } from 'react'
import RsvpLink from '../components/RsvpLink'
import SectionHeading from '../components/SectionHeading'
import { useScrollReveal } from '../hooks/useScrollReveal'

import img1 from '../assets/gallery_1.jpeg'
import img2 from '../assets/gallery_3.jpeg'
import img3 from '../assets/slideshow1.jpeg'
import img4 from '../assets/slideshow_22.jpeg'
import img5 from '../assets/IMG_7724.jpg.jpeg'
import img6 from '../assets/IMG_7727.jpg.jpeg'
import img7 from '../assets/IMG_7746.jpg.jpeg'
import img8 from '../assets/together1.jpeg'
import img9 from '../assets/homepage.jpeg'
import img10 from '../assets/emmanual_1.jpeg'
import img11 from '../assets/emmanual_2.jpeg'
import img12 from '../assets/emmanual_3.jpeg'

type Category = 'all' | 'portraits' | 'moments' | 'celebration'

interface GalleryItem {
  id: number
  src: string
  title: string
  subtitle: string
  category: Category
  variant: 'bento-hero' | 'bento-tall' | 'bento-wide' | 'bento-square' | 'bento-featured'
}

const GALLERY_ITEMS: GalleryItem[] = [
  { id: 1,  src: img9,  title: 'Emmanuel & Elizabeth', subtitle: 'The Portrait', category: 'portraits', variant: 'bento-hero' },
  { id: 2,  src: img8,  title: 'Hand in Hand', subtitle: 'Together Forever', category: 'moments', variant: 'bento-tall' },
  { id: 3,  src: img1,  title: 'Golden Hour', subtitle: 'Celebration of Love', category: 'celebration', variant: 'bento-square' },
  { id: 4,  src: img10, title: 'First Sight', subtitle: 'Our Beginning', category: 'portraits', variant: 'bento-square' },
  { id: 5,  src: img4,  title: 'Soft Whispers', subtitle: 'Unconditional Grace', category: 'moments', variant: 'bento-wide' },
  { id: 6,  src: img11, title: 'Warm Embrace', subtitle: 'Shared Laughter', category: 'portraits', variant: 'bento-square' },
  { id: 7,  src: img2,  title: 'Joyful Hearts', subtitle: 'Walking Together', category: 'celebration', variant: 'bento-tall' },
  { id: 8,  src: img3,  title: 'Garden Dreams', subtitle: 'Nature & Harmony', category: 'moments', variant: 'bento-square' },
  { id: 9,  src: img12, title: 'Devotion', subtitle: 'Faith & Commitment', category: 'portraits', variant: 'bento-featured' },
  { id: 10, src: img5,  title: 'Eternal Bond', subtitle: 'Sweet Memories', category: 'celebration', variant: 'bento-square' },
  { id: 11, src: img6,  title: 'Pure Serenity', subtitle: 'Cherished Times', category: 'moments', variant: 'bento-square' },
  { id: 12, src: img7,  title: 'Bright Promise', subtitle: 'Looking Forward', category: 'celebration', variant: 'bento-wide' },
]

export default function GalleryPage() {
  const pageRef = useScrollReveal() as React.RefObject<HTMLDivElement>
  const [filter, setFilter] = useState<Category>('all')
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null)

  const filteredItems = filter === 'all' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === filter)

  return (
    <div ref={pageRef} className="page">
      <header className="page-hero page-hero--compact">
        <span className="font-label text-gold">Captured Moments</span>
        <h1 className="page-hero__title">Our Gallery</h1>
        <p className="page-hero__subtitle">Moments that tell the story of our love</p>
      </header>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container container--wide">
          {/* Filter Pills */}
          <div className="gallery-filter reveal">
            <button
              type="button"
              className={`gallery-filter__pill ${filter === 'all' ? 'gallery-filter__pill--active' : ''}`}
              onClick={() => setFilter('all')}
            >
              All Photos
            </button>
            <button
              type="button"
              className={`gallery-filter__pill ${filter === 'portraits' ? 'gallery-filter__pill--active' : ''}`}
              onClick={() => setFilter('portraits')}
            >
              Portraits
            </button>
            <button
              type="button"
              className={`gallery-filter__pill ${filter === 'moments' ? 'gallery-filter__pill--active' : ''}`}
              onClick={() => setFilter('moments')}
            >
              Moments
            </button>
            <button
              type="button"
              className={`gallery-filter__pill ${filter === 'celebration' ? 'gallery-filter__pill--active' : ''}`}
              onClick={() => setFilter('celebration')}
            >
              Celebration
            </button>
          </div>

          {/* Bento Masonry Grid */}
          <div className="bento-gallery reveal">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className={`bento-gallery__card ${item.variant}`}
                onClick={() => setActiveItem(item)}
                role="button"
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActiveItem(item)}
              >
                <img src={item.src} alt={item.title} loading="lazy" />
                <div className="bento-gallery__overlay">
                  <span className="bento-gallery__tag">{item.category}</span>
                  <h3 className="bento-gallery__title">{item.title}</h3>
                  <p className="bento-gallery__subtitle">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WEDDING COLORS / ATTIRE ── */}
      <section className="section section--muted">
        <div className="container">
          <SectionHeading eyebrow="Attire Inspiration" title="Wedding Colors" subtitle="We kindly request our guests to dress modestly" />
          <div className="dress-grid reveal">
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
              <img src={img4} alt="Dress code inspiration" />
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark text-center">
        <div className="container reveal">
          <h2 className="font-display" style={{ fontSize: 'clamp(32px, 5vw, 48px)', color: '#fff', marginBottom: '16px', fontStyle: 'italic' }}>
            See you on the 31st
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.65)', marginBottom: '28px' }}>We cannot wait to celebrate with you</p>
          <RsvpLink>Reserve Your Spot</RsvpLink>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeItem && (
        <div className="gallery-lightbox" onClick={() => setActiveItem(null)}>
          <div className="gallery-lightbox__content" onClick={e => e.stopPropagation()}>
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={() => setActiveItem(null)}
              aria-label="Close photo"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <img src={activeItem.src} alt={activeItem.title} />
            <div className="gallery-lightbox__caption">
              <h3>{activeItem.title}</h3>
              <p>{activeItem.subtitle}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
