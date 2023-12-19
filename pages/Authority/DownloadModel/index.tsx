import React from 'react';
import AuthorityNav from '@/components/AuthorityNav';
import Link from 'next/link';
import Image from "next/image";
import { FaDownload } from "react-icons/fa";



const Downloadmodel = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
        <div className="grid grid-cols-2 grid-rows-2 gap-5 m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content">

          <div className="m-3 p-10 rounded-xl relative flex-center flex-col">
              <div className=" flex-center flex-col">
              <h1 className="font-bold text-3xl my-4">Download Model</h1>
              <p className="leading-normal mb-4">Introducing the YOLO v7 and v8, a state-of-the-art deep learning model designed specifically for efficient and accurate garbage classification.</p>
              <Link href="https://www.youtube.com/watch?app=desktop&v=m2RFdUfwUBA" target="_blank" className='text-blue-500'>Robotic arm Segregation</Link>
              <Link href="https://www.youtube.com/watch?v=N7l_YxnLhIw" target="_blank" className='text-blue-500'>Convey Belt for Seperation </Link>
              </div>
              <Image src="/assets/images/Machine.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image"/>
          </div>

          <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content flex-center flex-col hover:scale-105 transition-all duration-300 ease-in-out">
              <div className=" flex-center flex-col">
                <Image src="/assets/images/dataset_bg.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image(Garbage Truck)"/>
                <div><FaDownload size="2.5rem"/></div>
                <Link href="https://universe.roboflow.com/chewbaca-crzyz/garbage-classification-ngavs/dataset/3/download" className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v2</Link>
                <Link href= "https://universe.roboflow.com/material-identification/garbage-classification-3/dataset/2/download"className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v1</Link>
              </div>
          </div>

          <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content flex-center flex-col hover:scale-105 transition-all duration-200 ease-in-out hover:text-white hover:font-bold">
              <div className=" flex-center flex-col">
                <Image src="/assets/images/yolov8_bg.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image"/>
                <p className='text-xl w-4/5 font-medium'>Real-time garbage classification with more added data and enhanced accuracy.</p>
                <a href="https://drive.google.com/file/d/1PuKotEXJdxXTdtMP16BpHGszt6ryawEG/view?usp=sharing" download="best.pt">
                  <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov8.pt</button>
                </a>
                <Link href="https://colab.research.google.com/drive/1oNZJlOY6oxAXikDIMhVvc9P8p7OFmpK6?usp=sharing" className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</Link>                
              </div>
          </div>

          <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content flex-center flex-col hover:scale-105 transition-all duration-300 ease-in-out hover:text-white hover:font-bold">
              <div className=" flex-center flex-col">
                <Image src="/assets/images/yolov7_bg.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image"/>
                <p className='text-xl w-4/5 font-medium'>Real-time garbage classification, offering high accuracy and speed.</p>
                <a href="https://drive.google.com/file/d/1dLuFLnauS5saO_UblFOiXNPPwcfs49vj/view?usp=drive_link" download="best.pt">
                  <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov7.pt</button>
                </a>
                
                <Link href="https://colab.research.google.com/drive/1rKS-vHEy9siprWCAuTes0I1azYUP3nN1?usp=sharing" className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</Link>
              </div>
          </div>

        </div>
        {/* 
        <div className="container flex flex-col md:flex-row justify-evenly items-center m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content">
		
        <div className="flex flex-col w-full lg:w-1/2 justify-center items-center pt-0 pb-15 px-6">
          <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
              <h1 className="font-bold text-3xl my-4">Download Model</h1>
              <p className="leading-normal mb-4">Introducing the YOLO v7 and v8, a state-of-the-art deep learning model designed specifically for efficient and accurate garbage classification.
              This advanced version of the YOLO framework is tailored to categorize various types of waste materials, including plastics, metals, paper, organics, glass, with remarkable precision.</p>
              </div>
          </div>
            
            
            <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
                <p className='text-xl w-4/5 text-black font-medium'>Real-time garbage classification with added data and enhanced accuracy.</p>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov8.pt</button>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</button>
              </div>
            </div>

          </div>

          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-0 pb-15 px-6">
            
          <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
                <p className='text-xl w-4/5 text-black font-medium'>Real-time garbage classification, offering high accuracy and speed.</p>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov7.pt</button>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</button>
              </div>
          </div>

            <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
                <p className='text-xl w-4/5 text-black font-medium'>Real-time garbage classification, offering high accuracy and speed.</p>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov7.pt</button>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</button>
              </div>
            </div>

            

          </div>
           */}

          {/* <div className="flex flex-col px-auto lg:w-1/2 lg:py-6 items-center justify-center">
            <div>
            <FaDownload  size="15rem"/>
            </div>
            <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v2</button>
            <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v1</button>
            
          </div>  
          </div>*/}
        
    </div>
  )
}

export default Downloadmodel
