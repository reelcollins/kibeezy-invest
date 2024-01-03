'use client';

import React from 'react';
import { useMemo, useState } from 'react';
import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';
import { useSelector } from 'react-redux';

interface UploadMapProps {
    lat: number;
	lng: number;
}

interface RootState {
	objectUrls: string[];
  }
  

export default function UploadForm({ lat, lng }: UploadMapProps) {
	const { phone_number, password, isLoading, onChange, onSubmit } = useLogin();
	const objectUrls = useSelector((state: RootState) => state.objectUrls);


	// Ensure objectUrls has at least 4 elements
	const mappedUrls = useMemo(() => {
		// Handle cases where objectUrls might have fewer elements
		const paddedUrls = [...objectUrls, ...Array(4 - objectUrls.length).fill('')];
		return paddedUrls.slice(0, 4); // Get only the first 4 elements
	  }, [objectUrls]);

	const config = [
		{
			labelText: 'Realtor',
			labelId: 'realtor',
			placeholder: '07******84 / 01******84',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Contacts',
			labelId: 'contacts',
			placeholder: '07******84 / 01******84',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Title',
			labelId: 'title',
			placeholder: 'Nyumbani Apartments',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Slug',
			labelId: 'slug',
			placeholder: '1234',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Address',
			labelId: 'address',
			placeholder: 'Gate C Juja',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Floor',
			labelId: 'floor',
			placeholder: '2nd',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'County',
			labelId: 'county',
			placeholder: 'Kiambu',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Town',
			labelId: 'town',
			placeholder: 'Juja',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Description',
			labelId: 'description',
			placeholder: 'Spacious, well lit',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Price',
			labelId: 'price',
			placeholder: '5000',
			type: 'text',
			value: phone_number,
			required: true,
		},
		{
			labelText: 'Bedrooms',
			labelId: 'bedrooms',
			placeholder: '2',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Bathrooms',
			labelId: 'bathrooms',
			placeholder: '1.0',
			type: 'text',
			value: phone_number,
			required: true,
		},
		{
			labelText: 'Sale Type',
			labelId: 'saletype',
			type: 'select',
			placeholder: 'Select Sale Type',
			value: phone_number,
			required: true,
			options: [
				{ value: 'For Rent', label: 'For Rent' },
				{ value: 'For Sale', label: 'For Sale' },
			],
		},
        {
			labelText: 'Home Type',
			labelId: 'hometype',
			type: 'select', // Change the type to 'select'
			placeholder: 'Select Home Type',
			value: phone_number, // You might want to use a different state variable for this
			required: true,
			options: [
				{ value: 'Bedsitter', label: 'Bedsitter' },
				{ value: '1 Bedroom', label: '1 Bedroom' },
				{ value: '2 Bedrooms', label: '2 Bedrooms' },
				// Add more options as needed
			],
		},
        {
			labelText: 'Amenities',
			labelId: 'amenities',
			placeholder: 'Tap Water',
			type: 'text',
			value: phone_number,
			required: true,
		},
        {
			labelText: 'Main Photo',
			labelId: 'main_photo',
			placeholder: 'URL for main photo',
			type: 'text', // Change to text
			value: mappedUrls[0], // Use the first URL
			required: true,
		  },
		  {
			labelText: 'Photo 1',
			labelId: 'photo_1',
			placeholder: 'URL for photo 1',
			type: 'text',
			value: mappedUrls[1],
			required: true,
		  },
		  {
			labelText: 'Photo 2',
			labelId: 'photo_2',
			placeholder: 'URL for photo 2',
			type: 'text',
			value: mappedUrls[2],
			required: true,
		  },
		  {
			labelText: 'Photo 3',
			labelId: 'photo_3',
			placeholder: 'URL for photo 3',
			type: 'text',
			value: mappedUrls[3],
			required: true,
		  },
        {
			labelText: 'Latt',
			labelId: 'latt',
			placeholder: '2',
			type: 'text',
			value: lat.toString(),
			required: true,
		},
        {
			labelText: 'Lngg',
			labelId: 'lngg',
			placeholder: '2',
			type: 'text',
			value: lng.toString(),
			required: true,
		},
        {
			labelText: 'YouTube',
			labelId: 'youtube',
			placeholder: 'didhgnghlslekeh',
			type: 'text',
			value: phone_number,
			required: true,
		},
		{
			labelText: 'Is Published',
			labelId: 'published',
			type: 'checkbox', // Change the type to 'checkbox'
			placeholder: 'Yes/No',
			value: phone_number, // You might want to use a different state variable for this
			required: true,
			checkboxLabel: 'Published', // Label for the checkbox
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Upload'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
