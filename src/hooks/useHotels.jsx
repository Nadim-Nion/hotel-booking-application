import React from 'react';
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useHotels = (category) => {
    const axiosPublic = useAxiosPublic();

    const { data: hotels = [] } = useQuery({
        queryKey: ['hotels', category],
        queryFn: async () => {
            const res = await axiosPublic.get(`/hotels/${category}`);
            return res.data;
        }
    });

    return [hotels];
};

export default useHotels;