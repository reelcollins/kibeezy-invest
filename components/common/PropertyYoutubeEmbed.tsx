"use client";

import { Box, Text } from "@chakra-ui/react"

interface PropertyYoutubeEmbedProps {
    coverVideo: string;
    
  }
  
const PropertyYoutubeEmbed = ({ coverVideo }: PropertyYoutubeEmbedProps) => {
// const PropertyYoutubeEmbed = () => {

    const ratio = (315 / 560) * 100;
    return (
        // <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden" frameBorder="0">
        <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden">
            // <iframe 
            style={{position:"absolute", top: 0, bottom: 0}}
            width="100%"
            height="100%"
            src={`https://www.youtube.com/embed/${coverVideo}`}           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; autoplay=1; muted=1"/>

           
        </Box>
      
  )
}

export default PropertyYoutubeEmbed


