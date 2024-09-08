import React from 'react';
import Download from '../../assets/download.svg';


const LabResultComp = ({datas}) => {
  return (
    <div className='w-[367px] bg-white opacity-100  py-4 px-8 rounded-xl mt-4'>
    <h2 className='font-semibold text-2xl'>Lab Result</h2>
  <div className='h-full'>
   
    <div className=' h-[205px] overflow-y-auto mt-4 w-full px-1 justify-between '>
    {datas?.map(data => (
      <div className='flex justify-between gap-x-2 p-2 w-full'>
          <p className='text-xs '>{data}</p>
          <img src={Download}/>
      </div>
          ))
      }
      </div>
  </div>
  </div>
  )
}

export default LabResultComp;
