import { useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { useConfirmOtpMutation } from '@/redux/features/authApiSlice';
import { toast } from 'react-toastify';

// export default function useConfirmOtp(uid: string, token: string) {
export default function useConfirmOtp() {
	const router = useRouter();

	const [confirmOtp, { isLoading }] =
		useConfirmOtpMutation();

	const [formData, setFormData] = useState({
		otp: '',
	});

	const { otp } = formData;

	const onChange = (event: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;

		setFormData({ ...formData, [name]: value });
	};

	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		confirmOtp({ otp})
			.unwrap()
			.then(() => {
				toast.success('Phone number verified');
				router.push('/home');
			})
			.catch(() => {
				toast.error('OTP code invalid');
			});
	};

	return {
		otp,
		isLoading,
		onChange,
		onSubmit,
	};
}
