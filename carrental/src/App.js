
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import Navbar from './components/othercomp/Navbar';
import Hero from './components/pages/Hero';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Service from './components/pages/Service';
import Reservation from './components/pages/Reservation';
import Title from './components/othercomp/Title';
import VehicleDetails from './components/pages/VehicleDetails';


function App() {
  return (
    <div className='App w-100'>
      <Router>
        <div>
          <Navbar />
          <Hero/>
          <Service/>
          {/* <Title head={"BEST IN CITY"} semi={"To Book Taxi Pleace Use The Quick Reservation Form"}/> */}
          <Reservation/>
          <VehicleDetails/>
          {/* <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
