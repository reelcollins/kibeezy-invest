import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useRegisterMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

interface Query {
	uid: string; // Assuming 'uid' is a string type
  }

export default function useRegister() {
	const router = useRouter();
	const [register, { isLoading }] = useRegisterMutation();

	const [formData, setFormData] = useState({
		first_name: '',
		last_name: '',
		phone_number: '',
		otp_method: '',
		password: '',
		re_password: '',

	});

	const { first_name, last_name, phone_number, otp_method, password, re_password } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		register({ first_name, last_name, phone_number, otp_method, password, re_password })
			.unwrap()
			.then((response) => {
				const uid = response.data.uid; // Assuming the UID is in the 'data.uid' property
				toast.success('Account registered');
			
				// Pass the UID to the OTP page
				router.push(`/auth/register/?uid=${uid}/`);
			  })
			  .catch(() => {
				toast.error('Failed to register');
			  });
	};

	return {
		first_name,
		last_name,
		phone_number,
		otp_method,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	};
}
