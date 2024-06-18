'use client'

import Table from '../_components/TableCheckUP'
import PatientApis from '../../_utils/PatientApis';
import Swal from 'sweetalert2'
import React, { useEffect, useState } from 'react'
import withAuth from "../../_utils/withAuth"


function PatientId({ params }) {

  console.log(params?.DoctorRegNum)
  const [patientDetailsFromAppointmentsByDoctorReg_Num, setPatientDetailsFromAppointmentsByDoctorReg_Num] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getPatientDetailsFromAppointmentsByDoctorReg_Num_();
  }, [params?.doctorRegNum])

  const getPatientDetailsFromAppointmentsByDoctorReg_Num_ = () => {

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
    PatientApis.getPatientDetailsFromAppointmentsByDoctorReg_Num(params?.DoctorRegNum)
      .then(res => {
        console.log(res.data.data);
        setPatientDetailsFromAppointmentsByDoctorReg_Num(res.data.data);
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

  console.log(patientDetailsFromAppointmentsByDoctorReg_Num)


  return (

    <>
      <div className="flex-grow bg-gray-100">
        {isLoading ? (<div className="flex items-center justify-center">
          <h1>Loading...</h1></div>) : (<Table patient={patientDetailsFromAppointmentsByDoctorReg_Num} />)}
      </div>


    </>
  )
}
export default withAuth(PatientId);

