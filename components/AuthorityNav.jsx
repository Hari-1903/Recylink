import React from 'react';
import Image from 'next/image';

const AuthorityNav = () => {
  return (
    <div className='bg-white shadow-[0px_0px_10px_10px_rgba(0,0,0,0.1)] rounded-lg h-full px-8  py-5 m-2 flex justify-between items-center'>
        <a href="/authority">
            <Image src="/assets/icons/recylink_black.png" width={100} height={100} alt="logo" />
        </a>
        <div className="flex-center gap-10">
            <div className="flex gap-4 max-md:gap-2">
                <a className="active"><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary ">Review Ticket</p></a>
                <a><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary">Update Status</p></a>
                <a><p className="font-medium px-4 py-1 rounded-xl bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-teritiary">Map</p></a>
            </div>
        </div>
    </div>
  )
}

export default AuthorityNav;
