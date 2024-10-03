import React from 'react';
import HotelCard from '../HotelCard/HotelCard';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Hotels = () => {
    /* const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('hotels.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHotels(data);
            })
    }, []); */

    const axiosPublic = useAxiosPublic();

    const { data: hotels = [] } = useQuery({
        queryKey: ['hotels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/hotels');
            return res.data;
        }
    })

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