import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useHotels = () => {
    const axiosPublic = useAxiosPublic();

    const { data: hotels = [] } = useQuery({
        queryKey: ['hotels'],
        queryFn: async () => {
            const res = await axiosPublic.get('/hotels');
            return res.data;
        }
    });

    return [hotels];
};

export default useHotels;