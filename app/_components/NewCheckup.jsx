// import React from 'react';
// import Image from 'next/image';
// import doctor from './img/Character1.png'

// const patientDetails = [
//     { label: 'Name', value: 'Ahmed Hosam Ahmed' },
//     { label: 'ID', value: '#302088823' },
//     { label: 'Blood Type', value: 'B+' },
//     { label: 'Age', value: '25 yrs' },
//     { label: 'Gender', value: 'Male' },
// ];

// const patientSpecs = [
//     { label: 'Height', value: '175 cm' },
//     { label: 'Weight', value: '100 kg' },
//     { label: 'BMI', value: '0.01' },
//     { label: 'Blood Pressure', value: '120/80' },
//     { label: 'Pulse', value: '60 to 100 above' },
// ];


// export default function Component() {
//     return (
//         <div className="bg-gray-100">
//             <section className="py-10 md:py-14 lg:py-18">
//                 <div className="container px-4 md:px-6">
//                     <div className="mx-auto max-w-2xl space-y-4">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-gray-100">
//                             <div className="bg-white p-4 rounded-lg shadow-md">
//                                 <div className="font-medium flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-black">
//                                         <UserIcon className="w-5 h-5" />
//                                         <span>Patient Details</span>
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-1 gap-4 mt-4">
//                                     {patientDetails.map((detail, index) => (
//                                         <div key={index}>
//                                             <div className="text-sm text-blue-500 font-bold">{detail.label}</div>
//                                             <div>{detail.value}</div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div className="bg-white p-4 rounded-lg shadow-md">
//                                 <div className="font-medium flex items-center justify-between">
//                                     <div className="flex items-center gap-2 text-black">
//                                         <UserIcon className="w-5 h-5" />
//                                         <span>Patient Specifications</span>
//                                     </div>
//                                 </div>
//                                 <div className="grid grid-cols-2 gap-4 mt-4 text-black">
//                                     {patientSpecs.map((spec, index) => (
//                                         <div key={index}>
//                                             <div className="text-sm text-blue-500 font-bold">{spec.label}</div>
//                                             <div>{spec.value}</div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>

//                         {/* <div class="flex items-center min-h-screen"> */}
//                         <div class="bg-white p-4 rounded-lg w-full shadow-md">
//                             <div class="flex items-center justify-center">
//                                 <p class="text-blue-500 font-bold">Upload New Medical Prescription</p>
//                             </div>
//                             <div className='grid grid-cols-1 md:grid-cols-2 gap-3 px-2'>
//                                 <div>
//                                     <div class="grid grid-cols-1 md:grid-cols-1 gap-4 py-5 max-w-md">
//                                         <div class="space-y-2">
//                                             <label class="text-sm text-black" for="prescription">
//                                                 Add Prescription
//                                             </label>
//                                             <input
//                                                 class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
//                                                 id="prescription"
//                                                 placeholder="Enter prescription details"
//                                                 type="text"
//                                                 required
//                                             />
//                                         </div>

//                                         <div class="space-y-2">
//                                             <label class="text-sm text-black" for="files">
//                                                 Upload Files (Optional)
//                                             </label>
//                                             <input
//                                                 class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
//                                                 id="files"
//                                                 multiple
//                                                 type="file"
//                                                 required
//                                             />
//                                         </div>
//                                     </div>

//                                     <div class="space-y-2 max-w-md">
//                                         <label class="text-sm text-black " for="specialization">
//                                             Specialization
//                                         </label>
//                                         <select
//                                             class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black flex justify-center"
//                                             id="specialization"
//                                             required
//                                         >
//                                             <option value="cardiology">Cardiology</option>
//                                             <option value="dermatology">Dermatology</option>
//                                             <option value="gastroenterology">Gastroenterology</option>
//                                             <option value="orthopedics">Orthopedics</option>
//                                             <option value="ophthalmology">Ophthalmology</option>
//                                         </select>
//                                     </div>

//                                      <div className='py-6'>
//                                         <div class="space-y-2 max-w-md">
//                                             <label class="text-sm text-black " for="Laboratory">
//                                                 Select Laboratory
//                                             </label>
//                                             <select
//                                                 class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black flex justify-center"
//                                                 id="specialization"
//                                                 required
//                                             >
//                                                 <option value="Laboratory1">Laboratory1</option>
//                                                 <option value="Laboratory2">Laboratory1</option>
//                                                 <option value="Laboratory3">Laboratory1</option>
//                                                 <option value="Laboratory4">Laboratory1</option>
//                                             </select>
//                                         </div>
//                                     </div>

//                                     <div className="space-y-2 max-w-md">
//                                         <label className="text-sm text-black" htmlFor="labNote">
//                                             Test Orders (Optional)
//                                         </label>
//                                         <textarea
//                                             className="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black"
//                                             id="labNote"
//                                             rows="2"
//                                         />
//                                     </div> 

//                                 </div>

//                                 <div className=" relative">
//                                     <div class="relative w-35 h-30 py-8">
//                                         <Image src={doctor} alt="Doctor" class="relative inset-0 object-cover h-full w-full" />
//                                     </div>
//                                 </div>
//                             </div>

//                             <div class="flex justify-center mt-6">
//                                 <button
//                                     type="submit"
//                                     class="flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
//                                 >
//                                     Create
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//                 {/* </div>  */}
//             </section>
//         </div>
//     );
// }

// function UserIcon(props) {
//     return (
//         <svg
//             {...props}
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//         >
//             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
//             <circle cx="12" cy="7" r="4" />
//         </svg>
//     )
// }


// import React from 'react';
"use client"
import Image from 'next/image';
import doctor from './img/Character1.png'
import React, { useState } from 'react';

const patientDetails = [
    { label: 'Name', value: 'Ahmed Hosam Ahmed' },
    { label: 'ID', value: '#302088823' },
    { label: 'Blood Type', value: 'B+' },
    { label: 'Age', value: '25 yrs' },
    { label: 'Gender', value: 'Male' },
];

// const patientSpecs = [
//     { label: 'Height', value: '175 cm' },
//     { label: 'Weight', value: '100 kg' },
//     { label: 'BMI', value: '0.01' },
//     { label: 'Blood Pressure', value: '120/80' },
//     { label: 'Pulse', value: '60 to 100 above' },
// ];

const initialState = {
    height: '',
    weight: '',
    BMI: '',
    bloodPressure: '',
    pulse: '',
};

export default function Component() {

    const [patientSpecs, setPatientSpecs] = useState(initialState);

    const handleInputChange = (event) => {
        setPatientSpecs({
            ...patientSpecs,
            [event.target.name]: event.target.value,
        });
    };

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
                                    {patientDetails.map((detail, index) => (
                                        <div key={index}>
                                            <div className="text-sm text-blue-500 font-bold">{detail.label}</div>
                                            <div>{detail.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* <div className="bg-white p-4 rounded-lg shadow-md">
                                <div className="font-medium flex items-center justify-between">
                                    <div className="flex items-center gap-2 text-black">
                                        <UserIcon className="w-5 h-5" />
                                        <span>Patient Specifications</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4 mt-4 text-black">
                                    {patientSpecs.map((spec, index) => (
                                        <div key={index}>
                                            <div className="text-sm text-blue-500 font-bold">{spec.label}</div>
                                            <div>{spec.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div> */}
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
                                            value={patientSpecs.height}
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
                                            value={patientSpecs.weight}
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
                                            value={patientSpecs.BMI}
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
                                            value={patientSpecs.bloodPressure}
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
                                            value={patientSpecs.pulse}
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
                                            <input
                                                class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
                                                id="prescription"
                                                placeholder="Enter prescription details"
                                                type="text"
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

                                    <div class="space-y-2 max-w-md">
                                        <label class="text-sm text-black " for="specialization">
                                            Specialization
                                        </label>
                                        <select
                                            class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black flex justify-center"
                                            id="specialization"
                                            required
                                        >
                                            <option value="cardiology">Cardiology</option>
                                            <option value="dermatology">Dermatology</option>
                                            <option value="gastroenterology">Gastroenterology</option>
                                            <option value="orthopedics">Orthopedics</option>
                                            <option value="ophthalmology">Ophthalmology</option>
                                        </select>
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
                                        <textarea
                                            className="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black"
                                            id="labNote"
                                            rows="2"
                                        />
                                    </div>

                                </div>

                                <div className=" relative">
                                    <div class="relative w-35 h-30 py-8">
                                        <Image src={doctor} alt="Doctor" class="relative inset-0 object-cover h-full w-full" />
                                    </div>
                                </div>
                            </div>

                            <div class="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    class="flex justify-center py-3 px-8 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mb-4"
                                >
                                    Create
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
                {/* </div>  */}
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



