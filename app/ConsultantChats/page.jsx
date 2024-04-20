import Chat from '../_components/ConsultantChat'
import Sidebar from '../_components/Sidebar'

function Chats() {
  return (
    <div>
     <div className="flex h-screen">  
      <Sidebar className="w-64 bg-gray-800 text-white px-4 py-8" />
      <div className="flex-grow bg-gray-100 p-8">
        <Chat />
      </div>
    </div>
    </div>
  )
}

export default Chats

// import Chat from '../_components/ConsultantChat'
// import Sidebar from '../_components/Sidebar'

// function Chats() {
//   return (
//       <>
//         <Chat />
//     </>
//   )
// }

// export default Chats