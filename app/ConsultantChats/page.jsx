import Link from 'next/link'
import Chat from '../_components/ConsultantChat'
import Sidebar from '../_components/Sidebar'

function Chats() {
  return (
    // <div>
    //  <div className="flex h-screen">  
    //   <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
    //   <div className="flex-grow bg-gray-100 p-8">
    //     <Chat />
    //   </div>
    // </div>
    // </div>


    <>

    {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h1>Coming Soon</h1>
      <p>We're currently working on this page. Stay tuned!</p>
    </div> */
    }

<section class="bg-gray-50">
  <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
    <div class="mx-auto max-w-xl text-center">
      <h1 class="text-3xl font-extrabold sm:text-5xl">
        <strong class="font-extrabold text-[#0070CD] sm:block"> Coming Soon...</strong>
      </h1>

      <p class="mt-4 sm:text-xl/relaxed">
      We're currently working on this page. Stay tuned!
      </p>

      
    </div>
  </div>
</section>
    
    </>
  )
}

export default Chats

