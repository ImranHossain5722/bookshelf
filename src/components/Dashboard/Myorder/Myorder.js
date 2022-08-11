import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Myorder = () => {
    const user = useSelector((state) => state?.newUser?.user)
    const [order, setOrders] = useState([])
    const userId = user?._id
    const orders = order.map(item => item)
 

    useEffect(() => {
        console.log("user", userId)
        if (userId) {

            axios.get(`https://book-shelf-webapp.herokuapp.com/get-order-data?id=${userId}`).then(data => setOrders(data.data))
        }
    }, [user])
    console.log(order)

    return (
        <div className="my-5">
            <p className="text-5xl text-center mb-3">My Orders</p>
            <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">Transiction Id</th>
                                <th className="w-full text-center">
                                    order details
                                </th>

                            </tr>
                        </thead>

                        {orders?.map(order => <tbody className="w-full">
                            <tr >
                                <td className="border-[#e1e2e6]">
                                    <div className="product gap-2">

                                        <div className="avatar">
                                            <div className="w rounded text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                            {order._id.slice(0,20)}
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                {order.ordered_items.map(book => <tr className='w-full'>
                                    <td>
                                        <div class="avatar">
                                            <div class="w-16 rounded">
                                                <img src={book.book_id?.book_cover_photo_url} alt="" />
                                            </div>
                                        </div>

                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                    {book.book_id?.book_title} 
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                    ${book.book_id?.book_price} 
                                      
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                    {order?.createdAt.slice(0,10)}
                                      
                                    </td>

                                    <td className="border-[#e1e2e6] ">
                                        <div className=" flex flex-col my-auto">
                                            <button className=" btn btn-xs btn-warning text-white w-[130px] h-[24px] rounded-full">{order?.order_status} </button>
                                        </div>
                                    </td>
                                    <td className="border-[#e1e2e6] ">
                                        <div className=" flex flex-col my-auto">
                                            <button className=" btn btn-xs btn-error text-white w-[130px] h-[24px] rounded-full">Cancel </button>
                                        </div>
                                    </td>
                                </tr>
                                )}
                            </tr>
                        </tbody>
                        )}


                    </table>
                </div>

            </div>

        </div>
    )
}

export default Myorder