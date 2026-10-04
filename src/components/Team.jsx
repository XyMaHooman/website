import React from 'react'

const teamMembers = [
  {
    name: 'Daniel Morgan',
    role: 'Managing Director',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Olivia Carter',
    role: 'Luxury Property Advisor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'James Wilson',
    role: 'Investment Consultant',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=600&auto=format&fit=crop',
  },
  {
    name: 'Sophia Bennett',
    role: 'Senior Property Specialist',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=600&auto=format&fit=crop',
  },
]

export default function Team() {
  return (
    <section id="team" className="section team">
      <div className="container">
        <span className="section-label" style={{ textAlign: 'center' }}>Our Team</span>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '56px' }}>
          Meet the Experts
        </h2>
        <div className="team__grid">
          {teamMembers.map((member) => (
            <div key={member.name} className="team__card">
              <div className="team__image">
                <img src={member.image} alt={`Portrait of ${member.name}`} loading="lazy" />
              </div>
              <h3 className="team__name">{member.name}</h3>
              <p className="team__role">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
