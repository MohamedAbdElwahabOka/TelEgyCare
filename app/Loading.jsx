import Image from 'next/image';
import heart_loading from '/public/heart_loading.gif';
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
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