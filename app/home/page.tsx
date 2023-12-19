'use client';

import React from 'react'
import { TextField } from '@radix-ui/themes'
import { Box, SimpleGrid } from "@chakra-ui/react"
import { PropertyCard } from '@/components/common';
import { FaMapMarkedAlt, FaSearchLocation } from "react-icons/fa";
import Link from 'next/link';
import { MdSmartDisplay } from "react-icons/md";
import { getProperties } from '../../lib/api';

interface Property {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }

interface HomeProps {
    properties: Property[]; // Replace "Property" with your actual property type
  }
  


const Home = ({ properties }: HomeProps) => {

// export default function Page() {
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
                    <SimpleGrid
                        columns={{ base: "1", sm: "3" }}
                        gap={{ base: "0", sm: "2rem" }}
                    >
                        {properties.map((property) => (
                            <PropertyCard key={property.id} {...property}/>
                            
                        ))}
                        

                    </SimpleGrid> 
                    
                    {/* <PropertyCard/> */}
                </Box>
            </Box>

            <Box
                className="fixed left-0 right-0 flex justify-center bottom-5"
                >
                <Box className="grid grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-2">
                    <Link
                    href="/map"
                    className="text-5xl mr-4 hover:bg-gray-200"
                    >
                    <FaMapMarkedAlt />
                    </Link>
                    <Link href="/shorts" className="text-5xl hover:bg-gray-200">
                    <MdSmartDisplay />
                    </Link>
                </Box>
            </Box>




        </div>
    )
}

export default Home;


export async function getServerSideProps() {
    const properties = await getProperties();
    return (
        { properties: properties }
    )
}