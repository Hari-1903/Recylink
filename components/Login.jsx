'use client'

import { useState } from "react";
import Image from "next/image";

const Login = () => {
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [isAuthorityLogin, setIsAuthorityLogin] = useState(false);
  const [mailId, setMailid] = useState("");
  const [authorityId, setAuthorityid] = useState("");
  const [passwordOff, setPasswordoff] = useState("");
  const [passwordUser, setPassworduser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mailId && passwordUser) {
      // Here you would typically make an API call to validate and log the user in.
      // Redirect to the home page after a successful login
      window.location.href = "/user";
    } 
    if (authorityId && passwordOff){
      location.href='/authority';
    }
  };

  // const handleAuthoritySubmit = () => {
  //   if (authorityId) {
  //     Here you would typically make an API call to validate and log the authority in.
  //     Redirect to the reviewComplaints page after a successful login:
  //   location.href = "/authority";
  //   } else {
  //     prompt({
  //       title: "Error.",
  //       description: "Please enter the authority ID.",
  //       status: "error",
  //       duration: 3000,
  //       isClosable: true,
  //     });
  //   }
  // };

  return (
    <section className="flex-center w-[35%]">
        <div className="flex-center flex-col  w-full p-16 h-screen bg-slate-50">
        <div className="flex flex-col items-center h-[520px] w-full bg-slate-200">
          <h1 className="flex justify-center font-bold text-5xl p-5 w-full bg-primary text-white">Login</h1>

          {isUserLogin ? (
              <div>
              <form action="" onSubmit={handleSubmit}>
              <div className="container">
                <label><b>Mail Id</b></label>
                <input type="email" required placeholder="Enter Mail Id" value={mailId} onChange={(e)=>setMailid(e.target.value)}/>
                <br/>    
                <label><b>Password</b></label>
                <input type="password" required placeholder="Enter Password" value={passwordUser} onChange={(e)=>setPassworduser(e.target.value)}/>
              </div>
              <button type="submit">Submit</button>
              </form>
            </div>
          ) : isAuthorityLogin ? (
              <div>
              <form action="" onSubmit={handleSubmit}>
              <div className="container">
                <label><b>Authority Id</b></label>
                <input type="text" required placeholder="Authority Id" value={authorityId} onChange={(e)=>setAuthorityid(e.target.value)}/>
                <br/>
                <label><b>Password</b></label>
                <input type="password" required placeholder="Password" value={passwordOff} onChange={(e)=>setPasswordoff(e.target.value)}/>
              </div>
              <button type="submit">Submit</button>
              </form>
            </div>
          ) : null}
            <button onClick={() => {
                setIsUserLogin(true);
                setIsAuthorityLogin(false);
            }} className='text-xl inline-block bg-slate-700 text-white'>User Login</button>
            <button onClick={() => {
                setIsAuthorityLogin(true);
                setIsUserLogin(false);
            }} className='text-xl inline-block bg-slate-700 text-white'>Authority Login</button>
        </div>
        <div class="flex gap-0 max-md:hidden">
                <a target="_blank" href="https://sih.gov.in/" rel="noreferrer">
                    <Image src="/assets/images/Sih_logo.png" width={500} height={500} alt="Picture of SIH colloborators" class="w-auto h-14"/>
                </a>
        </div>
        </div>
    </section>
  );
};

export default Login;
