'use client'

import NewCheckup from '../_components/NewCheckup'
import PatientApis from '../../_utils/PatientApis';
import React, { useEffect, useState } from 'react'
import withAuth from "../../_utils/withAuth"

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
    
    <NewCheckup PatientId={params?.PatientId}/>
    {console.log(params?.PatientId)}
    
    </>
  )
}
export default Checkup
// patient={Patients}
// export default withAuth(Checkup)