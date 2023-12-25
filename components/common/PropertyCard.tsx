'use client';

// import { usePropertyFormat } from "@/hooks/use-property-format"
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/react";
import {TbBed, TbBath, TbRuler} from "react-icons/tb";
import Link from 'next/link';
import Image from "next/image";

interface Props {
    id: number;
    // realtor: string;
    title: string;
    slug: number;
    address: string;
    // city: string;
    // state: string;
    // zipcode: number;
    // description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sale_type: string;
    home_type: string;
    main_photo: string;
    // photo_1: string;
    // photo_2: string;
    // photo_3: string;
    // is_published: string;
    // date_created: number;
  }



export default function PropertyCard({
    address,
    main_photo,
    home_type,
    price,
    title,
    bedrooms,
    bathrooms,
    sale_type,
    slug,
    id,

    }: Props) {
  
	return (
        <Box marginBottom="4rem" backgroundColor="#fff">
            <Link href={{ pathname: `/home/${id}`, query: { id: id }}} prefetch={false}>
                <Box
                backgroundImage = {`url("${main_photo}")`}
                height="250px"
                backgroundPosition="center center"
                backgroundSize="cover"
                position="relative"
                display="flex"
                flexDirection="column"
                justifyContent="space-between">
                    <Box margin="1rem">
                        <Badge colorScheme="green">{sale_type}</Badge>
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
                        {home_type}
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
                            {bedrooms}
                        </Flex>
                        <Flex alignItems='center' gap="0.3rem">
                            <TbBath/>
                            {bathrooms}
                        </Flex>
                        <Flex alignItems='center' gap="0.3rem">
                            <TbRuler/>
                            {slug}
                        </Flex>
                    </HStack>
                </Box>
            </Link>

        </Box>
	
	)
}
