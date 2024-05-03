"use client"

import React, { useState } from 'react';
import Link from 'next/link';
import PostDoctor from '../../_utils/DoctorApis'
import Swal from 'sweetalert2'
import bcrypt from 'bcryptjs';

const SignUp = ({doctors}) => {
  const [Name, setName] = useState('');
  const [Password, setPassword] = useState('');
  // const [VerifyPassword, setVerifyPassword] = useState('');
  const [Phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  // const [Adress, setAdress] = useState('');
  const [NationalID, setNationalID] = useState('');
  // const [National, setNational] = useState('');
  // const [ExpiryDate, setExpiryDate] = useState('');
  const [LicenseNumber, setLicenseNumber] = useState('');
  const [Governorate, setGovernorate] = useState('');
  const [Typeofspecializtion, setTypeofspecializtion] = useState('');
  // const [UploadLicense, setUploadLicense] = useState('');
  // const [Profileimage, setProfileimage] = useState('');


  const generateRandomNumber = () => {
    let randomNumber = Math.floor(Math.random() * 900000 + 100000); // generate a random 6-digit number
    return randomNumber;
  }
  // const reg = 111111;
  const reg = generateRandomNumber();
  // console.log(reg)
 
  const user = doctors.find(
    (item) =>{
      const DNumber = item?.attributes?.reg_Num;
      const number = DNumber.substring(1);
      return number == reg;    
    }  
  );
  var valid_Reg_num  = 0
  if(!user){
    valid_Reg_num = reg
    console.log('valid Reg num ')
  }else{
   console.log('not valid reg num')
  }

  console.log(valid_Reg_num)


 // Hash the password

 const hashPassword = async (password) => {
  const salt = bcrypt.genSaltSync(10); // Generate a salt
  const hashedPassword = await bcrypt.hash(password, salt); // Hash the password with the salt
  return hashedPassword;
};
 

// const plaintextPassword = "D653225";
// bcrypt.compare(plaintextPassword, hashedPassword).then(isMatch => {
//   if (isMatch) {
//     console.log('The passwords match.');
//   } else {
//     console.log('The passwords do not match.');
//   }
// });
    

  

  const handleSubmit = async  (e) => {
    e.preventDefault();
      
    // Hash the password
     const hashedPassword = await hashPassword(`D${valid_Reg_num}`);
     
    //  console.log(hashedPassword)

    const data = {
      data:{
        reg_Num : `D${valid_Reg_num}`,
        Name : Name,
        Email : Email,
        phone : Phone,
        Address : Governorate,
        // Password : Password,
        Password : hashedPassword,
        Type_of_Spec : Typeofspecializtion,
        LicenseNumber : LicenseNumber,
        NationalID : NationalID,
        // LicenseImg: UploadLicense
      }
    }
    let timerInterval;
      Swal.fire({
        title: "Register now",
        html: "I will close in <b></b> milliseconds.",
        timer: 1000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
         
        }
      });
    PostDoctor.addDoctor(data).then((res) => {
     console.log("🚀 ~ PostDoctor.addDoctor ~ res:", res)
      Swal.fire({
        title: "Congratulations",
        text: "Your account has been registered successfully",
        icon: "success"
      });

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
    <form onSubmit={(e)=> handleSubmit(e)} className="space-y-6">
      <div>
        <label className="text-gray-700">Name:</label>
        <div className="mt-1 text-black">
          <input
            id="Name"
            name="Name"
            type="text"
            placeholder="Enter your name"
            required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>

   

      <div>
        <label className="text-gray-700">Phone Number:</label>
        <div className="mt-1">
          <input
            id="Phone"
            name="Phone"
            type="number"
            placeholder="Phone number"
            // required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="text-gray-700">Password:</label>
        <div className="mt-1">
          <input
            id="Password"
            name="Password"
            type="Password"
            placeholder="Password"
            required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
   
      <div>
        <label className="text-gray-700">Email:</label>
        <div className="mt-1">
          <input
            id="Email"
            name="Email"
            type="email"
            placeholder="a@.example"
            autoComplete="email"
            required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div>
        <label className="text-gray-700">National ID:</label>
        <div className="mt-1">
          <input
            id="NationalID"
            name="NationalID"
            type="number"
            placeholder="National ID"
            required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={NationalID}
            onChange={(e) => setNationalID(e.target.value)}
          />
        </div>
      </div>

   
      <div>
        <label className="text-gray-700">License Number:</label>
        <div className="mt-1">
          <input
            id="License number"
            name="License number"
            type="number"
            placeholder="License number"
            required
            className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            value={LicenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
          />
        </div>
      </div>



<div>
  <label className="text-gray-700">Medical Specialty:</label>
  <div className="mt-1">
    <select
      id="medical-specialty"
      placeholder="Medical Specialty"
      value={Typeofspecializtion}
      onChange={(e) => setTypeofspecializtion(e.target.value)}
      required
      className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="Anatomical Pathology">Anatomical Pathology</option>
      <option value="Anesthesiology">Anesthesiology</option>
      <option value="Cardiovascular/Thoracic Surgery">Cardiovascular/Thoracic Surgery</option>
      <option value="Clinical Immunology/Allergy">Clinical Immunology/Allergy</option>
      <option value="Critical Care Medicine">Critical Care Medicine</option>
      <option value="Dermatology" selected>Dermatology</option>
    </select>
  </div>
</div>

<div>
  <label className="text-gray-700">Governorate:</label>
  <div className="mt-1">
    <select
      id="address-governorate"
      placeholder="Governorate"
      value={Governorate}
      onChange={(e) => setGovernorate(e.target.value)}
      className="appearance-none text-gray-700 block w-full px-5 py-3 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    >
      <option value="Cairo">Cairo</option>
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
        onClick={(e)=> handleSubmit(e)}
          type="submit"
          className="w-full flex justify-center py-3 px-5 border border-transparent rounded-md shadow-sm text-xl font-medium text-white bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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


