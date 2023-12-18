"use client";

import { PropertyMatterPortEmbed, PropertyStats, PropertyThumbnailSlider, PropertyYoutubeEmbed, TextContentBox, PropertiesMap } from "@/components/common"
// import { usePropertyFormat } from "@/hooks/use-property-format"
import { Badge, Box, Flex, Grid, GridItem, SimpleGrid, Text } from "@chakra-ui/react"
import React from "react"
import { TbMapPin } from "react-icons/tb"


// const PropertySingle = ({ property }) => {
const PropertySingle = () => {
    const property = {
        address: "123 Main St",
        coverPhoto: "https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/yYe39fDTZBopaISUagjI-0.jpeg",
        propertyType: "Apartment",
        price: 200000,
        title: "Beautiful Apartment for Sale",
        rooms: 2,
        baths: 1,
        purpose: "For Sale",
        sqSize: 1200,
        externalID: "ABC123",
        photos: ["https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/yYe39fDTZBopaISUagjI-0.jpeg", "https://s3.us-east-2.amazonaws.com/images.propertypro.africa/large/88OQRHvqhvvoWXSs5GiD-1.jpeg"],
        description: "This is a stunning apartment with great amenities.",
        coverVideo: "1Kb6kYUCEWo?si=pol1LELZXbaehWiT",
        panorama: "url/to/panorama/photo.jpg",
        amenities: ["Swimming Pool", "Gym", "Parking"],
        furnished: true
    };

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
    //     externalID,
    //     photos,
    //     description,
    //     coverVideo,
    //     panorama,
    //     amenities,
    //     furnished
    // } = usePropertyFormat(property)
    
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
        externalID,
        photos,
        description,
        coverVideo,
        panorama,
        amenities,
        furnished
    } = property;

  return (
    <div>

      <Box backgroundColor="#f7f8f9" paddingY="3rem">
        <Grid templateColumns="repeat(6, 1fr)" gap="5" maxWidth="1280px" margin="0 auto">
          <GridItem colSpan={6}>
            <Text fontSize="3xl" fontWeight="medium" color="blue.800" textAlign={{ base: "center", sm: "left" }}>
              {propertyType} {title}
            </Text>
            <Flex fontSize="xl" color="blue.600" textAlign="center" flexDirection={{ base: "column", sm: "row" }} gap="0.5rem" marginY={{ base: "1rem", sm: "0" }}>
              <TbMapPin />
              <Text fontWeight="light">
                {address} - ID:{externalID}
              </Text>
              <Badge colorScheme="green">{purpose}</Badge>
            </Flex>
          </GridItem>

            <GridItem colSpan={{base: 6, sm: 3}}>
                {/* <PropertyThumbnailSlider photos={photos}/> */}
                <PropertyThumbnailSlider/>
                
            </GridItem>

            <GridItem colSpan={{ base: 6, sm: 3}}>
                <PropertyStats rooms={rooms} baths={baths} price={price} sqSize={sqSize}/>
                
                <TextContentBox title="Description">
                    {/*<Text fontWeight="light" color="gray.600" fontSize="1rem" noOfLines="4">{description}</Text>*/}
                    <Text fontWeight="light" color="gray.600" fontSize="1rem">{description}</Text>
                </TextContentBox>
                <TextContentBox title="Amenities">
                    <SimpleGrid columns={{ base: 1, sm: 2 }} fontWeight="light" color="gray.600" fontSize="1rem">
                    {amenities.length ? amenities.map((item) => (
                        <Text key={item}>{item}</Text>
                    )) : "Please contact us for more info"}
                    </SimpleGrid>

                </TextContentBox>
            </GridItem>
            <GridItem colSpan={{ base: 6, sm: 3 }}>
                <TextContentBox title="Video Walkthrough">
                    <PropertyYoutubeEmbed coverVideo={coverVideo}/>
                </TextContentBox>
                
            </GridItem>

            {/* <GridItem colSpan={{ base: 6, sm: 3 }}>
                <TextContentBox title="3D Virtual Walkthrough">
                    <PropertyMatterPortEmbed panorama={panorama}/>
                </TextContentBox>
                
            </GridItem> */}

            <GridItem colSpan={{ base: 6, sm: 3 }}>
                <TextContentBox title="Map">
                    <PropertiesMap />
                </TextContentBox>
                
            </GridItem>

            

            
        </Grid>

      </Box>
    </div>
  )
}

export default PropertySingle;