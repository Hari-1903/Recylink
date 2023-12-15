import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { RiLogoutCircleFill } from "react-icons/ri";
import { FaRegFileAlt } from "react-icons/fa";
import { LuCrown } from "react-icons/lu";
import { MdOutlineExplore } from "react-icons/md";






const UserNav = () => {
  return (
    <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] w-full h-full rounded-lg py-5 flex flex-col justify-between items-start'>
        <a href="/User" className='ml-7'>
            <Image src="/assets/icons/recylink_black.png" width={100} height={100} alt="logo" />
        </a>
        <div className="flex flex-col items-start gap-2 h-full w-full">
            {/* <div className="flex flex-col gap-4"> */}
                <h1 className='text-base text-left cursor-pointer font-bold border-b mt-5 ml-7 '>QUICK MENU</h1>
                <div className='w-full'>
                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3'>
                    <MdOutlineAddToPhotos />
                    <Link href='/User/RaiseTicket'>Complaint</Link>
                    </div>

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <FaRegFileAlt />
                    <Link href='/User/RaiseTicket'>Status</Link>
                    </div>
                    
                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <LuCrown />
                    <Link href='/User/RaiseTicket'>Reward</Link>
                    </div>

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <MdOutlineExplore />
                    <Link href='/User/RaiseTicket'>Explore</Link>
                    </div>

                    
                </div>

                <h1 className='text-base text-left cursor-pointer font-bold border-b mt-5 ml-7 '>MORE</h1>
                <div className='w-full'>

                    
                    

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <MdOutlineAddToPhotos />
                    <Link href='/User/RaiseTicket'>option1</Link>
                    </div>
                    
                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <MdOutlineAddToPhotos />
                    <Link href='/User/RaiseTicket'>option2</Link>
                    </div>

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <MdOutlineAddToPhotos />
                    <Link href='/User/RaiseTicket'>option3</Link>
                    </div>

                    <div className='flex justify-start items-center w-full gap-4 pl-5 text-gray-400 hover:text-primary hover:shadow-lg p-3 '>
                    <MdOutlineAddToPhotos />
                    <Link href="/Contact">Contact</Link>
                    </div>

                    <div className='flex justify-center items-center gap-1 mt-3 mx-7 pl-5 text-white bg-primary hover:bg-dark-primary hover:shadow-lg p-2.5 rounded-ld'>
                    <RiLogoutCircleFill size="1.25rem"/>
                    <Link href='/User'>Log Out</Link>
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

