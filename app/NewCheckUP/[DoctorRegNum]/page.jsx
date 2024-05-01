'use client'

import NewCheckup from '../../_components/NewCheckup'
import PatientApis from '../../_utils/PatientApis';
import React, { useEffect, useState } from 'react'

function Checkup({params}) {

  const [doctorByID, setDoctorByID] = useState([]);
  // const [Patients, setPatient] = useState([]);

  // useEffect(() => {
  //   getPatient_();
  // }, [])

  // const getPatient_ = () => {
  //   PatientApis.getPatient().then(res => {
  //     console.log(res.data.data);
  //     setPatient(res.data.data);

  //   })
  // }

  useEffect(() => {
    getDoctorByID_();
  }, [params?.doctorReNum])
  // params?.doctorRegNum
  const getDoctorByID_ = () => {
    PatientApis.getMedicalRecordsByDoctorId(params?.doctorID).then(res => {
      console.log(res.data.data);
      setDoctorByID(res.data.data);

    })
  }
  return (
    <><NewCheckup data={doctorByID} /></>
  )
}
// patient={Patients}
export default Checkup