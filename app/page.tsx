'use client';

import { useState } from 'react';
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Page() {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [polling, setPolling] = useState<boolean>(false);
  const [checkoutRequestId, setCheckoutRequestId] = useState<string | null>(null);
  const router = useRouter();

  
  const formatPhoneNumber = (input: string) => {
    if (input.startsWith('0')) {
      return '254' + input.slice(1);
    }
    return input;
  };

  const handleAddAmount = (value: number) => {
    const currentAmount = parseFloat(amount) || 0;
    setAmount((currentAmount + value).toString());
  };

  const pollTransactionStatus = async () => {
    if (!checkoutRequestId) return;

    setPolling(true);
    const pollInterval = setInterval(async () => {
      try {
        const response = await fetch("https://api.kibeezy.com/api/query/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            CheckoutRequestID: checkoutRequestId,
          }),
        });
        const data = await response.json();

        if (response.ok && data.ResultCode === "0") {
          clearInterval(pollInterval);
          setPolling(false);
          toast.success("Payment successful!");
          router.push("/order");
        } else if (response.ok && data.ResultCode !== "0") {
          clearInterval(pollInterval);
          setPolling(false);
          toast.error(`Payment failed: ${data.ResultDesc}`);
        }
      } catch (error) {
        console.error("Error checking transaction status:", error);
      }
    }, 5000); // Poll every 5 seconds
  };

  const handleBuy = async () => {
    if (isLoading || polling) return;

    if (!phoneNumber || !amount) {
      alert('Please enter both a valid phone number and amount.');
      return;
    }

    const formattedPhoneNumber = formatPhoneNumber(phoneNumber);

    // Validate amount as a number
    const parsedAmount = parseFloat(amount);
    if (isNaN(parsedAmount) || parsedAmount < 10) {
      alert('Please enter a valid amount (minimum KES 10).');
      return;
    }

    console.log('Sending data to backend:', {
      phone_number: formattedPhoneNumber,
      amount: parsedAmount,
    });

    setIsLoading(true);

    try {
      const response = await fetch('https://api.kibeezy.com/api/stkpush/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone_number: formattedPhoneNumber,
          amount: parsedAmount,
        }),
      });

      const data = await response.json();
      console.log("STK Push Response:", data);

      if (response.ok) {
        setCheckoutRequestId(data.CheckoutRequestID);
        alert('STK Push initiated successfully! Check your phone.');
        pollTransactionStatus();
        setTimeout(pollTransactionStatus, 5000);
      } else {
        alert(`Error: ${data.error || 'Failed to initiate STK Push.'}`);
      }
    } catch (error) {
      console.error('Error initiating STK Push:', error);
      alert('An unexpected error occurred. Please try again later.');
    }finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8'>
      <div className='mb-8 max-w-md mx-auto'>
        <label
          htmlFor='phone-number'
          className='block text-sm font-medium text-gray-700'
        >
          Enter phone number
        </label>
        <div className='mt-2'>
          <input
            type='tel'
            id='phone-number'
            placeholder='0712345678'
            className='block w-full rounded-full border-2 shadow-lg focus:border-blue-700 focus:ring-blue-700 sm:text-lg px-4 py-3 text-gray-900 placeholder-gray-400'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>

      <div className='mb-8 max-w-md mx-auto'>
        <label
          htmlFor='amount'
          className='block text-sm font-medium text-gray-700'
        >
          Enter amount to deposit
        </label>
        <div className='mt-2 flex gap-4'>
          <input
            type='number'
            id='amount'
            placeholder='Minimum KES 10'
            className='block w-full rounded-full border-2 shadow-lg focus:border-green-700 focus:ring-green-700 sm:text-lg px-4 py-3 text-gray-900 placeholder-gray-400'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className='mt-4 flex gap-4 justify-center'>
          {[100, 200, 500, 1000].map((value) => (
            <button
              key={value}
              className='px-4 py-2 bg-gray-200 rounded-full shadow hover:bg-gray-300'
              onClick={() => handleAddAmount(value)}
            >
              +{value}
            </button>
          ))}
        </div>
      </div>

      <div className='max-w-md mx-auto'>
        <button
          className='w-20 bg-green-500 hover:bg-green-600 text-white py-3 rounded-full shadow-lg'
          onClick={handleBuy}
        >
          Deposit
        </button>
      </div>
    </div>
  );
}
