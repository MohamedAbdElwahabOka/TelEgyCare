"use client"

import React, { useState } from 'react';
import logo from './img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const SignUp = () => {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [VerifyPassword, setVerifyPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [Adress, setAdress] = useState('');
  const [NationalID, setNationalID] = useState('');
  const [National, setNational] = useState('');
  const [ExpiryDate, setExpiryDate] = useState('');
  const [LicenseNumber, setLicenseNumber] = useState('');
  const [Governorate, setGovernorate] = useState('');
  const [Typeofspecializtion, setTypeofspecializtion] = useState('');
  const [UploadLicense, setUploadLicense] = useState('');
  const [Profileimage, setProfileimage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white min-h-screen flex justify-center items-center border border-gray-300 py-9">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* <div className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={150} height={75} />
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mt-4">
              Telegy Care
            </p>
          </div> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-2  gap-9">
      <div className="py-7"> */}
          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="Name"
                name="Name"
                type="text"
                placeholder="Enter your name"
                // autoComplete="name"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label for="Profileimage" className='text-gray-700' htmlFor="file-input">
            Upload Image
            </label>
            <div className="mt-1">
              <input
                id="Profileimage"
                name="Profileimage"
                type="file"
                placeholder="Profile image"
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Profileimage}
                onChange={(e) => setProfileimage(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="Phone"
                name="Phone"
                type="number"
                placeholder="Phone number"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="Password"
                name="Password"
                type="Password"
                placeholder="Password"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="VerifyPassword"
                name="VerifyPassword"
                type="Password"
                placeholder="Verify Password"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={VerifyPassword}
                onChange={(e) => setVerifyPassword(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="Address"
                name="Address"
                type="text"
                placeholder="Address"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="Email"
                name="Email"
                type="email"
                placeholder="a@.example"
                autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
      {/* </div> */}

      {/* <div className="py-7"> */}
          <div>
            {/* <label htmlFor="email" className="block text-xl font-medium text-gray-700">
              Email
            </label> */}
            <div className="mt-1">
              <input
                id="NationalID"
                name="NationalID"
                type="number"
                placeholder="National ID"
                // autoComplete="email"
                required
                className="appearance-none  text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={NationalID}
                onChange={(e) => setNationalID(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label for="uploadNationalID" className='text-gray-700' htmlFor="file-input">
            Upload National ID
            </label>
            <div className="mt-1">
              <input
                id="National"
                name="National"
                type="file"
                placeholder="National"
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={National}
                onChange={(e) => setNational(e.target.value)}
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
            <label for="uploadLicense" className='text-gray-700' htmlFor="file-input">
            Upload License
            </label>
            <div className="mt-1">
              <input
                id="Upload License"
                name="Upload License"
                type="file"
                placeholder="Upload License"
                // required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={UploadLicense}
                onChange={(e) => setUploadLicense(e.target.value)}
              />
            </div>
          </div>

          <div>
            {/* <label htmlFor="verifyPassword" className="block text-xl font-medium text-gray-700">
              Verify Password
            </label> */}
            <div className="mt-1">
              {/* <input
                id="Type of specializtion"
                name="Type of specializtion"
                type="text"
                placeholder="Type of specializtion"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Typeofspecializtion}
                onChange={(e) => setTypeofspecializtion(e.target.value)}
              /> */}

              <select id="medical-specialty" placeholder="Medical Specialty"  required className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                <option value="Anatomical Pathology">Anatomical Pathology</option>
                <option value="Anesthesiology">Anesthesiology</option>
                <option value="Cardiovascular/Thoracic Surgery">Cardiovascular/Thoracic Surgery</option>
                <option value="Clinical Immunology/Allergy">Clinical Immunology/Allergy</option>
                <option value="Critical Care Medicine">Critical Care Medicine</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>
          </div>

          <div>
            {/* <label htmlFor="verifyPassword" className="block text-xl font-medium text-gray-700">
              Verify Password
            </label> */}
            <div className="mt-1">
              {/* <input
                id="Governorate"
                name="Governorate"
                type="text"
                placeholder="Governorate"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Governorate}
                onChange={(e) => setGovernorate(e.target.value)}
              /> */}
              <select id="address-governorate" placeholder="Governorate" className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <option value="Cairo">Cairo</option>
              <option value="Giza">Giza</option>
              <option value="Alexandria">Alexandria</option>
              <option value="Qalyubia">Qalyubia</option>
              <option value="Sharqia">Sharqia</option>
              <option value="Dakahlia">Dakahlia</option>
              <option value ="Gharbia">Gharbia</option>
              <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
              <option value="Monufia">Monufia</option>
              <option value="Red Sea">Red Sea</option>
              <option value="New Valley">New Valley</option>
              <option value="Sohag">Sohag</option>
              <option value="Qena">Qena</option>
              <option value="Luxor">Luxor</option>
              <option value="Aswan">Aswan</option>
              <option value="Beni Suef">Beni Suef</option>
              <option value="Faiyum">Faiyum</option>
              <option value="Minya">Minya</option>
              <option value="Asyut">Asyut</option>
              <option value="Wadi">Wadi</option>
              <option value="South Sinai">South Sinai</option>
              <option value="North Sinai">North Sinai</option>
              <option value="Damietta">Damietta</option>
              <option value="Port Said">Port Said</option>
              <option value="Ismailia">Ismailia</option>
              <option value="Suez">Suez</option>
              <option value="Matruh">Matruh</option>
              <option value="New Alexandria">New Alexandria</option>
              <option value="New Capital">New Capital</option>
              </select>
            </div>
          </div>
      {/* </div>    
      </div> */}
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