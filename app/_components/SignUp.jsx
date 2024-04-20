"use client"

import React, { useState } from 'react';
import logo from './img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  const [RegistrationNumber, setRegistrationNumber] = useState('');
  const [ExpiryDate, setExpiryDate] = useState('');
  const [LicenseNumber, setLicenseNumber] = useState('');
  const [Governorate, setGovernorate] = useState('');
  const [Typeofspecializtion, setTypeofspecializtion] = useState('');
  const [UploadLicense, setUploadLicense] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center border border-gray-300 py-9">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={150} height={75} />
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mt-4">
              Telegy Care
            </p>
          </div>
          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="RegistrationNumber"
                name="RegistrationNumber"
                type="number"
                placeholder="Registration number"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={RegistrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="password" className="block text-xl font-medium text-gray-700">
              Password
            </label> */}
            <div className="mt-1">
              <input
                id="Expiry Date"
                name="Expiry Date"
                type="date"
                placeholder="Expiry Date"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ExpiryDate}
                onChange={(e) => setExpiryDate(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="verifyPassword" className="block text-xl font-medium text-gray-700">
              Verify Password
            </label> */}
            <div className="mt-1">
              <input
                id="License number"
                name="License number"
                type="number"
                placeholder="License number"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={LicenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="verifyPassword" className="block text-xl font-medium text-gray-700">
              Verify Password
            </label> */}
            <div className="mt-1">
              <input
                id="Type of specializtion"
                name="Type of specializtion"
                type="text"
                placeholder="Type of specializtion"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Typeofspecializtion}
                onChange={(e) => setTypeofspecializtion(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="verifyPassword" className="block text-xl font-medium text-gray-700">
              Verify Password
            </label> */}
            <div className="mt-1">
              <input
                id="Governorate"
                name="Governorate"
                type="text"
                placeholder="Governorate"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Governorate}
                onChange={(e) => setGovernorate(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label for="uploadLicense" className='text-gray-700' htmlFor="file-input">
            </label> */}
            <div className="mt-1">
              <input
                id="Upload License"
                name="Upload License"
                type="file"
                placeholder="Upload License"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={UploadLicense}
                onChange={(e) => setUploadLicense(e.target.value)}
              />
            </div>
          </div>
          <div>
            <Link href='Homepage'
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;