'use client';

import React from 'react'
import { TextField } from '@radix-ui/themes'
import { Box, SimpleGrid } from "@chakra-ui/react"
import { PropertyCard } from '@/components/common';
import { FaMapMarkedAlt, FaSearchLocation } from "react-icons/fa";
import Link from 'next/link';
import { MdSmartDisplay } from "react-icons/md";



// const Home = ({properties}) => {
export default function Page() {
    return (
        <div>
            <TextField.Root>
                <TextField.Slot>
                    <FaSearchLocation height="16" width="16" />
                </TextField.Slot>
                
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
            {/* <Box
                className="fixed left-0 right-0 flex justify-center bottom-5"
                >
                <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Link href="/map" className="text-4xl mr-4 w-full hover:bg-gray-200">
                        <FaMapMarkedAlt />
                    </Link>
                    <Link href="/shorts" className="text-4xl w-full hover:bg-gray-200">
                        <MdSmartDisplay />
                    </Link>
                </Box>
            </Box> */}
            <Box
                className="fixed left-0 right-0 flex justify-center bottom-5"
                >
                <Box className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-2">
                    <Link
                    href="/map"
                    className="text-4xl mr-4 hover:bg-gray-200"
                    >
                    <FaMapMarkedAlt />
                    </Link>
                    <Link href="/shorts" className="text-4xl hover:bg-gray-200">
                    <MdSmartDisplay />
                    </Link>
                </Box>
            </Box>




        </div>
    )
}

