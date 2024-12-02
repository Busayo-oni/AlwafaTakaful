import React from 'react'
import './App.css'


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  BoardOfDirectors  from './components/AboutPage/BoardOfDirectors'
import  OurStory  from './components/AboutPage/OurStory'
import  AdvisoryTeam  from './components/AboutPage/AdvisoryTeam'
import  ManagementStaff  from './components/AboutPage/ManagementStaff'
import  Header  from './components/AboutPage/Header'
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
    
      </Routes>
    </Router>
    </>
  )
}

export default App
