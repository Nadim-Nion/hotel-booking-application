import React, { useState } from 'react';
import { BsFillSunsetFill } from 'react-icons/bs';
import { FaStar, FaUmbrellaBeach } from 'react-icons/fa';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const TabComponent = () => {
    const [tabIndex, setTabIndex] = useState(0);

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
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
            <TabPanel></TabPanel>
        </Tabs>
    );
};

export default TabComponent;