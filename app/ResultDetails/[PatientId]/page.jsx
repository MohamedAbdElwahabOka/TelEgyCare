'use client'
import React, { useEffect, useState} from "react";
import ResultDetails from '../_components/ResultDetails'
import medicalrecordsAPI from "../../_utils/medicalrecordsAPI";

function Result_Details({params}) {
  const [medicalRecordsByPatientId,setMedicalRecordsByPatientId] = useState({});

  useEffect(() => {
    getMedicalRecordsByPatientId_();
  }, [params?.PatientId]);

  const getMedicalRecordsByPatientId_ = () => {
    medicalrecordsAPI.getMedicalRecordsByPatientId(params?.PatientId).then((res) => {
      console.log(params?.PatientId);
      setMedicalRecordsByPatientId(res.data.data);
      console.log(medicalRecordsByPatientId[0]?.attributes);
    });
  };

  return (
    <ResultDetails  medicalrec={medicalRecordsByPatientId}  PatientId={params?.PatientId}/>
  )
}

export default Result_Details
