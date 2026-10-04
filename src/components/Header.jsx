import React, { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Properties', href: '#properties' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="header__inner container">
        <a href="#home" className="header__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
            <path d="M4 24V10l10-6 10 6v14" stroke="#c9a96e" strokeWidth="1.5" />
            <path d="M10 24v-8h8v8" stroke="#c9a96e" strokeWidth="1.5" />
          </svg>
          <span>HORIZON PROPERTIES</span>
        </a>

        <nav className="header__nav" aria-label="Main navigation">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__link">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="tel:+15552467890" className="header__phone">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          (555) 246-7890
        </a>

        <button
          className={`header__hamburger ${menuOpen ? 'header__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <div className={`header__mobile-menu ${menuOpen ? 'header__mobile-menu--open' : ''}`}>
        {navLinks.map((link) => (
          <a key={link.label} href={link.href} className="header__mobile-link" onClick={() => setMenuOpen(false)}>
            {link.label}
          </a>
        ))}
        <a href="tel:+15552467890" className="header__mobile-link header__mobile-link--phone">
          (555) 246-7890
        </a>
      </div>
    </header>
  )
}
