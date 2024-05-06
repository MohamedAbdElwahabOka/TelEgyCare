'use client'
// import React, { useEffect, useState } from 'react';

// import Link from 'next/link';

function Table({patient}) {

  // console.log(patient)
  return (
    <div className="p-4 bg-gray-100">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold text-black ">Patient List</h1>
        <input
          type="text"
          placeholder="Search..."
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

      
          

        </table>
      </div>
    </div>
  );
}

export default Table;

