import React, { useState, useEffect, useRef } from 'react';
import { Text } from '@chakra-ui/react';
import AuthorityNav from '@/components/AuthorityNav';
import { useImage } from '@/components/ImageContext';
import Chart from 'chart.js/auto';  // Import Chart without generics

type Prediction = {
  class: string;
};

type ImageDetail = {
  complaintNumber: number;
  location: string;
  api_Response: {
    predictions: Prediction[];
  };
  timeOfComplaint: string;
  status: string;
};

type ImageContextType = {
  imageDetails: ImageDetail[];
};

const UpdateStatus: React.FC = () => {
  const [completionTimes, setCompletionTimes] = useState<Record<number, string>>({});
  const { imageDetails } = useImage() as ImageContextType;
  const [statuses, setStatuses] = useState<Record<number, string>>({});


  const [doneCount, setDoneCount] = useState(0);
  const [spamCount, setSpamCount] = useState(0);
  const [actionClicked, setActionClicked] = useState<Record<number, boolean>>({});
  const chartRef = useRef<Chart<"pie", number[], string> | null>(null);

  const handledone = (complaintNumber: number): void => {
    
  };


  useEffect(() => {
    const canvas = document.getElementById('PieChart') as HTMLCanvasElement | null;
    if (!canvas) {
      return;
    }
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      return;
    }

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['Done', 'Spam'],
        datasets: [
          {
            data: [doneCount, spamCount],
            backgroundColor: ['#4CAF50', '#EF4444'],
            borderColor: '#134611',
          },
        ],
      },
      options: {
      },
    });
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, [doneCount, spamCount]);

  const handleAction = (complaintNumber: number, action: string): void => {
    setCompletionTimes(prevTimes => ({
      ...prevTimes,
      [complaintNumber]: new Date().toLocaleString()
    }));
    
    
    if (actionClicked[complaintNumber]) {
      return; 
    }

    const newStatus = action === 'done' ? 'Completed' : 'Spam';
    const updatedImageDetails = imageDetails.map((detail) =>
      detail.complaintNumber === complaintNumber
        ? { ...detail, status: newStatus }
        : detail
    );
    
    setStatuses(prevStatuses => ({
      ...prevStatuses,
      [complaintNumber]: newStatus
    }));

    setActionClicked(prevClicked => ({ ...prevClicked, [complaintNumber]: true }));
    setDoneCount((prevCount) => (action === 'done' ? prevCount + 1 : prevCount));
    setSpamCount((prevCount) => (action === 'spam' ? prevCount + 1 : prevCount));
    setCompletionTimes((prevTimes) => ({
      ...prevTimes,
      [complaintNumber]: new Date().toLocaleString(),
    }));

  };

  return (
    <>
      <div className="grid grid-cols-[280px_1fr] h-screen">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav">
          <AuthorityNav />
        </div>
        <div className="m-3 p-5 rounded-xl relative shadow-content flex flex-col h-full">
          <div className="grid grid-cols-[0.75fr_0.25fr] grid-rows-1 h-full gap-6 overflow-scroll">
            <table className="table-auto w-full ">
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
                    <td className="border px-4 py-2">{index + 1}</td>
                    <td className="border px-4 py-2">{detail.location}</td>
                    <td className="border px-4 py-2">
                      {detail.api_Response.predictions.map((pred, idx) => (
                        <React.Fragment key={idx}>
                          {pred.class}
                          {idx !== detail.api_Response.predictions.length - 1 ? ', ' : ''}
                        </React.Fragment>
                      ))} 
                    </td>
                    <td className="border px-4 py-2">{detail.timeOfComplaint}</td>
                    <td className="border px-4 py-2">{completionTimes[detail.complaintNumber]}</td>
                    <td className="border px-4 py-2">{statuses[detail.complaintNumber] || detail.status}</td>
                    <td className="border px-4 py-2">
                      <div className='flex-center gap-1'>
                        <button className='text-s bg-green-500 p-2 rounded-3xl' onClick={() => handleAction(detail.complaintNumber, 'done')}>Done</button>
                        <button className='text-s bg-red-500 p-2 rounded-3xl' onClick={() => handleAction(detail.complaintNumber, 'spam')}>Spam</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className='h-full rounded-md shadow-lg'>
              <div className="flex justify-center items-start flex-col">
                <canvas id="PieChart"></canvas>
                <div className='flex-center flex-col w-full'>
                  <p className='text-sm'>Done Count: {doneCount}</p>
                  <p className='text-sm'>Spam Count: {spamCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateStatus;