"use client"

import Link from 'next/link';
import logo from '/public/logo.svg'
import Image from "next/image";
import homephoto from '/public/home_page_photo.png'
import doctor from '/public/doctor.png'
import chat from '/public/chat.png'
import newcheckup from '/public/new checkup.png'
import list from '/public/list-icon-png-19.jpg'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import logout from "/public/Left icon.png"
import Loading from '../../Loading';
import Cookies from 'js-cookie';


function HomePage({ data }) {


  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (data) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [data]);

  // const logOut = () => {
  //   Cookies.remove('user');
  //   router.push('/');
  // }
// console.log()
//   useEffect(() => {
//     const userCookie = Cookies.get(`user_${data[0]?.attributes?.reg_Num}`);
//     console.log(userCookie)
//     // if (userCookie) {
//     //   // Cookies.remove(`user_${data[0]?.attributes?.reg_Num}`);
//     //   router.push('/');
//     // }
//   }, []);

  const logOut = () => {
    // const user = (Cookies.get(`user_${data[0]?.attributes?.reg_Num}`));
    // if (user) {
      // Cookies.remove(`user_${user?.attributes?.reg_Num}`);
      router.push('/');
    // }
  }


  console.log(data)
  const router = useRouter();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const user = data.find(
  //     (item) =>
  //       item?.attributes?.reg_Num == registrationNumber
  //   );
  //   if (user) {
  //     router.push(`/FindAConsultant/${user?.attributes?.reg_Num}`)
  //   } 
  // };
  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>

      <header className="bg-gray-100 text-blue-500 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Image src={logo} width={60} height={60} className="text-blue-500" />
          </div>

          <nav>
            <ul className="flex space-x-6 md:space-x-8">
              <li>
                {data.map((item, index) => (
                  <h4 key={index} className="nav-link" style={{ marginTop: '9px' }} > Hello ,Dr.{item?.attributes?.Name}</h4>
                ))}

              </li>
              <li>
                {data.map((item, index) => (
                  <Image
                    key={index}
                    src={item?.attributes?.doctor_Pic?.data?.attributes?.formats?.thumbnail?.url}
                    width={40}
                    height={40}
                    className="text-blue-500 nav-link py=5"
                    style={{ borderRadius: '50%' }}
                    alt="Doctor's profile picture"
                  />
                ))}
              </li>
            </ul>
          </nav>
        </div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold p-20">
          The Best Quality <br />
          Service You Can Get
        </h3>
      </header>

      <section className="bg-white py-12">
        <div className="container mx-auto flex justify-between items-center">

          <h2 className="text-2xl md:text-2xl lg:text-6xl font-bold mt-2 text-black p-20">Find the right<br /> Doctor Right at your<br /> fingertips</h2>
          <Image src={homephoto} width={500} height={500} className="text-blue-500" />
        </div>
        <p className="text-gray-700 mt-2 leading-relaxed ml-10">
          We are here to listen and heal your health problems. It's not just about the money. <br />We're dedicated to more than just treating patients.
        </p>

      </section>

      <main className="py-12 px-8 bg-gray-200">
        <div className="max-w-4xl mx-auto">

          {data.map((item, index) => (
            <div key={index} className="grid grid-cols-3 sm:grid-cols-3 gap-8">
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-blue-400  shadow-lg rounded-xl p-6 hover:bg-gray-50  transition-colors"
                href='/FindAConsultant/[$id]' as={`/FindAConsultant/${item?.attributes?.reg_Num}`}
              >
                <Image
                  src={doctor}
                  alt="New Patient"
                  className="rounded-full"
                  height={120}
                  width={120}
                />
                <h3 className="text-xl font-bold text-gray-800 ">Find A Consultant  </h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-blue-300  shadow-lg rounded-xl p-6 hover:bg-gray-50  transition-colors"
                href='/TestResults/[$id]' as={`/TestResults/${item?.attributes?.reg_Num}`}
              >
                <Image
                  alt="Existing Patient"
                  className="rounded-full"
                  height={120}
                  src={list}
                  width={120}
                />
                <h3 className="text-xl font-bold text-gray-800 ">Test Results</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-blue-200 shadow-lg rounded-xl p-6 hover:bg-gray-50  transition-colors"
                href="/ConsultantChats"
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={120}
                  src={chat}
                  width={120}
                />
                <h3 className="text-xl font-bold text-gray-800 ">Chats</h3>
              </Link>
              <Link
                className="flex flex-col items-center justify-center space-y-4 bg-blue-300  shadow-lg rounded-xl p-6 hover:bg-gray-50  transition-colors"
                href='/TableCheckUP/[$id]' as={`/TableCheckUP/${item?.attributes?.reg_Num}`}
              >
                <Image
                  alt="Hospital"
                  className="rounded-full"
                  height={120}
                  src={newcheckup}
                  width={120}
                />
                <h3 className="text-xl font-bold text-gray-800 ">New Checkup</h3>
              </Link>

              <button
                className="flex flex-col items-center justify-center space-y-4 bg-blue-400 shadow-lg rounded-xl p-6 hover:bg-red-500 transition-colors"
                onClick={() => logOut()}
              >
                <Image
                  alt="Hospital"
                  height={90}
                  src={logout}
                  width={90}
                />
                <h3 className="text-xl font-bold text-gray-800">Log out</h3>
              </button>
            </div>
          ))}

        </div>
      </main>

    </div>
  );
}

export default HomePage;
