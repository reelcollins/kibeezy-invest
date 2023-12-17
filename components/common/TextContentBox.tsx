import { Box, Divider, Text } from "@chakra-ui/react"


interface TextContentBoxProps {
    title: string;
    children: React.ReactNode;
  }
  
  const TextContentBox = ({ title, children }: TextContentBoxProps) => {
    return(
        <>
            <Box backgroundColor="white" padding="1.5" marginBottom="1rem">
                <Text fontSize="1.5" fontWeight="light" color="gray.600" marginBottom="0.5rem">
                    {title}
                </Text>

                <Divider marginY="0.7rem" />
                {children}

            </Box>
        </>
  );
};

export default TextContentBox;