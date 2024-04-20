'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// import Image from "next/image";

function Sidebar() {
    const navItems = [
        {
          id: 1,
          icon: <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.1246 5.5C13.9408 7.97828 12.0621 10 9.99955 10C7.93705 10 6.05502 7.97875 5.87455 5.5C5.68705 2.92188 7.51517 1 9.99955 1C12.4839 1 14.3121 2.96875 14.1246 5.5Z" stroke="#0070CD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.0001 13C5.92199 13 1.78293 15.25 1.01699 19.4969C0.924645 20.0088 1.21433 20.5 1.75011 20.5H18.2501C18.7864 20.5 19.0761 20.0088 18.9837 19.4969C18.2173 15.25 14.0782 13 10.0001 13Z" stroke="#0070CD" stroke-width="2" stroke-miterlimit="10"/>
          </svg>
          ,

        
      ]
  const [sidebarToggled, setSidebarToggled] = useState(false)
  const [sidebarResized, setSidebarResized] = useState(false)
  const toggleSidebar = () => {
    setSidebarToggled(sidebarToggled => !sidebarToggled)
  }
  const resizeSidebar = () => {
    setSidebarResized(sidebarResized => !sidebarResized)
  }
  return (
    <>
    <aside className={`
        fixed h-[100dvh] overflow-hidden lg:static w-11/12 max-w-[18rem] md:w-72 transition-all rounded-r-2xl bg-white dark:bg-[#0070CD] shadow-lg shadow-gray-200/40 dark:shadow-gray-800/60 flex flex-col justify-between px-4 lg:transition-[width] ease-linear
        ${sidebarToggled ? "" : "-translate-x-full lg:-translate-x-0"}
        ${sidebarResized ? "lg:w-20" : ""}
    `}>
        <div className="min-h-max py-4 border-b border-b-gray-200 dark:border-b-gray-800">

          <span className={`ml-20 text-slate-100 
                    ${sidebarResized ? "lg:invisible" : ""}
                `}>TelEgyCare</span>
        </div>
        <nav className="h-full pt-10">
          <ul className="text-gray-700 dark:text-gray-300 space-y-2">
            {
              navItems.map(navItem => (
                <li key={navItem.id}>
                  <Link href={navItem.link} className={`
                                flex items-center gap-x-4 px-3 py-2.5 rounded-md
                                ${navItem.isActive ? "bg-white dark:bg-white text-[#0070CD] dark:text-[#0070CD]" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"}
                            `}>
                    <span className="min-w-max inline-flex">
                      {navItem.icon}
                    </span>
                    <span className={`
                                    inline-flex ease-linear transition-colors duration-300
                                    ${sidebarResized ? "lg:invisible" : ""}`}>
                      {navItem.text}
                    </span>
                  </Link>
                </li>
              ))
            }
          </ul>
        </nav>





        <div className="min-h-max py-2 hidden lg:flex justify-end bg-transparent">
          <button onClick={() => { resizeSidebar() }} className={`
                outline-none bg-gray-100 dark:bg-[#ffffff] rounded-md text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-800 ease-linear transition-transform  w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center
                ${sidebarResized ? "rotate-180" : ""}
            `}>
            <span className="sr-only">toggle sidebar</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#0070CD" className="w-5 h-5">
              <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </aside>



      <main>
        <div className="flex lg:hidden fixed right-2 top-2 p-4">
          <button onClick={() => { toggleSidebar() }} className="p-3 rounded-full bg-blue-600 dark:bg-blue-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center">
            <span className="sr-only">
              toggle sidebar
            </span>
            <span className={`
                        w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                        ${sidebarToggled ? "rotate-[40deg] translate-y-1.5" : ""}
                    `} />
            <span className={`
                        w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                        ${sidebarToggled ? "opacity-0 scale-x-0" : ""}
                    `} />
            <span className={`
                        w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                        ${sidebarToggled ? "-rotate-[40deg] -translate-y-1.5" : ""}
                    `} />
          </button>
        </div>
      </main>
    </>
  )
}


export default Sidebar


