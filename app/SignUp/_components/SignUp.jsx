"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import DoctorApis from '../../_utils/DoctorApis'
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs';
import crypto from 'crypto';


const SignUp = ({ doctors }) => {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [NationalID, setNationalID] = useState('');
  const [LicenseNumber, setLicenseNumber] = useState('');
  const [Governorate, setGovernorate] = useState('Cairo');
  const [Typeofspecializtion, setTypeofspecializtion] = useState('Anatomical Pathology');
  const [UploadLicense, setUploadLicense] = useState();
  const [Profileimage, setProfileimage] = useState();


/* 
!__________________________________Form validation_______________________________________
*/
const [ConfirmPassword, setConfirmPassword] = useState('');
const [passwordsMatch, setPasswordsMatch] = useState(true);
const [isValidNationalID, setIsValidNationalID] = useState(true);
const [isValidLicenseNumber, setIsValidLicenseNumber] = useState(true);
const [isValidEmail, setIsValidEmail] = useState(true);
const [isValidName, setIsValidName] = useState(true);
const [isValidPhone, setIsValidPhone] = useState(true);
const [isValidProfileImage, setIsValidProfileImage] = useState(true);
const [isValidLicenseImage, setIsValidLicenseImage] = useState(true);


const handleNameChange = (e) => {
  setName(e.target.value);
  setIsValidName(e.target.value.trim() !== '');
};

const handlePhoneChange = (e) => {
  setPhone(e.target.value);
  setIsValidPhone(e.target.value.trim() !== '' && /^\d{11}$/.test(e.target.value));
};

const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  setPasswordsMatch(e.target.value === ConfirmPassword);
};

const handleConfirmPasswordChange = (e) => {
  setConfirmPassword(e.target.value);
  setPasswordsMatch(Password === e.target.value);
};


const handleNationalIDChange = (e) => {
  setNationalID(e.target.value);
  setIsValidNationalID(e.target.value.trim() !== '' && /^\d{14}$/.test(e.target.value));
};

const handleLicenseNumberChange = (e) => {
  setLicenseNumber(e.target.value);
  setIsValidLicenseNumber(/^\d{6}$/.test(e.target.value));
};

const handleEmailChange = (e) => {
  setEmail(e.target.value);
  setIsValidEmail(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value));
};






  /*
  !--------------------------------------start img upload -----------------------------------------------
  */ 
  const UploadImage = async (type) => {
    const { value: file } = await Swal.fire({
        title: 'Select Image',
        input: 'file',
        inputAttributes: {
            'accept': 'image/*',
            'aria-label': 'Upload your Image'
        }
    });

    if (file) {
        const formData = new FormData();
        formData.append('files', file);
        Swal.fire({
          title: 'Uploading Your Image...',
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
            console.log(data);
            if (type === 'license') {
              setUploadLicense(data[0].id);
            } else if (type === 'profile') {
              setProfileimage(data[0].id);
            }
            console.log(data[0].id)
            Swal.fire({
                title: 'Your uploaded Image',
                text: 'The Image has been uploaded successfully.',
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
  !---------------------------------------------End img upload-----------------------------------------------
  */ 
  /*
  !--------------------------------------Random Number for Reg -----------------------------------------------
  */ 

  console.log(UploadLicense)
  console.log(Profileimage)

  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 900000 + 100000);
    return randomNumber;
  }

  let valid_Reg_num = 0;
  let reg;

  while (!valid_Reg_num) {
    reg = generateRandomNumber();

    const user = doctors.find(
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
  !-------------------------------------------------------------------------------------
  */
  
  
  /*
  !-----------------------------------------hash Password --------------------------------------------
  */


  // const [result ,setResult] = useState('');
  // const sendEmail = ()=>{
  //   fetch('/api/emails',{
  //     method:'POST'
  //   })
  //   .then(response => response.json())
  //   .then(data => {setResult(data)})
  //   .catch(error => console.log(error))
  // }

 
 

function hashPassword(password) {
    const hash = crypto.createHash('sha256');
    hash.update(password);
    return hash.digest('hex');
  }
function comparePasswords(plaintextPassword, hashedPassword) {
    const hashedInputPassword = hashPassword(plaintextPassword);
    return hashedInputPassword === hashedPassword;
  }


  console.log(hashPassword("D123456"))
  console.log(comparePasswords("D243870","f34102ae68e06c755ed01cfe207a8e4a543ff4879a315831d6750ebcd804bc35"))
  


  
  const handleSubmit = async (e) => {
    e.preventDefault();

  //  const hashedPassword = await hashPassword(`D${valid_Reg_num}`);
  // const hashedPassword = hashPassword(`D${valid_Reg_num}`)
  const hashedPassword = hashPassword(Password)
    const data = {
      data: {
        reg_Num: `D${valid_Reg_num}`,
        Name: Name,
        Email: Email,
        phone: Phone,
        Address: Governorate,
        // Password : Password,
        Password : hashedPassword,
        Type_of_Spec: Typeofspecializtion,
        LicenseNumber: LicenseNumber,
        NationalID: NationalID,
        doctor_Pic :Profileimage,
        LicenseImg :UploadLicense,
        publishedAt: null
        // LicenseImg: UploadLicense
      }
    }
    Swal.fire({
      title: 'SingingUP....',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    });
    
    DoctorApis.addDoctor(data).then((res) => {
      console.log("🚀 ~ PostDoctor.addDoctor ~ res:", res)
      Swal.close();
      Swal.fire({
        title: "Congratulations",
        text: "Your account has been registered successfully",
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

  };


  return (
    <div className="bg-white min-h-screen flex justify-center items-center border border-gray-300 py-9">
      <div className="flex-1 max-w-lg w-full mx-auto">
        <form onSubmit={(e) => handleSubmit(e)} className="space-y-6">
        <div>
          <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Name: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
          <div className="mt-1">
            <input
              id="Name"
              name="Name"
              type="text"
              placeholder="Name"
              required
              className={`appearance-none text-gray-700 block w-full px-5 py-3 border ${isValidName ? 'border-green-500' : 'border-red-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={Name}
              onChange={handleNameChange}
            />
          </div>
          {!isValidName && <p style={{ color: 'red' }}>Name must not be empty!</p>}
        </div>



        <div>
          <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Phone: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
          <div className="mt-1">
            <input
              id="Phone"
              name="Phone"
              type="text"
              placeholder="Phone"
              required
              className={`appearance-none text-gray-700 block w-full px-5 py-3 border ${isValidPhone ? 'border-green-500' : 'border-red-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              value={Phone}
              onChange={handlePhoneChange}
            />
          </div>
          {!isValidPhone && <p style={{ color: 'red' }}>Phone must not be empty and must be exactly 11 number!</p>}
        </div>

          <div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Password: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <input
                id="Password"
                name="Password"
                type="Password"
                placeholder="Password"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={Password}
                // onChange={(e) => setPassword(e.target.value)}
                onChange={handlePasswordChange}
              />
            </div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>Confirm Password: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <input
                id="ConfirmPassword"
                name="ConfirmPassword"
                type="Password"
                placeholder="Confirm Password"
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={ConfirmPassword}
                onChange={handleConfirmPasswordChange}
              />
            </div>
            {!passwordsMatch && <p style={{ color: 'red' }}>Passwords do not match!</p>}
          </div>

          <div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Email: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <input
                id="Email"
                name="Email"
                type="text"
                placeholder="Email"
                required
                className={`appearance-none text-gray-700 block w-full px-5 py-3 border ${isValidEmail ? 'border-green-500' : 'border-red-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={Email}
                onChange={handleEmailChange}
              />
            </div>
            {!isValidEmail && <p style={{ color: 'red' }}>Please enter a valid email!</p>}
          </div>

          <div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>National ID: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <input
                id="NationalID"
                name="NationalID"
                type="text"
                placeholder="National ID"
                required
                className={`appearance-none text-gray-700 block w-full px-5 py-3 border ${isValidNationalID ? 'border-green-500' : 'border-red-500'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={NationalID}
                onChange={handleNationalIDChange}
              />
            </div>
            {!isValidNationalID && <p style={{ color: 'red' }}>National ID must not be empty and must be exactly 14 number!</p>}
          </div>

          <div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>License number: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <input
                id="LicenseNumber"
                name="LicenseNumber"
                type="text"
                placeholder="License number"
                required
                className={`appearance-none text-gray-700 block w-full px-5 py-3 border ${isValidLicenseNumber ? 'border-green-500' : 'border-gray-300'} rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                value={LicenseNumber}
                onChange={handleLicenseNumberChange}
              />
            </div>
            {!isValidLicenseNumber && <p style={{ color: 'red' }}>License number must be exactly 6 number!</p>}
          </div>



          <div>
            <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Medical Specialty: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <select
                id="medical-specialty"
                placeholder="Medical Specialty"
                value={Typeofspecializtion}
                onChange={(e) => setTypeofspecializtion(e.target.value)}
                required
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Anatomical Pathology"selected >Anatomical Pathology</option>
                <option value="Anatomical Pathology">general specialty</option>
                <option value="Anesthesiology">Anesthesiology</option>
                <option value="Cardiovascular/Thoracic Surgery">Cardiovascular</option>
                <option value="Clinical Immunology/Allergy">Clinical Immunology</option>
                <option value="Critical Care Medicine">Critical Care Medicine</option>
                <option value="Dermatology">Dermatology</option>
              </select>
            </div>
          </div>

          <div>
          <label className="text-gray-700" style={{ display: 'flex', alignItems: 'center' }}>Governorate: <span style={{ color: 'red', marginLeft: 5 }}>*</span></label>
            <div className="mt-1">
              <select
                id="address-governorate"
                placeholder="Governorate"
                value={Governorate}
                onChange={(e) => setGovernorate(e.target.value)}
                className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="Cairo" selected>Cairo</option>
                <option value="Giza">Giza</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Qalyubia">Qalyubia</option>
                <option value="Sharqia">Sharqia</option>
                <option value="Dakahlia">Dakahlia</option>
                <option value="Gharbia">Gharbia</option>
                <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                <option value="Monufia">Monufia</option>
                <option value="Red Sea">Red Sea</option>
                <option value="New Valley">New Valley</option>
                <option value="Sohag">Sohag</option>
                <option value="Qena">Qena</option>
                <option value="Luxor">Luxor</option>
                <option value="Aswan">Aswan</option>
                <option value="Beni Suef">Beni Suef</option>
                <option value="Faiyum">Faiyum</option>
                <option value="Minya">Minya</option>
                <option value="Asyut">Asyut</option>
                <option value="Wadi">Wadi</option>
                <option value="South Sinai">South Sinai</option>
                <option value="North Sinai">North Sinai</option>
                <option value="Damietta">Damietta</option>
                <option value="Port Said">Port Said</option>
                <option value="Ismailia">Ismailia</option>
                <option value="Suez">Suez</option>
                <option value="Matruh">Matruh</option>
                <option value="New Alexandria">New Alexandria</option>
                <option value="New Capital">New Capital</option>
              </select>
            </div>
          </div>
          <div>
          <button
           class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-14"
           onClick={()=>UploadImage('license')}
           type="button"
           >
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 20v-6h5l-8-8-8 8h5v6h6zM5 8V2h10v6h2V2c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2z"/>
            </svg>
            <span>Upload License Image</span>
          </button>

          <button 
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          onClick={()=>UploadImage('profile')}
          type="button"
          >
            <svg class="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M10 20v-6h5l-8-8-8 8h5v6h6zM5 8V2h10v6h2V2c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v6h2z"/>
            </svg>
            <span>Upload Profile Image</span>
          </button>
          </div>

          <div>
            {/* <button
              onClick={(e) => handleSubmit(e)}
              type="submit"
              className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign up
            </button> */}
            <button
            onClick={(e) => handleSubmit(e)}
            type="submit"
            disabled={!isValidNationalID || !passwordsMatch || !NationalID || !Password || !ConfirmPassword || !isValidLicenseNumber || !isValidEmail || !isValidName || !isValidPhone || !Name || !Phone}
            className={`w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${(!isValidNationalID || !passwordsMatch || !NationalID || !Password || !ConfirmPassword || !isValidLicenseNumber || !isValidEmail || !isValidName || !isValidPhone || !Name || !Phone) ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            Sign up
          </button>
          </div>
          <div>
            <p className="flex justify-center px-5 text-black">Already have an account? <Link href="/" className='text-blue-500'>Login</Link></p>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SignUp;



