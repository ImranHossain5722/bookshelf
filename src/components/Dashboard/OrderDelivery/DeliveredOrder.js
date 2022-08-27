import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';

import useGetUserData from '../../../hooks/useGetUserData';


const DeliveredOrder = () => {
    const [orderQty, setOrderQty] = useState(0);

    const { getUser } = useGetUserData();

    const calOrderQty = (qty) => {
        const newOrderQty = orderQty + qty;
        setOrderQty(newOrderQty);
    }

    const { data: allOrders } = useQuery(['allOrders'], () =>

        fetch(`https://book-shelf-webapp.herokuapp.com/delivered-orders?uid=${getUser[0]?._id}`).then(res =>
            res.json()
        )
    )
    // console.log(allOrders)
    let newOrders = [];
    allOrders?.map(order => {
        if (order?.delivered_status === true) {
            newOrders.push(order);
        }
    })


    return (
        <div>
            <div>
                <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>Delivered Orders </h2>
                <div className=" flex items-center justify-center pb-10">
                    <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
                </div>
            </div>
            <div className='w-5/6 mx-auto'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>
                                <th className='border border-[#666666]'>Invoice No</th>
                                <th className='border border-[#666666]'>Customer Name</th>
                                <th className='border border-[#666666]'>Delivery Address</th>
                                <th className='border border-[#666666]'>Phone no</th>
                                <th className='border border-[#666666]'>Order Total</th>
                                <th className='border border-[#666666]'>Order Qty</th>
                                <th className='border border-[#666666]'>Payment Type</th>
                                <th className='border border-[#666666]'>Delivery Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {newOrders?.map(order => <tr key={order?._id}>
                                <th className='border border-[#666666]'>{order?._id}</th>
                                <td className='border border-[#666666]'>{order?.user_id?.user_name}</td>
                                <td className='border border-[#666666]'>Dhaka</td>
                                <td className='border border-[#666666]'>01</td>
                                <td className='border border-[#666666]'>{order?.ordered_price_amount}</td>
                                <td className='border border-[#666666]'>0</td>
                                <td className='border border-[#666666]'>{order?.payment_info?.payment_type}</td>
                                <td className='border border-[#666666]'>{order?.delivered_date}</td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default DeliveredOrder;