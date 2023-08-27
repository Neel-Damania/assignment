import { Flex, Box, Heading } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Card from "../src/components/Card.js";
import harvard from "./assets/images/harvard.jpg";
import Navbar from "./components/Navbar.js";
import Mentor from "./components/Mentor.js";
import user from "./assets/images/user.jpg";
import Advisor from "./components/Advisor.js";
import advisor from "./assets/images/adviser.png";
import john from "./assets/images/john.jpeg";
import california from "./assets/images/california.jpg";
import cambridge from "./assets/images/cambridge.jpg";
import edinburgh from "./assets/images/edinburgh.jpg";
import illinois from "./assets/images/illinois.jpg";
import ETH from "./assets/images/ETH.jpg";
import maxPlanck from "./assets/images/maxPlanck.jpg";

function App() {
  const universities = [
    {
      id: 1,
      name: "Harvard University",
      image: harvard,
    },
    {
      id: 2,
      name: "Cambridge University",
      image: cambridge,
    },
    {
      id: 3,
      name: "University of California",
      image: california,
    },
    {
      id: 4,
      name: "ETH Zurich",
      image: ETH,
    },
    {
      id: 5,
      name: "Max Planck",
      image: maxPlanck,
    },
    {
      id: 6,
      name: "University of Edinburgh",
      image: edinburgh,
    },
    {
      id: 7,
      name: "Johns Hopkins",
      image: john,
    },
    {
      id: 8,
      name: "University of Illiois",
      image: illinois,
    },
  ];
  const mentors = [
    {
      id: 1,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 2,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 3,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 4,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 5,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 6,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 7,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 8,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
    {
      id: 9,
      img: user,
      name: "Shubham",
      university: "Cambridge University, UK",
    },
  ];
  const advisors = [
    {
      id: 1,
      name: "Dr. Omkar",
      post: "Principal Project Scientist",
      university: "IIT Madras",
      image: advisor,
    },
    {
      id: 2,
      name: "Ankit Tripathi",
      post: "Senior Project Scientist",
      university: "IIT Madras",
      image: advisor,
    },
    {
      id: 3,
      name: "Vivek Drivedi",
      post: "Project Scientist",
      university: "IIT Chennai",
      image: advisor,
    },
  ];
  return (
    <ChakraProvider>
      <Box bg="gray.50" minHeight="100vh">
        <Navbar />
        <Flex
          pt={`calc(8vh + 2rem)`}
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading as="h1" size="xl" textAlign="center">
            Learn from Scientists, research scholars from the top institutes in
            the world.
          </Heading>
        </Flex>

        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          m={10}
          mx="12vw "
        >
          <Flex flexWrap="wrap">
            {universities.map((university) => (
              <Card
                key={university.id}
                name={university.name}
                image={university.image}
              />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          m={10}
          mx="12vw "
        >
          <Heading as="h2" size="lg" mb={6}>
            Meet Your Mentors
          </Heading>
          <Flex flexWrap="wrap">
            {mentors.map((mentor) => (
              <Mentor
                key={mentor.id}
                name={mentor.name}
                university={mentor.university}
                image={mentor.img}
              />
            ))}
          </Flex>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          m={10}
          mx="12vw "
        >
          <Heading as="h2" size="lg" mb={6}>
            Mentors and Advisors
          </Heading>
          <Heading as="h3" size="md" mb={4}>
            Here are some advisors you can connect with:
          </Heading>
          <Flex mt={5} flexWrap="wrap">
            {advisors.map((advisor) => (
              <Advisor
                key={advisor.id}
                name={advisor.name}
                image={advisor.image}
                post={advisor.post}
                university={advisor.university}
              />
            ))}
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
