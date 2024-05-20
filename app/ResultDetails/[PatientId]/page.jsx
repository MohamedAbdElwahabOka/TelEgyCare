'use client'
import React, { useEffect, useState} from "react";
import PatientApis from "../../_utils/PatientApis";
import ResultDetails from '../_components/ResultDetails'

function Result_Details({params}) {

  return (
    <ResultDetails  PatientId={params?.PatientId}/>
  )
}

export default Result_Details
