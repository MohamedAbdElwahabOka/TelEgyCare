'use client'

import NewCheckup from '../_components/NewCheckup'
import PatientApis from '../../_utils/PatientApis';
import React, { useEffect, useState } from 'react'

function Checkup({params}) {

  // const [doctorByID, setDoctorByID] = useState([]);
  // useEffect(() => {
  //   getDoctorByID_();
  // }, [params?.doctorReNum])
  // // params?.doctorRegNum
  // const getDoctorByID_ = () => {
  //   PatientApis.getMedicalRecordsByDoctorId(params?.doctorID).then(res => {
  //     console.log(res.data.data);
  //     setDoctorByID(res.data.data);

  //   })
  // }
  return (
    <>
    
    {/* <NewCheckup data={doctorByID} /> */}
    {params?.DoctorRegNum}
    
    </>
  )
}
// patient={Patients}
export default Checkup