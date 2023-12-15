'use client'

import React, { useState } from 'react';
import UserNav from '@/components/UserNav';


const Rewards = () => {
  
    return(
    <div className="grid grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)]"><UserNav/></div>
        <div className="m-3 py-3 px-5 rounded-xl relative shadow-[0px_0px_10px_10px_rgb(0,0,0,0.02)] flex flex-col justify-between">
            <div>rewards component</div>
        </div>
  </div>
)}


export default Rewards;

