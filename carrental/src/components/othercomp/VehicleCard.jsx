import React from 'react';
import "./vehicleCard.css";
import car3 from "../../Assest/car3.jpg";

function VehicleCard({ name, description, price, model, seats, fuelType, transmission, features, image }) {
    return (
        <div>
            <div>
                <div className="d-flex justify-content-center ">
                    <div className='vehicle-details-card'>
                        <div>
                            <img class='details-img' src={image} alt={name} />
                        </div>
                        <div className='card-text-area'>
                            <h4>{name}</h4>
                            <h6 className='vehicle-details-description'>{description}</h6>
                            <ul className="vehicle-details-list">
                                <li><strong>Price:</strong> {price}</li>
                                <li><strong>Model:</strong> {model}</li>
                                <li><strong>Seats:</strong> {seats}</li>
                                <li><strong>Fuel Type:</strong> {fuelType}</li>
                                <li><strong>Transmission:</strong> {transmission}</li>
                                <li><strong>Features:</strong> {features.join(', ')}</li>
                            </ul>
                            <div className="price-disclaimer">
                                <p>* Prices may vary based on the season and rental period.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VehicleCard;
