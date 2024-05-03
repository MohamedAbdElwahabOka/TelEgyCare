
"use client"
// "use server"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from './img/logo.png';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs';
// import sendMail from './send-email'

const Signin = ({data}) => {


  // const send = async () => {
  //   "use server";
  //   await sendMail({
  //     to: "sakuradev23@gmail.com",
  //     name: "Vahid",
  //     subject: "Test Mail",
  //     body: compileWelcomeTemplate("Vahid", "youtube.com/@sakuradev"),
  //   });
  // };
  
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');
  const [ErrorMessage, setErrorMessage] = useState('');

  const router = useRouter();
  console.log(data)
  const handleSubmit = (e) => {
   
    e.preventDefault();
    const user = data.find(
      (item) =>
        item?.attributes?.reg_Num == registrationNumber && bcrypt.compare(password, item?.attributes?.Password)
        
    );
    if (!user) {
      setErrorMessage('Invalid registration number or password!');
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid registration number or password!"
      });
    } else {
      router.push(`/Homepage/${user?.attributes?.reg_Num}`);
      Swal.fire({
        title: "Logged in Successfully",
        text: "Hello Doctor ",
        icon: "success"
      });
    }
  };

  return (
    <div className="bg-white h-screen flex justify-center items-center border border-gray-300">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
          <div className="flex items-center justify-center">
            <Image src={logo} alt="Logo" width={150} height={75} />
          </div>
          <div className="text-center">
            <p className="text-xl font-medium text-gray-700 mt-4">
              Telegy Care
            </p>
          </div>
          <div>
            <label className="block text-xl font-medium text-gray-700">
            registration Number
            </label>
            <div className="mt-1">
              <input
                id="registration Number"
                name="registration Number"
                // autoComplete="email"
                required
                className="appearance-none text-black block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-xl font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none text-black block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="text-red-500">{ErrorMessage}</div>
          <div>
            <button
            onClick={(e)=> handleSubmit(e)}
             href="Homepage"
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
          </div>
          <div>
          <p className="flex justify-center px-5 text-black">Don't have an account? <Link href="SignUp" className='text-blue-500'>Signup</Link></p>
          </div>
          
        </form>
      </div>

      {/* <button>test</button> */}
           
             
    </div>
  );
};

export default Signin;