import React from 'react'
import Hero from './Hero';
import Benefits from './Benefits';
import Features from './Features';
import TakefulInsurance from '../AboutPage/TakefulInsurance'
import Footer from '../Footer'


const productAll = () => {
  return (
    <div>
        <Hero />
      <Benefits />
      <TakefulInsurance />
      <Features />
      <Footer />
    </div>
  )
}
export default productAll