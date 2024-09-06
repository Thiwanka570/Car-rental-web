import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import VehicleCard from '../othercomp/VehicleCard';
import car3 from "../../Assest/car3.jpg";
import "./VehicleDetails.css";
import Title from '../othercomp/Title';


function VehicleDetails() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const vehicleData = [
        {
            name: 'TOYOTA PRIUS',
            description: 'A hybrid car with exceptional fuel efficiency, ideal for city drives.',
            price: '$35 per day',
            model: 'Toyota Prius 2017',
            seats: 5,
            fuelType: 'Hybrid',
            transmission: 'Automatic',
            features: ['Air Conditioning', 'Bluetooth', 'GPS', 'Backup Camera'],
            image: car3,
        },
        {
            name: 'HONDA FIT',
            description: 'A compact car with great handling and comfortable seating for daily use.',
            price: '$25 per day',
            model: 'Honda Fit 2016',
            seats: 5,
            fuelType: 'Petrol',
            transmission: 'Automatic',
            features: ['Air Conditioning', 'Bluetooth', 'USB Charging'],
            image: car3,
        },
        {
            name: 'TOYOTA KDH',
            description: 'A reliable van with top-notch safety features and excellent fuel efficiency.',
            price: '$45 per day',
            model: 'Toyota KDH 2015',
            seats: 10,
            fuelType: 'Diesel',
            transmission: 'Automatic',
            features: ['Air Conditioning', 'GPS', 'Bluetooth', 'Power Steering'],
            image: car3,
        },
    ];

    return (
        <div className='vehicle-details-container'>
            <Title head={"OUR CAR FLEET"} />
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} >
                    {vehicleData.map((vehicle, idx) => (
                        <Carousel.Item key={idx}>
                            <VehicleCard
                                name={vehicle.name}
                                description={vehicle.description}
                                price={vehicle.price}
                                model={vehicle.model}
                                seats={vehicle.seats}
                                fuelType={vehicle.fuelType}
                                transmission={vehicle.transmission}
                                features={vehicle.features}
                                image={vehicle.image}
                            />
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </div>
    );
}

export default VehicleDetails;
