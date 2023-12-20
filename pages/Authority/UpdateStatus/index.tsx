import React, { useState } from 'react';
import { Box, VStack, SimpleGrid, Text, Image, Heading, Badge } from '@chakra-ui/react';
import AuthorityNav from '@/components/AuthorityNav'; // Assuming this is a custom component
import { useImage } from '@/components/ImageContext';  // Assuming this is a custom hook

// Define the type for the predictions in the API response
type Prediction = {
  class: string;
};

// Define the type for the image detail
type ImageDetail = {
  complaintNumber: number;
  location: string;
  api_Response: {
    predictions: Prediction[];
  };
  timeOfComplaint: string;
  status: string;
};

// Assuming the useImage hook returns an object with an imageDetails array
type ImageContextType = {
  imageDetails: ImageDetail[];
};

const UpdateStatus: React.FC = () => {
  const [completionTimes, setCompletionTimes] = useState<Record<number, string>>({});
  const { imageDetails } = useImage() as ImageContextType; // Cast to the expected type

  // Handle completion time update
  const handledone = (complaintNumber: number): void => {
    setCompletionTimes(prevTimes => ({
      ...prevTimes,
      [complaintNumber]: new Date().toLocaleString()
    }));
    // imageDetails.status ==='Done';
  }; 

  return (
    <div className="grid grid-cols-[280px_1fr] h-screen overflow-hidden">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav">
        <AuthorityNav />
      </div>
      <div className="m-3 p-5 rounded-xl relative shadow-content flex flex-col overflow-y-scroll">
          <table className="table-auto w-full">
            <colgroup>
              <col/>
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-2/12" />
              <col className="w-1/12" />
            </colgroup>
            <thead>
              <tr className="bg-gray-100 border">
                <th className="p-2">#</th>
                <th className="p-2">Location</th>
                <th className="p-2">Trash Type</th>
                <th className="p-2">Time of Complaint</th>
                <th className="p-2">Completion time</th>
                <th className="p-2">Status</th>
                <th className="p-2">Action</th>
                {/* <th className="p-2">Upload</th> */}
              </tr>
            </thead>
            <tbody>
              {imageDetails.map((detail, index) => (
                <tr key={detail.complaintNumber} className="hover:bg-gray-50">
                  <td className="border p-2">{index + 1}</td>
                  <td className="border p-2">{detail.location}</td>
                  <td className="border p-2">
                    {detail.api_Response.predictions.map((pred, idx) => (
                      <React.Fragment key={idx}>
                        {pred.class}{idx !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </td>
                  <td className="border p-2">{detail.timeOfComplaint}</td>
                  <td className="border p-2">{completionTimes[detail.complaintNumber]}</td>
                  <td className="border p-2">{detail.status}</td>
                  <td className="border p-2">
                    <div className='flex-center gap-2 p-2'>
                      <button className='text-s bg-green-500 p-2 rounded-2xl hover:scale-110 transition-all duration-200 ease-in-out' onClick={() => handledone(detail.complaintNumber)}>Done</button>
                      <button className='text-s bg-red-500 p-2 rounded-2xl hover:scale-110 duration-200 ease-in-out'>Spam</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </div>
  );
};

export default UpdateStatus;