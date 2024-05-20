'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


function TestResults({patient}) {

  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredData = patient.filter(item => {
      return item?.attributes?.patient?.data?.attributes?.reg_Num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Name.toLowerCase().includes(searchTerm.toLowerCase())||
      item?.attributes?.patient?.data?.attributes?.phone.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-black ">Patients from the laboratory</h1>
        <input
          type="text"
          value={searchTerm}
          placeholder="Search..."
          onChange={e => setSearchTerm(e.target.value)}
          className="w-64 px-3 py-2 placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        />
      </div>
      <div className="overflow-x-auto">
        <table className="w-full ">
        <thead>
        <tr className="text-blue-500">
              <th className="px-2 py-2">ID</th>
              <th className="px-2 py-2">Name</th>
              <th className="px-2 py-2">Phone</th>
              <th className="px-2 py-2">Birth Date</th>
              <th className="px-2 py-2">NationalID</th>
              <th className="px-2 py-2">Adress</th>
              <th className="px-2 py-2">Gender</th>
              <th className="px-2 py-2">Blood Type</th>
            </tr>
        </thead>
        <tbody className='bg-white'>
            {filteredData.length > 0 ?(

            filteredData.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                {item?.attributes?.pres_state == 1||2? <>
                  {console.log(item?.attributes?.pres_state)}
                <td className=" px-4 py-2">
                   <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                    {item?.attributes.patient?.data?.attributes?.reg_Num}
                  </Link>
                </td>

                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                    {item?.attributes?.patient?.data?.attributes?.Name}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                
                {item?.attributes?.patient?.data?.attributes?.phone}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                  {item?.attributes?.patient?.data?.attributes?.Birth_Date}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.NationalId}
                  </Link>
                </td>
                 <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Governorate}-
                     {item?.attributes?.patient?.data?.attributes?.City}-
                     {item?.attributes?.patient?.data?.attributes?.Street}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Gender}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Blood_Type} 
                  </Link>
                </td>
                </> : <></>}
                
              </tr>
            ))
          ):(
            <tr>
            <td colSpan="10" className="h-20 text-center">
              <h1 className="text-2xl font-bold">No patients found</h1>
            </td>
          </tr>
          )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TestResults;

        {/* {data.map((item, index) => (
        <header key={index} className="bg-gray-100 text-blue-500 py-5">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <Image src={logo} width={60} height={60} className="text-blue-500" />
            </div>

            <nav>
              <ul className="flex space-x-6 md:space-x-8">
                <li>
                  <h4 className="nav-link"> Hello ,Dr.{item?.attributes?.Name}</h4>
                </li>
                <li>
                  <Image src={logo} width={40} height={40} className="text-blue-500 nav-link" />
                </li>
              </ul>
            </nav>
          </div>
          <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold p-20">
          Test Results
          </h3>
        </header>))} */}

      {/* <section className="grid md:grid-cols-1 gap-4 px-8 w-full bg-gray-100">
        {patients.map((item,id) => (
          <div key={id}>
            <div className="bg-white p-2 rounded shadow-md flex flex-col w-full">
              <div className="flex items-center mb-4">
                <div className="ml-4 text-gray-500">
                  <h3 className="text-xl font-bold text-blue-500 mb-2">Patient Information</h3>
                  <p><strong>Name:</strong> {item?.attributes?.Name}</p>
                  <p><strong>Patient ID:</strong>{item?.attributes?.Name}</p>

                  <div >
                    <h3 className="text-xl font-bold mt-4">Analysis Results: {item?.attributes?.Name}</h3>
                    <p>Performed by :{item?.attributes?.Name}</p>
                    <p>Download the full report for more details.</p>
                  </div>
                </div>
              </div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Download</button>
            </div>
          </div>
        ))}

      </section> */}