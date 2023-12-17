import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { IoMdHome } from "react-icons/io";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { FaRegFileAlt } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";


import { HiOutlineInformationCircle } from "react-icons/hi2";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineTeam } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";

import { RiLogoutCircleFill } from "react-icons/ri";




const UserNav = () => {
  return (
        <div className='bg-white w-full h-full rounded-lg py-6 flex flex-col justify-between items-start'>
                <Link href="/User" className='ml-7'>
                    <Image src="/assets/icons/recylink_black.png" width={150} height={150} alt="logo" />
                </Link>
                <div className="flex flex-col items-start gap-2 h-full w-full">
                    
                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>QUICK MENU</h1>
                    <div className='w-full'>
                        <Link href='/User' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <IoMdHome size="1.25rem"/>
                            <p>Home</p>
                        </Link>
                        <Link href='/User/RaiseTicket' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg'>
                            <MdOutlineAddToPhotos size="1.15rem"/>
                            <p>Raise a Ticket</p>
                        </Link>
                        <Link href='/User/RaiseTicket' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <FaRegFileAlt size="1.15rem"/>
                            <p>Review Status</p>
                        </Link>
                        <Link href='/User/Rewards' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <LuCrown />
                            <p>Rewards</p>
                        </Link>
                    </div>

                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>MORE</h1>
                    <div className='w-full'>
                        
                        <Link href='/User/RaiseTicket' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <SiSimpleanalytics/>
                            <p>Data Analytics</p>
                        </Link>
                        <Link href='/User/RaiseTicket' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <AiOutlineTeam size="1.15rem"/>
                            <p>Our Team</p>
                        </Link>
                        <Link href='/AboutUs' className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <HiOutlineInformationCircle size="1.25rem"/>
                            <p>About Us</p>
                        </Link>
                        <Link href="/Contact" className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                            <IoIosContact size="1.15rem"/>
                            <p>Contact</p>
                        </Link>
                        <Link href='/' className='flex-center gap-1 mt-5 mx-7 px-16 py-2 text-white bg-primary hover:bg-dark-primary hover:scale-110 transition-all 2s ease-in-out hover:shadow-[0px_0px_10px_5px_rgb(0,0,0,0.04)] p-3 rounded-lg'>
                            <RiLogoutCircleFill size="1.25rem"/>
                            <p>Log Out</p>
                        </Link>
                    </div>
                </div>             
            </div> 
  )
}

export default UserNav;