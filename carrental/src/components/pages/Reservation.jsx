import React from 'react';
import './Reservation.css';
import Title from '../othercomp/Title';

function Reservation() {
    return (
        <div className='reservation-bg'>
            <div>
                <Title head={"RESERVATION"} dark={false} />
            </div>
            <div className="reservation-container">
                <div className="reservation-description">
                    <p className='reservation-description-head'>Discover Sri Lanka with Ease: Your Trusted Car Rental Partner
                    </p>
                    <p>
                        Welcome to our exclusive car rental service, tailored specifically for travelers and residents exploring the beautiful landscapes of Sri Lanka. Whether you're planning a road trip along the stunning coastline, a journey through the lush tea plantations, or simply need a reliable vehicle for your daily commute, we have the perfect car for you. Our fleet includes a variety of well-maintained vehicles, from compact cars for city drives to spacious SUVs for family adventures. Booking with us is straightforward and hassle-free. Simply fill out the form below to reserve your vehicle, and we'll ensure it's ready for you when you need it. Enjoy the freedom to explore Sri Lanka at your own pace, with the assurance of a safe and comfortable ride. We are committed to providing top-notch service, with flexible rental terms and competitive pricing, making your travel experience across Sri Lanka smooth and memorable.
                    </p>
                </div>
                <div className="reservation-form-box">
                    <p className='mailBoxHead'>To Book Pleace Use Quick Reservation Box</p>
                    <form>
                        <div className="form-group">
                            <input type="text" id="name" className="form-control" placeholder="Enter your name" />
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" className="form-control" placeholder="Enter your email" />
                        </div>
                        <div className="form-group">
                            <input type="date" id="date" placeholder='Reservation Date' className="form-control" />
                        </div>
                        <div className="form-group">
                            <textarea id="message" className="form-control" rows="4" placeholder="Enter your message here"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Reservation;
