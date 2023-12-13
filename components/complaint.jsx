import React from 'react';

const Complaint = () => {
  return (
    <div className='p-10 flex'>
      <div className='bg-teritiary w-96 rounded-2xl mr-7'>
        <div className='flex flex-col'>
          <div className='grid grid-cols-2 justify-items-center bg-secondary text-xl p-3 rounded-tr-2xl rounded-tl-2xl'>
            <div>Upload Image</div>
            <div>Live Capture</div>
          </div>
          <div className='my-3 mx-9'>
            <p className='text-3xl flex-center p-3 mb-16'>Choose Your image</p>
            <div className='flex-center bg-tint-1 p-3 mb-3'>
              <input type='file' accept='image/*' h={'50px'} pt={'2'}/>
            </div>
            <p className='text-xl p-3'>Location : </p>
          </div>
          <div className='flex-center p-10'>
            <button className='px-16 py-3 text-xl font-bold rounded-lg bg-primary'>Submit</button>
          </div>
        </div>
      </div>
      <div className='bg-teritiary w-full rounded-2xl'>
      </div>
    </div>

  )
}

export default Complaint;