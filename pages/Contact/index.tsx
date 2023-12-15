import UserNav from '@/components/UserNav';
import React from 'react';

const Contact = () => {
  return (
    <>
      <UserNav/>
    <div>
      <UserNav />
      <div className="flex absolute top-[120px] w-[320px] h-[calc(100%-200px)] z-1 justify-center flex-col justify-between mx-20 my-5 p-[40px] bg-teritiary shadow-md rounded-md max-w-sm">
        <h2 className="text-md font-semibold mx-3 my-1">Contact Info</h2>
        <div className="block text-sm font-medium">
          <ul className="mb-10 ml-5 p-1">
            <li>
              <span>
                4th Floor, Pt. Deendayal Antyodaya Bhawan, CGO Complex, Lodhi
                Road, New Delhi - 110003.
              </span>
            </li>
            <li>
              <span>connect@mygov.nic.in</span>
            </li>
            <li>
              <span>011-24301812</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-8 ml-80 p-10 bg-secondary shadow-md rounded-md max-w-3xl">
        <h1 className="text-xl text-black font-bold mx-20 my-2">
          Send a Feedback
        </h1>

        <form action="#" method="post">
          <div className=" mb-4 mx-20 my-2">
            <label
              htmlFor="name"
              className="block text-sm text-white font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-1 p-1 bg-tint w-full border rounded-md"
            />
          </div>

          <div className="mb-4 mx-20 my-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-1 bg-tint w-full border rounded-md"
            />
          </div>

          <div className="mb-4 mx-20 my-2">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-white"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="2"
              className="mt-1 p-2 bg-tint w-full border rounded-md"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-tint text-black mx-20 my-2 px-2 py-2 rounded-md hover:bg-teritiary"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Contact;