'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';


function TestResults({ patient }) {

  const cloudinaryPngUrl = "https://res.cloudinary.com/dlw9u7jf0/image/upload/v1719054709/vscode_icons_file_type_pdf2_b29bc1d7a5.png";
  const fileUrl= patient?.[0]?.attributes?.doctor_Files?.data[0]?.attributes?.url ;
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = patient.filter(item => {
    return item?.attributes?.patient?.data?.attributes?.reg_Num.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item?.attributes?.patient?.data?.attributes?.phone.toLowerCase().includes(searchTerm.toLowerCase())
  });

  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-blue-500 ">Patients from the laboratory</h1>
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
              <th className="px-2 py-2">Phone</th>
              <th className="px-2 py-2">Birth Date</th>
              <th className="px-2 py-2">NationalID</th>
              <th className="px-2 py-2">Adress</th>
              <th className="px-2 py-2">Gender</th>
              <th className="px-2 py-2">Blood Type</th>
              <th className="px-2 py-2">PDFs doctor</th>
              <th className="px-2 py-2">PDFs LAb</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (

              filteredData.map((item, index) => (
                <tr key={index}>
                  {item?.attributes?.pres_state == 2 ? <>

                    <td className="px-4 py-2 text-center">

                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes.patient?.data?.attributes?.reg_Num}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Name}
                      </Link>

                    </td>

                    <td className="px-4 py-2 text-center">

                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>

                        {item?.attributes?.patient?.data?.attributes?.phone}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">

                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Birth_Date}
                      </Link>

                    </td>
                    <td className="px-4 py-2 text-center">
                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.NationalId}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Governorate}-
                        {item?.attributes?.patient?.data?.attributes?.City}-
                        {item?.attributes?.patient?.data?.attributes?.Street}
                      </Link>
                    </td>
                    <td className="px-4 py-2 text-center">
                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Gender}
                      </Link>
                    </td>

                    <td className="px-4 py-2 text-center">
                      <Link href={`/ResultDetails/${item?.attributes?.patient?.data?.id}`}>
                        {item?.attributes?.patient?.data?.attributes?.Blood_Type}
                      </Link>
                    </td>

                    <td className=" px-4 py-2">
                      {item?.attributes?.doctor_Files?.data?.[0]?.attributes?.url ? (
                        <Link href={item?.attributes?.doctor_Files?.data?.[0]?.attributes?.url} target="_blank" download="medical_report.pdf" className="text-blue-400 hover:underline">
                          <div className="flex justify-center items-center h-full w-full">
                            <img
                              src={cloudinaryPngUrl}
                              alt="PDF Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </Link>
                      ) : (
                        <div className="text-center text-red-500">
                          No PDF available
                        </div>
                      )}

                    </td>
                    <td className=" px-4 py-2">
                    
                      {item?.attributes?.Lab_Files?.data?.[0]?.attributes?.url ? (
                        <Link href={item?.attributes?.Lab_Files?.data?.[0]?.attributes?.url} target="_blank" download="medical_report.pdf" className="text-blue-400 hover:underline">
                          <div className="flex justify-center items-center h-full w-full">
                            <img
                              src={cloudinaryPngUrl}
                              alt="PDF Icon"
                              className="w-10 h-10"
                            />
                          </div>
                        </Link>
                      ) : (
                        <div className="text-center text-red-500">
                          No PDF available
                        </div>
                      )}

                    </td>

                  </> : <></>}
                </tr>

              )))
              : (
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
export default TestResults;