import React from 'react';
import { Box, VStack, SimpleGrid, Text, Image, Heading, Badge } from '@chakra-ui/react';
import { useImage } from '@/components/ImageContext';
import AuthorityNav from '@/components/AuthorityNav';

const ReviewComplaints = () => {
  const { imageDetails } = useImage();

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
    <div className="bg-black my-3 ml-3 rounded-xl shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)]"><AuthorityNav/></div>
    <div className="m-3 p-16 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
    <VStack spacing={6} align="stretch" h="100vh" bg="gray.100">
      
      <Heading px={6} mb={4} size="lg" color="green.700" fontFamily={"serif"}>Complaint Reviews</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} px={6} spacing={6}>
        {imageDetails.map((detail: any) => (
          <Box
            key={detail.complaintNumber}
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            bg="white"
            shadow="lg"
            transition="0.3s"
            _hover={{ shadow: "2xl", transform: "translateY(-4px)" }}
          >
            <Badge borderRadius="full" colorScheme="teal" p={1} mb={2}>Complaint No: {detail.complaintNumber}</Badge>
            <Text fontSize="sm" color="gray.600"><b>Date: </b>{detail.dateOfComplaint}</Text>
            <Text fontSize="sm" color="gray.600"><b>Time: </b>{detail.timeOfComplaint}</Text>
            <Box mt={4} mb={4} overflow="hidden" borderRadius="md">
              <Image src={detail.imageUrl} alt="Uploaded Trash" objectFit="cover" w="100%" h="250px" />
            </Box>
            <Text fontSize="sm" color="gray.600"><b>Location: </b>{detail.location}</Text>
            <Text fontSize="sm" color="gray.600"><b>Status: </b>{detail.status}</Text>
            {detail.api_Response && (
              <Text fontSize="sm" color="gray.600" mt={2}>
                <b>Trash type: </b>
                {detail.api_Response.predictions.map((pred: any, index: any) => (
                  <React.Fragment key={index}>
                    {pred.class}{index !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                  </React.Fragment>
                ))}
              </Text>
            )}
          </Box>
        ))}
      </SimpleGrid>
    </VStack>

    </div>
  </div>
);
};

export default ReviewComplaints;
