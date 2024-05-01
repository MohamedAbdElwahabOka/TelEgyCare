'use client'

import Table from '../../_components/TableCheckUP'
import PatientApis from '../../_utils/PatientApis';
import React, { useEffect, useState } from 'react'


function PatientId({params}) {

  // console.log(params?.DoctorRegNum)

  const [patientsByDocName, setPatientsByDocName] = useState([]);

  useEffect(() => {
    getPatientsByDocName_();
  }, [params?.doctorRegNum])

  const getPatientsByDocName_ = () => {
    PatientApis.getMedicalRecordsByDocName(params?.doctorRegNum).then(res => {
      console.log(res.data.data);
      setPatientsByDocName(res.data.data);
    })
  }
  console.log(params?.DoctorRegNum)
  return (

    <><Table data={patientsByDocName}  /></>
  )
}
// Patient={patientsByDocName}
export default PatientId
