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

            {/* <Link
                href="/map"
                style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                }}
            >
                <FaMapMarkedAlt height="30" width="30" />
            </Link>
            <Link
                href="/shorts"
                style={{
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                }}
            >
                <MdSmartDisplay height="30" width="30" />
            </Link> */}

            {/* <Box className="fixed bottom-0 left-0 right-0 flex justify-center">
              
                
                    <Link
                        href="/map"
                        className="text-4xl mr-4 hover:bg-gray-200"
                    >
                        <FaMapMarkedAlt />
                    </Link>
                    <Link href="/shorts" className="text-4xl hover:bg-gray-200">
                        <MdSmartDisplay />
                    </Link>
                
    
            
                <Link
                href="/map"
                className="text-3xl mr-1 hover:bg-gray-200" // smaller icon size, margin, and hover background
                >
                <FaMapMarkedAlt />
                </Link>
                <Link href="/shorts" className="text-3xl hover:bg-gray-200">
                <MdSmartDisplay />
                </Link>
            
            </Box> */}
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
                <Box className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-2">
                    <Link
                    href="/map"
                    className="text-4xl mr-4 sm:w-1/2 sm:text-3xl hover:bg-gray-200"
                    >
                    <FaMapMarkedAlt />
                    </Link>
                    <Link href="/shorts" className="text-4xl sm:w-1/2 sm:text-3xl hover:bg-gray-200">
                    <MdSmartDisplay />
                    </Link>
                </Box>
            </Box>




        </div>
    )
}

