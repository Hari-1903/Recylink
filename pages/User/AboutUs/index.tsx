import UserNav from '@/components/UserNav';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav/></div>
        <div className="m-3 rounded-xl relative shadow-content">Info About us</div>
      </div>
  )
}

export default AboutUs;