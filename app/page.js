
'use client'
import Signin from "./_components/SignIN";
import React, { useEffect, useState } from 'react'
import DoctorApis from "./_utils/DoctorApis";

export default function Home() {

  const [doctors, setDoctor] = useState([]);

  useEffect(() => {
    getDoctor_();
  }, [])

  const getDoctor_ = () => {
    DoctorApis.getDoctor().then(res => {
      console.log(res.data.data);
      setDoctor(res.data.data);

    })
  }


  return (
    <>< Signin data={doctors} /></>
  );
}
