import React from 'react';
import { Box, VStack, SimpleGrid, Text, Image, Heading, Badge } from '@chakra-ui/react';
import { useImage } from '@/components/ImageContext';
import AuthorityNav from '@/components/AuthorityNav';

const UpdateStatus = () => {
  const { imageDetails } = useImage();

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
      <div className="m-3 p-5 rounded-xl relative shadow-content flex flex-col">
        <div className='grid grid-cols-[0.75fr_0.25fr] grid-rows-[0.75fr_0.25fr] gap-6 h-full'>
            <div className='h-full rounded-md shadow-lg'>
                <div className='p-5'>
                    <p className='text-lg font-semibold'>View Ticket details</p>
                    <div className='grid grid-cols-7 justify-items-center items-center'>
                        <p>#</p>
                        <p>Location</p>
                        <p>Trash Type</p>
                        <p>Time of Complaint</p>
                        <p>Solved time</p>
                        <p>Status</p>
                        <p>Action</p>
                    </div>
                </div>
            </div>
            <div className='h-full rounded-md row-span-2 shadow-lg'>some graph</div>
            <div className='h-full rounded-md shadow-lg'>Total details</div>
        </div>
      </div>
    </div>

);
};

export default UpdateStatus;
