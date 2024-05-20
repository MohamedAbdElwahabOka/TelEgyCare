'use client'

import TestResults from '../_components/TestResults';
import medicalrecordsAPI from '../../_utils/medicalrecordsAPI'
import React, { useEffect, useState } from 'react'

 function page({params}) {

  console.log(params?.doctorRegNum)
  // const [doctorByRegNum, setDoctorByRegNum] = useState([]);
  const [PatientfromLabByDocReg_num, setPatient] = useState([]);

  useEffect(() => {
    getPatient();
  },[params?.doctorRegNum])

  const getPatient = () => {
    medicalrecordsAPI.getMedicalRecordsByDoctorReg_Num(params?.doctorRegNum).then(res => {
      console.log(res.data.data);
      setPatient(res.data.data);

    })
  }

  console.log(PatientfromLabByDocReg_num)

  // console.log(params?.doctorRegNum)

  // useEffect(() => {
  //   getDoctorByRegNum_();
  // }, [params?.doctorRegNum])

  // const getDoctorByRegNum_ = () => {
  //   DoctorApis.getDoctorByRegNum(params?.doctorRegNum).then(res => {
  //     console.log(res.data.data);
  //     setDoctorByRegNum(res.data.data);

  //   })
  // }

  return (
    <>
    <TestResults patient={PatientfromLabByDocReg_num} />
    </>
  ) 
}export default page