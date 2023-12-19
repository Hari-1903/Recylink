import UserNav from '@/components/UserNav';
import UploadContent from '@/components/UploadContent';

const RaiseTicket = () => {
  
    return(
    <div className="grid grid-cols-[19vw_80vw] h-screen w-screen overflow-none">
        <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><UserNav/></div>
        <div className="m-3 py-3 px-5 rounded-xl relative shadow-content">
            <UploadContent/>
        </div>
  </div>
)}

export default RaiseTicket;

