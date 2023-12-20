import UserNav from '@/components/UserNav';
import { RxAvatar } from "react-icons/rx";


const Rewards = () => {
    const rewards = [
        {
          title: 'MAGENTO 2 CERTIFIED ASSOCIATE DEVELOPER',
          points: '1,500',
          description: 'This exam is for a developer who is beginning their career as a Magento developer.',
        },
        {
            title: 'MAGENTO 2 CERTIFIED ASSOCIATE DEVELOPER',
            points: '1,500',
            description: 'This exam is for a developer who is beginning their career as a Magento developer.',
        }
    ];
  
    return(
    <div className="grid grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav/></div>   
        <div className="m-3 py-3 px-5 rounded-xl relative shadow-content bg-slate-100">
            <div className='font-bold text-xl'>REWARDS</div>

            <div className="flex justify-between gap-4 items-center p-6 rounded-t-xl">
                
                <div className="flex h-full w-1/3 p-5 py-12 rounded-md items-center text-white bg-gradient-to-r from-gray-700 to-gray-400">
                    <div><RxAvatar size="4rem"/></div>
                      
                    <div className="mx-4">
                        <div className="text-lg font-semibold">User Name</div>
                        <div className="text-sm">Active</div>
                    </div>
                </div>

                
                <div className="w-1/3 text-center bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-4">
                        <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">My Points</div>
                        <div className="text-3xl font-bold text-gray-800 my-2">1,150</div>
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
                        <RewardCard key={index} title={reward.title} points={reward.points} description={reward.description} />
                        
                    ))}
                </section>
            </div>

    </div>
)}

interface RewardCardProps {
    title: string;
    points: string;
    description: string;
  }

const RewardCard: React.FC<RewardCardProps> = ({ title, points, description }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-xl bg-white p-6">
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-gray-700 text-base mb-4">{description}</p>
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