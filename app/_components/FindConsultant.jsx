// import React from 'react';
// import Image from 'next/image';
// // import Search from './img/Search.png';
// import Doctor2 from './img/Doctor2.png';
// import Doctor1 from './img/Doctor1.png';
// import Doctor3 from './img/Doctor3.png';
// import Star from './img/star.png';
// import logo from './img/logo.png';

    
// function FindConsultant() {
//   return (
// <div>
//   <header class="bg-blue-100 text-blue-500 py-9">
//     <div class="container mx-auto flex justify-between items-center mb-9">
//       <div>
//         <Image src={logo} width={60} height={60} class="text-blue-500" />
//       </div>
//       <nav>
//         <ul class="flex space-x-6 md:space-x-8">
//           <li>
//             <h4 class="nav-link">Hello, Dr. Abdelrahman</h4>
//           </li>
//           <li>
//             <Image src={logo} width={40} height={40} class="text-blue-500 nav-link" />
//           </li>
//         </ul>
//       </nav>
//     </div>
//   <div class="search-container flex items-center bg-white px-6 py-10 rounded shadow-md mb-6 mx-auto ml-20 mr-20">
//    <input
//     type="text"
//     placeholder="Search Consultants"
//     class="appearance-none flex-grow block px-2 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//   />
// </div>
//   </header>

//     <div className="flex flex-col min-h-screen bg-gray-100 items-center">  
//       <h2 className="text-xl font-bold text-black mb-4 px-4">Consultants</h2> 
//       {/* <div className="search-box flex items-center bg-white px-4 py-4 rounded shadow-md mb-6 w-full"> 
//         <Image src={Search} width={20} height={20} alt="Search Icon" className="mr-2" />
//         <input type="text" className="flex-grow border  rounded-md shadow-sm placeholder-gray-400" placeholder="Search Consultants" />
//       </div> */}
//       {/* <div>
//           <div className="mt-1 search-box flex items-center bg-white px-4 py-4 rounded shadow-md mb-6 w-full">
//           <Image src={Search} width={20} height={20} alt="Search Icon" className="mr-2" />
//                 <input
//                   type="text"
//                   placeholder="Search Consultants"
//                   className="appearance-none flex-grow block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
//           </div>
//        </div> */}
//       <section className="consultant-list grid md:grid-cols-1 gap-4 px-8 w-full">
//         <div className="consultant bg-white p-4 rounded shadow-md flex flex-col w-full">
//           <div className="consultant-info flex items-center mb-4">
//             <Image src={Doctor2} width={50} height={50} alt="Consultant Icon" />
//             <div className="details ml-4">
//               <h3>Dr. Khaled Hossam</h3>
//               <p className="text-sm text-gray-500">Cardiology Specialist</p>
//               <div className="rating flex items-center">
//               <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//               </div>
//             </div>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
//         </div>

//         <div className="consultant bg-white p-4 rounded shadow-md flex flex-col">
//           <div className="consultant-info flex items-center mb-2">
//             <Image src={Doctor1} width={50} height={50} alt="Consultant Icon" />
//             <div className="details ml-4">
//               <h3>Dr. Eyad Elmogy</h3>
//               <p className="text-sm text-gray-500">Dermatology Specialist</p>
//               <div className="rating flex items-center">
//               <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//               </div>
//             </div>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
//         </div>
//         <div className="consultant bg-white p-4 rounded shadow-md flex flex-col ">
//           <div className="consultant-info flex items-center mb-2">
//             <Image src={Doctor3} width={50} height={50} alt="Consultant Icon" />
//             <div className="details ml-4">
//               <h3>Dr. Ehab Khaled</h3>
//               <p className="text-sm text-gray-500">Gastroenterology Specialist</p>
//               <div className="rating flex items-center">
//               <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//                       <Image src={Star} width={20} height={20} alt="Star Icon" />
//               </div>
//             </div>
//           </div>
//           <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</button>
//         </div>
//       </section>
//     </div>
// </div>
//   );
// }

// export default FindConsultant;

import React from 'react';
import Image from 'next/image';
import Doctor2 from './img/Doctor2.png';
import Doctor1 from './img/Doctor1.png';
import Doctor3 from './img/Doctor3.png';
import Star from './img/star.png';
import logo from './img/logo.png';
import logo2 from './img/LOGO2.png';
import Link from 'next/link';

const consultants = [
  {
    name: "Dr. Khaled Hossam",
    specialty: "Cardiology Specialist",
    rating: 5,
    image: Doctor2,
    id:0
  },
  {
    name: "Dr. Eyad Elmogy",
    specialty: "Dermatology Specialist",
    rating: 4,
    image: Doctor1,
    id:1
  },
  {
    name: "Dr. Ehab Khaled",
    specialty: "Gastroenterology Specialist",
    rating: 2,
    image: Doctor3,
    id:2
  },
  {
    name: "Dr. Eyad Mohamed",
    specialty: "Dermatology Specialist",
    rating: 4,
    image: Doctor2,
    id:3
  },
];

function FindConsultant() {
  return (
    <div>
      <header className="bg-blue-100 text-blue-500 py-4">
          <div class="container mx-auto flex justify-between items-center mb-9">
            <div>
              <Image src={logo} width={60} height={60} class="text-blue-500" />
            </div>
            <nav>
              <ul class="flex space-x-6 md:space-x-8 justify-center">
                <li>
                  <h4 class="nav-link py-3">Hello, Dr. Abdelrahman</h4>
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
      </header>

      <div className="flex flex-col min-h-screen bg-white items-center py-9">
        <h2 className="text-xl font-bold text-gray-500 mb-4 px-4">Consultants</h2>

        <section className="consultant-list grid md:grid-cols-1 gap-7 px-8 w-full">
          {consultants.map((consultant) => (
            <div
              key={consultant.id}
              className="consultant bg-gray-100 p-4 rounded shadow-md flex flex-col w-full"
            >
              <div className="consultant-info flex items-center mb-4">
                <Image src={consultant.image} width={50} height={50} alt="Consultant Icon" />
                <div className="details ml-4">
                  <h3 className="text-black">{consultant.name}</h3>
                  <p className="text-sm text-gray-500">{consultant.specialty}</p>
                  <div className="rating flex items-center">
                    {Array(consultant.rating)
                      .fill(1)
                      .map(() => (
                        <Image src={Star} width={20} height={20} alt="Star Icon" key="star" />
                      ))}
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


