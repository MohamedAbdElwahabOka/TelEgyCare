'use client'

import TestResults from '../_components/TestResults';
import medicalrecordsAPI from '../../_utils/medicalrecordsAPI'
import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'

function page({ params }) {

  console.log(params?.doctorRegNum)

  const [PatientfromLabByDocReg_num, setPatient] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPatient();
  }, [params?.doctorRegNum])

  const getPatient = () => {

    Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    });
    medicalrecordsAPI.getMedicalRecordsByDoctorReg_Num(params?.doctorRegNum)
      .then(res => {
        console.log(res.data.data);
        setPatient(res.data.data);
        setIsLoading(false);
        Swal.close();

      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        Swal.close();
        // Handle error appropriately
      });
  }

  console.log(PatientfromLabByDocReg_num)


  return (
    <>
      <div className="flex-grow bg-gray-100 p-8">
        {isLoading ? (<div className="flex items-center justify-center min-h-screen">
          <h1>Loading...</h1></div>) : (<TestResults patient={PatientfromLabByDocReg_num} />)}
      </div>
    </>
  )
} export default page