"use client";

import { PropertyMatterPortEmbed, PropertyStats, PropertyThumbnailSlider, PropertyYoutubeEmbed, TextContentBox, PropertiesMap } from "@/components/common"
// import { usePropertyFormat } from "@/hooks/use-property-format"
import { Badge, Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { TbMapPin } from "react-icons/tb"
import { useSearchParams } from 'next/navigation'

async function fetchdetails(slugg : string) {
  const response = await fetch(
    `https://abc.nyumbani.xyz/api/listing/get-listings/${slugg}`
  );
  if (response.ok) {
    const responseBody = await response.json();
    // console.log(`data ${data}`);
    // setData(responseBody);
    console.log(`data ${responseBody}`);
    return responseBody;
  }
}

interface ItemType {
  id: number;
  address: string;
  title: string;
  slug: number;
  bedrooms: number;
  bathrooms: number;
  price: number;
  main_photo: string;
  photo_1: string;
  photo_2: string;
  photo_3: string;
  sale_type: string;
  home_type: string;
  description: string;
  youtube: string;
  latt: number;
  lngg: number;

}

// export default async function PropertySingle({ params }: { params: { id: number } }) {
export default async function PropertySingle() {
  const searchParams = useSearchParams()
  console.log(searchParams.get('slug'));
  const slugg = searchParams.get('slug') ?? '';

  const data = await fetchdetails(slugg);

  // const targetProperty = data.listings.find((item: ItemType) => item.slug === slug);
  // const targetProperty = data.listings.find((item: ItemType) => item.id = params.id);
  // const targetProperty = data.listings.find((item: ItemType) => item.id);
  
  const {
    id,
    address,
    title,
    slug,
    bedrooms,
    bathrooms,
    price,
    main_photo,
    photo_1,
    photo_2,
    photo_3,
    sale_type,
    home_type,
    description,
    youtube,
    latt,
    lngg,
  } = data;

  return (
    <div>

      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          <GridItem colSpan={6}>
            <Text fontSize="3xl" fontWeight="medium" color="blue.800" textAlign={{ base: "center", sm: "left" }}>
              {home_type} {title}
            </Text>
            <Flex fontSize="xl" color="blue.600" textAlign="center" flexDirection={{ base: "column", sm: "row" }} gap="0.5rem" marginY={{ base: "1rem", sm: "0" }}>
              <TbMapPin />
              <Text fontWeight="light">
                {address} - ID:{id}
              </Text>
              <Badge colorScheme="green">{sale_type}</Badge>
            </Flex>
          </GridItem>

            <GridItem colSpan={{base: 6, sm: 3}}>
                <PropertyThumbnailSlider main_photo={main_photo} photo_1={photo_1} photo_2={photo_2} photo_3={photo_3}/>
                
            </GridItem>

            <GridItem colSpan={{ base: 6, sm: 3}}>
                <PropertyStats bedrooms={bedrooms} bathrooms={bathrooms} price={price} slug={slug}/>
                
                <TextContentBox title="Description">
                    {/*<Text fontWeight="light" color="gray.600" fontSize="1rem" noOfLines="4">{description}</Text>*/}
                    <Text fontWeight="light" color="gray.600" fontSize="1rem">{description}</Text>
                </TextContentBox>
                <TextContentBox title="Amenities">
                    {/* <SimpleGrid columns={{ base: 1, sm: 2 }} fontWeight="light" color="gray.600" fontSize="1rem">
                    {amenities.length ? amenities.map((item) => (
                        <Text key={item}>{item}</Text>
                    )) : "Please contact us for more info"}
                    </SimpleGrid> */}
                    <Text>Amenities</Text>

                </TextContentBox>
            </GridItem>
            <GridItem colSpan={{ base: 6, sm: 3 }}>
              <Text>YouTube</Text>
                <TextContentBox title="Video Walkthrough">
                    <PropertyYoutubeEmbed youtube={youtube}/>
                </TextContentBox>
                
            </GridItem>

            {/* <GridItem colSpan={{ base: 6, sm: 3 }}>
                <TextContentBox title="3D Virtual Walkthrough">
                    <PropertyMatterPortEmbed panorama={panorama}/>
                </TextContentBox>
                
            </GridItem> */}

            <GridItem colSpan={{ base: 6, sm: 3 }}>
                <TextContentBox title="Map">

                    <PropertiesMap latt={latt} lngg={lngg}/>
                </TextContentBox>
                
            </GridItem>

            

            
        </Grid>

      </Box>
    </div>
  )
}

