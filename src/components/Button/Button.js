import React from 'react';

const Button = ({ children }) => {
    return <button className='text-white text-xl bg-[#27AE61] hover:bg-[#293661] duration-500 rounded-lg px-8 py-3.5'>{children}</button>
};

export default Button;