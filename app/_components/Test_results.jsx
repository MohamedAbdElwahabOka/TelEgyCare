import Image from "next/image";
import logo from '/public/logo.svg'
  const patients = [
    {
      name: "Adeline Runte",
      id: "1",
      hospital_name: "Greenfelder, Leffler and Stamm",
      test_name: "interdum",
    },
    {
      name: "Maxime Walter",
      id: "2",
      hospital_name: "Gerlach, Stamm and Windler",
      test_name: "convallis",
    },
    {
      name: "Elwin Bins",
      id: "3",
      hospital_name: "Wunsch LLC",
      test_name: "tempus",
    },
    {
      name: "Gavin Ruecker",
      id: "4",
      hospital_name: "Schumm, Hyatt and Glover",
      test_name: "Curabitur",
    },
    {
      name: "Bernie Wuckert",
      id: "5",
      hospital_name: "Erdman and Sons",
      test_name: "risus",
    },
    {
      name: "Ms. Yvonne Johns",
      id: "6",
      hospital_name: "Kuhn - Borer",
      test_name: "malesuada",
    },
    {
      name: "Martina Rau",
      id: "7",
      hospital_name: "Bayer, Paucek and Mills",
      test_name: "aliquam",
    },
    {
      name: "Prof. Joannie Breitenberg",
      id: "8",
      hospital_name: "Bayer - O'Connell",
      test_name: "vehicula",
    },
    {
      name: "Joanne Mraz",
      id: "9",
      hospital_name: "McCullough, Kuphal and Cartwright",
      test_name: "Integer",
    },
    {
      name: "Katelynn Hoeger",
      id: "10",
      hospital_name: "Smith, Tromp and Bauch",
      test_name: "Suspendisse",
    },
    {
      name: "Dewitt Mann",
      id: "11",
      hospital_name: "Howe - Klocko",
      test_name: "posuere",
    },
    {
      name: "Ms. Melba Schimmel",
      id: "12",
      hospital_name: "Volkman, Goldner and Zboncak",
      test_name: "egestas",
    },
    {
      name: "Kayleigh Ankunding",
      id: "13",
      hospital_name: "Veum and Sons",
      test_name: "condimentum",
    },
    {
      name: "Rosina Heathcote",
      id: "14",
      hospital_name: "Kuvalis - Reynolds",
      test_name: "Vivamus",
    },
    {
      name: "Monserrat Wintheiser",
      id: "15",
      hospital_name: "Kulas and Sons",
      test_name: "elementum",
    },
    {
      name: "Vicky Muller",
      id: "16",
      hospital_name: "Baumbach Group",
      test_name: "ligula",
    },
    {
      name: "Shanny Rutherford",
      id: "17",
      hospital_name: "Legros, Pacocha and Stracke",
      test_name: "nunc",
    },
    {
      name: "Julia Wolff",
      id: "18",
      hospital_name: "Yundt - Grant",
      test_name: "vestibulum",
    },
    {
      name: "Jacklyn Braun",
      id: "19",
      hospital_name: "Ullrich - Heller",
      test_name: "tempor",
    },
    {
      name: "Prof. Adelbert VonRueden",
      id: "20",
      hospital_name: "Mante, Swift and Doyle",
      test_name: "nullam",
    },
    {
      name: "Gertrude Murazik",
      id: "21",
      hospital_name: "Carroll - Bartoletti",
      test_name: "sagittis",
    },
    {
      name: "Norval Schiller",
      id: "22",
      hospital_name: "Mante Inc",
      test_name: "Phasellus",
    },
    {
      name: "Caitlyn Kiehn",
      id: "23",
      hospital_name: "Reichel - Dach",
      test_name: "rutrum",
    },
    {
      name: "Renee Kertzmann",
      id: "24",
      hospital_name: "DuBuque, Waelchi and Marquardt",
      test_name: "ornare",
    },
    {
      name: "Judy Grant",
      id: "25",
      hospital_name: "Hermann and Sons",
      test_name: "tortor",
    },
    {
      name: "Thurman Friesen",
      id: "26",
      hospital_name: "Purdy - Bashirian",
      test_name: "sodales",
    },
    {
      name: "Prof. Cristal Wilkinson",
      id: "27",
      hospital_name: "Schulist Group",
      test_name: "dapibus",
    },
    {
      name: "Gerald Kuhlman",
      id: "28",
      hospital_name: "Weissnat - Kessler",
      test_name: "Pellentesque",
    },
    {
      name: "Estrella Wiegand",
      id: "29",
      hospital_name: "O'Conner Group",
      test_name: "sapien",
    },
    {
      name: "Deangelo Borer",
      id: "30",
      hospital_name: "Bernhard, Auer and Dach",
      test_name: "Etiam",
    },
  ];
  

function TestResults (){
    return(
        <div>
      <header className="bg-gray-100 text-blue-500 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <div>
          <Image src={logo} width={60} height={60} className="text-blue-500" />
          </div>
          
          <nav>
            <ul className="flex space-x-6 md:space-x-8">
            <li>
            <h4 className="nav-link">Hello, Dr.Abdelrahman</h4>
            </li>
            <li>
            <Image src={logo} width={40} height={40} className="text-blue-500 nav-link" />
            </li>
            </ul>
          </nav>
        </div>
        <h3 className="text-2xl md:text-4xl lg:text-5xl font-bold p-20">Test Results </h3>
      </header>
        <section className="grid md:grid-cols-1 gap-4 px-8 w-full bg-gray-100">
              {patients.map((patient) => ( 
                <div key={patient.id}>
                <div className="bg-white p-2 rounded shadow-md flex flex-col w-full">
               <div className="flex items-center mb-4">
               <div className="ml-4">
              <h3 className="text-xl font-bold mb-2">Patient Information</h3>
                <p><strong>Name:</strong> {patient.name}</p>
                <p><strong>Patient ID:</strong>{patient.id}</p>
                
              <div >
              <h3 className="text-xl font-bold mt-4">Analysis Results: {patient.test_name}</h3>
                <p>Performed by : {patient.hospital_name}</p>
                <p>Download the full report for more details.</p>
              </div>
            </div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mt-auto ml-auto">Download</button>
        </div>
              </div>
                ))}
        
      </section>
      </div>     
    );
}
export default TestResults;