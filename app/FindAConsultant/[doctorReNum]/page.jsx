'use client'
import FindConsultant from '../../_components/FindConsultant';
import ConsultantsApis from '../../_utils/ConsultantsApis';
import React, { useEffect, useState } from 'react'

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
   <FindConsultant data={doctorByReNum} consultant={Consultants}  />
   </>
  ) 
}export default page

// 'use client'
// consultats={Consultants}

// import FindConsultant from "../_components/FindConsultant";
// import React, { useEffect, useState } from 'react'
// import ConsultantsApis from "../_utils/ConsultantsApis";

// export default function FindAConsultants() {

  // const [Consultants, setConsultant] = useState([]);
  // useEffect(() => {
  //   getConsultant_();
  // }, [])

  // const getConsultant_ = () => {
  //   ConsultantsApis.getConsultant().then(res => {
  //     console.log(res.data.data);
  //     setConsultant(res.data.data);

  //   })
  // }

//   return (
//    <><FindConsultant data={Consultants}/></>  
//   );
// }
