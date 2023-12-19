import React, { useState } from 'react';
import AuthorityNav from '@/components/AuthorityNav';

interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  employee_status: string;
  assigned_ID: string;
  Task_Status: string;
  // status: string;
}

const UserManagementDashboard: React.FC = () => {
  const [employees, setEmployees] = useState<Employee[]>([
    // ...your existing employees
  ]);
  // const [searchTerm, setSearchTerm] = useState('');

  // Handlers for UI interactions
  const addEmployee = (newEmployee: Employee) => {setEmployees(prevEmployees =>[...prevEmployees, newEmployee]);
   };
   const handleAddEmployee = () => {
    const firstName = window.prompt('Enter the first name of the employee');
    const lastName = window.prompt('Enter the last name of the employee');
    const email = window.prompt('Enter the email of the employee');
    const employee_status = window.prompt('Enter the status of the employee');
    const assigned_ID = window.prompt('Enter the assigned_ID of the Task');
    const Task_Status = window.prompt('Enter the Task Status');
    // const status = window.prompt('Enter the status of the employee');
    
    if (firstName && lastName && email && employee_status && assigned_ID && Task_Status) {
      const newEmployee: Employee = {
        id: Math.max(...employees.map(e => e.id), 0) + 1, // simple id generation strategy
        firstName,
        lastName,
        email,
        employee_status,
        assigned_ID,
        Task_Status,
      };
      addEmployee(newEmployee);
    } else {
      alert('All fields are required to add a new employee');
    }
  };
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => { /*...*/};
  const handleImport = () => { /* ... */ };
  const handleExport = () => { /* ... */ };
  const handleFilter = () => { /* ... */ };

  // const filteredEmployees = employees.filter(employee =>
  //   employee.firstName.toLowerCase().includes(searchTerm) ||
  //   employee.lastName.toLowerCase().includes(searchTerm) ||
  //   employee.email.toLowerCase().includes(searchTerm) ||
  //   employee.employee_status.toLowerCase().includes(searchTerm) ||
  //   employee.assigned_ID.toLowerCase().includes(searchTerm) ||
  //   employee.Task_Status.toLowerCase().includes(searchTerm)
  // );


  return (
  <div className="grid grid-cols-[280px_1fr] h-screen w-screen">
  <div className="bg-black my-3 ml-3 rounded-xl shadow-nav"><AuthorityNav/></div>

    <div className="m-3 py-3 px-5 rounded-xl relative shadow-content flex flex-col justify-start">
      <div className="flex gap-4 mb-5">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddEmployee}>Add employee</button>
        <input className="shadow appearance-none border rounded py-2 px-3 text-grey-darker" placeholder="Search..." onChange={handleSearch} />
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleImport}>Import</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded" onClick={handleExport}>Export</button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onClick={handleFilter}>Filter</button>
      </div>
      <table className="table-auto w-full">
        <thead>
          <tr className="bg-gray-100">
          <th className="px-4 py-2">S/N</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Employee Status</th>
            <th className="px-4 py-2">Task Assigned ID</th>
            <th className="px-4 py-2">Task Status</th>
            {/* <th className="px-4 py-2">Status</th> */}
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id} className="hover:bg-gray-50">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{employee.firstName}</td>
              <td className="border px-4 py-2">{employee.lastName}</td>
              <td className="border px-4 py-2">{employee.email}</td>
              <td className="border px-4 py-2">{employee.employee_status}</td>
              <td className="border px-4 py-2">{employee.assigned_ID}</td>
              <td className="border px-4 py-2">{employee.Task_Status}</td>
              {/* <td className="border px-4 py-2">{employee.status}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination components would go here */}
    </div>
    </div>
  );
};

export default UserManagementDashboard;