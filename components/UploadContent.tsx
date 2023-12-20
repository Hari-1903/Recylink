'use client'

import React, { useState, useEffect } from 'react';
import { Input , Button, Image, useToast} from '@chakra-ui/react';
import axios from 'axios';
import { useImage } from '@/components/ImageContext';
import CapturePhoto from '@/components/CapturePhoto';

type ImageDetails = {
    complaintNumber: number;
    dateOfComplaint: string;
    timeOfComplaint: string;
    imageUrl: string;
    location: string;
    status: string;
    api_Response: any;
  };
  
const UploadContent = () => {
    const { imageDetails, setImageDetails } = useImage();
    const [showLiveCaptureSubmit, setShowLiveCaptureSubmit] = useState(false);
    // const [imageDetails, setImageDetails] = useState<ImageDetails[]>([]);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [location, setLocation] = useState<string>("");
    const [apiResponse, setApiResponse] = useState<any>(null);
    const toast = useToast();

    const [uploadimg,setUploadimg] = useState(false);
    const [livecapture,setlivecapture] = useState(false);
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [status,setStatus] = useState("In-Review" as string);

    React.useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLatitude(position.coords.latitude.toString());
            setLongitude(position.coords.longitude.toString());
        })});

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files![0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
        setCurrentImage(reader.result as string);
        setLocation(`${latitude}\n${longitude}`);
        };
    };

    const handleLiveCapture = (dataUrl: string) => {
        setCurrentImage(dataUrl);
        setShowLiveCaptureSubmit(true); // Show the submit button once the image is captured
        setLocation(`${latitude}\n${longitude}`);
        toast({
            title: "Image Captured Successfully.",
            description: "Now, submit the complaint with the captured image.",
            status: "info",
            duration: 3000,
            isClosable: true,
        });
    };

    const handleUpload = async () => {
        if (currentImage && location) {
            const currentDate = new Date();
            const complaintNumber = imageDetails.length + 1;
        // Start by making the API call
        try {
            const response = await axios({
                method: "POST",
                url: "https://detect.roboflow.com/garbage-classification-3/2",
                params: {
                    api_key: "OolGgvNY6TkxBtrMa2rT"
                },
                data: currentImage.split(',')[1],  // Splitting to send only the Base64 data without the prefix (data:image/png;base64,)
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            });

            if (response && response.data) {
                console.log(response.data?.predictions[0]?.class); // You can further process this data if needed
                setApiResponse(response.data?.predictions[0]?.class);
            }

            setImageDetails((prevDetails:any) => {
            const newDetails = [...prevDetails, {
                complaintNumber,
                dateOfComplaint: currentDate.toLocaleDateString(),
                timeOfComplaint: currentDate.toLocaleTimeString(),
                imageUrl: currentImage,
                location,
                status: status,
                api_Response: response.data,
                }];  
                localStorage.setItem('imageDetails', JSON.stringify(newDetails));
                return newDetails;
                });
                setCurrentImage(null);
                setLocation("");
                setShowLiveCaptureSubmit(false);
                setCurrentImage(null);
                setLocation("");
                toast({
                    title: "Complaint registered successfully.",
                    description: "Your trash image and location are saved.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
            } 
            catch (error : any) {
                console.error("Error uploading image:", error.message);
                toast({
                    title: "Error uploading image.",
                    description: error.message,
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            }
        }
    };
  
    return( 
        <>
            <div className=''>
                <div className='text-xl font-bold border-b-2 mb-3 mt-8 md:mt-0'>Raise a ticket</div>
                <div className='grid md:grid-cols-2 md:gap-2'>
                    <div className="rounded-xl relative md:h-[250px] bg-[rgba(255,255,255,0.3)] p-0 shadow-content hidden md:block">
                        <video src="/assets/images/leaves.mp4" className="h-full w-full object-cover rounded-xl -z-10 absolute hidden md:block" autoPlay muted loop>
                        </video>
                        <div className="md:h-full w-full flex flex-col justify-end">
                        <div className="h-full w-full flex-center flex-col">
                            <p className="text-2xl font-bold text-black hidden md:block">Would you like to</p>
                            <div className='md:flex gap-4 mt-4 hidden'>
                                <button onClick={() => { setUploadimg(true); setlivecapture(false);}} className='text-white text-lg rounded-[10px] border-2 border-secondary px-5 py-3 bg-primary hover:scale-[0.95] transition-all ease-in'>Upload Image</button>
                                <button onClick={() => { setUploadimg(false); setlivecapture(true);}} className='text-white text-lg rounded-[10px] border-2 border-secondary px-5 py-3 bg-primary hover:scale-[0.95] transition-all ease-in'>Live Capture</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <form className='p-4 md:p-0 md:hidden bg-tint rounded-xl shadow-content'>
                                <label>Image</label>
                                <Input h={"50px"} pt={"2"} type="file" accept="image/*" onChange={handleImageChange} />
                                <div className='flex mt-4'> 
                                    <Button onClick={handleUpload}>Submit</Button>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-xs pl-3'>Lat:{latitude}</p>
                                        <p className='text-xs pl-3'>Long:{longitude}</p>
                                    </div>
                                </div>
                    </form>
                    <div className='bg-tint rounded-xl flex-center shadow-content'>
                        {uploadimg ? 
                            (<form className='p-4 md:p-0'>
                                <label>Image</label>
                                <Input h={"50px"} pt={"2"} type="file" accept="image/*" onChange={handleImageChange} />
                                <br/>
                                <br/>
                                <div className='flex mt-4'> 
                                    <Button onClick={handleUpload}>Submit</Button>
                                    <div className='flex flex-col justify-center'>
                                        <p className='text-xs pl-3'>Lat:{latitude}</p>
                                        <p className='text-xs pl-3'>Long:{longitude}</p>
                                    </div>
                                </div>
                            </form>) : livecapture ? 
                            (     <form>
                                    <h1>Live Capture</h1>
                                    <hr />
                                    <CapturePhoto onCapture={handleLiveCapture} />
                                    <br/>
                                    {showLiveCaptureSubmit && (
                                    <div className='flex mt-4'> 
                                        <Button onClick={handleUpload}>Submit</Button>
                                        <div className='flex flex-col justify-center'>
                                            <p className='text-xs pl-3'>Lat:{latitude}</p>
                                            <p className='text-xs pl-3'>Long:{longitude}</p>
                                        </div>
                                    </div>
                                    )}
                                </form>) : 
                            (<>
                                <div className='text-2xl font-medium hidden md:block'>👈 Select an option to report the waste</div>
                            </>
                            )
                        }
                    </div>
                </div>
            </div>
            <div className='mt-5'>
            <p className='text-xl font-bold border-b-2 mb-2'>My Complaints</p>
                <div className='flex gap-5 overflow-x-auto p-4 scrollbar'>
                        {imageDetails.map((detail) => (
                        <div className='px-3 py-2 min-w-[220px] shadow-[0px_0px_6px_2px_rgb(0,0,0,0.06)] rounded-md hover:bg-slate-100 hover:scale-110 transition-all 2s ease-in-out' key=''>
                            <div className='flex justify-between border-b-2'>
                                <p className='text-lg font-bold'>{detail.complaintNumber}</p>
                                <p className='text-lg font-bold text-teritiary hover:text-blac'>{detail.status}</p>
                            </div>
                            <div className='flex-center py-4 flex-col'>
                                <Image src={detail.imageUrl} alt="Uploaded Trash" className='rounded-md' boxSize={{ base: "100px", md: "175px" }} />
                            </div>
                            <div className='flex justify-between border-t-2'>
                                <p className='text-xs'>{detail.dateOfComplaint}</p>
                                <p className='text-xs'>{detail.timeOfComplaint}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </>
)}


export default UploadContent;

