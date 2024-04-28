import React from 'react';
import Image from 'next/image';
import Doctor2 from './img/Doctor2.png';
import Doctor1 from './img/Doctor1.png';
import Doctor3 from './img/Doctor3.png';
import Star from './img/star.png';
import logo from './img/logo.png';
import logo2 from './img/LOGO2.png';
import Link from 'next/link';

// const consultants = [
//   {
//     name: "Dr. Khaled Hossam",
//     specialty: "Cardiology Specialist",
//     rating: 5,
//     image: Doctor2,
//     id:0
//   },
//   {
//     name: "Dr. Eyad Elmogy",
//     specialty: "Dermatology Specialist",
//     rating: 4,
//     image: Doctor1,
//     id:1
//   },
//   {
//     name: "Dr. Ehab Khaled",
//     specialty: "Gastroenterology Specialist",
//     rating: 2,
//     image: Doctor3,
//     id:2
//   },
//   {
//     name: "Dr. Eyad Mohamed",
//     specialty: "Dermatology Specialist",
//     rating: 4,
//     image: Doctor2,
//     id:3
//   },
// ];

function FindConsultant({data,consultant}) {
  return (
    <div>
     {data.map((item, index) => (
      <header key={index} className="bg-blue-100 text-blue-500 py-4">
          <div class="container mx-auto flex justify-between items-center mb-9">
            <div>
              <Image src={logo} width={60} height={60} class="text-blue-500" />
            </div>
            <nav>
              <ul class="flex space-x-6 md:space-x-8 justify-center">
                <li>
                  <h4 class="nav-link py-3"> Hello ,Dr.{item?.attributes?.Name}</h4>
                </li>
                <li>
                  <Image src={logo2} width={75} height={75} class="text-blue-500 nav-link" />
                </li>
              </ul>
            </nav>
          </div>
          <div class="search-container flex items-center px-6 py-10 rounded mb-6 mx-auto justify-center">  
            <div class="search-wrapper flex ml-11">  
              <input  type="text"
                placeholder="Search Consultants"
                class="appearance-none flex-grow block px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-auto ml-2">Search</button>
            </div>
          </div> 
      </header>))}

      <div className="flex flex-col min-h-screen bg-white items-center py-9">
        <h2 className="text-xl font-bold text-gray-500 mb-4 px-4">Consultants</h2>

        <section className="consultant-list grid md:grid-cols-1 gap-7 px-8 w-full">
          {consultant.map((item, id) => (
            <div
              key={id}
              className="consultant bg-gray-100 p-4 rounded shadow-md flex flex-col w-full"
            >
              <div className="consultant-info flex items-center mb-4">
                <Image src={item?.attributes?.pic?.data?.attributes?.formats?.small?.url} width={50} height={50} alt="Consultant Icon" />
                <div className="details ml-4">
                  <h3 className="text-black">{item?.attributes?.Name}</h3>
                  <p className="text-sm text-gray-500">{item?.attributes?.Type_of_Spec}</p>
                  <div className="rating flex items-center">
                    {/* {Array(item?.attributes?.consultant?.data?.attributes?.rating)
                      .fill(1)
                      .map(() => (
                        <Image src={Star} width={20} height={20} alt="Star Icon" key="star" />
                      ))} */}
                  </div>
                </div>
              </div>

              <Link href='ConsultantChats' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</Link>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default FindConsultant;


