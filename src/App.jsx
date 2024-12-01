import React from 'react'
import './App.css'
import HeroSection from './components/Hero'
import Nav from './components/nav'
import Score from './components/score'
import List from './components/list'
import About from './components/about'
import Resources from './components/Resources'
import HowTakafulWorks from './components/HowTakafulWorks'
import Testimonial from './components/Testimonial'
import Form from './components/Form'
import Partner from './components/Partner'
import GetStarted from './components/GetStarted'
import Footer from './components/Footer'
function App() {

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
    <Footer />

    </>
  )
}

export default App
