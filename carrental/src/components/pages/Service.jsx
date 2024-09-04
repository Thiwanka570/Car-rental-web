import React from 'react'
import { IoHomeSharp } from "react-icons/io5";

function Service() {
  return (
    <div>
      <div className='service-ceontainer'>
        <div className='service-container-list'>
          <div className='service-1 card'>
            <div className='service-title'>
              <IoHomeSharp />
              <p>HOME PICKUP</p>
            </div>
            <div className='service-description'>

            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
            <IoHomeSharp />
            <p>AIRPORT PICKUP</p>
            </div>
            <div className='service-description'>

            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
            <IoHomeSharp />
            <p>AIRPORT DROP</p>
            </div>
            <div className='service-description'>

            </div>
          </div>
          <div className='service-1'>
            <div className='service-title'>
            <IoHomeSharp />
            <p>TRAVEL AGENT</p>
            </div>
            <div className='service-description'>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Service