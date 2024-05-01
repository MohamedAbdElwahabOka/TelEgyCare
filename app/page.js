
'use client'
import Signin from "./_components/SignIN";
import React, { useEffect, useState } from 'react'
import DoctorApis from "./_utils/DoctorApis";
import Image from "next/image";
import ProductApis from './_utils/ProductApis'
import Home_page from './_components/Home_page';

export default function Home() {

  const [Doctors, setDoctor] = useState([]);
  useEffect(() => {
    getDoctor_();
  }, [])

  const getDoctor_ = () => {
    DoctorApis.getDoctor().then(res => {
      setDoctor(res.data.data);

    })
  }


  return (
   <><Signin data={Doctors}/></>  
  );
}
