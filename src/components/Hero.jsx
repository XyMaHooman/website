import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2400&auto=format&fit=crop"
          alt="Modern luxury villa with large glass walls and infinity pool at dusk"
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>

      <p className="hero__tagline">Innovations in every project</p>

      <div className="hero__content">
        <div className="container">
          <h1 className="hero__title">
            Discover Exceptional
            <br />
            Homes &amp; Investments
          </h1>
          <p className="hero__subtitle">
            Premium properties in prime locations. Find your dream home
            or the perfect investment with confidence.
          </p>
          <a href="#properties" className="btn btn-sand hero__cta">
            Browse Properties <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
