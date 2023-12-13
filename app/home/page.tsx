'use client';

import React from 'react'
import type { Metadata } from 'next';
import { TextField } from '@radix-ui/themes'

export const metadata: Metadata = {
	title: 'NYUMBANI | Home',
	description: 'NYUMBANI home page',
};



const Home = () => {
    return (
        <div>

        <TextField.Root>
            {/*
            <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16" />
            </TextField.Slot>
            */}
            <TextField.Input placeholder="Search for a home…" />
        </TextField.Root>



        </div>
    )
}

export default Home