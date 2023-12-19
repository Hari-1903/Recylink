import React, { useState } from 'react';
import { Box, VStack, SimpleGrid, Text, Image, Heading, Badge } from '@chakra-ui/react';
import AuthorityNav from '@/components/AuthorityNav';
import { useImage } from '@/components/ImageContext';

const UpdateStatus = () => {
  // Changed to use an object to track time for each complaint
  const [completionTimes, setCompletionTimes] = useState({});
  const { imageDetails } = useImage();

  // Update the completion time for a specific complaint
  const handledone = (complaintNumber) => {
    setCompletionTimes(prevTimes => ({
      ...prevTimes,
      [complaintNumber]: new Date().toLocaleString()
    }));
  }

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
      <div className="m-3 p-5 rounded-xl relative shadow-content flex flex-col">
        <div className='grid grid-cols-[0.75fr_0.25fr] grid-rows-[0.75fr_0.25fr] gap-6 h-full'>
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">#</th>
                <th className="px-4 py-2">Location</th>
                <th className="px-4 py-2">Trash Type</th>
                <th className="px-4 py-2">Time of Complaint</th>
                <th className="px-4 py-2">Completion time</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {imageDetails.map((detail, index) => (
                <tr key={detail.complaintNumber} className="hover:bg-gray-50">
                  <td className="border px-4 py-2 ">{index + 1}</td>
                  <td className="border px-4 py-2">{detail.location}</td>
                  <td className="border px-4 py-2">
                    {detail.api_Response.predictions.map((pred, index) => (
                      <React.Fragment key={index}>
                        {pred.class}{index !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="border px-4 py-2">{detail.timeOfComplaint}</td>
                  <td className="border px-4 py-2">{completionTimes[detail.complaintNumber]}</td>
                  <td className="border px-4 py-2">{detail.status}</td>
                  <td className="border px-4 py-2">
                    <div className='flex-center gap-1'>
                      <button className='text-s bg-green-500 p-2 rounded-3xl' onClick={() => handledone(detail.complaintNumber)}>Done</button>
                      <button className='text-s bg-red-500 p-2 rounded-3xl'>Spam</button>
                    </div> 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className='h-full rounded-md row-span-2 shadow-lg'>some graph</div>
          <div className='h-full rounded-md shadow-lg'>Total details</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateStatus;