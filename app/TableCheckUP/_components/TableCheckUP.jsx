'use client'
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

function Table({patient}) {

  // console.log(patient)

  
  const [searchTerm, setSearchTerm] = useState('');
  
    const filteredData = patient.filter(item => 
      item?.attributes?.patient?.data?.attributes?.reg_Num.includes(searchTerm)
    );

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-black ">Patient List</h1>
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
              <th className="px-2 py-2">Email</th>
              <th className="px-2 py-2">Phone</th>
              <th className="px-2 py-2">Age</th>
              <th className="px-2 py-2">Address</th>
              <th className="px-2 py-2">Gender</th>
              <th className="px-2 py-2">NationalID</th>
              <th className="px-2 py-2">date & time</th>
            </tr>
        </thead>
        <tbody className='bg-white'>
            {filteredData.map((item, index) => (
            
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                {item?.attributes?.pres_state == 1||2? <>

                <td className=" px-4 py-2">
                   <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                    {item?.attributes.patient?.data?.attributes?.reg_Num}
                  </Link>
                </td>

                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                    
                    {item?.attributes?.patient?.data?.attributes?.Name}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                
                {item?.attributes?.patient?.data?.attributes?.Email}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                  {item?.attributes?.patient?.data?.attributes?.phone}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Birth_Date}
                    
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Governorate}-
                     {item?.attributes?.patient?.data?.attributes?.City}-
                     {item?.attributes?.patient?.data?.attributes?.Street}
                    
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Gender}
                    
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.NationalId}
                    
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.date}- 
                     {item?.attributes?.time} 
                    
                  </Link>
                </td>
                </> : <></>}
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

