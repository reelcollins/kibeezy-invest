'use client';

import type { Metadata } from 'next';
import { useState } from 'react';
import { GiBee } from 'react-icons/gi';

const packageAmounts = {
  '5 for 30min': 5,
  '10 for 1.5hr': 10,
  '20 for 3hrs': 20,
  '30 for 6.5hrs': 30,
  '50 for 12hrs': 50,
  '80 for 24hrs': 80,
};

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [selectedPackage, setSelectedPackage] = useState<string>('');

  // ✅ Function to format the phone number
  const formatPhoneNumber = (input: string) => {
    if (input.startsWith('0')) {
      return '254' + input.slice(1);
    }
    return input;
  };

  const handleBuy = async (pkg: string) => {
    if (!phoneNumber) {
      alert('Please enter a valid phone number.');
      return;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    // Get the amount for the selected package
    const amount = packageAmounts[pkg];

    if (!amount) {
      alert('Invalid package selected.');
      return;
    }

    console.log('Sending data to backend:', {
      phone_number: formattedPhoneNumber,
      package: pkg,
      amount: amount,
    });

    try {
      const response = await fetch('https://abc.nyumbani.xyz/api/stkpush/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: formattedPhoneNumber,
          package: pkg,
          amount: amount,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Payment initiated successfully! Check your phone.');
      } else {
        alert(`Error: ${data.error || 'Failed to initiate STK Push.'}`);
      }
    } catch (error) {
      console.error('Error initiating STK Push:', error);
      alert('An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='mb-8 max-w-md mx-auto'>
        <label
          htmlFor='phone-number'
          className='block text-sm font-medium text-gray-700'
        >
          Enter your phone number to pay
        </label>
        <div className='mt-2'>
          <input
            type='tel'
            id='phone-number'
            placeholder='0712345678'
            className='block w-full rounded-full border-2 shadow-lg focus:border-blue-700 focus:ring-blue-700 sm:text-lg px-4 py-3 text-gray-900 placeholder-gray-400'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            onBlur={() => setPhoneNumber(formatPhoneNumber(phoneNumber))} // Format on blur
          />
        </div>
      </div>
      <div className='mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
        {[
          { name: 'Basic', description: '5 for 30min', color: 'blue' },
          { name: 'Standard', description: '10 for 1.5hr', color: 'green' },
          { name: 'Premium', description: '20 for 3hrs', color: 'purple' },
          { name: 'Ultimate', description: '30 for 6.5hrs', color: 'red' },
          { name: 'Economy', description: '50 for 12hrs', color: 'yellow' },
          { name: 'Business', description: '80 for 24hrs', color: 'indigo' },
        ].map((pkg) => (
          <div
            key={pkg.name}
            className={`bg-${pkg.color}-500 text-white rounded-full shadow-xl p-8 flex flex-col items-center`}
          >
            <h3 className='text-xl font-semibold'>{pkg.name}</h3>
            <p className='mt-2 text-lg text-center'>{pkg.description}</p>
            <button
              className={`mt-4 w-3/4 bg-${pkg.color}-600 hover:bg-${pkg.color}-700 text-white py-2 rounded-md`}
              onClick={() => handleBuy(pkg.description)}
            >
              Buy
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
