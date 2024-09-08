import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import BodyComp from '../Body';
import Respiratory from '../../assets/respiratory.svg';
import Temp from '../../assets/temp.svg';
import Heart from '../../assets/HeartBPM.svg';
import ArrowDown from '../../assets/arrowDown.svg';





const DiagnosisHistComp = ({
    data, 
    rateVal,
    tempVal, 
    heartVal,
    count,
    systolic,
    diastolic
}) => {


    const transformedData = data?.map((data) => {
      const monthAbbr = data.month.substring(0, 3);
      const name = `${monthAbbr}, ${data.year}`;
     
      const systolic = data.blood_pressure.systolic.value;
      const diastolic = data.blood_pressure.diastolic.value;
    
      return { name, systolic, diastolic };
    });


  return (
    <div className="bg-white h-[600px] opacity-100 w-[60%] rounded-lg p-4">
    <h2 className='font-semibold text-2xl'>Diagnosis History</h2>
    <div className='bg-[#F4F0FE] flex p-2 rounded-lg gap-x-4'>
        
        <ResponsiveContainer width="70%" height={300}>
        <div className='flex w-full justify-between'>
         <p className='ml-8 mb-4 font-semibold'>Blood Pressure </p> 
         <div className='flex items-center gap-x-2'>Last {count} months <span><img src={ArrowDown} alt="img"/></span></div>
        </div>
        <LineChart data={transformedData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="systolic" stroke="#FF6384" />
            <Line type="monotone" dataKey="diastolic" stroke="#36A2EB" />
        </LineChart>
        </ResponsiveContainer>
        <div className='w-[25%]'>
            <div className='mt-4 border-b-2 pb-4'>
                <div className='flex gap-x-2 items-center'>
                <div className="h-[14px] w-[14px] rounded-full bg-[#E66FD2] "></div>
                <p>Systolic</p>
                </div>
                <p className='font-semibold text-lg mt-2'>{systolic.value}</p>
                <p className='mt-2 text-sm font-thin'>{systolic.levels}</p>
            </div>
            <div className='mt-4 '>
                <div className='flex gap-x-2 items-center'>
                <div className="h-[14px] w-[14px] rounded-full bg-[#8C6FE6] "></div>
                <p>Diastolic</p>
                </div>
                <p className='font-semibold text-lg mt-2'>{diastolic.value}</p>
                <p className='mt-2 text-sm font-thin'>{diastolic.levels}</p>
            </div>
        </div>
    </div>
    <div className='flex mt-4 justify-between'>
        <BodyComp 
        img={Respiratory}
        bg='rose-600'
        className={`w-[228px]  bg-[#E0F3FA] mt-4 rounded-lg p-4`}
        textOne={'Respiratory rate'}
        textTwo={`${rateVal.value} bpm`}
        textThree={rateVal.levels}
        />
        <BodyComp 
        img={Temp}
        className={`w-[228px] bg-[#FFE6E9] mt-4 rounded-lg p-4`}
        textOne={'Temperature'}
        textTwo={`${tempVal.value} °F`}
        textThree='Normal'
        />
        <BodyComp 
        img={Heart}
        className={`w-[228px] bg-[#FFE6F1] mt-4 rounded-lg p-4`}
        textOne={'Heart Rate'}
        textTwo={`${heartVal.value} bpm`} 
        textThree='Lower than Average'
        />
    </div>
    </div>
  )
}

export default DiagnosisHistComp;
