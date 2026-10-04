import React from 'react'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="footer__logo">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
              <path d="M4 24V10l10-6 10 6v14" stroke="#c9a96e" strokeWidth="1.5" />
              <path d="M10 24v-8h8v8" stroke="#c9a96e" strokeWidth="1.5" />
            </svg>
            <span>HORIZON PROPERTIES</span>
          </a>
          <p className="footer__description">
            Connecting people with extraordinary homes and smart investments since 2008.
          </p>
          <div className="footer__social">
            <a href="#home" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5" /><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
            </a>
            <a href="#home" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
            <a href="#home" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1a6 6 0 0 1 2-1Z" stroke="currentColor" strokeWidth="1.5" /><rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="1.5" /><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="1.5" /></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Contact</h4>
          <ul>
            <li><a href="tel:+15552467890">(555) 246-7890</a></li>
            <li><a href="mailto:info@horizonproperties.com">info@horizonproperties.com</a></li>
            <li>1200 Architectural Way, Suite 400<br />Austin, TX 78701</li>
          </ul>
        </div>

        <div className="footer__col footer__newsletter">
          <h4>Newsletter</h4>
          <p>Get the latest property listings delivered to your inbox.</p>
          <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email address" required />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Horizon Properties. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
