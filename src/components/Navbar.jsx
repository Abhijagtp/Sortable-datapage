import React, { useState } from 'react';
import logo from "../assets/logo.svg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full h-[80px] px-4 md:px-20 flex items-center justify-between shadow-lg border-b border-b-zinc-300 bg-gray-100 z-10'>
        <img src={logo} alt="Logo" />
        <div className='hidden  text-gray-500 sm:flex gap-8 md:gap-32 '>
          <h1 className=' hover:text-gray-600 font-semibold hover:font-bold cursor-pointer '>Tickets</h1>
          <h1 className=' hover:text-gray-600 font-semibold hover:font-bold cursor-pointer '>New Ticket</h1>
          <h1 className=' hover:text-gray-600 font-semibold hover:font-bold cursor-pointer'>Reports</h1>
        </div>
        <div className='sm:hidden'>
          <button onClick={() => setIsOpen(!isOpen)} className='focus:outline-none'>
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}></path>
            </svg>
          </button>
        </div>
        <h1 className='hidden md:flex w-[50px] h-[50px] bg-black text-white justify-center items-center rounded-full'>BG</h1>
        {isOpen && (
          <div className='sm:hidden absolute top-[80px] left-0 right-0 bg-gray-100 flex flex-col items-center shadow-lg border-t border-b-zinc-300'>
            <h1 className='py-2'>Tickets</h1>
            <h1 className='py-2'>New Ticket</h1>
            <h1 className='py-2'>Reports</h1>
          </div>
        )}
    </div>
  );
}

export default Navbar;
