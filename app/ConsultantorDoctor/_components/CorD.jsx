'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

function CorD() {
    const router = useRouter();
    const handleInputClick = (value) => {
        if (value === 'Doctor') {
            // setTimeout(() => {
              router.push('/SignUp?D=Doctor'); // replace '/signup' with the actual path to your signup page
            // }, 2000);
          }else if(value === 'Consultant'){
            router.push('/SignUp?D=Consultant');
          }
      };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200">
        <div className="mx-auto max-w-6xl px-12">
        <div className="flex flex-wrap justify-center gap-3">
            {/* !Doctor */}
            <label className="cursor-pointer">
                <input type="radio" className="peer sr-only" name="pricing" onClick={() => handleInputClick('Doctor')} />
                {/* <img src="path_to_your_image" alt="description_of_the_image" /> */}
                 <div className="w-72 max-w-xl rounded-md bg-white  p-5 text-gray-600  ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold uppercase text-lg font-bold">Doctor</p>
                        <div>
                            <svg className="text-lg font-bold" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                        </div>
                        </div>
                        {/* <div className="flex items-end justify-between">
                        <p><span className="text-lg font-bold">12 GB</span> of storage</p>
                        <p className="text-sm font-bold">$12 / mo</p>
                        </div> */}
                    </div>
                </div>
            </label>

        <label className="cursor-pointer">
                <input type="radio" className="peer sr-only " name="pricing" onClick={() => handleInputClick('Consultant')}  />
                 <div className="w-72 max-w-xl rounded-md bg-white  p-5 text-gray-600  ring-2 ring-transparent transition-all hover:shadow peer-checked:text-sky-600 peer-checked:ring-blue-400 peer-checked:ring-offset-2">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                        <p className="text-sm font-semibold uppercase text-lg font-bold">Consultant</p>
                        <div>
                            <svg className="text-lg font-bold" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m10.6 13.8l-2.175-2.175q-.275-.275-.675-.275t-.7.3q-.275.275-.275.7q0 .425.275.7L9.9 15.9q.275.275.7.275q.425 0 .7-.275l5.675-5.675q.275-.275.275-.675t-.3-.7q-.275-.275-.7-.275q-.425 0-.7.275ZM12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z" /></svg>
                        </div>
                        </div>
                        {/* <div className="flex items-end justify-between">
                        <p><span className="text-lg font-bold">12 GB</span> of storage</p>
                        <p className="text-sm font-bold">$12 / mo</p>
                        </div> */}
                    </div>
                </div>
        </label>

        </div>
        </div>
    </div>
  )
}

export default CorD
