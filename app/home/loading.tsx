'use client';

import React from 'react'
import { Spinner } from '@/components/common';

export default function Loading() {
  return (
    <div className='flex justify-center my-8'>
      <Spinner lg />
    </div>
  )
}

