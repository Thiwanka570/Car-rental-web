import React from 'react'
import './Hero.css';
import { FaMapLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import city from "../../Assest/herocity.jpg"
import car1 from "../../Assest/car1.png"

function Hero() {
  return (
    <div>
      {/* <div className='d-flex justify-content-center align-items-center'>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
          <div className='mainBox'>
            <div className='subBox bg-dark'>
              <FaMapLocationDot />
            </div>
            <div className='locArea'>

            </div>
          </div>

          <div className='mainBox'>
            <div className='subBox bg-dark'>
              <FaCalendarAlt />
            </div>
            <div className='locArea'>

            </div>
          </div>

          <div className='mainBox'>
            <div className='subBox bg-dark'>
            <FaCalendarAlt />
            </div>
            <div className='locArea'>

            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div> */}
      <div className='heroContent'>
        <div className='heroText'>
          <p>BOOK YOUR TAXI NOW !</p>
        </div>
        <div className='contact'>
          <p>+94 76 570 2044</p>
        </div>
        <div className='vehicles'>
          <img src={car1} className='vehical' />
        </div>
      </div>
      <div>
        <img src={city} className='cityImg' />
      </div>


    </div>
  )
}

export default Hero