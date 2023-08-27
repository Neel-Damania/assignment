import React from "react";
import { Box, Flex, Image, Text, Button } from "@chakra-ui/react";

const Advisor = ({ name, post, university, image }) => {
  return (
    <Box
      maxW="200px"
      overflow="hidden"
      bg="transparent"
      mr={4}
      ml={10}
      mb={6}
      textAlign="center"
    >
      <Flex direction="column" h="100%">
        <Image
          src={image}
          alt={name}
          h="200px"
          w="200px"
          objectFit="cover"
          borderRadius="full"
          mx="auto"
        />

        <Flex
          direction="column"
          justifyContent="space-between"
          flexGrow={1}
          p="4"
        >
          <Box>
            <Text fontSize="xl" fontWeight="semibold" mb="2">
              {name}
            </Text>
            <Text color="gray.600" fontSize="sm" mb="2">
              {post}
            </Text>
            <Text color="gray.600" fontSize="sm">
              {university}
            </Text>
          </Box>
          <Button mt={2} colorScheme="blue">
            Message Him Now
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Advisor;
