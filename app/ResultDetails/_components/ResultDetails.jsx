import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import PatientApis from "../../_utils/PatientApis";

function Result_Details({PatientId}) {

    const [patientData, setPatientData] = useState([]);
    useEffect(() => {
        getPatientDetailsFromPatientsById_();
    }, [])

    const getPatientDetailsFromPatientsById_ = () => {
        PatientApis.getPatientDetailsFromPatientsById(PatientId).then(res => {
            console.log(res.data.data);
            setPatientData(res.data.data);

        })
    }

    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <div className="grid grid-cols-2 gap-4">
                <div className="w-full">
                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-semibold mb-2 text-blue-500">Patient Details</legend>
                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24">Name:</div>
                            <span className='text-gray-600'>{patientData?.attributes?.Name}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24">ID:</div>
                            <span className='text-gray-600'>{patientData?.attributes?.reg_Num}</span>
                        </div>
                    </fieldset>
                </div>
                <div className="w-full">
                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-semibold mb-2 text-blue-500">Test Results</legend>

                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24 text-gray-600">X-ray</div>
                            {/* <span>{}</span> */}
                        </div>
                    </fieldset>
                </div>
            </div>
            <br />
            <div className="flex justify-end">
                <Link href=" "
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Send to patient
                </Link>
            </div>
        </div>
    )
}

export default Result_Details
