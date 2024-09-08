import React from 'react'
import Respiratory from '../../assets/respiratory.svg';

const BodyComp = ({img, bg, textOne, textTwo, textThree, className}) => {
  return (
    <div className={className || ``}>
      <div className='w-[76px] h-[76px] rounded-full bg-white flex items-center justify-center'>
        <img src={img} />
      </div>
      <p className='text-xs mt-2'>{textOne}</p>
      <p className='font-bold text-2xl'>{textTwo}</p>
      <p className='mt-2 text-[9px]'>{textThree}</p>
    </div>
  )
}

export default BodyComp
