import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlinePreview } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineExplore } from "react-icons/md";


import { MdOutlineAddToPhotos } from "react-icons/md";
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
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <MdOutlineExplore size="1.15rem" />
                            <Link href='/Authority'>Home</Link>
                        </div>                        
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg'>
                            <MdOutlinePreview size="1.15rem" />
                            <Link href='/Authority/ReviewTicket'>Review Tickets</Link>
                        </div>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <FaRegFileAlt size="1.15rem"/>
                            <Link href='/Authority'>Update Status</Link>
                        </div>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <FaMapLocationDot size="1.15rem"/>
                            <Link href='/Authority/Map'>Map</Link>
                        </div>
                    </div>

                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>MORE</h1>
                    <div className='w-full'>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <MdOutlineAddToPhotos size="1.15rem"/>
                            <Link href='/Authority/DownloadModel'>Download Model</Link>
                        </div>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <MdOutlineAddToPhotos size="1.15rem"/>
                            <Link href='/Authority'>option2</Link>
                        </div>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <MdOutlineAddToPhotos size="1.15rem"/>
                            <Link href='/Authority'>option3</Link>
                        </div>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <IoIosContact size="1.15rem"/>
                            <Link href="/Contact">Contact</Link>
                        </div>
                        <button className='flex justify-center items-center gap-1 mt-5 mx-7 px-16 py-2 text-white bg-primary hover:bg-dark-primary hover:scale-110 transition-all 2s ease-in-out hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] p-3 rounded-lg'>
                            <RiLogoutCircleFill size="1.25rem"/>
                            <Link href='/'>Log Out</Link>
                        </button>                        
                    </div>
                </div>
            </div>
  )
}

export default AuthorityNav;
