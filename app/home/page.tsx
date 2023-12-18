'use client';

import React from 'react'
import { TextField } from '@radix-ui/themes'
import { Box, SimpleGrid } from "@chakra-ui/react"
import { PropertyCard } from '@/components/common';
import { FaMapMarkedAlt } from "react-icons/fa";
import Link from 'next/link';
import { MdSmartDisplay } from "react-icons/md";



// const Home = ({properties}) => {
export default function Page() {
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
            <Box backgroundColor="#f7f8f9" padding="3rem" >
                <Box maxWidth="1280px" margin="0 auto">
                    {/* <SimpleGrid
                        columns={{ base: "1", sm: "3" }}
                        gap={{ base: "0", sm: "2rem" }}
                    >
                        {properties && properties.map((property) => (
                            <PropertyCard key={property.id} {...property}/>
                            
                        ))}
                        

                    </SimpleGrid> 
                    */}
                    <PropertyCard/>
                </Box>

            </Box>

            <Link
				href='/map'
				// className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
			>
                <FaMapMarkedAlt />
            </Link>
            <Link
				href='/shorts'
				// className='font-semibold leading-6 text-indigo-600 hover:text-indigo-500'
			>
                <MdSmartDisplay />
            </Link>

            
            




        </div>
    )
}

