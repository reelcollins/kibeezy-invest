'use client';

// import { usePropertyFormat } from "@/hooks/use-property-format"
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import {TbBed, TbBath, TbRuler} from "react-icons/tb";
import Link from 'next/link';


export default function PropertyCard() {
    // const {
    //     address,
    //     coverPhoto,
    //     propertyType,
    //     price,
    //     title,
    //     rooms,
    //     baths,
    //     purpose,
    //     sqSize,
    //     externalID
    // } = usePropertyFormat(property)
    const property = {
        address: "123 Main St",
        coverPhoto: "https://vercel-app.s3.amazonaws.com/media/Screenshot_2023-12-18-03-36-45-510_com.google.android.youtube.jpg",
        propertyType: "House",
        price: 500000,
        title: "Beautiful Home",
        rooms: 3,
        baths: 2,
        purpose: "Sale",
        sqSize: 2000,
        externalID: "ABC123"
    };
    const {
        address,
        coverPhoto,
        propertyType,
        price,
        title,
        rooms,
        baths,
        purpose,
        sqSize,
        externalID
    } = property;
    
	return (
        <Box marginBottom="4rem" backgroundColor="#fff">
            <Link href={`/home/${externalID}`}>
                <Box
                backgroundImage = {`url("${coverPhoto}")`}
                height="250px"
                backgroundPosition="center center"
                backgroundSize="cover"
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="space-between">
                    <Box margin="1rem">
                        <Badge colorScheme="green">{purpose}</Badge>
                    </Box>
                    <Box 
                        height="50%"
                        bgGradient="linear(to-t, #0a0b1cd9, #ffffff00 100%)"
                        display="flex"
                        alignItems="flex-end"
                        padding="1rem"
                        >
                        <Text fontSize='3xl' fontWeight="medium" color='whiteAlpha.800'>
                            {price}
                        </Text>
                        
                    </Box>
                </Box>
                <Box padding='1.5rem'>
                    <Text fontSize="xl" fontWeight='medium' marginBottom='1rem'>
                        {propertyType}
                    </Text>
                    <Text fontWeight="light" fontSize="sm" isTruncated>
                        {address}
                    </Text>
                    <Text isTruncated>
                        {title}
                    </Text>
                    <HStack spacing="1.3rem" marginTop="1rem">
                        <Flex alignItems='center' gap="0.3rem">
                            <TbBed/>
                            {rooms}
                        </Flex>
                        <Flex alignItems='center' gap="0.3rem">
                            <TbBath/>
                            {baths}
                        </Flex>
                        <Flex alignItems='center' gap="0.3rem">
                            <TbRuler/>
                            {sqSize}
                            <sup>m2</sup>
                        </Flex>
                    </HStack>
                </Box>
            </Link>

        </Box>
	
	)
}
