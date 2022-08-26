import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { BsTruckFlatbed } from "react-icons/bs";
import axios from 'axios';
import { toast } from 'react-toastify';
import useGetUserData from '../../../hooks/useGetUserData';
import { format } from "date-fns";
import Loading from '../../Loading/Loading';



const Orders = () => {
    const { getUser } = useGetUserData();
    // console.log('userData', getUser);
    const { data: allOrders, refetch, isLoading } = useQuery(['allOrders'], () =>
        fetch(`https://book-shelf-webapp.herokuapp.com/all-orders`).then(res =>
            res.json()
        )
    )
    // console.log(allOrders)
    let newOrders = [];
    allOrders?.map(order => (order?.picked_status === false) && newOrders.push(order))
    // console.log('u', getUser)
    // console.log(newOrders)
    const today = new Date();
    const formatedData = format(today, 'dd.MM.yyyy');
    const pickOrder = (id) => {
        console.log('picked hit')

        const pickedData = {
            picked_status: true,
            picked_date: formatedData,
            picked_by: getUser[0]?._id
        }
        console.log('d', pickedData)

        fetch(`https://book-shelf-webapp.herokuapp.com/update-order-tracking?oid=${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(pickedData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                toast.success(`Order Picked for delivery`);

            })


        // axios.patch(`https://book-shelf-webapp.herokuapp.com/update-order-tracking?oid=${id}`, pickedData)
        //     .then(data => {
        //         console.log('patch', data)
        //         toast.success(`Order Picked for delivery`);
        //     })
        refetch();
    }


    return (
        <div>
            <div>

                <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>Orders </h2>
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
                                <th className='border border-[#666666]'>Order Date</th>
                                <th className='border border-[#666666]'>Action</th>
                            </tr>
                        </thead>
                        {isLoading ? <Loading></Loading> :
                            <tbody>
                                {newOrders?.map(order => <tr key={order?._id}>
                                    <th className='border border-[#666666]'>{order?._id}</th>
                                    <td className='border border-[#666666]'>{order?.user_id?.user_name}</td>
                                    <td className='border border-[#666666]'>Dhaka</td>
                                    <td className='border border-[#666666]'>01</td>
                                    <td className='border border-[#666666]'>{order?.ordered_price_amount}</td>
                                    <td className='border border-[#666666]'>{0}</td>
                                    <td className='border border-[#666666]'>{order?.payment_info?.payment_type}</td>
                                    <td className='border border-[#666666]'>{order?.placed_date}</td>
                                    <td className='border border-[#666666]'>
                                        <button onClick={() => pickOrder(order?._id)} className='btn btn-error  text-white'><BsTruckFlatbed /> <span className='ml-1'>Pick order</span> </button>
                                    </td>
                                </tr>)}

                            </tbody>
                        }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default Orders;