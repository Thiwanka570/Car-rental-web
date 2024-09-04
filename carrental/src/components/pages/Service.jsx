import React from 'react'
import './service.css'
import homePickup from '../../Assest/homepickup.png'
import airdrop from '../../Assest/airdrop.png'
import airpickup from '../../Assest/airepickup.png'
import traveling from '../../Assest/traveling.png'
import fastbooking from '../../Assest/fastbooking.png'


function Service() {
  return (
    <div>
      <div className='service-ceontainer'>
        <p className='service-header'>We Do the Best</p>
        <div className='service-container-list'>
          <div className='service-1'>
            <div className='service-title'>
              <img src={homePickup} className='icons' alt="Home Pickup" />
              <p>HOME PICKUP</p>
            </div>
            <div className='service-description'>
              <p>Convenient pick-up from your home for a stress-free start to your journey. Enjoy a hassle-free ride right to your destination.</p>
            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
              <img src={airpickup} className='icons' alt="Airport Pickup" />
              <p>AIRPORT PICKUP</p>
            </div>
            <div className='service-description'>
              <p>Arrive at the airport and have a driver waiting for you. Experience a smooth and comfortable transfer from the airport to your location.</p>
            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
              <img src={airdrop} className='icons' alt="Airport Drop" />
              <p>AIRPORT DROP</p>
            </div>
            <div className='service-description'>
              <p>Relax and let us handle your airport drop-off. Our service ensures timely and reliable transportation to the airport, allowing you to travel with peace of mind.</p>
            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
              <img src={traveling} className='icons' alt="Travel Agent" />
              <p>TRAVEL AGENT</p>
            </div>
            <div className='service-description'>
              <p>Get expert travel advice and planning assistance. Our travel agents help you organize and book your trips, ensuring a seamless travel experience.</p>
            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
              <img src={fastbooking} className='icons' alt="Fast Booking" />
              <p>FAST BOOKING</p>
            </div>
            <div className='service-description'>
              <p>Quick and easy booking process. Save time with our streamlined service and secure your reservations in just a few clicks.</p>
            </div>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Service