import { UploadForm } from '@/components/forms';
import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'NYUMBANI | Upload',
	description: 'NYUMBANI upload page',
};

export default function Page() {
	return (
		<div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>


			<div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
                <UploadForm/>

				{/* <SocialButtons /> */}

			</div>
		</div>
	);
}
