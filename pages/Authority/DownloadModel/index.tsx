import React from 'react';
import AuthorityNav from '@/components/AuthorityNav';

const Downloadmodel = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-[0px_0px_10px_10px_rgb(0,0,0,0.02)]"><AuthorityNav/></div>
        <div className="m-3 p-16 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
            <p>Hi</p>
        </div>
    </div>
  )
}

export default Downloadmodel
