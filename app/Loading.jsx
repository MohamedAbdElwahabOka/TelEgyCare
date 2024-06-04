
import Image from 'next/image';
import heart_loading from '/public/heart_loading.gif';
import Swal from 'sweetalert2'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>

    {/* {
      Swal.fire({
      title: 'Loading...',
      html: '<img class="my-loading-gif" src="/heart_loading.gif" alt="Loading..." />',
      showConfirmButton: false,
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      customClass: {
        popup: 'my-custom-popup'
      }
    })} */}



    
     <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }}>
      <Image src={heart_loading} width={300} height={300} alt="Consultant Icon" />
    </div>
    
    
    </>
  }