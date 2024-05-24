'use client'
import React, { useEffect, useState } from 'react';

import Link from 'next/link';

function Table({ patient }) {

  const calculateAge = (birthDateString) => {
    const birthDate = new Date(birthDateString);
    const today = new Date();
    const age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
  }

  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = patient.filter(item => {
    return item?.attributes?.patient?.data?.attributes?.reg_Num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Governorate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calculateAge(item?.attributes?.patient?.data?.attributes?.Birth_Date).toString().includes(searchTerm) ||
      item?.attributes?.patient?.data?.attributes?.City.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Street.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.NationalId.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.time.toLowerCase().includes(searchTerm.toLowerCase())
  });

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
        <table className="w-full bg-gray-200">
          <thead className="sticky top-0 bg-white">
            <tr>
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
          <tbody>
            {filteredData.length > 0 ? (

              filteredData.map((item, index) => (
                <tr key={index} >
                  {item?.attributes?.pres_state == 1 || 2 ? <>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes.patient?.data?.attributes?.reg_Num}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>

                        {item?.attributes?.patient?.data?.attributes?.Name}
                      </Link>

                    </td>

                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>

                        {item?.attributes?.patient?.data?.attributes?.Email}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.phone}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {calculateAge(item?.attributes?.patient?.data?.attributes?.Birth_Date)}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Governorate}-
                        {item?.attributes?.patient?.data?.attributes?.City}-
                        {item?.attributes?.patient?.data?.attributes?.Street}
                      </Link>

                    </td>

                    <td className="px-4 py-2 text-center">


                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Gender}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">
                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.NationalId}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/NewCheckUP/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.date}-
                        {item?.attributes?.time}

                      </Link>
                    </td>
                  </> : <></>}
                </tr>

              ))) : (
              <div className="flex justify-center items-center w-full h-96">
                <h1 className="text-2xl text-gray-500">No Patients Found</h1>
              </div>
            )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;

