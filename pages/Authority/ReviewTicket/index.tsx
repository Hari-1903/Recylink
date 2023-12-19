import React from 'react';
import { Box, VStack, SimpleGrid, Text, Image, Heading, Badge } from '@chakra-ui/react';
import { useImage } from '@/components/ImageContext';
import AuthorityNav from '@/components/AuthorityNav';
import MobileNav from '@/components/MobileNav';

const ReviewComplaints = () => {
  const { imageDetails } = useImage();

  return (
    <div className="grid md:grid-cols-[280px_1fr] gr  id-cols-1 h-screen overflow-hidden">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav  hidden md:block" id='nav'><AuthorityNav/></div>
      <div className="m-3 px-5 py-3 rounded-xl relative shadow-content flex flex-col">
        <p className="text-xl font-bold border-b-2 mb-4 p-4">Raised Complaints</p>
        <div className='md:h-[600px] grid grid-cols-5 gap-y-5 overflow-y-scroll px-5 pb-5 pt-2'>
          {imageDetails.map((detail: any) => (
            <div className="w-[200px] px-4 py-3 shadow-[0px_0px_6px_2px_rgb(0,0,0,0.06)] hover:bg-slate-100 hover:scale-110 transition-all 2s ease-in-out rounded-md" key="">
              <div className='flex justify-between items-center pb-1 border-b-2 mb-3'>
                <p className='text-xl font-bold'>{detail.complaintNumber}</p>
                <div className='flex-center flex-col'>
                  <p className='text-xs'>{detail.dateOfComplaint}</p>
                  <p className='text-xs'>{detail.timeOfComplaint}</p>
                </div>
              </div>
              <div className='flex-center'>
                <Image src={detail.imageUrl} className='rounded-md' alt="Uploaded Trash" objectFit="cover"  boxSize={{ base: "100px", md: "175px" }}/>
              </div>
              <div className='flex justify-between items-center text-xs p-1'>
                <p className='uppercase'>{detail.location}</p>
                <p className='text-primary font-medium'>{detail.status}</p> 
              </div>
              {detail.api_Response && (
                <Text fontSize="sm" color="gray.600" mt={2} className='capitalize'>
                  <b>Trash type: </b>
                  {detail.api_Response.predictions.map((pred: any, index: any) => (
                    <React.Fragment key={index}>
                      {pred.class}{index !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))}
                </Text>
              )}
            </div>
          ))}
        </div>
      </div>
      <MobileNav/>
    </div>

);
};

export default ReviewComplaints;
