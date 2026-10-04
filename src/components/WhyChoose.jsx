import React from 'react'

const reasons = [
  {
    title: 'Curated Portfolio',
    text: 'Every property in our portfolio is hand-selected for architectural quality and investment value.',
  },
  {
    title: 'Local Expertise',
    text: 'Deep knowledge of prime markets ensures you buy right and sell with confidence.',
  },
  {
    title: 'Client-First Approach',
    text: 'Transparent guidance and honest advice through every decision.',
  },
]

export default function WhyChoose() {
  return (
    <section className="section why-choose">
      <div className="why-choose__bg" aria-hidden="true">
        <img
          src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2000&auto=format&fit=crop"
          alt=""
          loading="lazy"
        />
        <div className="why-choose__overlay"></div>
      </div>
      <div className="container why-choose__grid">
        <div>
          <span className="section-label">Why Horizon</span>
          <h2 className="section-title">Why Choose Horizon</h2>
        </div>
        <div className="why-choose__reasons">
          {reasons.map((reason, i) => (
            <div key={reason.title} className="why-choose__reason">
              <span className="why-choose__number">0{i + 1}</span>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
