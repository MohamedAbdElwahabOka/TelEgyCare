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
      
     


    </div>

    
    </>
  )
}

export default PatientId
