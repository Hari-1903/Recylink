import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [authorityId, setAuthorityid] = useState("");
  const [passwordOff, setPasswordoff] = useState("");
  const [isUserLogin, setIsUserLogin] = useState(true);
  const [isAuthorityLogin, setIsAuthorityLogin] = useState(false);
  const [issingupmode, setIsSignupmode] = useState(true);

  const sendOtp = async (phone : any) => {
    console.log(`Sending OTP to ${phone}`);
    return new Promise(resolve => setTimeout(() => resolve("1234"), 1000));
  };

  const handleSendOtp = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const otpResponse = await sendOtp(phoneNumber);
    console.log(`OTP Sent: ${otpResponse}`);
    setOtpSent(true);
  };

  const handleUserLogin = async(e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Verifying OTP: ${otp}`);
    window.location.href = "/User";
  };

  const handleauthoritySubmit = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (authorityId === 'admin' && passwordOff === 'admin') {
      window.location.href = '/Authority';
    } else if (authorityId !== 'admin123' && passwordOff !== 'admin123') {
      window.alert("Invalid Credentials");
    }
  };

  return (
    <section>
      <div className="p-6 md:p-0 md:h-screen w-screen flex-center">
        <div className="h-[600px] grid md:grid-cols-[600px_400px] shadow-[0px_0px_10px_10px_rgb(0,0,0,0.1)] rounded-xl grid-cols-1">
          <div className="rounded-l-xl relative">
            <video src="/assets/images/leaves.mp4" className="h-full w-full object-cover md:rounded-l-xl rounded-xl -z-10 absolute" autoPlay muted loop></video>
            <div className="h-full w-full flex flex-col justify-end">
              <div className="h-full w-full flex-center flex-col">
                <p className="text-2xl md:text-5xl font-extrabold text-white">RecyLink</p>
                <p className="text-xl md:text-2xl font-medium text-white">Towards a Cleaner Environment</p>
              </div>
              <div className="flex items-center justify-between bg-[rgba(255,255,255,0.5)] p-3 m-2 rounded-lg">
                <p className="text-md text-white">Create an account</p>
                <button onClick={() => setIsSignupmode((prevMode) => !prevMode)} className="bg-white p-1 rounded-lg font-semibold text-primary border-2 hover:scale-[0.95] transition-all ease-in shadow-2xl">{issingupmode ? <p>Sign Up</p> : <p>Sign In</p>}</button>  
              </div>
            </div>
          </div>
          <div className="bg-tint md:rounded-r-xl rounded-xl flex flex-col">
            <div className="flex-center flex-col h-full">
              <p className="text-3xl p-2 mb-4 font-bold">{issingupmode ? "Welcome Back!" : "Let us Know you!"}</p>
              <div>
                <div className="grid grid-cols-2">
                  <button className='text-lg px-7 py-1 m-2 border-2 border-teritiary rounded-full hover:bg-teritiary hover:shadow-2xl transition-all ease-in hover:scale-[0.95]' onClick={() => { setIsUserLogin(true); setIsAuthorityLogin(false); }}>User</button>
                  <button className='text-lg px-7 py-1 m-2 border-2 border-teritiary rounded-full hover:bg-teritiary hover:shadow-2xl transition-all ease-in hover:scale-[0.95]' onClick={() => { setIsAuthorityLogin(true); setIsUserLogin(false); }}>Authority</button>
                </div>
                <div className="flex flex-col mt-5">
                  {isUserLogin ? (
                    <div>
                      {!otpSent ? (
                        <form onSubmit={handleSendOtp}>
                          <input type="tel" required placeholder="Phone Number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4"/>
                          <button type="submit" className="w-3/4 text-white py-2 rounded-[10px] border-2 bg-primary hover:scale-[0.95] transition-all ease-in mt-7">Send OTP</button>
                        </form>
                      ) : (
                        <form onSubmit={handleUserLogin}>
                          <input type="text" required placeholder="OTP" value={otp} onChange={(e) => setOtp(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4"/>
                          <button type="submit" className="w-3/4 text-white py-2 rounded-[10px] border-2 bg-primary hover:scale-[0.95] transition-all ease-in mt-7">Submit</button>
                        </form>
                      )}
                    </div>
                  ) : isAuthorityLogin ? (
                    <div>
                      <form onSubmit={handleauthoritySubmit}>
                        <input type="text" required placeholder="Authority Id" value={authorityId} onChange={(e) => setAuthorityid(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4" />
                        <input type="password" required placeholder="Password" value={passwordOff} onChange={(e) => setPasswordoff(e.target.value)} className="w-full resize-none rounded-lg pt-3 pl-4 pr-4 pb-4 mt-2"/>
                        <button type="submit" className="w-3/4 text-white py-2 rounded-[10px] border-2 bg-primary hover:scale-[0.95] transition-all ease-in mt-7">Submit</button>
                      </form>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
            <Link href="https://sih.gov.in/" target="_blank" className="pb-1">
              <Image src="/assets/images/sihlogo.png" alt="Logo of SIH comittie" width={1000} height={400} priority/>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
