import React from 'react';
import AuthorityNav from '@/components/AuthorityNav';
import Link from 'next/link';
import Image from "next/image";
import { FaDownload } from "react-icons/fa";



const Downloadmodel = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
        <div className="container flex flex-col md:flex-row items-center m-3 p-16 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content">
		
          <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-0 pb-15 px-6">
            <h1 className="font-bold text-3xl my-4">Download Model</h1>
            <p className="leading-normal mb-4">Download desc</p>
            
            <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
                <p className='text-xl w-4/5 text-black font-medium'>first model desc</p>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov7.pt</button>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</button>
              </div>
            </div>

            <div className="m-3 p-10 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
              <div className=" flex-center flex-col">
                <p className='text-xl w-4/5 text-black font-medium'>Second model desc</p>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-2 mb-2.5 ">Garbage Classification yolov5.pt</button>
                <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 ">Jupyter Notebook</button>
              </div>
            </div>

          </div>
          {/* <!--Right Col--> */}
          <div className="flex flex-col px-auto lg:w-1/2 lg:py-6 items-center justify-center">
            <div>
            <FaDownload  size="15rem"/>
            </div>
            <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v2</button>
            <button className="bg-primary hover:bg-dark-primary text-white rounded-lg shadow hover:shadow-lg py-2 px-4 mt-4 ">Download Dataset v1</button>
            
          </div>
        </div>
        
    </div>
  )
}

export default Downloadmodel
