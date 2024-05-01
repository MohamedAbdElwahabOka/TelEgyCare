'use client'
import React, { useEffect, useState } from 'react';
// import PatientApis from '../_utils/PatientApis';
import Link from 'next/link';

function Table({data}) {
  // console.log(R)
  // const [patientsByDocName, setPatientsByDocName] = useState([]);
  // useEffect(() => {
  //   getPatientsByDocName_();
  // }, [R])

  // const getPatientsByDocName_ = () => {
  //   PatientApis.getMedicalRecordsByDocName(R).then(res => {
  //     console.log(res.data.data);
  //     setPatientsByDocName(res.data.data);
  //   })
  // }
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-black ">Patient List</h1>
        <input
          type="text"
          placeholder="Search..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
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
              <th className="px-2 py-2">Birth_date</th>
              <th className="px-2 py-2">Medical_recordes</th>
              <th className="px-2 py-2">Reg_Num</th>
              <th className="px-2 py-2">Appointments</th>
              <th className="px-2 py-2">City</th>
              <th className="px-2 py-2">Governorate</th>
              <th className="px-2 py-2">Gender</th>
              <th className="px-2 py-2">Street</th>
              <th className="px-2 py-2">NationalID</th>
              <th className="px-2 py-2">State</th>
            </tr>
        </thead>
          <tbody className='bg-white'>
            {data.map((item, index) => (
            
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-transparent'}>
                {item?.attributes?.pres_state == 1||2? <>

                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                    {/* #{item?.attributes?.patient?.data?.attributes?.Name} */}
                    {/* {console.log(item)}
                    {console.log(item?.attributes?.patient?.data?.attributes?.Name)}
                    {console.log(item.id)} */}
                    {/* { console.log(item?.attributes?.pres_state)} */}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                    
               {console.log(item?.attributes?.patient?.data?.attributes?.Name)}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                {item?.attributes?.patient?.data?.attributes?.phone}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                    {item?.attributes?.patient?.data?.attributes?.Email}
                  </Link>
                </td>
                <td className=" px-4 py-2">
                  <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                     {item?.attributes?.patient?.data?.attributes?.Address}
                    
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

