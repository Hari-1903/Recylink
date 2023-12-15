import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";

import { IoIosContact } from "react-icons/io";


const UserNav = () => {
  return (
    <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] w-full h-full rounded-lg py-6 flex flex-col justify-between items-start'>
        <Link href="/User" className='ml-7'>
            <Image src="/assets/icons/recylink_black.png" width={150} height={10} alt="logo" />
        </Link>
        <div className="flex flex-col items-start gap-2 h-full w-full">
            {/* <div className="flex flex-col gap-4"> */}
                <h1 className='text-xl text-left cursor-pointer font-bold border-b mt-5 ml-7 '>QUICK MENU</h1>
                <div className='w-full'>
                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg'>
                    <MdOutlineAddToPhotos size="1.15rem" />
                    <Link href='/User/RaiseTicket'>Complaint</Link>
                    </div>

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                    <FaRegFileAlt size="1.15rem"/>
                    <Link href='/User/RaiseTicket'>Status</Link>
                    </div>
                    
                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg '>
                    <LuCrown size="1.15rem"/>
                    <Link href='/User/RaiseTicket'>Reward</Link>
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

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-lg text-gray-400 hover:text-primary hover:shadow-lg hover:border-l-8 hover:border-primary p-3.5 rounded-lg'>
                    <IoIosContact size="1.15rem"/>
                    <Link href="/Contact">Contact</Link>
                    </div>

                    <div className='flex justify-center items-center gap-1 mt-5 mx-7 pl-5 text-white bg-primary hover:bg-dark-primary hover:shadow-lg p-3 rounded-lg'>
                    <RiLogoutCircleFill size="1.25rem"/>
                    <Link href='/'>Log Out</Link>
                    </div>

                    
                </div>

                

                



            {/* </div> */}
        </div>
        
    </div>
  )
}

// const UserNav = () => {
//     return(
//         <div>hari</div>
//     )
// }
export default UserNav;

