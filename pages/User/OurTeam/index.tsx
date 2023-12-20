import UserNav from '@/components/UserNav';
import React from 'react';
import Image from "next/image";

const OurTeam = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav">
        <UserNav />
      </div>
      <div className="m-3 rounded-xl relative shadow-content bg-slate-200">
        <div className="p-8">
          <h2 className="text-3xl font-bold text-center mb-8">Meet our team!</h2>
          <div className="grid grid-cols-3 gap-3">
            {/* Team Member 1 */}
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/Akhila.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Akhila S Kumar</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/Ananaya.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Ananya Nigam</h3>
            </div>
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/hari.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Harinarayanan R</h3>
            </div>
            {/* Team Member 2 */}
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/Derill.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Derill Sebiraj</h3>
            </div>
            {/* Team Member 3 */}
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/aswin.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Aswin Sujith varghese</h3>
            </div>
            {/* Team Member 4 */}
            <div className="p-4 bg-white rounded-lg shadow-content flex flex-col items-center">
            <Image src="/assets/images/pranav.jpg" width={200} height={100} alt="Recylink Logo" className="pb-4"/>
              <h3 className="text-lg font-semibold">Pranav </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
