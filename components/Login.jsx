'use client'
import React,{ useState } from "react";
import Image from "next/image";

const Login = () => {
  
  const [mailId, setMailid] = useState("");
  const [passwordUser, setPassworduser] = useState("");
  const [authorityId, setAuthorityid] = useState("");
  const [passwordOff, setPasswordoff] = useState("");
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [isAuthorityLogin, setIsAuthorityLogin] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (mailId && passwordUser) {
      window.location.href = "/user";
    } 
    if (authorityId && passwordOff){
      location.href='/authority';
    }
  };

  return (
    <section>
      <div className="h-screen w-screen flex-center">
        <div className="h-[500px] grid grid-cols-[450px_375px] shadow-2xl">
          <div className="rounded-l-xl relative">
            <video src="/assets/images/leaves.mp4" className="h-full w-full object-cover rounded-l-xl -z-10 absolute" autoPlay muted loop zoom>
            </video>
            <div className="h-full w-full flex flex-col justify-end">
              <div className="h-full w-full flex-center flex-col">
                <p className="text-3xl font-extrabold text-white">RecyLink</p>
                <p className="text-xl font-medium text-white">Towards a Cleaner Environment</p>
              </div>
              <div className="flex items-center justify-between bg-[rgba(255,255,255,0.5)] p-3 m-2 rounded-lg">
                <p className="text-md text-white">Create a account</p>
                <button className="bg-white p-1 rounded-lg font-semibold text-primary border-2 hover:scale-[0.95] transition-all ease-in shadow-2xl">Sign up</button>  
              </div>
            </div>
          </div>
          <div className="bg-slate-200 rounded-r-xl flex flex-col">
            <div className="flex-center flex-col h-full">
              {/* <Image src="/assets/icons/recylink.png" width={100} height={100}/> */}
              <p className="text-3xl p-2 mb-4 font-bold">Welcome Back!</p>
              <div>
                <div className="grid grid-cols-2">
                  <button className='text-lg px-7 py-1 m-2 border-2 border-white rounded-full hover:bg-primary hover:shadow-2xl transition-all ease-in hover:scale-[0.95]' onClick={() => { setIsUserLogin(true); setIsAuthorityLogin(false);}}>User</button>
                  <button className='text-lg px-7 py-1 m-2 border-2 border-white rounded-full hover:bg-primary hover:shadow-2xl transition-all ease-in hover:scale-[0.95]'onClick={() => { setIsAuthorityLogin(true); setIsUserLogin(false);}}>Authority</button>
                </div>
                <div className="flex flex-col mt-5">
                  {isUserLogin ? (
                  <div>
                    <form action="" >
                      <div className="flex-center flex-col">
                        <input type="text" required placeholder="Email Id" value={mailId} onChange={(e)=>setMailid(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4"/>
                        <input type="password" required placeholder="Password" value={passwordUser} onChange={(e)=>setPassworduser(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4 mt-2"/>
                        <button type="submit" className="w-3/4 text-white py-2 rounded-[10px] border-2 bg-primary hover:scale-[0.95] transition-all ease-in mt-7">Submit</button>
                      </div>
                    </form>
                  </div>) : isAuthorityLogin ? (
                  <div>
                    <form action="">
                      <div className="flex-center flex-col">
                        <input type="text" required placeholder="Authority Id" value={authorityId} onChange={(e)=>setAuthorityid(e.target.value)} className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4]" />
                        <input type="password" required placeholder="Password" value={passwordOff} onChange={(e)=>setPasswordoff(e.target.value)} className="w-full resize-none rounded-[30px] pt-3 pl-4 pr-4 pb-4 mt-2"/>
                        <button type="submit" className="w-3/4 text-white py-2 rounded-[10px] border-2 bg-primary hover:scale-[0.95] transition-all ease-in mt-7">Submit</button>
                      </div>
                    </form>
                  </div>) : null}
                </div>
              </div>
            </div>
              <div className="pb-1">
                <Image src="/assets/images/sihlogo.png" width={1000} height={400}/>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
