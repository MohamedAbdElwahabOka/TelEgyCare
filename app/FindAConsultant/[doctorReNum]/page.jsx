'use client'
import FindConsultant from '../_components/FindConsultant';
import ConsultantsApis from '../../_utils/ConsultantsApis';
import React, { useEffect, useState,Suspense } from 'react'
import Loading from '../../Loading';

 function page({params}) {
  // {params}
// console.log(params);

  const [doctorByReNum, setDoctorByReNum] = useState([]);
  const [Consultants, setConsultant] = useState([]);

  useEffect(() => {
    getConsultant_();
  }, [])

  const getConsultant_ = () => {
    ConsultantsApis.getConsultant().then(res => {
      console.log(res.data.data);
      setConsultant(res.data.data);

    })
  }

  console.log(params)

  useEffect(() => {
    getDoctorByReNum_();
  }, [params?.doctorReNum])
  // params?.doctorRegNum
  const getDoctorByReNum_ = () => {
    ConsultantsApis.getDoctorByReNum(params?.doctorReNum).then(res => {
      console.log(res.data.data);
      setDoctorByReNum(res.data.data);

    })
  }


  return (
   <>

      <Suspense fallback={<p className='text-xl font-bold text-gray-500 mb-4 px-4'>Loading feed...</p>}>
      <FindConsultant data={doctorByReNum} consultant={Consultants}  />
      </Suspense>

   
   </>
  ) 
}export default page
