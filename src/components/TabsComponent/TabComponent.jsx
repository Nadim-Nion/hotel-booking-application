import React, { useState } from 'react';
import { BsFillSunsetFill } from 'react-icons/bs';
import { FaStar, FaUmbrellaBeach } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useHotels from '../../hooks/useHotels';
import HotelCard from '../HotelCard/HotelCard';

const TabComponent = () => {
    const [tabIndex, setTabIndex] = useState(0);
    const categories = ['Icons', 'Beach', 'Amazing view'];
    const [hotels] = useHotels(categories[tabIndex]);


    return (
        <Tabs className='bg-white rounded-lg shadow-md p-4 w-full max-w-5xl mx-auto' defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList className="flex justify-center w-full md:w-auto mx-auto">
                <Tab className="flex flex-col items-center justify-center mx-2 p-2">
                    <FaStar className='text-2xl' />
                    Icons
                </Tab>
                <Tab className="flex flex-col items-center justify-center mx-2 p-2">
                    <FaUmbrellaBeach className='text-2xl' />
                    Beach
                </Tab>
                <Tab className="flex flex-col items-center justify-center mx-2 p-2">
                    <BsFillSunsetFill className='text-2xl' />
                    Amazing Views
                </Tab>
            </TabList>
            {
                categories.map((category, index) => <TabPanel
                    key={index}
                >
                    <div className='grid md:grid-cols-3 sm:grid-cols-1 gap-4 w-full md:w-4/5 mx-auto my-8'>
                        {
                            hotels.map(hotel => <HotelCard
                                key={hotel._id}
                                hotel={hotel}
                            ></HotelCard>)
                        }
                    </div>

                </TabPanel>)
            }
        </Tabs>
    );
};

export default TabComponent;