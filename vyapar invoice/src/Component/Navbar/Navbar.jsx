import React from 'react';
import { FaSearch, FaPlus, FaWhatsapp, FaBell, FaCogs } from 'react-icons/fa';

const Navbar = () => {
    return (
        <>
            <div>
                <div className='flex justify-between shadow-md h-[70px] p-3'>
                    <div className='flex text-gray-400 gap-3'>
                        <FaSearch className='mt-2.5' />
                        <input
                            type='text'
                            className='outline-none p-2 rounded'
                            placeholder='Search Transaction'
                        />
                    </div>
                    <div className='flex gap-3 '>
                        <button
                            className='flex items-center gap-2 bg-[#ffe5e9] text-[#ed1a3b] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '135px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#ed1a3b] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{fontSize:"15px",}}>Add Sale</span>
                        </button>
                        <button
                            className='flex items-center gap-2 bg-[#d2e9ff] text-[#0075e8] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '160px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#0075e8] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{ fontSize: "15px", }}>Add Purches</span>
                        </button>
                        <button
                            className='flex items-center gap-2 bg-[#ffffff] text-[#0075e8] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '145px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#0075e8] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{fontSize:"15px",}}>Add More</span>
                        </button>
                        <div className='d-flex mt-2 gap-3 mx-6'>
                            <FaWhatsapp style={{fontSize:"25px" ,color:"gray"}}/>
                            <FaBell style={{ fontSize: "25px", color: "gray" }} />
                            <FaCogs style={{ fontSize: "25px", color: "gray" }} />
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default Navbar;
