import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import PatientApis from "../../_utils/PatientApis";
import medicalrecordsAPI from '../../_utils/medicalrecordsAPI';

function Result_Details({ PatientId, medicalrec }) {
    console.log(medicalrec)
    console.log(PatientId);
    const cloudinaryPngUrl = "https://res.cloudinary.com/dlw9u7jf0/image/upload/v1719054709/vscode_icons_file_type_pdf2_b29bc1d7a5.png";
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
    const handleInputChange = (e) => {
        e.preventDefault();

        const updatedState = {
            data: {
                pres_state: '3'
            }
        }

        medicalrecordsAPI.UpdateState(medicalrec[0].id, updatedState).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        });
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
                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24">Email:</div>
                            <span className='text-gray-600'>{patientData?.attributes?.Email}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24">Phone:</div>
                            <span className='text-gray-600'>{patientData?.attributes?.phone}</span>
                        </div>
                        <div className="flex items-center mb-4">
                            <div className="font-semibold mr-2 w-24">National ID:</div>
                            <span className='text-gray-600'>{patientData?.attributes?.NationalId}</span>
                            <br /><br />
                        </div>
                    </fieldset>
                </div>
                <div className="w-full">
                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-semibold mb-2 text-blue-500">Test Results</legend>

                        <div className="flex items-center mb-4">
                            {/* <div className="font-semibold mr-2 w-24 text-gray-600">X-ray</div> */}
                            <span>
                                {patientData?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders !== null && patientData?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders !== undefined
                                    ? patientData?.attributes?.medical_records?.data?.[0]?.attributes?.Test_Orders.split(/\s*\d+\.\s+/)
                                        .filter(Boolean)
                                        .map((test, index) => (
                                            <div key={index} className="mb-2">
                                                {index + 1}. {test}
                                            </div>
                                        ))
                                    : 'No Test Results'}
                            </span>
                        </div>

                    </fieldset>

                    <fieldset className="border border-gray-300 p-4 rounded-md">
                        <legend className="text-lg font-semibold mb-2 text-blue-500">PDFs</legend>
                        <div className="flex items-center mb-4">
                            <div className="flex justify-center items-center bg-gray-900">
                                <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md max-w-md">
                                    <div className="flex justify-center items-center mb-2">
                                        <img
                                            src={cloudinaryPngUrl}
                                            alt="PDF Icon"
                                            className="w-12 h-12"
                                        />
                                    </div>
                                    <div className="flex justify-center space-x-2 mb-4">
                                        <button download="medical_report.pdf" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                            🔗
                                        </button>
                                    </div>
                                    <div className="text-center">
                                        <a href={medicalrec[0]?.attributes?.doctor_Files?.data[0]?.attributes?.url} target="_blank" download="medical_report.pdf" className="text-blue-400 hover:underline">
                                            medical_report.pdf
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </fieldset>
                </div>
            </div>
            <br />
            <div className="flex justify-end">
                <button
                    onClick={(e) => handleInputChange(e)}
                    type="submit"
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send to patient
                </button>
            </div>
        </div>
    )
}

export default Result_Details
