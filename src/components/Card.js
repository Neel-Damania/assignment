import React from "react";
import { Flex, Box, Image, Text } from "@chakra-ui/react";

const Card = ({ name, image }) => {
  return (
    <Box
      maxW="200px"
      borderWidth="1px"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      borderColor="gray.300"
      _hover={{ boxShadow: "xl" }}
      bg="white"
      mr={4}
      ml={10}
      mb={6}
    >
      <Image
        src={image}
        borderRadius="lg"
        alt={name}
        h="200px"
        objectFit="cover"
      />

      <Box h="100px" p="4">
        <Text fontSize="xl" fontWeight="semibold">
          {name}
        </Text>
      </Box>
    </Box>
  );
};

export default Card;
