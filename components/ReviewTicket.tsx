'use client'
import React from 'react';
/** Authority side */

type ImageDetails = {
  complaintNumber: number;
  dateOfComplaint: string;
  timeOfComplaint: string;
  imageUrl: string;
  location: string;
  status: 'submitted';
  api_Response: any;
};

interface ImageContextProps {
  imageDetails: ImageDetails[];
  setImageDetails: React.Dispatch<React.SetStateAction<ImageDetails[]>>;
}

const ReviewTicket = React.createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [imageDetails, setImageDetails] = React.useState<ImageDetails[]>([]);

    React.useEffect(() => {
        const localImageDetails = localStorage.getItem('imageDetails');
        const initialImageDetails = localImageDetails ? JSON.parse(localImageDetails) : [];
        setImageDetails(initialImageDetails);
    }, []); 

    return (
      <ReviewTicket.Provider value={{ imageDetails, setImageDetails }}>
        {children}
      </ReviewTicket.Provider>
    );
};



export const useImage = () => {
  const context = React.useContext(ReviewTicket);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};
  

export default ReviewTicket;
