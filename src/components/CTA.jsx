import React from 'react'

export default function CTA() {
  return (
    <section className="section cta">
      <div className="container cta__inner">
        <div className="cta__left">
          <div className="cta__icon" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="17" cy="15" r="4" stroke="currentColor" strokeWidth="1.5" />
              <path d="M10.5 13.5L14 10l3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h2 className="cta__title">Ready to Find Your Perfect Property?</h2>
            <p className="cta__text">Let our experts guide you to the right home or investment.</p>
          </div>
        </div>
        <a href="#contact" className="btn btn-primary">
          Get in Touch <span aria-hidden="true">→</span>
        </a>
      </div>
    </section>
  )
}
