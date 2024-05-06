'use client'

import Table from '../_components/TableCheckUP'
import PatientApis from '../../_utils/PatientApis';
import React, { useEffect, useState } from 'react'


function PatientId({params}) {

  console.log(params?.DoctorRegNum)
  const [patientDetailsFromAppointmentsByDoctorReg_Num, setPatientDetailsFromAppointmentsByDoctorReg_Num] = useState([]);
  

  useEffect(() => {
    getPatientDetailsFromAppointmentsByDoctorReg_Num_();
  }, [params?.doctorRegNum])

  const getPatientDetailsFromAppointmentsByDoctorReg_Num_ = ()=>{
    PatientApis.getPatientDetailsFromAppointmentsByDoctorReg_Num(params?.DoctorRegNum).then(res => {
      console.log(res.data.data);
      setPatientDetailsFromAppointmentsByDoctorReg_Num(res.data.data);
    })

  }
  console.log(patientDetailsFromAppointmentsByDoctorReg_Num)
  

  return (

    <>
    
    <Table patient={patientDetailsFromAppointmentsByDoctorReg_Num}/>

    <div>
      
      {patientDetailsFromAppointmentsByDoctorReg_Num.map((patient, index) => (
        <div key={index}>
          <h2>{patient?.attributes.patient?.data?.attributes?.Name}</h2>
          <h2>{patient?.attributes.date}</h2>time
          <h2>{patient?.attributes.time}</h2>
          {/* {console.log(patient?.attributes.patient?.data?.attributes?.Name)} */}
          {/* Add more fields as necessary */}
        </div>
      ))}


    </div>

    
    </>
  )
}

export default PatientId
