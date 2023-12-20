import React,{ useState, useEffect } from 'react';
import UserNav from '@/components/UserNav';
import { RxAvatar } from "react-icons/rx";
import MobileNav from '@/components/MobileNav';
import { useImage } from '@/components/ImageContext';


const Rewards = () => {
    const { imageDetails, setImageDetails } = useImage();
    
    const lastComplaintNumber =imageDetails.length > 0 ? imageDetails[imageDetails.length - 1].complaintNumber : 0;
    const calculatedPoints = lastComplaintNumber * 20;

    const rewards = [
        {
          title: 'Mega Volume Deals',
          points: '300',
          description: 'Drive your business forward while saving big with volume-based best FASTag offers at select toll plazas.',
          expiry: 'Valid till 31st December 2023'
        },
        {
            title: 'BPCL & HPCL discount',
            points: '500',
            description: 'Upfront discount of Rs 100/- on every LPG refill to all LPG customers who will book and pay for their LPG cylinders online',
            expiry: 'Valid till 25th March 2024'
        },
        {
            title: 'Government Food Rationing Bonus',
            points: '500',
            description: 'Enjoy a 20% bonus on your next ration, receiving additional food items to support responsible food rationing practices.',
            expiry:'Valid until 30th June 2024.'
        }
    ];

    return(
    <div className="grid md:grid-cols-[19vw_80vw] md:grid-rows-1 h-screen w-screen overflow-none">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav hidden md:block" id="nav"><UserNav/></div>   
        <div className="m-3 py-4 px-6 rounded-xl relative shadow-content bg-slate-100">
            <div className='font-bold text-xl'>REWARDS</div>
            <div className="flex justify-between gap-4 items-center p-6 rounded-t-xl">
                <div className="flex h-full md:w-1/2 p-5 py-12 rounded-md items-center text-white bg-gradient-to-r from-gray-700 to-gray-400">
                    <div><RxAvatar size="4rem"/></div>
                    <div className="mx-4">
                        <div className="text-lg font-semibold">Welcome to Rewards Section</div>
                        <div className="text-sm">Active</div>
                    </div>
                </div>
                <div className="text-center bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <div className="md:text-sm font-semibold text-gray-500 uppercase tracking-wide">My Points</div>
                        <div className="md:text-2xl font-semibold text-gray-800">{calculatedPoints}</div>
                        <div className="text-xs text-gray-500">Points Available</div>
                    </div>
                    <div className="bg-primary">
                        <button className="w-full text-white font-semibold py-3 hover:bg-dark-primary focus:outline-none">
                        Redeem points
                        </button>
                    </div>
                </div>
            </div>
            <div className='font-bold text-lg'>CLAIM MY POINTS</div>
        {/* Rewards Cards */}
                <section className="rewards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6 ">
                    {rewards.map((reward, index) => (
                        <RewardCard key={index} title={reward.title} points={reward.points} description={reward.description} expiry={reward.expiry} /> 
                    ))}
                </section>
            </div>
        <MobileNav/>
    </div>
)}

interface RewardCardProps {
    title: string;
    points: string;
    description: string;
    expiry: string;
  }

const RewardCard: React.FC<RewardCardProps> = ({ title, points, description, expiry}) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
        <p className="text-gray-700 text-base mb-4"><span className='font-semibold'>Expiry: </span>{expiry}</p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-red-100 text-red-800 rounded-full px-3 py-1 text-sm font-semibold mr-2">{points} POINTS</span>
          <button className="bg-primary hover:bg-dark-prim text-white font-bold py-2 px-4 rounded">
            Claim points
          </button>
        </div>
      </div>
    );
  };

export default Rewards;