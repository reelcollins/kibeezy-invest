import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useUploadMutation } from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function useUpload() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [ upload, { isLoading }] = useUploadMutation();

	const [formData, setFormData] = useState({
		realtor: '',
		contacts: '',
		title: '',
		slug: '',
		address: '',
		floor: '',
		county: '',
		town: '',
		description: '',
		price: '',
		bedrooms: '',
		bathrooms: '',
		sale_type: '',
		home_type: '',
		amenities: '',
		youtube: '',
		isPublished: '',
	});

	const { realtor, contacts, title, slug, address, floor, county, town, description, price, bedrooms, bathrooms, sale_type, home_type, amenities, youtube,  isPublished} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		upload({  realtor, contacts, title, slug, address, floor, county, town, description, price, bedrooms, bathrooms, sale_type, home_type, amenities, youtube,  isPublished})
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				toast.success('Uploaded');
				router.push('/realtor');
			})
			.catch(() => {
				toast.error('Failed to upload');
			});
	};
	return {
		realtor,
		contacts,
		title,
		slug,
		address,
		floor,
		county,
		town,
		description,
		price,
		bedrooms,
		bathrooms,
		sale_type,
		home_type,
		amenities,
		youtube,
		isPublished,
		isLoading,
		onChange,
		onSubmit,
	};
}
