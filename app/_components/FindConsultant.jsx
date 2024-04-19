import React from 'react';
import Image from 'next/image';
import Search from './img/Search.png';
import Doctor2 from './img/Doctor2.png';
import Doctor1 from './img/Doctor1.png';
import Doctor3 from './img/Doctor3.png';
import Star from './img/star.png';
import logo from './img/logo.png';

function FindConsultant() {
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
            <h4 className="nav-link">Hello, Dr.Abdelrahman</h4>
            </li>
            <li>
            <Image src={logo} width={40} height={40} className="text-blue-500 nav-link" />
            </li>
            </ul>
          </nav>
        </div>
        <div>
          <div className="mt-1 search-box flex items-center bg-white px-4 py-4 rounded shadow-md mb-6">
          <Image src={Search} width={20} height={20} alt="Search Icon" className="mr-2" />
                <input
                  type="text"
                  placeholder="Search Consultants"
                  className="appearance-none flex-grow block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
       </div>
      </header>
    <div className="flex flex-col min-h-screen bg-gray-200 items-center">  
      <h2 className="text-xl font-bold mb-4 px-4">Consultants</h2> 
      {/* <div className="search-box flex items-center bg-white px-4 py-4 rounded shadow-md mb-6 w-full"> 
        <Image src={Search} width={20} height={20} alt="Search Icon" className="mr-2" />
        <input type="text" className="flex-grow border  rounded-md shadow-sm placeholder-gray-400" placeholder="Search Consultants" />
      </div> */}
      {/* <div>
          <div className="mt-1 search-box flex items-center bg-white px-4 py-4 rounded shadow-md mb-6 w-full">
          <Image src={Search} width={20} height={20} alt="Search Icon" className="mr-2" />
                <input
                  type="text"
                  placeholder="Search Consultants"
                  className="appearance-none flex-grow block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
          </div>
       </div> */}
      <section className="consultant-list grid md:grid-cols-1 gap-4 px-8 w-full">
        <div className="consultant bg-white p-4 rounded shadow-md flex flex-col w-full">
          <div className="consultant-info flex items-center mb-4">
            <Image src={Doctor2} width={50} height={50} alt="Consultant Icon" />
            <div className="details ml-4">
              <h3>Dr. Khaled Hossam</h3>
              <p className="text-sm text-gray-500">Cardiology Specialist</p>
              <div className="rating flex items-center">
              <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
        </div>

        <div className="consultant bg-white p-4 rounded shadow-md flex flex-col">
          <div className="consultant-info flex items-center mb-2">
            <Image src={Doctor1} width={50} height={50} alt="Consultant Icon" />
            <div className="details ml-4">
              <h3>Dr. Eyad Elmogy</h3>
              <p className="text-sm text-gray-500">Dermatology Specialist</p>
              <div className="rating flex items-center">
              <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
        </div>
        <div className="consultant bg-white p-4 rounded shadow-md flex flex-col ">
          <div className="consultant-info flex items-center mb-2">
            <Image src={Doctor3} width={50} height={50} alt="Consultant Icon" />
            <div className="details ml-4">
              <h3>Dr. Ehab Khaled</h3>
              <p className="text-sm text-gray-500">Gastroenterology Specialist</p>
              <div className="rating flex items-center">
              <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
                      <Image src={Star} width={20} height={20} alt="Star Icon" />
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
        </div>
      </section>
    </div>
    </div>
  );
}

export default FindConsultant;

