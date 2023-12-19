import AuthorityNav from '@/components/AuthorityNav';
import React from 'react';

const OurTeam = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav">
        <AuthorityNav />
      </div>
      <div className="m-3 rounded-xl relative shadow-content">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Meet our team!</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="" // Replace with actual image path
                alt="GFG logo served with static path of public directory"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Akhila S Kumar</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="/path-to-ben-ashley.jpg" // Replace with actual image path
                alt="Ben Ashley"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Ananya Nigam</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="/path-to-ben-ashley.jpg" // Replace with actual image path
                alt="Ben Ashley"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Harinarayanan R</h3>
            </div>
            {/* Team Member 2 */}
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="/path-to-amanda-nguyen.jpg" // Replace with actual image path
                alt="Amanda Nguyen"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Derill Sebiraj</h3>
            </div>
            {/* Team Member 3 */}
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="/path-to-amy-deschamps.jpg" // Replace with actual image path
                alt="Amy Deschamps"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Aswin Sujith varghese</h3>
            </div>
            {/* Team Member 4 */}
            <div className="p-4 bg-white rounded-lg shadow flex flex-col items-center">
              <img
                src="/path-to-luther-makina.jpg" // Replace with actual image path
                alt="Luther Makina"
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <h3 className="text-lg font-semibold">Pranav </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
