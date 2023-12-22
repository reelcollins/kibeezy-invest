'use client';

import { useRegister } from '@/hooks';
import { Form } from '@/components/forms';

export default function RegisterForm() {
	const {
		first_name,
		last_name,
		phone_number,
		password,
		re_password,
		isLoading,
		onChange,
		onSubmit,
	} = useRegister();

	const config = [
		{
			labelText: 'First name',
			labelId: 'first_name',
			placeholder: 'First name',
			type: 'text',
			value: first_name,
			required: true,
		},
		{
			labelText: 'Last name',
			labelId: 'last_name',
			placeholder: 'Last name',
			type: 'text',
			value: last_name,
			required: true,
		},
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
			required: true,
		},
		{
			labelText: 'Confirm password',
			labelId: 're_password',
			placeholder: '********',
			type: 'password',
			value: re_password,
			required: true,
		},
	];

	return (
		<Form
			config={config}
			isLoading={isLoading}
			btnText='Sign up'
			onChange={onChange}
			onSubmit={onSubmit}
		/>
	);
}
