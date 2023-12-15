'use client'

import React from 'react';

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

const ImageContext = React.createContext<ImageContextProps | undefined>(undefined);

export const ImageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [imageDetails, setImageDetails] = React.useState<ImageDetails[]>([]);

    React.useEffect(() => {
        const localImageDetails = localStorage.getItem('imageDetails');
        const initialImageDetails = localImageDetails ? JSON.parse(localImageDetails) : [];
        setImageDetails(initialImageDetails);
    }, []); 

    return (
      <ImageContext.Provider value={{ imageDetails, setImageDetails }}>
        {children}
      </ImageContext.Provider>
    );
};



export const useImage = () => {
  const context = React.useContext(ImageContext);
  if (!context) {
    throw new Error('useImage must be used within an ImageProvider');
  }
  return context;
};
  

export default ImageContext;
