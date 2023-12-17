import AuthorityNav from '@/components/AuthorityNav';
import React from 'react';

const AssignEmployee = () => {
  return (
    <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
      <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>
        <div className="m-3 rounded-xl relative shadow-content">Assign Employee</div>
      </div>
  )
}

export default AssignEmployee;