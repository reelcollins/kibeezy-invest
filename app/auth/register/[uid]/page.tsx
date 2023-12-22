import { OtpForm } from '@/components/forms';
import type { Metadata } from 'next';
import { useRouter, Query } from 'next/navigation';


export const metadata: Metadata = {
	title: 'NYUMBANI | Confirm Phone Number',
	description: 'NYUMBANI Confirm Phone Number page',
};

// interface Props {
// 	params: {
// 		uid: string;
// 		token: string;
// 	};
// }

// export default function Page({ params: { uid, token } }: Props) {
export default function Page() {
	const router = useRouter();
	const query: Query = router.query;
	const { uid } = query;
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
			<div className='sm:mx-auto sm:w-full sm:max-w-sm'>
				<img
					className='mx-auto h-10 w-auto'
					src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600'
					alt='NYUMBANI'
				/>
				<h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900'>
					Enter OTP otp sent to: +254 712345678
				</h2>
			</div>

			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
				<OtpForm uid={uid} />
			</div>
		</div>
	);
}
