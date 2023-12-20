'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	const { phone_number, OTP, isLoading, onChange, onSubmit } = useLogin();

	const config = [
		{
			labelText: 'Phone Number',
			labelId: 'phone_number',
			placeholder: '07******84 / 01******84',
			type: 'text',
			value: phone_number,
			required: true,
		},
		{
			labelText: 'Enter Last OTP sent',
			labelId: 'OTP',
			placeholder: '****',
			type: 'text',
			value: OTP,
			link: {
				linkText: 'Resend OTP',
				linkUrl: '/password-reset',
			},
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Login'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
