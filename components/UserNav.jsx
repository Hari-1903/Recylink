import React from 'react';
import Image from 'next/image';

const UserNav = () => {
  return (
    <div className='w-full h-full px-10 py-5 flex justify-between items-center'>
        <a href="/user">
            <p className="text-xl font-bold max-md:text-xs ">Recylink</p>
        </a>
        <div className="flex-center gap-10">
            <div className="flex gap-4 max-md:gap-2">
                <a className="active">
                    <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100 ">Complaint</p>
                </a>
                <a>
                    <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100">Reward</p>
                </a>
                <a>
                    <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100">Status</p>
                </a>
                <a>
                    <p className="font-medium max-md:text-xs px-4 py-1 rounded-xl shadow-md bg-[#fffff] text-[#000] hover:transition all 0.2s ease-in-out cursor-pointer hover:bg-lime-100">Contact</p>
                </a>
            </div>
        </div>
    </div>
  )
}

export default UserNav;
