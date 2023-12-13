'use client';

import React from 'react'
import { TextField } from '@radix-ui/themes'





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