import { Box, Heading, VStack, Center, Text } from "@chakra-ui/react";
import AuthorityNav from "../../components/AuthorityNav";

const Homepage = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <div className="bg-black my-3 ml-3 rounded-xl"><AuthorityNav/></div>
      <div className="bg-yellow-200 m-3 rounded-xl">
    


    <Box
      bgImage="url(/trash.png)"
      bgPos="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      h="100vh"
    >
      <VStack spacing={0} align="stretch" h="100vh">
        {/* <AuthorityNav/> */}

        <Center flexGrow={1}>
          <Box
            pos="relative"
            bg="transparent"
            p={8}
            borderRadius="md"
            zIndex={1}
            maxWidth="800px"
            textAlign="center"
          >
            {/* This creates the blurred and darkened background for the text and heading */}
            <Box
              content='""'
              pos="absolute"
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg="blackAlpha.600"
              backdropFilter="blur(5px)"
              borderRadius="lg"
              zIndex={-1}
            />
            <Heading
              size="2xl"
              fontWeight="bold"
              color="whiteAlpha.900"
              fontFamily="Arial, sans-serif"
            >
              Waste Handling
            </Heading>
            <Text
              fontSize="2xl"
              color="whiteAlpha.900"
              mt={4}
              fontFamily="Georgia, serif"
            >
              A Digital platform that facilitates seamless reporting and
              resolution of waste management, encompassing waste recycling and
              energy generation, by connecting users directly with local
              authorities. This eliminates the need for traditional, cumbersome
              complaint procedures, providing a user-friendly avenue to address
              environmental concerns and focuses more on recycling wastes
            </Text>
          </Box>
        </Center>
      </VStack>
    </Box>
    </div>
    </div>
  );
};

export default Homepage;
