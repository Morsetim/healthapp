import { useState } from 'react';
import TestLog from '../../assets/TestLogo.svg';
import Settings from '../../assets/settings.svg';
import More from '../../assets/more.svg';
import Doctor from '../../assets/woman.png';
import { NavBarItem } from './navItem';

const NavBar = () => {  
  


  return (
    <div className="rounded-full py-2 px-8 flex bg-white opacity-100 justify-between items-center"> 
      <img src={TestLog} alt='logo' />
      <div className="flex gap-x-4">{NavBarItem.map((list, index) => (
        <div className="flex gap-x-2 p-2 rounded-full h-8 hover:bg-[#01F0D0] cursor-pointer">
            <img src={list.icon} alt='icon' className=""/>
            <p className="text-xs">{list.text}</p>
        </div>
      ))}
      </div>
      <div className="flex gap-x-2">
        <img src={Doctor} alt='senior-woman' />
        <div className="p-2 border-r ">
            <p className="font-semibold text-xs">Dr. Jose Simmons</p>
            <p className="text-xs text-[#707070]">General Practitioner</p>
        </div>
        <img src={Settings} alt='settings' />
        <img src={More} alt='more' />
      </div>
    </div>
  )
}


export default NavBar;
