'use client';

import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TbBath, TbBed, TbRuler } from "react-icons/tb";

interface PropertyStatsProps {
    bedrooms: number; // Number of rooms
    bathrooms: number; // Number of bathrooms
    price: string | number; // Price of the property (string for formatted values)
    slug: string | number; // Square footage of the property (string for formatted values)
  }
  
    

const PropertyStats = ({ bedrooms, bathrooms, price, slug }: PropertyStatsProps ) => {
    return (
        <>
            <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem">
                <Flex flexDirection={{base:"column", sm:"row"}}
                fontSize="xl" color="gray.500" fontWeight="light" gap="1rem" justifyContent="space-around" alignItems="center">

                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>BEDS</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbBed/>
                            {bedrooms}
                        </Flex>
                    </Flex>


                    <Center height="50px">
                        <Divider orientation="vertical"/>
                    </Center>


                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>BATHS</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbBath/>
                            {bathrooms}
                        </Flex>
                    </Flex>


                    <Center height="50px">
                        <Divider orientation="vertical"/>
                    </Center>


                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>SIZE</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbRuler/>
                            {slug}
                            <sup>m2</sup>
                        </Flex>
                    </Flex>

                    <Center height="50px">
                        <Divider orientation="vertical"/>
                    </Center>


                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>PRICE</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            {price}
                        </Flex>
                    </Flex>



                </Flex>

            </Box>
        </>
  );
};

export default PropertyStats;