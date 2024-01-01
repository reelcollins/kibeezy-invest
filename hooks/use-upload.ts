import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useAppDispatch } from '@/redux/hooks';
import { useLoginMutation } from '@/redux/features/authApiSlice';
import { setAuth } from '@/redux/features/authSlice';
import { toast } from 'react-toastify';

export default function useUpload() {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const [formData, setFormData] = useState({
		phone_number: '',
		password: '',
		isPublished: '',
	});

	const { phone_number, password, isPublished} = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		login({ phone_number, password, isPublished })
			.unwrap()
			.then(() => {
				dispatch(setAuth());
				toast.success('Logged in');
				router.push('/home');
			})
			.catch(() => {
				toast.error('Failed to log in');
			});
	};

	return {
		phone_number,
		password,
		isLoading,
		onChange,
		onSubmit,
	};
}
