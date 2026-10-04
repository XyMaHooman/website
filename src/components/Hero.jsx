import React from 'react'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=2400&auto=format&fit=crop"
          alt="Modern luxury villa with large glass walls and infinity pool at blue hour"
          className="hero__image"
        />
        <div className="hero__overlay"></div>
      </div>

      <div className="hero__content">
        <h1 className="hero__title">
          Discover Exceptional
          <br />
          Homes &amp; Investments
        </h1>
        <p className="hero__subtitle">
          Premium properties in prime locations. Find your dream home
          <br />
          or the perfect investment with confidence.
        </p>
      </div>
    </section>
  )
}
