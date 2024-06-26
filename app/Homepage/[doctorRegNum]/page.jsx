'use client'
import Home_page from '../_components/Home_page'
import DoctorApis from "../../_utils/DoctorApis";
import React, { useEffect, useState } from 'react'
import withAuth from "../../_utils/withAuth"
import Swal from 'sweetalert2'
 function page({params}) {

console.log(params);
  const [doctorByRegNum, setDoctorByRegNum] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getDoctorByRegNum_();
  }, [params?.doctorRegNum])
  // params?.doctorRegNum


  const getDoctorByRegNum_ = () => {

    Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
      // ,showClass: {
      //   popup: 'wal2-noanimation'
      // }
    });
    DoctorApis.getDoctorByRegNum(params?.doctorRegNum).then(res => {
      console.log(res.data.data);
      setDoctorByRegNum(res.data.data);
      setIsLoading(false);
      Swal.close();

    }).catch(err => {
      console.error(err);
      setIsLoading(false);
      Swal.close();
      // Handle error appropriately
    });
  }


  return (
   <>

         <div className="flex-grow bg-gray-100">
        {isLoading ? (<div className="flex items-center justify-center min-h-screen">
          <h1>Loading...</h1></div>) : ( <Home_page data={doctorByRegNum}/>)}
      </div>
  
   </>
  ) 
}export default page;
// }export default withAuth(page);