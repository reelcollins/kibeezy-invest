import { Box, Text } from '@chakra-ui/react';

// const PropertyMatterPortEmbed = ({ panorama }) => {
const PropertyMatterPortEmbed = () => {
    const ratio = (315 / 560) * 100;
    return (
        // <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden" frameBorder="0">
        <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden">
            {/* <iframe 
            style={{position:"absolute", top: 0, bottom: 0}}
            width="100%"
            height="100%"
            src={{panorama}}
            /> */}
            <Text>Panorama</Text>

        
        </Box>

  );
};

export default PropertyMatterPortEmbed
