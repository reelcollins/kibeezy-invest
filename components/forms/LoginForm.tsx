'use client';

import { useLogin } from '@/hooks';
import { Form } from '@/components/forms';

export default function LoginForm() {
	const { phone_number, password, isLoading, onChange, onSubmit } = useLogin();

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
			labelText: 'Password',
			labelId: 'password',
			placeholder: '********',
			type: 'password',
			value: password,
			link: {
				linkText: 'Forgot password?',
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
