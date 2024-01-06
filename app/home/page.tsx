'use client';

import React, { useState } from 'react';
import { TextField } from '@radix-ui/themes'
import { Box, SimpleGrid, Text } from "@chakra-ui/react"
import { PropertyCard } from '@/components/common';
import { FaMapMarkedAlt, FaSearchLocation } from "react-icons/fa";
import Link from 'next/link';
import { MdSmartDisplay } from "react-icons/md";


async function fetchdetails() {
    const response = await fetch(
      "https://abc.nyumbani.xyz/api/listing/get-listings"
    );
    if (response.ok) {
      const responseBody = await response.json();
    //   console.log(`data ${responseBody}`);
      return responseBody;
    }
  }

export default async function Page() {
    const data = await fetchdetails();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    };

    
    interface Props {
        id: number;
        realtor: string;
        title: string;
        slug: number;
        address: string;
        city: string;
        state: string;
        zipcode: number;
        description: string;
        price: number;
        bedrooms: number;
        bathrooms: number;
        sale_type: string;
        home_type: string;
        main_photo: string;
        photo_1: string;
        photo_2: string;
        photo_3: string;
        is_published: string;
        date_created: number;
        floor: string | number;

      }
    const filteredData = data.listings.filter((item: Props) =>
        // Filter based on the search query and the properties you want to search
        item.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
        // Add more properties as needed
    );

    
      return (
        <div>
          <TextField.Root>
            <TextField.Slot>
              <FaSearchLocation height="16" width="16" />
            </TextField.Slot>
            <TextField.Input
              placeholder="Search for a home…"
              // Controlled input, value from state, onChange to update state
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </TextField.Root>
          <Box backgroundColor="#f7f8f9" padding="3rem">
            <Box maxWidth="1280px" margin="0 auto">
              <SimpleGrid
                columns={{ base: 1, sm: 3 }}
                gap={{ base: "0", sm: "2rem" }}
              >
                {filteredData.map(function (item: Props) {
                  return (
                    <PropertyCard
                      key={item.id.toString()}
                      address={item.address}
                      main_photo={item.main_photo}
                      home_type={item.home_type}
                      price={item.price}
                      title={item.title}
                      bedrooms={item.bedrooms}
                      bathrooms={item.bathrooms}
                      sale_type={item.sale_type}
                      slug={item.slug}
                      id={item.id}
                      floor={item.floor}
                    />
                  );
                })}
              </SimpleGrid>
            </Box>
          </Box>
        </div>
      );
}



{/*
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



*/}