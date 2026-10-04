import React from 'react'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <div className="about__text">
          <span className="section-label">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="section-body">
            At Horizon Properties, we connect people with extraordinary homes and smart investments.
            Integrity, transparency, and client satisfaction are at the heart of everything we do.
          </p>
          <a href="#services" className="btn btn-primary">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>

        <div className="about__images">
          <div className="about__image-main">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1400&auto=format&fit=crop"
              alt="Luxury modern home with pool"
              loading="lazy"
            />
          </div>
          <div className="about__image-secondary">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=800&auto=format&fit=crop"
              alt="Modern architectural detail of luxury home"
              loading="lazy"
            />
          </div>
          <button className="about__arrow" aria-label="Explore our work">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
