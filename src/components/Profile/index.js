import React from 'react';
import Calend from '../../assets/calend.svg';
import FemaleIcon from '../../assets/FemaleIcon.svg';
import PhoneIcon from '../../assets/PhoneIcon.svg';
import InsuranceIcon from '../../assets/InsuranceIcon.svg';






const Profile = ({
    img, 
    name,
    dob,
    gender,
    contact,
    emergency,
    insurance,
}) => {
    const dateStr = dob;
    const date = new Date(dateStr);
    const formattedDate = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      }).format(date);
      
      console.log(formattedDate);
  return (
    <div className='bg-white opacity-100  w-[367px] rounded-lg px-6 py-6 flex flex-col'>
      <div className=' rounded-full self-center flex justify-center items-center'>
        <img src={img} className='w-[200px] h-[200px]' alt="img"/>
      </div>
      <p className='text-center font-semibold text-2xl mt-4'>{name}</p>
      <div className='mt-8 flex flex-col gap-y-6'>
        <div className='flex gap-x-4 items-center'>
            <div className='w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#f7f6f7]'>
            <img src={Calend} alt="img"/>
            </div>
            <div className=''>
                <p className="text-xs font-thin">Date Of Birth</p>
                <p className="text-xs  font-semibold">{formattedDate}</p>
            </div>
        </div>
        <div className='flex gap-x-4 items-center'>
            <div className='w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#f7f6f7]'>
            <img src={FemaleIcon} alt="img"/>
            </div>
            <div>
                <p className="text-xs font-thin">Gender</p>
                <p className="text-xs font-semibold">{gender}</p>
            </div>
        </div>
        <div className='flex gap-x-4 items-center'>
            <div className='w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#f7f6f7]'>
            <img src={PhoneIcon} alt="img"/>
            </div>
            <div>
                <p className="text-xs font-thin">Contact Info.</p>
                <p className="text-xs  font-semibold">{contact}</p>
            </div>
        </div>
        <div className='flex gap-x-4 items-center'>
            <div className='w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#f7f6f7]'>
            <img src={PhoneIcon} alt="img"/>
            </div>
            <div>
                <p className="text-xs font-thin">Emergency Contacts</p>
                <p className="text-xs  font-semibold">{emergency}</p>
            </div>
        </div>
        <div className='flex gap-x-4 items-center'>
            <div className='w-[42px] h-[42px] rounded-full flex justify-center items-center bg-[#f7f6f7]'>
            <img src={InsuranceIcon} alt="img"/>
            </div>
            <div>
                <p className="text-xs font-thin">Insurance Provider</p>
                <p className="text-xs font-semibold">{insurance}</p>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Profile;
