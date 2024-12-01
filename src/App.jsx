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

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  BoardOfDirectors  from './components/AboutPage/BoardOfDirectors'
import  OurStory  from './components/AboutPage/OurStory'
import  AdvisoryTeam  from './components/AboutPage/AdvisoryTeam'
import  ManagementStaff  from './components/AboutPage/ManagementStaff'
import  Header  from './components/AboutPage/Header'
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


 <Router>
    <Header />
      <Routes>
       <Route path="OurStory" element={<OurStory />} />
        <Route path="BoardOfDirectors" element={<BoardOfDirectors />} />
       <Route path="AdvisoryTeam" element={ <AdvisoryTeam />} />
        <Route path="ManagementStaff" element={<ManagementStaff />} />
    
      </Routes>
    </Router>
    </>
  )
}

export default App
