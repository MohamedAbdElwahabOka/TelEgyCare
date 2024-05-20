import React from 'react';
import Image from 'next/image';
import logo from '../../_components/img/logo.png';
import logo2 from '../../_components/img/LOGO2.png';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Loading from '../../Loading';

function FindConsultant({ data, consultant }) {

  const [searchConsultant, setSearchConsultant] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (consultant) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [consultant]);

  const filteredConsultants = consultant.filter(item => {
    return item?.attributes?.Name.toLowerCase().includes(searchConsultant.toLowerCase()) ||
      item?.attributes?.Type_of_Spec.toLowerCase().includes(searchConsultant.toLowerCase())
  });

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>

      <header className="bg-blue-100 text-blue-500 py-4">
        <div class="container mx-auto flex justify-between items-center mb-9">
          <div>
            <Image src={logo} width={60} height={60} class="text-blue-500" />
          </div>
          <nav>
            {data.map((item, index) => (
              <ul key={index} class="flex space-x-6 md:space-x-8 justify-center">
                <li>
                  <h4 key={index} className="nav-link" style={{ marginTop: '9px' }} > Hello ,Dr.{item?.attributes?.Name}</h4>
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
            ))}
          </nav>
        </div>
        <div class="search-container flex items-center px-6 py-10 rounded mb-6 mx-auto justify-center">
          <div class="search-wrapper flex ml-11">
            <input
              type="text"
              value={searchConsultant}
              onChange={e => setSearchConsultant(e.target.value)}
              placeholder="Search Consultants..."
              class="appearance-none flex-grow block px-4 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded mt-auto ml-2">Search</button> */}
          </div>
        </div>
      </header>

      <div className="flex flex-col min-h-screen bg-white items-center py-9">
        <h2 className="text-xl font-bold text-gray-500 mb-4 px-4">Consultants</h2>

        <section className="consultant-list grid md:grid-cols-1 gap-7 px-8 w-full">

          {
            filteredConsultants.length > 0 ? (
              filteredConsultants.map((item, id) => (
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
                      </div>
                    </div>
                  </div>
                  <Link href='/ConsultantChats' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Talk</Link>
                </div>
              ))

            ) : (
              <div className="flex justify-center items-center w-full h-96">
                <h1 className="text-2xl text-gray-500">No Consultants Found</h1>
              </div>
            )

          }
        </section>
      </div>
    </div>
  );
}

export default FindConsultant;


