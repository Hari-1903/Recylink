import React from 'react';
import AuthorityNav from '@/components/AuthorityNav';

const Map = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
        <div className="m-3 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-content flex-center ">
            <iframe className="h-full w-full rounded-xl m-0 p-0 shadow-[0px_0px_10px_10px_rgb(0,0,0,0.08)]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7780.768016985912!2d80.0338762915066!3d12.818444099931853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f76c93ee2ddd%3A0xe5cb10b4953dc3f7!2sSRM%20INSTITUTE%20OF%20SCIENCE%20AND%20TECHNOLOGY%20MAIN%20CAMPUS!5e0!3m2!1sen!2sin!4v1702645168724!5m2!1sen!2sin" width='auto' height="auto"  loading="lazy"></iframe>
        </div>
    </div>
  )
}

export default Map;
