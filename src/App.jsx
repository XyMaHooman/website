import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import FeaturedProperties from './components/FeaturedProperties'
import Services from './components/Services'
import WhyChoose from './components/WhyChoose'
import Team from './components/Team'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <FeaturedProperties />
        <Services />
        <WhyChoose />
        <Team />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
