import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";

const Mentor = ({ name, university, image }) => {
  return (
    <Box
      maxW="200px"
      overflow="hidden"
      boxShadow="lg"
      borderRadius="md"
      bg="white"
      mr={4}
      ml={10}
      mb={6}
      textAlign="center"
    >
      <Image
        src={image}
        alt={name}
        h="200px"
        w="200px"
        objectFit="cover"
        borderRadius="full"
        mx="auto"
      />

      <Box p="4">
        <Text fontSize="xl" fontWeight="semibold" mb="2">
          {name}
        </Text>
        <Text color="gray.600" fontSize="sm">
          {university}
        </Text>
      </Box>
    </Box>
  );
};

export default Mentor;
