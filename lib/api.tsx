'use client';


import { axios } from '@/lib/axios';


export const getProperties = async () => {
    const {data} = await axios.get('/listing/get-listings', {
        params: {
            isPublished: true,
        }
    });
    return data.hits;
};

