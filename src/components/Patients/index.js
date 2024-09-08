import React from 'react'
import More from '../../assets/moree.svg';
import Doctor from '../../assets/woman.png';

const PatientsComp = ({items, handleClick}) => {


  return (
    <div className='w-[20%] bg-white opacity-100 h-[850px] p-4 rounded-xl '>
      <h2 className='font-semibold text-2xl'>Patients</h2>
    <div className='mt-8 h-[744px] overflow-y-auto'>
        {items?.map(item => (
            <div onClick={() => handleClick(item)} className='flex justify-between items-center py-2'>
                <div className='flex gap-x-2 items-center cursor-pointer'>
                    <img src={item?.profile_picture} alt='img' className='h-8'/>
                    <div>
                        <h3 className='font-semibold text-sm text-[#072635]'>{item?.name}</h3>
                        <p className='text-[#707070] text-xs'>{item?.gender}, <span>{item?.age}</span></p>
                    </div>
                </div>
              <img src={More} alt='img' className='cursor-pointer'/>
            </div>
        ))}
    </div>
    </div>
  )
}

export default PatientsComp;
