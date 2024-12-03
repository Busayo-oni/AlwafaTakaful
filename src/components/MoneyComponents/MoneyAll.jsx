import React from 'react'
import Hero from './Hero';
import Benefits from './Benefits';
import Features from './Features';

import Footer from '../Footer'
import Nav from '../nav'
import KeyFeatures from './KeyFeatures';


const MoneyAll = () => {
  return (
    <div>
      <Nav />
        <Hero />
      <Benefits />
      <KeyFeatures />
      <Features />
      <Footer />
    </div>
  )
}
export default MoneyAll