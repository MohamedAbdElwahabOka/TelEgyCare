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
import { useSearchParams } from 'next/navigation';
import LaboratoryAPIs from '../../_utils/LaboratoryAPIs'
import AppointmentsApi from '../../_utils/AppointmentsApi'
import TestFields from '../_components/TestFields'
import Select from 'react-select';
import { FaPlus, FaMinus } from 'react-icons/fa';

export default function Component({ PatientId }) {

    const searchParams = useSearchParams();
    const doctorId =searchParams.get('iD');
    const AppointmentID =searchParams.get('AId');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [body_Mass_Index, setBody_Mass_Index] = useState('');
    const [blood_Pressure, setBlood_Pressure] = useState('');
    const [prescription, setPrescription] = useState('');
    const [doctor_Files, setDoctor_Files] = useState();
    const [labCategories, setLabCategories] = useState([]);
    const [testOrder, setTestOrder] = useState('');
    const [Lab,setLab] = useState();
    console.log(Lab)

    const [inputValues, setInputValues] = useState(['']);

    const handleAddInput = () => {
        setInputValues(prevValues => {
          const newInputValues = [...prevValues, ''];
          const newTestOrder = newInputValues.map((value, i) => `${i + 1}.${value}`).join('\n');
          setTestOrder(newTestOrder);
          return newInputValues;
        });
      };
    
      const handleRemoveInput = (index) => {
        setInputValues(prevValues => {
          const newInputValues = prevValues.filter((value, i) => i !== index);
          const newTestOrder = newInputValues.map((value, i) => `${i + 1}.${value}`).join('\n');
          setTestOrder(newTestOrder);
          return newInputValues;
        });
      };
    
      const handleInputChanges = (index, event) => {
        const newInputValues = [...inputValues];
        newInputValues[index] = event.target.value;
        setInputValues(newInputValues);

        // Update testOrder with the new input values
        const newTestOrder = newInputValues.map((value, i) => `${i + 1}. ${value}`).join('\n');
        setTestOrder(newTestOrder);
      };

    console.log(PatientId)

    /*
    ! -------------------------------Start options lab Category -------------------------------------------- 
    */

    const handleCheckboxChange = (event) => {
        if (event.target.checked) {
          setLabCategories([...labCategories, event.target.value]);
        } else {
          setLabCategories(labCategories.filter(category => category !== event.target.value));
        }
      };
    
      const sortOrder = ['CT', 'MRI', 'Pulmonology', 'XRay']
      const sortedLabCategories = labCategories.sort((a, b) => sortOrder.indexOf(a) - sortOrder.indexOf(b));
      const labCategory = sortedLabCategories.join('-');

      const [LabsFilteredByLabCategory, setLabsFilteredByLabCategory] =  useState();

      useEffect(() => {
        getLabByLabCategory_();
      }, [labCategory])

      const getLabByLabCategory_ = () => {
        LaboratoryAPIs.getLabByLabCategory(labCategory).then(res => {
          console.log(labCategory);
          console.log(res.data.data);
        //   setAllHospitals(res.data.data);
          const options = res.data.data.map(lab=>({
            value: lab.id,
            label: lab?.attributes?.Name
          }));
          setLabsFilteredByLabCategory(options)
      
        })
      }
    




    // const options = [
    //     { value: 'general specialty', label: 'general specialty' },
    //     { value: 'Anatomical Pathology', label: 'Anatomical Pathology' },
    //     { value: 'Anesthesiology', label: 'Anesthesiology' },
    //     { value: 'Cardiology', label: 'Cardiology' },
    //     { value: 'Cardiovascular', label: 'Cardiovascular' },
    //     { value: 'Clinical Immunology', label: 'Clinical Immunology' },
    //     { value: 'Critical Care Medicine', label: 'Critical Care Medicine' },
    //     { value: 'Dermatology', label: 'Dermatology' },
    //   ];

      /*
    ! -------------------------------end options lab Category-------------------------------------------- 
    */
    
    /*
    ! -------------------------------calculateAge Start-------------------------------------------- 
    */
    const calculateAge = (birthDateString) => {
        const birthDate = new Date(birthDateString);
        const today = new Date();
        const age = today.getFullYear() - birthDate.getFullYear();
        const m = today.getMonth() - birthDate.getMonth();
        return m < 0 || (m === 0 && today.getDate() < birthDate.getDate()) ? age - 1 : age;
    }

    /*
! ---------------------------------------calculateAge End------------------------------------------------ 
*/
    /*
    !________________________________________patientData Start__________________________________________________________
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
    !_____________________________________________ patientData End_____________________________________________________
    */

/*
  !------------------------------------Start Random Number for Medical_Record_Id -------------------------------------
*/ 

const [MedicalRecords, setMedicalRecords] = useState([]);
    useEffect(() => {
        getMedicalRecords_();
    }, [])

const getMedicalRecords_ = () => {
  medicalrecordsAPI.getMedicalRecords().then(res => {
  console.log(res.data.data);
  setMedicalRecords(res.data.data);

 })
}



const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 900000 + 100000);
    return randomNumber;
  }

  let valid_Reg_num = 0;
  let reg;

  while (!valid_Reg_num) {
    reg = generateRandomNumber();

    const user = MedicalRecords.find(
      (item) => item?.attributes?.reg_Num && item.attributes.reg_Num.substring(1) === reg.toString()
    );

    if (!user) {
      valid_Reg_num = reg;
      console.log('Valid Reg num:', valid_Reg_num);
    } else {
      console.log('Not valid reg num, trying again...');
    }
  }

/*
  !--------------------------------------End Random Number for Medical_Record_Id -----------------------------------------------
*/ 

  /*
  !--------------------------------------start PDF upload -----------------------------------------------
  */ 

const uploadPdf = async () => {
    const { value: file } = await Swal.fire({
        title: 'Select PDF',
        input: 'file',
        inputAttributes: {
            'accept': 'application/pdf',
            'aria-label': 'Upload your PDF'
        }
    });

    if (file) {
        const formData = new FormData();
        formData.append('files', file);
        Swal.fire({
            title: 'Uploading Your Pdf...',
            html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
              popup: 'my-custom-popup'
            }
          });

        try {
            const response = await fetch('http://localhost:1337/api/upload', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            Swal.close();
            const data = await response.json();
            console.log(data)
            setDoctor_Files(data[0].id)
        
            Swal.fire({
                title: 'Your uploaded PDF',
                text: 'The PDF has been uploaded successfully.',
            });
        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'There was an error uploading the PDF.',
                icon: 'error',
            });
        }
    }
};

/*
!--------------------------------------End PDF upload -----------------------------------------------*/

/*
  !--------------------------------------start handleInputChange -----------------------------------------------*/ 
    const handleInputChange = (e) => {
        e.preventDefault();
        console.log(PatientId)
        let Id = parseInt(PatientId);
        console.log(Id)

        const data = {
            data: {
                Medical_RecordId: `M${valid_Reg_num}`,
                patient: Id,
                Height:height,
                Weight:weight,
                Body_Mass_Index:body_Mass_Index,
                Blood_Pressure:blood_Pressure,
                prescription:prescription,
                doctor_Files:doctor_Files,
                Test_Orders:testOrder,
                laboratory:Lab,
                doctor:doctorId
            }
        }

        Swal.fire({
            title: 'Uploading Your Pdf...',
            html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            customClass: {
              popup: 'my-custom-popup'
            }
          });
        medicalrecordsAPI.AddNewMedicalRecordForExistingPatient(data).then((res) => {
            // console.log("🚀 ~ PostDoctor.addDoctor ~ res:", res)
            Swal.close();
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

        const updatedAppointment = {
            data: {
                State:'1'
            }
        }

        AppointmentsApi.UpdateAppointmentState(AppointmentID,updatedAppointment).then((res)=>{
            console.log(res)
  
        }).catch((err) => {
            console.log(err)
        });

    }


 

/*
  !--------------------------------------end handleInputChange -----------------------------------------------*/ 


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
                                            type="text"
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="height"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}

                                            required
                                            
                                        />
                                    </div>
                                    <div>
                                        <div className="text-sm text-blue-500 font-bold">Weight</div>
                                        <input
                                            type="text"
                                        
                                            className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1"
                                            name="weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
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
                                            value={body_Mass_Index}
                                            onChange={(e) => setBody_Mass_Index(e.target.value)}
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
                                            value={blood_Pressure}
                                            onChange={(e) => setBlood_Pressure(e.target.value)}
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
                                                value={prescription}
                                                onChange={(e) => setPrescription(e.target.value)}
                                                required
                                            />
                                        </div>

                                        <div class="space-y-2">
                                            <button
                                            className='class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black'
                                                onClick={uploadPdf}
                                            >
                                                Upload Files
                                            </button>
                                            <label class="text-sm text-black" for="files">
                                                Upload Files (Optional)
                                            </label>
                                            {/* <input
                                                class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 text-black"
                                                id="files"
                                                multiple
                                                type="file"
                                                required
                                            /> */}
                                           
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
                                                    <input type="checkbox" value="MRI" onChange={handleCheckboxChange} checked={labCategories.includes('MRI')} class="peer sr-only" />
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
                                                    <input type="checkbox" value="XRay" onChange={handleCheckboxChange} checked={labCategories.includes('XRay')} class="peer sr-only" />
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
                                                    <input type="checkbox" value="CT" onChange={handleCheckboxChange} checked={labCategories.includes('CT')} class="peer sr-only"/>
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
                                                    <input type="checkbox" value="Pulmonology" onChange={handleCheckboxChange} checked={labCategories.includes('Pulmonology')} class="peer sr-only" />
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

                                    <div>Selected Categories: {labCategory}</div>

                                    <div className='py-6'>
                                        <div class="space-y-2 max-w-md">
                                            <label class="text-sm text-black " for="Laboratory">
                                                Select Laboratory
                                            </label>
                                            {/* <select
                                                class="w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black flex justify-center"
                                                id="specialization"
                                                required
                                            >
                                                <option value="Laboratory1">Laboratory1</option>
                                                <option value="Laboratory2">Laboratory1</option>
                                                <option value="Laboratory3">Laboratory1</option>
                                                <option value="Laboratory4">Laboratory1</option>
                                            </select> */}
                                             <Select
                                             options={LabsFilteredByLabCategory}
                                             onChange={(selectedOption) => setLab(selectedOption.value)}
                                            />
                                        </div>
                                    </div>

                                    {/* <div className="space-y-2 max-w-md">

                                        <label className="text-sm text-black" htmlFor="labNote">
                                            Test Orders (Optional)
                                        </label>

                                        <TestFields testFields={testFields} onAddTestField={handleAddTestField} />
                                    </div> */}
                                     <div className="space-y-2 max-w-md">
                                        <label className="text-sm text-black" htmlFor="labNote">
                                            Test Orders (Optional)
                                        </label>
                                        {inputValues.length > 0 ? (
                                            inputValues.map((value, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <input
                                                className='flex-grow border border-gray-400 rounded-md bg-gray-100 px-2 py-2 text-black'
                                                value={value}
                                                onChange={event => handleInputChanges(index, event)}
                                                />
                                                <button onClick={() => handleRemoveInput(index)}>
                                                <FaMinus />
                                                </button>
                                                {index === inputValues.length - 1 && (
                                                <button onClick={handleAddInput}>
                                                    <FaPlus />
                                                </button>
                                                )}
                                            </div>
                                            ))
                                        ) : (
                                            <button onClick={handleAddInput}>
                                            <FaPlus /> Add Input
                                            </button>
                                        )}
                                        <div>
                                            {/* Test Order: {testOrder} */}
                                            {console.log(testOrder)}
                                     </div>
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







{/* <div>
    <div className="text-sm text-blue-500 font-bold opacity-40">pulse</div>
    <input
        type="text"
        // placeholder="Enter pulse"
        // w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 
        className="text-black  w-full border border-gray-400 rounded-md bg-gray-100 px-2 py-1 opacity-40"
        name="pulse"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        required
        disabled />
</div> */}



