import React from 'react'

const DiagnosisList = ({datas}) => {
  return (
    <div className='w-[60%] bg-white opacity-100  py-4 px-8 rounded-xl '>
      <h2 className='font-semibold text-2xl'>Diagnosis History</h2>
    <div className='h-full'>
      <div className='flex h-12 mt-4 w-full bg-[#F6F7F8] rounded-full pl-4 justify-between items-center'>
        <p className='w-[20%]'>Problem/Diagnosis</p>
        <p className='w-[50%]'>Description</p>
        <p className='w-[20%]'>Status</p>
      </div>
      <div className=' h-[205px] overflow-y-auto mt-4 w-full px-1 justify-between '>
      {datas?.map((data, index) => (
        <div className='flex justify-between gap-x-2 p-2 w-full' key={index}>
            <p className='text-xs w-[20%]'>{data.name}</p>
            <p className='text-xs text-left w-[50%]'>{data.description}</p>
            <p className='text-sm w-[20%] ml-8'>{data.status}</p>
        </div>
            ))
        }
        </div>
    </div>
    </div>
  )
}

export default DiagnosisList;
