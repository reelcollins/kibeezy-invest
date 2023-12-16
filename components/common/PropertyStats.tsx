'use client';

import { Box, Center, Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { TbBath, TbBed, TbRuler } from "react-icons/tb";

const PropertyStats = () => {

    const address = '123 Main St';
    const coverPhoto = 'url/to/cover/photo.jpg';
    const propertyType = 'Apartment';
    const price = 200000;
    const title = 'Beautiful Apartment for Sale';
    const rooms = 2;
    const baths = 1;
    const purpose = 'For Sale';
    const sqSize = 1200;
    const externalID = 'ABC123';
    const photos = ['url/to/photo1.jpg', 'url/to/photo2.jpg'];
    const description = 'This is a stunning apartment with great amenities.';
    const coverVideo = 'url/to/cover/video.mp4';
    const panorama = 'url/to/panorama/photo.jpg';
    const amenities = ['Swimming Pool', 'Gym', 'Parking'];
    const furnished = true;
    

    // const PropertyStats = ({ rooms, baths, price, sqSize }) => {
    return (
        <>
            <Box backgroundColor="white" padding="1.5rem" marginBottom="1rem">
                <Flex flexDirection={{base:"column", sm:"row"}}
                fontSize="xl" color="gray.500" fontWeight="light" gap="1rem" justifyContent="space-around" alignItems="center">

                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>BEDS</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbBed/>
                            {rooms}
                        </Flex>
                    </Flex>


                    <Center height="50px">
                        <Divider orientation="vertical"/>
                    </Center>


                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>BATHS</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbBath/>
                            {baths}
                        </Flex>
                    </Flex>


                    <Center height="50px">
                        <Divider orientation="vertical"/>
                    </Center>


                    <Flex flexDirection="column" justifyContent="center" alignItems="center" gap="0.3rem">
                        <Text>SIZE</Text>
                        <Flex alignItems="center" gap="0.5rem">
                            <TbRuler/>
                            {sqSize}
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