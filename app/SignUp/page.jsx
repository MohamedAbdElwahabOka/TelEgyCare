'use client'
import React from 'react'
import SignUp from './_components/SignUp'
import { useState, useEffect } from 'react'
import DoctorApis from "../_utils/DoctorApis";

function UP() {


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
    <><SignUp doctors ={doctors}/></>
  )
}

export default UP