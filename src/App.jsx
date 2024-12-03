import React from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  BoardOfDirectors  from './components/AboutPage/BoardOfDirectors'
import  OurStory  from './components/AboutPage/OurStory'
import  AdvisoryTeam  from './components/AboutPage/AdvisoryTeam'
import  ManagementStaff  from './components/AboutPage/ManagementStaff'
import  Header  from './components/AboutPage/Header'
import ProductAll from './components/productcomponents/productAll'
import Education from './components/Education/productAll'
import Credit from './components/credit/productAll'
import Computer from './components/computer/productAll'
import Motor from './components/motor/productAll'
import Thankyou from './components/Contact/Thankyou'
import ClaimSuccess from './components/Claim/claimSuccess'
import ClaimSection from './components/Claim/claimSection'
import ContactSection from './components/Contact/ContactSection'
import Calculator from './components/Calculator/CalculatorSection'
import Generate from './components/Calculator/Generate'
import FidelityAll from './components/FidelityComponents/FidelityAll';
import TravelAll from './components/TravelComponents/TravelAll';
import MoneyAll from './components/MoneyComponents/MoneyAll';
import MarineAll from './components/Marinecomponents/MarineAll'

import HomeAll from './components/HomeAll';
function App() {

  return (
    <>
 <Router>
      <Routes>
       <Route path="" element={<HomeAll />} />
       <Route path="HomeAll" element={<HomeAll />} />

       <Route path="OurStory" element={<OurStory />} />


        <Route path="BoardOfDirectors" element={<BoardOfDirectors />} />
       <Route path="AdvisoryTeam" element={ <AdvisoryTeam />} />
        <Route path="ManagementStaff" element={<ManagementStaff />} />
        <Route path="ProductAll" element={<ProductAll />} />
        <Route path="Education" element={<Education />} />
        <Route path="Credit" element={<Credit />} />
        <Route path="Motor" element={<Motor />} />
        <Route path="Computer" element={<Computer />} />
        <Route path="Contact" element={<ContactSection />} />
        <Route path="Thankyou" element={<Thankyou />} />
        <Route path="Calculator" element={<Calculator />} />
        <Route path="Generate" element={<Generate />} />
        <Route path="ClaimSection" element={<ClaimSection />} />
        <Route path="ClaimSuccess" element={<ClaimSuccess />} />

        <Route path="MarineAll" element={<MarineAll />} />
        <Route path="FidelityAll" element={<FidelityAll />} />
        <Route path="TravelAll" element={<TravelAll />} />
         <Route path="MoneyAll" element={<MoneyAll />} />


        




    
      </Routes>
    </Router>
    </>
  )
}

export default App
