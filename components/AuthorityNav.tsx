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
    // <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] rounded-lg px-8 py-6 m-2 flex justify-between items-center'>
    //     <a href="/Authority">
    //         <Image src="/assets/icons/recylink_black.png" width={100} height={100} alt="logo" />
    //     </a>
    //     <div className="flex-center gap-10">
    //         <div className="flex gap-4 max-md:gap-2">
    //             <Link href='/Authority/ReviewTicket'><p className="nav-element ">Review Ticket</p></Link>
    //             <a><p className="nav-element">Update Status</p></a>
    //             <a><p className="nav-element">Map</p></a>
    //         </div>
    //     </div>
    // </div>


        <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] w-full h-full rounded-lg py-6 flex flex-col justify-between items-start'>
                <Link href="/User" className='ml-7'>
                    <Image src="/assets/icons/recylink_black.png" width={150} height={150} alt="logo" />
                </Link>
                <div className="flex flex-col items-start gap-2 h-full w-full">
                    
                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>QUICK MENU</h1>
                    <div className='w-full'>
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg'>
                        <MdOutlinePreview size="1.15rem" />
                        <Link href='/User/RaiseTicket'>Review Ticket</Link>
                        </div>

                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <FaRegFileAlt size="1.15rem"/>
                        <Link href='/User/RaiseTicket'>Update Status</Link>
                        </div>
                        
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <FaMapLocationDot size="1.15rem"/>
                        <Link href='/User/RaiseTicket'>Map</Link>
                        </div>

                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <MdOutlineExplore size="1.15rem" />
                        <Link href='/User/RaiseTicket'>Explore</Link>
                        </div>

                        
                    </div>

                    <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>MORE</h1>
                    <div className='w-full'>

                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <MdOutlineAddToPhotos size="1.15rem"/>
                        <Link href='/User/RaiseTicket'>option1</Link>
                        </div>
                        
                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <MdOutlineAddToPhotos size="1.15rem"/>
                        <Link href='/User/RaiseTicket'>option2</Link>
                        </div>

                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <MdOutlineAddToPhotos size="1.15rem"/>
                        <Link href='/User/RaiseTicket'>option3</Link>
                        </div>

                        <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                        <IoIosContact size="1.15rem"/>
                        <Link href="/Contact">Contact</Link>
                        </div>

                        <div className='flex justify-center items-center gap-1 mt-5 mx-7 pl-5 text-white bg-primary hover:bg-dark-primary hover:shadow-lg p-3 rounded-lg'>
                        <RiLogoutCircleFill size="1.25rem"/>
                        <Link href='/'>Log Out</Link>
                        </div>

                        
                    </div>
                </div>
                
            </div>
  
  )
}

export default AuthorityNav;
