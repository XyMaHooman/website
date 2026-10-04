import React from 'react'

const services = [
  {
    title: 'Luxury Home Sales',
    description: 'Curated access to the most exceptional homes in prime locations.',
  },
  {
    title: 'Property Investment',
    description: 'Data-driven guidance for building a profitable property portfolio.',
  },
  {
    title: 'Property Marketing',
    description: 'Premium presentation and targeted campaigns that reach qualified buyers.',
  },
  {
    title: 'Real Estate Advisory',
    description: 'Expert counsel through every stage of your property journey.',
  },
  {
    title: 'Property Valuation',
    description: 'Precise, market-aware valuations backed by local expertise.',
  },
  {
    title: 'Relocation Services',
    description: 'Seamless transitions with full support for you and your family.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section services">
      <div className="container">
        <span className="section-label">Our Services</span>
        <h2 className="section-title">What We Offer</h2>
        <div className="services__grid">
          {services.map((service, i) => (
            <div key={service.title} className="services__card">
              <span className="services__index">0{i + 1}</span>
              <h3 className="services__card-title">{service.title}</h3>
              <p className="services__card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
