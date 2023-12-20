import React from 'react';
import Image from "next/image";
import UserNav from '@/components/UserNav';

const AboutUs = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav/></div>
      <div className="m-3 p-16 rounded-xl relative   shadow-content flex-center flex-col bg-[rgba(255,255,255,0.5)]">
        <Image src="/assets/images/home_bg.jpg" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image(Garbage Truck)"/>
        <div className="text-3xl text-black font-medium flex items-center justify-between flex-col">
        <h1 className="text-4xl font-bold mb-6 text-black">OUR MISSION</h1>
        <p className="leading-8 text-2xl">
          At Recylink, we aspire to build a future where waste transforms into a valuable resource for sustainable energy generation. 
          Every discarded item holds the potential to make a positive impact on our communities. Our unwavering commitment to excellence is 
          evident through the integration of an advanced deep learning model.
          <br></br>
          <br></br>
          This cutting-edge technology facilitates the efficient categorization of waste, optimizing collection and transport processes for a 
          cleaner and more sustainable environment. Our devoted team relentlessly strives to create a positive and meaningful experience for 
          all users interacting with our platform. 
          <br></br>
          <br></br>
          Join us in our mission to convert waste into energy and uphold the cleanliness of our communities. 
          Your participation is crucial, and together, we can significantly influence environmental change.
        </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;