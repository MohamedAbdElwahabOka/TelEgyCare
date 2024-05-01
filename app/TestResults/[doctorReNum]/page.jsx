'use client'

import TestResults from '../../_components/TestResults';
import TestResultsApis from '../../_utils/TestResultsApis';
import DoctorApis from "../../_utils/DoctorApis";
import React, { useEffect, useState } from 'react'

 function page({params}) {
  // {params}
  const [doctorByRegNum, setDoctorByRegNum] = useState([]);
  const [patient, setPatient] = useState([]);

  useEffect(() => {
    getPatient_();
  }, [])

  const getPatient_ = () => {
    TestResultsApis.getPatient().then(res => {
      console.log(res.data.data);
      setPatient(res.data.data);

    })
  }

  console.log(params)

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
  // data={doctorByReNum}
  // patient={patient}
  return (
    <><TestResults data={doctorByRegNum} patient={patient}/>
    </>
  ) 
}export default page