import React from 'react';
import { FaSearch, FaPlus, FaWhatsapp, FaBell, FaCogs, FaHome, FaBriefcase } from 'react-icons/fa';
import './Navbar.css';  // Ensure you have this CSS file for styling

const Navbar = ({ isMobile }) => {
    return (
        <div className={`d-flex ${isMobile ? 'justify-content-between' : 'justify-between'} shadow-md w-full h-[70px] p-3`}>
            {isMobile ? (
                <div className='d-flex gap-3'>
                    <button
                        className='d-flex align-items-center gap-2 bg-[#d2e9ff] text-[#0075e8] px-4 py-2 rounded-full shadow-md'
                        style={{ border: 'none', width: '170px', height: '40px' }}
                    >
                        <FaBriefcase className='bg-[#0075e8] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                        <span style={{ fontSize: "15px" }}>Business</span>
                    </button>
                    <FaHome style={{ fontSize: "25px", color: "gray" }} />
                </div>
            ) : (
                <>
               
                    <div className='d-flex text-gray-400 gap-3'>
                        <FaSearch className='mt-2.5' />
                        <input
                            type='text'
                            className='outline-none p-2 rounded'
                            placeholder='Search Transaction'
                            style={{ fontSize: "18px" }}
                        />
                    </div>
                    <div className='d-flex gap-3'>
                        <button
                            className='d-flex align-items-center gap-2 bg-[#ffe5e9] text-[#ed1a3b] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '135px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#ed1a3b] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{ fontSize: "15px" }}>Add Sale</span>
                        </button>
                        <button
                            className='d-flex align-items-center gap-2 bg-[#d2e9ff] text-[#0075e8] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '170px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#0075e8] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{ fontSize: "15px" }}>Add Purchase</span>
                        </button>
                        <button
                            className='d-flex align-items-center gap-2 bg-[#ffffff] text-[#0075e8] px-4 py-2 rounded-full shadow-md'
                            style={{ border: 'none', width: '145px', height: '40px' }}
                        >
                            <FaPlus className='bg-[#0075e8] text-white p-1 rounded-full' style={{ width: '20px', height: '20px' }} />
                            <span style={{ fontSize: "15px" }}>Add More</span>
                        </button>
                        <div className='d-flex mt-2 gap-3 mx-6'>
                            <FaWhatsapp style={{ fontSize: "25px", color: "gray" }} />
                            <FaBell style={{ fontSize: "25px", color: "gray" }} />
                            <FaCogs style={{ fontSize: "25px", color: "gray" }} />
                        </div>
                    </div>
                        
                </>
            )}
        </div>
    );
};

export default Navbar;
