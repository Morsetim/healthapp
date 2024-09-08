import NavBar from "./components/Navbar";
import { useState, useEffect } from 'react';
import axios from 'axios';
import PatientsComp from "./components/Patients";
import DiagnosisHistComp from "./components/DiagnosisHistory";
import BodyComp from "./components/Body";
import Profile from "./components/Profile";
import DiagnosisList from "./components/DiagnosticList";
import LabResultComp from "./components/LabResult";
let username = 'coalition';
let password = 'skills-test';
let auth = btoa(`${username}:${password}`);




function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [patient, setPatient] = useState(null);
  const [showData, setShowData] = useState(false)

   
  const fetchData = async () => {
    try {
      const response = await axios.get('https://fedskillstest.coalitiontechnologies.workers.dev/', {
        headers: {
          Authorization: `Basic ${auth}`
        },
      });
      return setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error; 
    }
  };

  useEffect(() => {
    fetchData()
  }, [])
 

  const getPatient = (data) => {
    setPatient(data)
    setShowData(true)
  }

  const count = patient?.diagnosis_history.length


  return (
    <div className="bg-[#F6F7F8] min-h-screen p-4">
     <NavBar />
     <div className="flex gap-x-4 mt-8">
      <PatientsComp items={data} handleClick={getPatient}/>
      <div className="w-full">
        {showData ?
        <div className="">
          <div className="flex gap-x-8 ">
          <DiagnosisHistComp 
          data={patient?.diagnosis_history}
          rateVal={patient?.diagnosis_history[0].respiratory_rate}
          tempVal={patient?.diagnosis_history[0].temperature}
          heartVal={patient?.diagnosis_history[0].heart_rate}
          count={count}
          systolic={patient?.diagnosis_history[0].blood_pressure.systolic}
          diastolic={patient?.diagnosis_history[0].blood_pressure.diastolic}
          />
        <Profile 
        img={patient?.profile_picture}
        name={patient?.name}
        dob={patient?.date_of_birth}
        gender={patient?.gender}
        contact={patient?.phone_number}
        emergency={patient?.emergency_contact}
        insurance={patient?.insurance_type}
        />
          </div>
          <div className="flex w-full  gap-x-8">
          <DiagnosisList datas={patient.diagnostic_list}/>
          <LabResultComp datas={patient.lab_results}/>
          </div>
        </div>
        : 
        <p>Please Select the patient list on your left to view Patient health infomation....</p>
        }
      </div>
     </div>
    </div>
  );
}

export default App;
