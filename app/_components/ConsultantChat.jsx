function Chat() {
  return (
  <div>
    <h5 className="text-lg font-semibold text-gray-700 mr-10">Upload files of results</h5>
      <div className="max-w-md mx-auto bg-white rounded-lg border shadow-md p-4">
        <div className="mb-3">
          <h5 className="text-lg font-semibold text-black">Dr. Ehab Khaled</h5>
          <p className="text-sm text-gray-500 ml-7">Gastroenterology Specialist</p>
          <hr className="w-60 ml-1 mt-2" />
        </div>
        <hr className="my-1 mt-40" />
        <div className="flex items-center justify-between">
          <button className="rounded-full bg-blue-500 text-white p-2" variant="ghost" htmlFor="file-input">
            <UploadIcon className="text-white" />
          </button>
          <div className="flex-grow mx-2">
            <input className="w-full rounded-full pl-10 text-black pr-10 py-2 border bg-gray-100" placeholder="" type="text" />
          </div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-full">send</button>
        </div>
      </div>
  </div>   
    )
  
  function UploadIcon(props) {
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
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="17 8 12 3 7 8" />
        <line x1="12" x2="12" y1="3" y2="15" />
      </svg>
    )
}
}
export default Chat

