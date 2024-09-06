import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import "./VehicleDetails.css";
import car3 from "../../Assest/car3.jpg"

function VehicleDetails() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div className='vehicle-details-container'>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">

                        <div className='vehicle-details-card'>
                            <div>
                                <img className='card-img' src={car3} alt="Toyota KDH" />
                            </div>
                            <div className='card-text-area'>
                                <h4>VEHICLE 01</h4>
                                <h6>A reliable van with top-notch safety features and excellent fuel efficiency, perfect for long trips and family travels.</h6>
                                <ul className="vehicle-details-list">
                                    <li><strong>Price:</strong> $45 per day</li>
                                    <li><strong>Model:</strong> Toyota KDH 2015</li>
                                    <li><strong>Seats:</strong> 10</li>
                                    <li><strong>Fuel Type:</strong> Diesel</li>
                                    <li><strong>Transmission:</strong> Automatic</li>
                                    <li><strong>Features:</strong> Air Conditioning, GPS, Bluetooth, Power Steering</li>
                                </ul>
                                <div className="price-disclaimer">
                                    <p>* Prices may vary based on the season and rental period.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <Carousel.Caption>
                        <h3>First Vehicle</h3>
                        <p>A reliable car with top-notch safety features and excellent fuel efficiency.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className='vehicle-details-card'>
                            <div>
                                <img className='card-img' src={car3} alt="Toyota KDH" />
                            </div>
                            <div className='card-text-area'>
                                <h4>VEHICLE 02</h4>
                                <h6>A reliable van with top-notch safety features and excellent fuel efficiency, perfect for long trips and family travels.</h6>
                                <ul className="vehicle-details-list">
                                    <li><strong>Price:</strong> $45 per day</li>
                                    <li><strong>Model:</strong> Toyota KDH 2015</li>
                                    <li><strong>Seats:</strong> 10</li>
                                    <li><strong>Fuel Type:</strong> Diesel</li>
                                    <li><strong>Transmission:</strong> Automatic</li>
                                    <li><strong>Features:</strong> Air Conditioning, GPS, Bluetooth, Power Steering</li>
                                </ul>
                                <div className="price-disclaimer">
                                    <p>* Prices may vary based on the season and rental period.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    {/* <Carousel.Caption>
                        <h3>Second Vehicle</h3>
                        <p>A luxurious sedan offering premium comfort and advanced technology.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>

                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <div className='vehicle-details-card'>
                            <div>
                                <img className='card-img' src={car3} alt="Toyota KDH" />
                            </div>
                            <div className='card-text-area'>
                                <h4>VEHICLE 03</h4>
                                <h6>A reliable van with top-notch safety features and excellent fuel efficiency, perfect for long trips and family travels.</h6>
                                <ul className="vehicle-details-list">
                                    <li><strong>Price:</strong> $45 per day</li>
                                    <li><strong>Model:</strong> Toyota KDH 2015</li>
                                    <li><strong>Seats:</strong> 10</li>
                                    <li><strong>Fuel Type:</strong> Diesel</li>
                                    <li><strong>Transmission:</strong> Automatic</li>
                                    <li><strong>Features:</strong> Air Conditioning, GPS, Bluetooth, Power Steering</li>
                                </ul>
                                <div className="price-disclaimer">
                                    <p>* Prices may vary based on the season and rental period.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Carousel.Caption>
                        <h3>Third Vehicle</h3>
                        <p>A spacious SUV built for family trips and off-road adventures.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default VehicleDetails;
