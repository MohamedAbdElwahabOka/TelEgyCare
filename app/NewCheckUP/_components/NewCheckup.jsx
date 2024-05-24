"use client"
import Image from 'next/image';
import doctor from '/public/Character1.png'
import MRI from '/public/MRI.png'
import CT from '/public/CT.png'
import X_Ray from '/public/X-Ray.png'
import Pulm from '/public/Pulm.png'
import React, { useEffect, useState } from 'react'
import PatientApis from '../../_utils/PatientApis'
import Swal from 'sweetalert2'
import medicalrecordsAPI from '../../_utils/medicalrecordsAPI'
import TestFields from '../_components/TestFields'

export default function Component({ PatientId }) {

    const [testFields, setTestFields] = useState([
        { id: 1, value: '' },
    ]);

    const handleAddTestField = () => {
        setTestFields([...testFields, { id: testFields.length + 1, value: '' }]);
    };

    console.log(PatientId)
    /*
    ! calculateAge Start 
    */
    const calculateAge = (birthDateString) => {
        const birthDate = new Date(birthDateString);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
    }

    /*
! calculateAge End 
*/
    /*
    !__________________________________________________________________________________________________
    */
    /*
    ! patientData Start 
    */
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
    /*
  ! patientData End
  */
    /*
    !__________________________________________________________________________________________________
    */

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(PatientId)
        let Id = parseInt(PatientId);
        console.log(Id)
        const data = {
            data: {
                Medical_RecordId: "MTEST",
                patient: Id
            }
        }

        medicalrecordsAPI.AddNewMedicalRecordForExistingPatient(data).then((res) => {
            // console.log("🚀 ~ PostDoctor.addDoctor ~ res:", res)

            Swal.fire({
                title: "Congratulations",
                text: "Added successfully",
                icon: "success"
            });
            // sendEmail();
        }).catch((error) => {
            console.log("🚀 ~ PostDoctor.addDoctor ~ error:", error)

            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "There was an error recording, try again"
            });
        });
    }




    return (
        <div className="bg-gray-100">
            <section className="py-10 md:py-14 lg:py-18">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto max-w-2xl space-y-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="font-medium flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-black">
                                        <UserIcon className="w-5 h-5" />
                                        <span>Patient Details</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mt-4 text-black">

                                    <div class="space-y-2">
                                        <label class="text-sm font-bold text-blue-500">
                                            Name
                                        </label>
                                        <h1 className="text-sm text-black">{patientData?.attributes?.Name}</h1>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-bold text-blue-500">
                                            ID
                                        </label>
                                        <h1 className="text-sm text-black">{patientData?.attributes?.reg_Num}</h1>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-bold text-blue-500">
                                            Blood Type
                                        </label>
                                        <h1 className="text-sm text-black">{patientData?.attributes?.Blood_Type}</h1>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-bold text-blue-500">
                                            Age
                                        </label>
                                        <h1 className="text-sm text-black">{calculateAge(patientData?.attributes?.Birth_Date)}</h1>
                                    </div>
                                    <div class="space-y-2">
                                        <label class="text-sm font-bold text-blue-500">
                                            Gender
                                        </label>
                                        <h1 className="text-sm text-black">{patientData?.attributes?.Gender}</h1>
                                    </div>
                                    {/* <div class="space-y-2">
                                            <label class="text-sm font-bold text-blue-500">
                                                Phone
                                            </label>
                                            <h1 className="text-sm text-black">{patientData?.attributes?.phone}</h1>
                                </div>
                                <div class="space-y-2">
                                            <label class="text-sm font-bold text-blue-500">
                                                Governorate
                                            </label>
                                            <h1 className="text-sm text-black">{patientData?.attributes?.Governorate}</h1>
                                </div> */}
                                </div>
                            </div>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="font-medium flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-black">
                                        <UserIcon className="w-5 h-5" />
                                        <span>Patient Specifications</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-4 mt-4 text-black">
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">Height</div>
                                        <input
                                            type="number"
                                            // placeholder="Enter height (cm)"
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="height"
                                            // value={patientSpecs.height}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">Weight</div>
                                        <input
                                            type="number"
                                            // placeholder="Enter weight (kg)"
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="weight"
                                            // value={patientSpecs.weight}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">BMI</div>
                                        <input
                                            type="text"
                                            // placeholder="Enter BMI"
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="BMI"
                                            // value={patientSpecs.BMI}
                                            onChange={handleInputChange}
                                            required
                                        />
                                        {/* {bmi && (
                                        <div>
                                        <div className="text-sm text-blue-500 font-bold">BMI</div>
                                        <div>{bmi}</div>
                                        </div>
                                    )} */}
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">Blood Pressure</div>
                                        <input
                                            type="text"
                                            // placeholder="Enter blood pressure (e.g., 120/80 mmHg)"
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="bloodPressure"
                                            // value={patientSpecs.bloodPressure}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">pulse</div>
                                        <input
                                            type="text"
                                            // placeholder="Enter pulse"
                                            // w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="pulse"
                                            // value={patientSpecs.pulse}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div class="flex items-center min-h-screen"> */}
                        <div class="bg-white p-4 rounded-lg w-full shadow-md">
                            <div class="flex items-center justify-center">
                                <p class="text-blue-500 font-bold">Upload New Medical Prescription</p>
                            </div>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-2'>
                                <div>
                                    <div class="grid grid-cols-1 md:grid-cols-1 gap-4 py-5 max-w-md">
                                        <div class="space-y-2">
                                            <label class="text-sm text-black" for="prescription">
                                                Add Prescription
                                            </label>
                                            <textarea
                                                className="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black"
                                                id="Prescription"
                                                placeholder="Enter prescription details"
                                                rows="2"
                                                required
                                            />
                                        </div>

                                        <div class="space-y-2">
                                            <label class="text-sm text-black" for="files">
                                                Upload Files (Optional)
                                            </label>
                                            <input
                                                class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
                                                id="files"
                                                multiple
                                                type="file"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className='mb-4'>
                                        <label class="text-sm text-black" for="labType">
                                            Choose lab type (optional)
                                        </label>
                                        <p className='text-sm text-gray-500'>you can choose multiple types</p>
                                    </div>
                                    <div class="flex flex-col-2 gap-3">
                                        <div>
                                            <div class="flex flex-col items-center mb-6">
                                                <label class="cursor-pointer">
                                                    <input type="checkbox" class="peer sr-only" />
                                                    <div class="rounded-xl bg-white p-5 text-gray-600 shadow-xl ring-2 ring-transparent transition-all hover:shadow-xl hover:ring-blue-400 peer-checked:text-blue-500 peer-checked:ring-blue-500 peer-checked:ring-offset-2 w-40 h-30">
                                                        <div class="flex flex-col items-center">
                                                            <Image height={65} src={MRI} width={65} alt="Doctor" class="relative " />
                                                            <p class="text-lg font-bold pt-1">MRI</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="flex flex-col items-center">
                                                <label class="cursor-pointer">
                                                    <input type="checkbox" class="peer sr-only" />
                                                    <div class="rounded-xl bg-white p-5 text-gray-600 shadow-xl ring-2 ring-transparent transition-all hover:shadow-xl hover:ring-blue-400 peer-checked:text-blue-500 peer-checked:ring-blue-500 peer-checked:ring-offset-2 w-40 h-30">
                                                        <div class="flex flex-col items-center">
                                                            <Image height={62} src={X_Ray} width={62} alt="Doctor" class="relative" />
                                                            <p class="text-lg font-bold pt-1">X-Ray</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div >
                                        <div class="flex flex-col items-center mb-6">
                                                <label class="cursor-pointer">
                                                    <input type="checkbox" class="peer sr-only"/>
                                                    <div class="rounded-xl  bg-white p-5 text-gray-600 shadow-xl ring-2 ring-transparent transition-all hover:shadow-xl hover:ring-blue-400 peer-checked:text-blue-500 peer-checked:ring-blue-500 peer-checked:ring-offset-2 w-40 h-30">
                                                        <div class="flex flex-col items-center">
                                                            <Image height={62} src={CT} width={62} alt="Doctor" class="relative" />
                                                            <p class="text-lg font-bold pt-1">CT</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="flex flex-col items-center">
                                                <label class="cursor-pointer">
                                                    <input type="checkbox" class="peer sr-only" />
                                                    <div class=" rounded-xl bg-white p-5 text-gray-600 shadow-xl ring-2 ring-transparent transition-all hover:shadow-xl hover:ring-blue-400 peer-checked:text-blue-500 peer-checked:ring-blue-500 peer-checked:ring-offset-2 w-40 h-30">
                                                        <div class="flex flex-col items-center">
                                                            <Image height={59} src={Pulm} width={59} alt="Doctor" class="relative" />
                                                            <p class="text-lg font-bold pt-1">Pulmonology</p>
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>

                                    <div className='py-6'>
                                        <div class="space-y-2 max-w-md">
                                            <label class="text-sm text-black " for="Laboratory">
                                                Select Laboratory
                                            </label>
                                            <select
                                                class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black flex justify-center"
                                                id="specialization"
                                                required
                                            >
                                                <option value="Laboratory1">Laboratory1</option>
                                                <option value="Laboratory2">Laboratory1</option>
                                                <option value="Laboratory3">Laboratory1</option>
                                                <option value="Laboratory4">Laboratory1</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2 max-w-md">

                                        <label className="text-sm text-black" htmlFor="labNote">
                                            Test Orders (Optional)
                                        </label>

                                        <TestFields testFields={testFields} onAddTestField={handleAddTestField} />
                                    </div>

                                </div>

                                <div className=" relative">
                                    <div class="relative w-50 h-45 py-9">
                                        <Image src={doctor} alt="Doctor" class="relative inset-2 object-cover h-full w-full" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center mt-6">
                                <button
                                    onClick={(e) => handleInputChange(e)}
                                    type="submit"
                                    class="flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

function UserIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}



