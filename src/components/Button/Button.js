import React from 'react';
import { FaChevronRight, FaArrowRight } from 'react-icons/fa';

const Button = ({ children }) => {
    return <button className='text-white text-xl bg-[#27AE61] hover:bg-[#293661] duration-500 rounded-lg px-8 py-3.5 flex items-center'>{children} <FaArrowRight className='ml-2' /></button>
};

export default Button;