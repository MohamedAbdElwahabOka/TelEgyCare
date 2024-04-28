'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const fetchedData = [
    {
      "ID": "5",
      "Name":"Jane Smith",
      "Email": "john.doe@example.com",
      "Phone": "+1234567890",
      "BIRTH_DATE": "4/17/2024",
      "MEDICAL_RECORDS": "123",
      "REG_NUM":"R987654",
      "APPOINTMENTS":"1",
      "CITY":"As",
      "GOVERNORATE":"Aswan",
      "GENDER":"Male",
      "STREET":"456 Elm St, Town, Country",
      "NATIONALID":"12345678912312",
      "STATE":"1"

    },
    {
      "ID": "5",
      "Name":"Jane Smith",
      "Email": "john.doe@example.com",
      "Phone": "+1234567890",
      "BIRTH_DATE": "4/17/2024",
      "MEDICAL_RECORDS": "123",
      "REG_NUM":"R987654",
      "APPOINTMENTS":"1",
      "CITY":"As",
      "GOVERNORATE":"Aswan",
      "GENDER":"Male",
      "STREET":"456 Elm St, Town, Country",
      "NATIONALID":"12345678912312",
      "STATE":"1"

    },
    {
      "ID": "5",
      "Name":"Jane Smith",
      "Email": "john.doe@example.com",
      "Phone": "+1234567890",
      "BIRTH_DATE": "4/17/2024",
      "MEDICAL_RECORDS": "123",
      "REG_NUM":"R987654",
      "APPOINTMENTS":"1",
      "CITY":"As",
      "GOVERNORATE":"Aswan",
      "GENDER":"Male",
      "STREET":"456 Elm St, Town, Country",
      "NATIONALID":"12345678912312",
      "STATE":"1"

    },
  ];

function Table() {
  return (
    <div className="p-4 bg-gray-100 w-full">
      <div className="flex justify-between">
        <h1 className="text-xl text-black font-bold ml-6 mt-7 mb-5">Patient List</h1>
        {/* <input
          type="text"
          placeholder="Search..."
          className="w-64 px-3 py-2 text-black placeholder-gray-500 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:w-auto"
        /> */}
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
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
          <tbody>
            {fetchedData.map((item,index) => (
            
              <tr key={index} >

                <td className="px-10 py-2">
                     <Link href="NewCheckUP"> 
                     <div className="text-sm text-black">{item.ID}</div>
                    {/* {item?.attributes?.patient?.data?.attributes?.reg_Num}
                    {console.log(item)}
                    {console.log(item?.attributes?.patient?.data?.attributes?.Name)}
                    {console.log(item.id)}  */}
                    {/* { console.log(item?.attributes?.pres_state)} */}
                  </Link> 
                </td>
                <td className="px-10 py-2">
                  <Link href="NewCheckUP">
                    
               {/* {item?.attributes?.patient?.data?.attributes?.Name} */}
               <div className="text-sm text-black">{item.Name}</div> 
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Name}</div> */}
                </td>
                <td className="px-10 py-2">
                  <Link href="NewCheckUP">
                  {/* {item?.attributes?.patient?.data?.attributes?.Email} */}
                <div className="text-sm text-black">{item.Email}</div>
                  </Link> 
                </td>
                <td className="px-10 py-2">
                    <Link href="NewCheckUP">
                {/* {item?.attributes?.patient?.data?.attributes?.phone} */}
                <div className="text-sm text-black">{item.Phone}</div>
                  </Link> 
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.BIRTH_DATE}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.MEDICAL_RECORDS}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.REG_NUM}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.APPOINTMENTS}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.CITY}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.GOVERNORATE}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.GENDER}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.STREET}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.NATIONALID}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
                <td className="px-10 py-2">
                     <Link href="NewCheckUP">
                     {/* {item?.attributes?.patient?.data?.attributes?.Address} */}
                    <div className="text-sm text-black">{item.STATE}</div>
                  </Link> 
                  {/* <div className="text-sm text-black">{item.Address}</div> */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
