import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const UserNav = () => {
  return (
    <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] rounded-lg h-full px-8  py-5 m-2 flex justify-between items-center'>
        <a href="/user">
            <Image src="/assets/icons/recylink_black.png" width={100} height={100} alt="logo" />
        </a>
        <div className="flex-center gap-10">
            <div className="flex gap-4 max-md:gap-2">
                <a className="active"><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary ">Complaint</p></a>
                <a><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary">Reward</p></a>
                <a><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary">Status</p></a>
            </div>
        </div>
        <Link href="/contact">
            <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary">Contact</p>
        </Link>
    </div>
  )
}

export default UserNav;
