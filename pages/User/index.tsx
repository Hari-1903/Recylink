

import UserNav from "../../components/UserNav";

const Homepage = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen">
      <div className="bg-black my-3 ml-3 rounded-xl"><UserNav/></div>
      <div className="bg-yellow-200 m-3 rounded-xl"></div>
    </div>
  );
};

export default Homepage;
