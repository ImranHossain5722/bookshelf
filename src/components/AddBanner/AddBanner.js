import React from 'react';
import { Link } from 'react-router-dom';

import banner from '../../Assets/images/Add-Banner-img/Banner-Ad.jpg';

const AddBanner = () => {
    return (
        <section className='w-11/12 mx-auto py-32 g-slate-300'>
            <Link to='/'>
                <img className='w-full rounded-2xl' src={banner} alt="" />
            </Link>
        </section>
    );
};

export default AddBanner;