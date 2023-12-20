import UserNav from '@/components/UserNav';
import Image from "next/image";
import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav /></div>
      <div className="m-3 p-6 rounded-xl relative shadow-content grid grid-cols-2 gap-6 justify-center items-center bg-[rgba(255,255,255,0.5)]">
      <Image src="/assets/images/home_bg.jpg" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image(Garbage Truck)"/>
        {/* Left Section - Text and Contact Information */}
        <section className="text-[1.5rem] text-green-700 bg-cover bg-center relative" style={{ backgroundImage: `url('/path/to/your/image.jpg')` }}>
          <div className="bg-white bg-opacity-70 p-6 rounded-xl text-center flex-center flex-col">
            <p className="leading-[1.125]">
              Feel free to connect with us through email, or simply drop us a message
              and we will get back to you.
            </p>
            <Image src="/assets/icons/recylink_black.png" width={300} height={200} alt="Recylink Logo" className='p-8'/>

            {/* Card Section */}
            <div className="mt-6 p-4 bg-gray-300 rounded-xl text-green-700">
              <p className='mt-2'><strong>Location:</strong> New Delhi, India</p>
              <p className='mt-2'><strong>Mail Id:</strong> recylinksih@gmail.com</p>
              <p className='mt-2'><strong>Phone No:</strong> 18001800404</p>
            </div>
            {/* End of Card Section */}
          </div>
        </section>

        {/* Right Section - Form */}
        <div className="mx-1">
          <form action="">
            <div className="flex flex-col md:flex-row">
              <input type="text" required placeholder=" Full Name"  className="border-2 border-black w-full md:w-1/2 resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 px-1 bg-gray-300 text-green-700 font-bold mb-4 md:mb-0" />
              <input type="email" required placeholder=" Mail Id"  className="border-2 border-black w-full md:w-1/2 resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 px-1 bg-gray-300 text-green-700 font-bold md:ml-6" />
            </div>
            <div className="mt-6 text-green-700">
              <input type="text" required placeholder=" Subject" className=" border-2 border-black w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 px-1 bg-gray-300 text-green-700 font-bold" />
            </div>
            <div className="mt-6">
              <textarea name="" id="" cols={20} rows={10} placeholder="Got a message for us?" className=" border-2 border-black w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 px-1 bg-gray-300 text-green-700 font-bold"></textarea>
            </div>
            <div className="flex items-center justify-center mt-6">
              <button type="submit"  className="bg-primary text-white pt-2 pl-20 pb-2 pr-20 rounded-[10px] border-2 border-black hover:bg-green-700 hover:text-white hover:scale-[0.95] transition-all ease-in">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
