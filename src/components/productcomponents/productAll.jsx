import React from 'react'
import Hero from './Hero';
import Benefits from './Benefits';
import Features from './Features';
import TakefulInsurance from '../AboutPage/TakefulInsurance'
import Footer from '../Footer'
import Nav from '../nav'


const productAll = () => {
  return (
    <div>
      <Nav />
        <Hero />
      <Benefits />
      <TakefulInsurance />
      <Features />
      <Footer />
    </div>
  )
}
export default productAll