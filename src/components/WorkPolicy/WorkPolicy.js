import React from 'react';
import freeShipping from '../../Assets/images/free-delivery_small.webp'
import payment from '../../Assets/images/shield_small.webp'
import price from '../../Assets/images/best-price_small.webp'
import Esayreturn from '../../Assets/images/return_small.webp'

const WorkPolicy = () => {
    return (
        <div className='workPolicy '>
            <div className=' lg:flex justify-center  gap-3 mb-[120px]'>
            <div className='freeShipping flex items-center gap-1'>
                <div className=''>
                    <img className='w-4/5' src={freeShipping} alt=''/>
                </div>
                <div className='text'>
                    <p className='text-secondary text-xl capitalize font-semibold'>free Shipping</p>
                    <p>Order Over $100</p>
                </div>

            </div>
        
            <div className='securePayment flex items-center  gap-1'>
                <div className=''>
                    <img className='w-4/5'  src={payment} alt=''/>
                </div>
                <div className='text'>
                <p className='text-secondary text-xl capitalize font-semibold'>Secure Payment</p>
                    <p>100% Secure Payment</p>
                </div>

            </div>
            <div className='BestPrice flex items-center  gap-1'>
                <div className=''>
                    <img className='w-4/5'  src={price } alt=''/>
                </div>
                <div className='text'>
                <p className='text-secondary text-xl capitalize font-semibold'>Best Price</p>
                    <p>Guaranteed Low Cost</p>
                </div>

            </div>
            <div className='easyreturn flex items-center  gap-1'>
                <div className=''>
                    <img className='w-4/5' src={Esayreturn} alt=''/>
                </div>
                <div className='text'>
                <p className='text-secondary text-xl capitalize font-semibold'>Easy Return</p>
                    <p>Within 30 Days returns</p>
                </div>

            </div>
            </div>
        </div>
    );
};

export default WorkPolicy;