'use client';

import React, { useState } from 'react';
import { UploadMap } from '@/components/common';
import { UploadForm } from '@/components/forms';
import type { Metadata } from 'next';




export default function Page() {
	const [lat, setLat] = useState(-1.101811785859803);
    const [lng, setLng] = useState(37.014391469570306);


	const handleLatLngChange = (newLat: number, newLng: number) => {
		setLat(newLat);
		setLng(newLng);
	  };

	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>


			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <UploadForm lat={lat} lng={lng} />
                <UploadMap onLatLngChange={handleLatLngChange} />

				{/* <SocialButtons /> */}

			</div>
		</div>
	);
}
