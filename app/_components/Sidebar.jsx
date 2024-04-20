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
          link: "PatientID",
          text: "Patient ID",
          isActive: true,
        },
        
        {
          id: 3,
          icon:<svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21.2308 12.1817H21.0656C20.3874 8.88746 17.6805 6.41353 14.4487 6.41353H12.3846V5.59317C13.4108 5.1958 14.1538 4.1383 14.1538 2.88852C14.1538 1.29905 12.9626 0.00440936 11.5 0.00440936C10.0374 0.00440936 8.84615 1.29905 8.84615 2.88852C8.84615 4.1383 9.58923 5.1958 10.6154 5.59317V6.41353H8.55128C5.31949 6.41353 2.61256 8.88746 1.93436 12.1817H1.76923C0.796154 12.1817 0 13.047 0 14.1045V16.0272C0 17.0847 0.796154 17.95 1.76923 17.95H2.09359C2.78949 20.3085 4.54692 22.1415 6.75256 22.8081C6.58744 23.1862 6.48718 23.5964 6.48718 24.0386C6.48718 24.5706 6.88231 25 7.3718 25H15.6282C16.1177 25 16.5128 24.5706 16.5128 24.0386C16.5128 23.5964 16.4126 23.1798 16.2474 22.8081C18.4531 22.1479 20.2105 20.3085 20.9064 17.95H21.2308C22.2038 17.95 23 17.0847 23 16.0272V14.1045C23 13.047 22.2038 12.1817 21.2308 12.1817ZM11.5 1.92715C11.9895 1.92715 12.3846 2.35656 12.3846 2.88852C12.3846 3.42047 11.9895 3.84988 11.5 3.84988C11.0105 3.84988 10.6154 3.42047 10.6154 2.88852C10.6154 2.35656 11.0105 1.92715 11.5 1.92715ZM14.4487 21.1545H8.55128C5.78538 21.1545 3.53846 18.7126 3.53846 15.7068V13.784C3.53846 10.7781 5.78538 8.33627 8.55128 8.33627H14.4487C17.2146 8.33627 19.4615 10.7781 19.4615 13.784V15.7068C19.4615 18.7126 17.2146 21.1545 14.4487 21.1545Z" fill="#F5F5F5"/>
          <path d="M8.25641 10.8999C7.28333 10.8999 6.48718 11.7652 6.48718 12.8227V14.7454C6.48718 15.8029 7.28333 16.6681 8.25641 16.6681C9.22949 16.6681 10.0256 15.8029 10.0256 14.7454V12.8227C10.0256 11.7652 9.22949 10.8999 8.25641 10.8999Z" fill="#F5F5F5"/>
          <path d="M14.7436 10.8999C13.7705 10.8999 12.9744 11.7652 12.9744 12.8227V14.7454C12.9744 15.8029 13.7705 16.6681 14.7436 16.6681C15.7167 16.6681 16.5128 15.8029 16.5128 14.7454V12.8227C16.5128 11.7652 15.7167 10.8999 14.7436 10.8999Z" fill="#F5F5F5"/>
          <path d="M5.32538 1.87587L7.09462 2.51679C7.18897 2.54883 7.28333 2.56806 7.3718 2.56806C7.74333 2.56806 8.08539 2.31169 8.20923 1.90792C8.36256 1.4016 8.11487 0.856823 7.64897 0.690186L5.87974 0.0492735C5.41974 -0.117364 4.91846 0.151819 4.75923 0.65814C4.6 1.16446 4.85359 1.70924 5.31949 1.87587H5.32538Z" fill="#F5F5F5"/>
          <path d="M5.60256 5.77262C5.69692 5.77262 5.79128 5.7598 5.87974 5.72135L7.64897 5.08044C8.11487 4.9138 8.36256 4.36902 8.20923 3.8627C8.0559 3.35638 7.55462 3.0872 7.08872 3.25384L5.31949 3.89475C4.85359 4.06139 4.6059 4.60616 4.75923 5.11248C4.88308 5.51626 5.22513 5.77262 5.59667 5.77262H5.60256Z" fill="#F5F5F5"/>
          <path d="M15.6282 2.56806C15.7226 2.56806 15.8169 2.55524 15.9054 2.51679L17.6746 1.87587C18.1405 1.70924 18.3882 1.16446 18.2349 0.65814C18.0815 0.151819 17.5803 -0.117364 17.1144 0.0492735L15.3451 0.690186C14.8792 0.856823 14.6315 1.4016 14.7849 1.90792C14.9087 2.31169 15.2508 2.56806 15.6223 2.56806H15.6282Z" fill="#F5F5F5"/>
          <path d="M15.351 5.08044L17.1203 5.72135C17.2146 5.75339 17.309 5.77262 17.3974 5.77262C17.769 5.77262 18.111 5.51626 18.2349 5.11248C18.3882 4.60616 18.1405 4.06139 17.6746 3.89475L15.9054 3.25384C15.4454 3.0872 14.9382 3.35638 14.7849 3.8627C14.6315 4.36902 14.8792 4.9138 15.3451 5.08044H15.351Z" fill="#F5F5F5"/>
          </svg> ,
          link: "AImodel",
          text: "AI Model",
          isActive: false,
        },
        {
          id: 4,
          icon:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M18.2984 5.683C17.9184 5.751 17.3824 5.927 16.5224 6.213L10.0304 8.378C9.20241 8.654 8.61841 8.849 8.19841 9.013C8.04426 9.0711 7.89337 9.13753 7.74641 9.212C7.66041 9.257 7.63041 9.282 7.62841 9.282C7.53209 9.37524 7.45551 9.48689 7.4032 9.61033C7.35089 9.73376 7.32394 9.86644 7.32394 10.0005C7.32394 10.1346 7.35089 10.2672 7.4032 10.3907C7.45551 10.5141 7.53209 10.6258 7.62841 10.719C7.6654 10.7464 7.70491 10.7701 7.74641 10.79C7.84641 10.843 7.99141 10.908 8.19841 10.99C8.61841 11.153 9.20241 11.348 10.0304 11.624L10.0864 11.643C10.3594 11.733 10.5994 11.813 10.8204 11.93C11.3532 12.2117 11.7888 12.6472 12.0704 13.18C12.1874 13.4 12.2674 13.64 12.3574 13.914L12.3774 13.97C12.6524 14.798 12.8474 15.382 13.0114 15.802C13.069 15.9564 13.1355 16.1073 13.2104 16.254C13.2554 16.34 13.2804 16.37 13.2804 16.372C13.3737 16.4683 13.4853 16.5449 13.6087 16.5972C13.7322 16.6495 13.8649 16.6765 13.9989 16.6765C14.133 16.6765 14.2657 16.6495 14.3891 16.5972C14.5125 16.5449 14.6242 16.4683 14.7174 16.372C14.7448 16.335 14.7686 16.2955 14.7884 16.254C14.8414 16.154 14.9064 16.009 14.9884 15.801C15.1514 15.381 15.3464 14.798 15.6224 13.971L17.7854 7.48C18.0724 6.62 18.2484 6.082 18.3154 5.703L18.3204 5.68C18.3127 5.68131 18.3051 5.68264 18.2974 5.684M17.9474 3.715C18.4974 3.617 19.2524 3.588 19.8324 4.168C20.4124 4.748 20.3824 5.502 20.2854 6.053C20.1894 6.595 19.9624 7.274 19.7074 8.04L19.6834 8.112L17.5194 14.602L17.5094 14.632C17.2454 15.424 17.0354 16.056 16.8504 16.528C16.6774 16.973 16.4724 17.433 16.1624 17.755C15.8825 18.0463 15.5466 18.278 15.1749 18.4363C14.8032 18.5946 14.4034 18.6762 13.9994 18.6762C13.5954 18.6762 13.1956 18.5946 12.8239 18.4363C12.4522 18.278 12.1164 18.0463 11.8364 17.755C11.5264 17.433 11.3214 16.973 11.1484 16.528C10.9634 16.056 10.7534 15.424 10.4884 14.631L10.4784 14.603C10.3584 14.242 10.3314 14.17 10.3024 14.115C10.2085 13.9372 10.0632 13.7919 9.88541 13.698C9.83041 13.668 9.75841 13.642 9.39741 13.521L9.36941 13.511C8.57641 13.247 7.94441 13.037 7.47141 12.852C7.02741 12.679 6.56741 12.474 6.24541 12.164C5.95414 11.8841 5.7224 11.5482 5.56411 11.1765C5.40581 10.8048 5.32422 10.405 5.32422 10.001C5.32422 9.59701 5.40581 9.19719 5.56411 8.8255C5.7224 8.45382 5.95414 8.11794 6.24541 7.838C6.56741 7.528 7.02741 7.323 7.47141 7.15C8.09905 6.9158 8.73188 6.69574 9.36941 6.49L9.39741 6.48L15.8884 4.317L15.9604 4.293C16.7264 4.038 17.4054 3.811 17.9474 3.715Z" fill="white"/>
          </svg>,
          link: "SendResult",
          text: "Send Result",
          isActive: false,
        },
        {
          id: 5,
          icon:<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M29.7 19.3L26.7 16.3C26.3 15.9 25.7 15.9 25.3 16.3L16 25.6V30H20.4L29.7 20.7C30.1 20.3 30.1 19.7 29.7 19.3ZM19.6 28H18V26.4L23 21.4L24.6 23L19.6 28ZM26 21.6L24.4 20L26 18.4L27.6 20L26 21.6ZM10 23H12V25H10V23ZM14 18H18V20H14V18ZM10 18H12V20H10V18ZM14 13H22V15H14V13ZM10 13H12V15H10V13Z" fill="white"/>
          <path d="M7 28V7H10V10H22V7H25V13H27V7C27 5.9 26.1 5 25 5H22V4C22 2.9 21.1 2 20 2H12C10.9 2 10 2.9 10 4V5H7C5.9 5 5 5.9 5 7V28C5 29.1 5.9 30 7 30H12V28H7ZM12 4H20V8H12V4Z" fill="white"/>
          </svg>
          ,
          link: "AiResult",
          text: "AI Result",
          isActive: false,
        },
        {
          id: 6,
          icon: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.5 5C5.30653 5 4.16193 5.47411 3.31802 6.31802C2.47411 7.16193 2 8.30653 2 9.5V11H30V9.5C30 8.30653 29.5259 7.16193 28.682 6.31802C27.8381 5.47411 26.6935 5 25.5 5H6.5ZM2 22.5V13H30V22.5C30 23.6935 29.5259 24.8381 28.682 25.682C27.8381 26.5259 26.6935 27 25.5 27H6.5C5.30653 27 4.16193 26.5259 3.31802 25.682C2.47411 24.8381 2 23.6935 2 22.5ZM21 19C20.7348 19 20.4804 19.1054 20.2929 19.2929C20.1054 19.4804 20 19.7348 20 20C20 20.2652 20.1054 20.5196 20.2929 20.7071C20.4804 20.8946 20.7348 21 21 21H24C24.2652 21 24.5196 20.8946 24.7071 20.7071C24.8946 20.5196 25 20.2652 25 20C25 19.7348 24.8946 19.4804 24.7071 19.2929C24.5196 19.1054 24.2652 19 24 19H21Z" fill="white"/>
          </svg>
          ,
          link: "checkout",
          // https://payment-sable-delta.vercel.app/ 
          text: "Payment",
          isActive: false,
        },
        
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
