"use client";

import { Box, Text } from "@chakra-ui/react"

interface PropertyYoutubeEmbedProps {
  youtube: string;
    
  }
  
const PropertyYoutubeEmbed = ({ youtube }: PropertyYoutubeEmbedProps) => {
// const PropertyYoutubeEmbed = () => {

    const ratio = (678 / 382) * 100;
    return (
        // <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden" frameBorder="0">
        <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden">
            <iframe 
            style={{position:"absolute", top: 0, bottom: 0}}
            width="382"
            height="678"
            src={`https://www.youtube.com/embed/${youtube}`}           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"/>

           {/* <iframe width="382" height="678" src="https://www.youtube.com/embed/4SoXO9YWYBg" title="Blessed Courts Ground Floor" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
        </Box>
      
  )
}

export default PropertyYoutubeEmbed


