import AuthorityNav from "../../components/AuthorityNav";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)]"><AuthorityNav/></div>
      <div className="m-3 p-16 rounded-xl relative bg-[rgba(255,255,255,0.5)] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.06)] flex-center flex-col">
        <Image src="/assets/images/home_bg.png" fill={true} className="h-full w-full object-cover rounded-xl -z-10" alt="Background Image(Garbage Truck)"/>
        <Image src="/assets/icons/recylink_black.png" width={300} height={300} alt="Recylink Logo" className="pb-4"/>
        <div className="text-3xl w-4/5 text-black font-medium flex-center flex-col">
          <p>Transforming Waste Management</p>
          <p>Bridging Users, Authorities, and Sustainability Efforts</p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
