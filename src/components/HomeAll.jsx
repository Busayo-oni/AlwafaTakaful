import React from 'react'
import HeroSection from './Hero'
import Nav from './nav'
import Score from './score'
import List from './list'
import About from './about'
import Resources from './Resources'
import HowTakafulWorks from './HowTakafulWorks'
import Testimonial from './Testimonial'
import Form from './Form'
import Partner from './Partner'
import GetStarted from './GetStarted'
import Footer from './Footer'

const HomeAll = () => {
  return (
    <>
    <Nav />
    <HeroSection />
    <Score />
    <List />
    <About /> 
    <Resources />
    <HowTakafulWorks />
    <Testimonial />
    <Form />
    <Partner />
    <GetStarted />
    <Footer /></>
  )
}
export default HomeAll