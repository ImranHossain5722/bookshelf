import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


const TrackOrders = () => {
    const { bookid } = useParams();
    const [orderData, setOrderData] = useState([]);
    // const [orderStatus, setOrderStatus] = useState('');
    const order = orderData[0];
    useEffect(() => {

        fetch(`https://book-shelf-webapp.herokuapp.com/get-order-details?oid=${bookid}`)
            .then(res => res.json())
            .then(data => setOrderData(data))
    }, [bookid])
    console.log(orderData)



    return (
        <div className='py-12'>
            <div>
                <h2 className='text-center font-semibold uppercase text-secondary text-[40px]'>Track Order </h2>
                <div className=" flex items-center justify-center pb-10">
                    <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
                </div>
            </div>

            <div>
                {order &&
                    <div className='w-4/6 mx-auto '>
                        <div className='p-8 mt-8 bg-white rounded-lg'>
                            <ul className="steps steps-vertical lg:steps-horizontal w-full">
                                <li className="step step-primary text-xl" data-content="✓">Order</li>
                                <li className={order?.picked_status === true ? "step step-primary text-xl" : "step text-xl"} data-content={order?.picked_status === true ? "✓" : "✕"}>Picked</li>
                                <li className={order?.delivered_status === true ? "step step-primary text-xl" : "step text-xl"} data-content={order?.delivered_status === true ? "✓" : "✕"}>Delivered</li>
                            </ul>
                        </div>
                        {/* order Summury  */}
                        <div className='p-8 mt-8 bg-white rounded-lg '>
                            <h2 className='font-bold text-xl border-b-2 pb-4'>Order Summury</h2>
                            <div className='flex'>
                                <div className='w-3/6 pt-4 mt-1 border-r-2 px-3'>
                                    <div className='flex py-4 border-b-2 '>
                                        <p className='w-1/2 font-bold'>Invoice :</p>
                                        <p className='w-1/2'>{order?._id}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Customer :</p>
                                        <p className='w-1/2'>{order?.user_id?.user_name}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Email :</p>
                                        <p className='w-1/2'>{order?.user_id?.user_email}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Shipping address :</p>
                                        <p className='w-1/2'>{order?.user_id?.user_address ? order?.user_id?.user_address : 'Not Available'}</p>
                                    </div>
                                </div>
                                <div className='w-3/6 pt-4 mt-1 px-3'>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Order date :</p>
                                        <p className='w-1/2'>{order?.placed_date}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Total order amount :</p>
                                        <p className='w-1/2'>{order?.ordered_price_amount}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Payment method :</p>
                                        <p className='w-1/2'>{order?.payment_info?.payment_type}</p>
                                    </div>
                                    <div className='flex py-4 border-b-2'>
                                        <p className='w-1/2 font-bold'>Delivery Status :</p>
                                        <p className='w-1/2'>{order?.picked_status === true ? (order?.delivered_status === true ? 'Order Delivered' : 'Picked for Deliver') : 'Order Received'}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* product details  */}
                        <div className='p-8 mt-8 bg-white rounded-lg '>

                            <h2 className='font-bold text-xl border-b-2 pb-4'>Product Details</h2>
                            <table className="table w-full">
                                <thead>
                                    <tr>
                                        <th className='text-lg'>Photo</th>
                                        <th className='text-lg'>Product Name</th>
                                        <th className='text-lg'>Unit Price</th>
                                        <th className='text-lg'>Order Qty</th>
                                        <th className='text-lg'>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {order?.ordered_items?.map(book => <tr key={book?._id}>
                                        <th><img src={book?.book_id?.book_cover_photo_url} width={50} height={50} alt="" /></th>
                                        <th>{book?.book_id?.book_title}</th>
                                        <td>{book?.book_id?.book_price}</td>
                                        <td>{book?.qnt}</td>
                                        <td>{book?.book_id?.book_price * book?.qnt}</td>

                                    </tr>)}

                                </tbody>

                            </table>
                        </div>




                    </div>}
            </div>
        </div>
    );
};

export default TrackOrders;