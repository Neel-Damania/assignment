import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box
      bg="gray.800"
      color="white"
      py={2}
      px={4}
      position="fixed"
      top={0}
      width="100%"
      zIndex={999}
      minH="8vh"
      borderBottomRadius="xl"
      boxShadow="lg"
    >
      <Flex justifyContent="space-between" alignItems="center">
        <Link
          href="#"
          fontWeight="bold"
          m={2}
          ml={10}
          fontSize={`calc(16px + 1vh)`}
          _hover={{ textDecoration: "none" }}
        >
          SciAstra Education
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;
