interface VenueMapProps {
  name: string
  query: string
  time?: string
  label?: string
  description?: string
}

function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`
}

function mapsDirectionsUrl(query: string) {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(query)}`
}

function mapsEmbedUrl(query: string) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(query)}&z=15&output=embed`
}

export default function VenueMap({ name, query, time, label, description }: VenueMapProps) {
  return (
    <div className="venue-map card">
      <div className="venue-map__header">
        <span className="material-symbols-outlined venue-map__icon">location_on</span>
        {time && <span className="venue-map__time font-label">{time}</span>}
      </div>
      {label && <p className="venue-map__label font-label">{label}</p>}
      <h3 className="venue-map__name">{name}</h3>
      {description && <p className="venue-map__desc">{description}</p>}

      <a
        href={mapsSearchUrl(query)}
        target="_blank"
        rel="noopener noreferrer"
        className="venue-map__frame-link"
        aria-label={`Open ${name} in Google Maps`}
      >
        <iframe
          title={`Map of ${name}`}
          src={mapsEmbedUrl(query)}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="venue-map__frame"
        />
        <div className="venue-map__pin">
          <span className="material-symbols-outlined">pin_drop</span>
          <span>Tap to open in Maps</span>
        </div>
      </a>

      <div className="venue-map__actions">
        <a
          href={mapsSearchUrl(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--outline-dark venue-map__btn"
        >
          View Map
        </a>
        <a
          href={mapsDirectionsUrl(query)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--mauve venue-map__btn"
        >
          Get Directions
        </a>
      </div>
    </div>
  )
}

export const VENUES = {
  church: {
    name: 'Mchinji Bible Believers Church',
    query: 'Mchinji Bible Believers Church, Mchinji, Malawi',
    time: '08:30 AM',
    label: 'Officiation',
    description: 'The sacred ceremony where Emmanuel and Elizabeth exchange their vows.',
  },
  reception: {
    name: 'Ceebex Event Garden',
    query: 'Ceebex Event Garden, Mchinji, Malawi',
    time: '01:00 PM',
    label: 'Reception',
    description: 'An afternoon of celebration, feasting, and dancing under the open sky.',
  },
} as const
