import React from 'react';
import { IoMenu } from "react-icons/io5";

const UserNav = () => {
    const handlenavclick = () => {
        document.getElementById("nav")?.classList.toggle("hidden");
      };

    return (
        <div>
        <button onClick={handlenavclick} className="md:hidden absolute top-0 right-0 m-5 transition-all duration-200 ease-in-out">
        <div className="bg-slate-200 p-2 shadow-2xl rounded-xl">
            <IoMenu size="2.25rem" />
        </div>
        </button>  
    </div>
  )
}

export default UserNav;