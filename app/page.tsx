"use client";

import React from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import {
  Flex,
  Button,
  Box,
  ChakraProvider,
  extendTheme,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Spinner } from "@/components/common"; // Adjust import path as necessary

// Extend the default Chakra UI theme to add the custom "blue magic" color
const theme = extendTheme({
  colors: {
    magicBlue: {
      100: "#E0F7FF", // Lighter shade
      500: "#3A86FF", // Main "blue magic" color
      900: "#002A8A", // Darker shade
    },
  },
});

// Add graffiti font from Google Fonts
const graffitiFont = {
  fontFamily: "Permanent Marker, cursive", // Using a permanent marker style font
};

function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return (
      <div className="flex justify-center my-8">
        <Spinner md />
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (user) {
    return (
      <ChakraProvider theme={theme}>
        <VStack spacing={4} minHeight="100vh" justifyContent="space-between">
          <Flex
            as="nav"
            padding="0.5rem 1rem"
            backgroundColor="black"
            color="white"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            boxShadow="lg"
          >
            <Box
              fontSize="lg"
              fontWeight="bold"
              padding="0.5rem 1rem"
              color="white"
              backgroundColor="black"
              borderRadius="md"
            >
              Welcome {user.name}!
            </Box>
            <Button
              onClick={() => (window.location.href = "/auth/logout")}
              fontSize="lg"
              fontWeight="normal"
              backgroundColor="black"
              color="white"
              _hover={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "md",
              }}
              padding="0.5rem 1rem"
              borderRadius="md"
              transition="background-color 0.3s"
            >
              Logout
            </Button>
          </Flex>

          

                     
          <Flex
            as="nav"
            padding="0.5rem 1rem"
            backgroundColor="black" 
            color="white"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            boxShadow="lg"
            marginBottom="4rem"
          >
            <Button
              onClick={() => window.location.href = "/api/checkout"}
              fontSize="lg"
              fontWeight="normal"
              backgroundColor="black"
              color="white"
              _hover={{ backgroundColor: "red", color: "white", borderRadius: "md" }}
              padding="0.5rem 1rem"
              width="full"
              borderRadius="md"
              transition="background-color 0.3s"
            >
              Checkout
            </Button>
          </Flex> 

           <Button
            onClick={() => window.location.href = "/checkout"}
            fontSize="lg"
            fontWeight="bold"
            backgroundColor="magicBlue.500"
            color="white"
            _hover={{ backgroundColor: "magicBlue.900" }}
            padding="1rem"
            width="full"
            borderRadius="md"
            marginBottom="2rem" // Adjust margin as necessary
          >
            Proceed to Checkout
          </Button>
        </VStack>
      </ChakraProvider>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Flex
        as="nav"
        padding="1rem 2rem"
        backgroundColor="white"
        backgroundImage="url('https://kibeezy.s3.eu-north-1.amazonaws.com/kibeeezy_1734602486_3526423710455050084_9676905752.jpg')"
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        backgroundAttachment="fixed"
        color="white"
        justifyContent="center"
        alignItems="center"
        width="100%"
        height="100vh"
        boxShadow="lg"
        flexDirection="column"
      >
        <Text
          sx={graffitiFont}
          fontSize="5xl"
          color="white"
          backgroundColor="black"
          mb={4}
        >
          Kibeezy.com
        </Text>
        <Text
          fontSize="lg"
          color="white"
          backgroundColor="black"
          textAlign="center"
          mb={8}
        >
          Nikona Mia tu.
        </Text>

        <Button
          onClick={() => (window.location.href = "/auth/login")}
          fontSize="lg"
          fontWeight="normal"
          backgroundColor="black"
          color="white"
          _hover={{
            backgroundColor: "#FFC107",
            color: "white",
            borderRadius: "md",
          }}
          padding="0.5rem 1rem"
          borderRadius="md"
          transition="background-color 0.3s"
        >
          Login
        </Button>
      </Flex>
    </ChakraProvider>
  );
}

export default Page;
