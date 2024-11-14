import type { Metadata } from 'next';
import { GiBee } from 'react-icons/gi';

export const metadata: Metadata = {
  title: 'Kibeezy & Co | Welcome',
  description: 'Kibeezy & Co Welcome page',
};

export default function Page() {
  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      {/* <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <GiBee className='h-8 w-8 text-primary ml-2' />
      </div> */}
      <div className='mb-8 max-w-md mx-auto'>
        <label
          htmlFor='phone-number'
          className='block text-sm font-medium text-gray-700'
        >
          Enter your phone number to pay
        </label>
        <div className='mt-2'>
        <input
  type="tel"
  id="phone-number"
  placeholder="0712345678"
  className="block w-full rounded-full border-2 border-blue-500 shadow-lg focus:border-blue-700 focus:ring-blue-700 sm:text-lg px-4 py-3 text-gray-900 placeholder-gray-400"
/>

        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        <div className='bg-blue-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Basic</h3>
          <p className='mt-2 text-lg text-center'>5 for 30min</p>
          <button className='mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md'>Buy</button>
        </div>

        <div className='bg-green-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Standard</h3>
          <p className='mt-2 text-lg text-center'>10 for 1hr</p>
          <button className='mt-4 w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md'>Buy</button>
        </div>

        <div className='bg-purple-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Premium</h3>
          <p className='mt-2 text-lg text-center'>20 for 3hrs</p>
          <button className='mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md'>Buy</button>
        </div>

        <div className='bg-red-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Ultimate</h3>
          <p className='mt-2 text-lg text-center'>30 for 6hrs</p>
          <button className='mt-4 w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md'>Buy</button>
        </div>

        <div className='bg-yellow-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Economy</h3>
          <p className='mt-2 text-lg text-center'>50 for 12hrs</p>
          <button className='mt-4 w-full bg-yellow-600 hover:bg-yellow-700 text-white py-2 rounded-md'>Buy</button>
        </div>

        <div className='bg-indigo-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center'>
          <h3 className='text-xl font-semibold'>Business</h3>
          <p className='mt-2 text-lg text-center'>100 for 24hrs</p>
          <button className='mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-md'>Buy</button>
        </div>
      </div>
    </div>
  );
}
