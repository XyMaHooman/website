import React, { useRef, useState, useCallback } from 'react'
import { properties } from '../data/properties'

export default function FeaturedProperties() {
  const trackRef = useRef(null)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const scroll = (direction) => {
    const track = trackRef.current
    if (!track) return
    const amount = track.clientWidth * 0.6
    track.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const handleMouseDown = (e) => {
    const track = trackRef.current
    setIsDragging(true)
    startX.current = e.pageX - track.offsetLeft
    scrollLeft.current = track.scrollLeft
  }

  const handleMouseMove = (e) => {
    if (!isDragging) return
    e.preventDefault()
    const track = trackRef.current
    const x = e.pageX - track.offsetLeft
    const walk = (x - startX.current) * 1.5
    track.scrollLeft = scrollLeft.current - walk
  }

  const handleDragEnd = useCallback(() => setIsDragging(false), [])

  return (
    <section id="properties" className="section featured">
      <div className="container">
        <div className="featured__header">
          <div>
            <span className="section-label" style={{ textAlign: 'center' }}>Featured</span>
            <h2 className="section-title" style={{ textAlign: 'center' }}>Featured Properties</h2>
          </div>
        </div>
      </div>

      <div className="featured__carousel-wrap container">
        <div className="featured__controls">
          <button className="featured__arrow" onClick={() => scroll(-1)} aria-label="Previous properties">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M19 12H5m0 0l7 7m-7-7l7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="featured__arrow" onClick={() => scroll(1)} aria-label="Next properties">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14m0 0l-7-7m7 7l-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div
          ref={trackRef}
          className="featured__track"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleDragEnd}
          onMouseLeave={handleDragEnd}
        >
          {properties.map((property) => (
            <article key={property.id} className="property-card">
              <div className="property-card__image">
                <img src={property.image} alt={property.name} loading="lazy" draggable="false" />
                <span className="property-card__type">{property.type}</span>
              </div>
              <div className="property-card__info">
                <h3 className="property-card__name">{property.name}</h3>
                <p className="property-card__location">{property.location}</p>
                <p className="property-card__price">{property.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
