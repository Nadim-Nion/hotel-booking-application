import React from 'react';

const HotelCard = ({ hotel }) => {
    const { hotelName, hotelDestination, shortDescription, pricePerGuest, checkOut } = hotel;
    return (
        <div className='flex justify-center items-center'>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {hotelName} , {hotelDestination}
                    </h2>
                    <p>{shortDescription}</p>
                    {
                        checkOut === 'Sold Out' ? <p className='font-bold'>Sold Out</p>
                            :
                            <p>
                                <span className='font-bold mr-2'>${pricePerGuest.adult}</span>
                                per adult
                            </p>
                    }
                </div>
            </div>
        </div>
    );
};

export default HotelCard;