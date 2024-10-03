import React, { useEffect, useState } from 'react';
import HotelCard from '../HotelCard/HotelCard';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('hotels.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHotels(data);
            })
    }, []);

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full md:w-4/5 mx-auto my-8'>
            {
                hotels.map(hotel => <HotelCard
                    key={hotel._id}
                    hotel={hotel}
                ></HotelCard>)
            }
        </div>
    );
};

export default Hotels;