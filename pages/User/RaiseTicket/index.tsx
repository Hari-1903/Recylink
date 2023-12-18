'use client'

import React, { useState, useEffect } from 'react';
import { Input , Button, Image, useToast} from '@chakra-ui/react';
import axios from 'axios';
import { useImage } from '@/components/ImageContext';
import CapturePhoto from '@/components/CapturePhoto';
import UserNav from '@/components/UserNav';

type imageDetails = {
    complaintNumber: number;
    dateOfComplaint: string;
    timeOfComplaint: string;
    imageUrl: string;
    location: string;
    status: 'in-review';
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
        };
    };

    const handleLiveCapture = (dataUrl: string) => {
        setCurrentImage(dataUrl);
        setShowLiveCaptureSubmit(true); // Show the submit button once the image is captured
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
                url: "https://detect.roboflow.com/garbage-classification-qmp4x/11",
                params: {
                    api_key: "UZKg5qOB4uV1SEipe4ec"
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
                status: 'In-Review',
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
    <div className="grid grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav/></div>
        <div className="m-3 py-3 px-5 rounded-xl relative shadow-content flex flex-col justify-evenly"> 
            <div className=''>
                <div className='text-xl font-bold border-b-2 mb-3'>Raise a ticket</div>
                <div className='grid grid-cols-2 gap-2'>
                    <div className="rounded-xl relative h-[250px] bg-[rgba(255,255,255,0.3)] ">
                        <video src="/assets/images/leaves.mp4" className="h-full w-full object-cover rounded-xl -z-10 absolute" autoPlay muted loop>
                        </video>
                        <div className="h-full w-full flex flex-col justify-end">
                        <div className="h-full w-full flex-center flex-col">
                            <p className="text-2xl font-extrabold text-black">Would you like to</p>
                            <div className='flex gap-4 mt-4'>
                                <button onClick={() => { setUploadimg(true); setlivecapture(false);}} className='text-white text-lg rounded-[10px] border-2 border-teritiary px-5 py-3 bg-primary hover:scale-[0.95] transition-all ease-in'>Upload Image</button>
                                <button onClick={() => { setUploadimg(false); setlivecapture(true);}} className='text-white text-lg rounded-[10px] border-2 border-teritiary px-5 py-3 bg-primary hover:scale-[0.95] transition-all ease-in'>Live Capture</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='bg-tint rounded-xl border-[1px] border-teritiary flex-center'>
                        {uploadimg ? 
                            (<form>
                                <label>Image</label>
                                <Input h={"50px"} pt={"2"} type="file" accept="image/*" onChange={handleImageChange} />
                                <br/>
                                <label>Location</label>
                                <Input value={location} onChange={(e) => setLocation(e.target.value)} />
                                <br/>
                                <div className='flex mt-4'> 
                                    <Button onClick={handleUpload}>Submit</Button>
                                    <p className='text-xs flex-center pl-3'>Lat:{latitude}<br/>Long:{longitude}</p>
                                </div>
                            </form>) : livecapture ? 
                            (     <form>
                                    <h1>Live Capture</h1>
                                    <CapturePhoto onCapture={handleLiveCapture} />
                                    <br/>
                                    {showLiveCaptureSubmit && (
                                        <>
                                            <label>Location</label>
                                            <Input value={location} onChange={(e) => setLocation(e.target.value)} />
                                            <br/>
                                            <Button mt={4} onClick={handleUpload}>Submit</Button>
                                        </>
                                    )}
                                </form>) : 
                            (
                                <div className='text-2xl font-medium'>👈 Select an option to report the waste</div>
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
                            <div className='flex-center py-2 flex-col'>
                                <Image src={detail.imageUrl} alt="Uploaded Trash" className='rounded-md' boxSize={{ base: "100px", md: "175px" }} />
                                <p className='text-xs'>{detail.location}</p>
                            </div>
                            <div className='flex justify-between border-t-2'>
                                <p className='text-xs'>{detail.dateOfComplaint}</p>
                                <p className='text-xs'>{detail.timeOfComplaint}</p>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
    </div>
  </div>
)}


export default UploadContent;

