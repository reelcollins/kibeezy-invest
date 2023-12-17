import { Box } from '@chakra-ui/react';

interface PropertyMatterPortEmbedProps {
    panorama: string;

}

const PropertyMatterPortEmbed = ({ panorama }: PropertyMatterPortEmbedProps) => {
    const ratio = (315 / 560) * 100;
    return (
        // <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden" frameBorder="0">
        <Box paddingTop={`${ratio}%`} position="relative" height="0" overflow="hidden">
            <iframe 
            style={{position:"absolute", top: 0, bottom: 0}}
            width="100%"
            height="100%"
            src={panorama}
            />
        
        </Box>

  );
};

export default PropertyMatterPortEmbed
