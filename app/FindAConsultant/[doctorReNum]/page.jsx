'use client'
import FindConsultant from '../_components/FindConsultant';
import ConsultantsApis from '../../_utils/ConsultantsApis';
import Swal from 'sweetalert2'
import React, { useEffect, useState} from 'react'
import withAuth from "../../_utils/withAuth"
// import Loading from '../../Loading'; 

function page({ params }) {

  const [doctorByReNum, setDoctorByReNum] = useState([]);
  const [Consultants, setConsultant] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    getConsultant_();
  }, [])


  const getConsultant_ = () => {

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
    ConsultantsApis.getConsultant()
      .then(res => {
        console.log(res.data.data);
        setConsultant(res.data.data);
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


  console.log(params)

  useEffect(() => {
    getDoctorByReNum_();
  }, [params?.doctorReNum])

  const getDoctorByReNum_ = () => {
    ConsultantsApis.getDoctorByReNum(params?.doctorReNum).then(res => {
      console.log(res.data.data);
      setDoctorByReNum(res.data.data);

    })
  }


  return (
    <>

     {/* {

      isLoading ? (
        <Loading />
      ) : (
        
        <div className="flex-grow bg-gray-100">
        
        <FindConsultant data={doctorByReNum} consultant={Consultants} />
      
        </div>
    
      )
     } */}

       <div className="flex-grow bg-gray-100">
        {isLoading ? (<div className="flex items-center justify-center min-h-screen">
          <h1>Loading...</h1></div>) : (<FindConsultant data={doctorByReNum} consultant={Consultants} />)}
      </div>
    </>
  )
}export default page;
//  export default withAuth(page);
