import React from 'react'
import { Header } from './Header'
import { Hero } from './Hero'
import { Features } from './Features'
import { HowItWorks } from './HowItWorks'
import { Testimonials } from './Testimonials'
import { FAQ } from './FAQ'
import { Footer } from './Footer'
// import Hero from './Hero'

const HomeLanding = () => {
  return (
 <div className="min-h-screen bg-[#010101]">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

export default HomeLanding