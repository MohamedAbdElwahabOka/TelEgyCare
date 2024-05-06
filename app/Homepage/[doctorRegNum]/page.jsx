'use client'
import Home_page from '../_components/Home_page'
import DoctorApis from "../../_utils/DoctorApis";
import React, { useEffect, useState } from 'react'
 function page({params}) {

console.log(params);
  const [doctorByRegNum, setDoctorByRegNum] = useState([]);

  useEffect(() => {
    getDoctorByRegNum_();
  }, [params?.doctorRegNum])
  // params?.doctorRegNum
  const getDoctorByRegNum_ = () => {
    DoctorApis.getDoctorByRegNum(params?.doctorRegNum).then(res => {
      console.log(res.data.data);
      setDoctorByRegNum(res.data.data);

    })
  }


  return (
   <>
   <Home_page data={doctorByRegNum}/>
   </>
  ) 
}export default page