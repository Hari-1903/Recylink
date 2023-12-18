import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdHome } from "react-icons/io";
import { MdOutlinePreview } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";

import { IoMdDownload } from "react-icons/io";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { IoIosContact } from "react-icons/io";

import { RiLogoutCircleFill } from "react-icons/ri";




const AuthorityNav = () => {
  return (
        <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] w-full h-full rounded-lg py-6 flex flex-col justify-between items-start'>
                <Link href="/Authority" className='ml-7'>
                    <Image src="/assets/icons/recylink_black.png" width={150} height={150} alt="logo" />
                </Link>
                <div className="flex flex-col items-start gap-2 h-full w-full">
                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>QUICK MENU</h1>
                    <div className='w-full'>
                        <Link href='/Authority' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <IoMdHome size="1.25rem"/>
                            <p>Home</p>
                        </Link>                        
                        <Link href='/Authority/ReviewTicket' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <MdOutlinePreview size="1.15rem" />
                            <p>Review Tickets</p>
                        </Link>
                        <Link href='/Authority/UpdateStatus' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <FaRegFileAlt size="1.15rem"/>
                            <p>Update Status</p>
                        </Link>
                        <Link href='/Authority/Map' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <FaMapLocationDot size="1.15rem"/>
                            <p>Map</p>
                        </Link>
                    </div>

                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>MORE</h1>
                    <div className='w-full'>
                        <Link href='/Authority/DownloadModel' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                        <IoMdDownload size="1.15rem"/>
                            <p>Download Model</p>
                        </Link>
                        <Link href='/Authority/AssignEmployee' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <MdOutlineAddToPhotos size="1.15rem"/>
                            <p>Assign Employee</p>
                        </Link>
                        <Link href='/Authority/AboutUs' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                        <HiOutlineInformationCircle size="1.25rem"/>
                            <p>About Us</p>
                        </Link>
                        <Link href="/Authority/Contact" className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg hover:font-semibold hover:scale-105 transition-all ease-in-out'>
                            <IoIosContact size="1.15rem"/>
                            <p>Contact</p>
                        </Link>
                        <Link href='/' className='flex justify-center items-center gap-1 mt-5 mx-7 px-16 py-2 text-white bg-primary hover:bg-dark-primary hover:scale-110 transition-all 2s ease-in-out hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] p-3 rounded-lg hover:font-semibold '>
                            <RiLogoutCircleFill size="1.25rem"/>
                            <p>Log Out</p>
                        </Link>                        
                    </div>
                </div>
            </div>
  )
}

export default AuthorityNav;
