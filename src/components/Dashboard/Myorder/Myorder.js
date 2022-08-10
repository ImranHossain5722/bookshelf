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
    const ordersr = order.map(item => console.log("order", item))

    const dumOrders = orders.map(order => console.log("orders", order))

    useEffect(() => {
        console.log("user", userId)
        if (userId) {

            axios.get(`https://book-shelf-webapp.herokuapp.com/get-order-data?id=${userId}`).then(data => setOrders(data.data))
        }
    }, [user])
    console.log(order)

    return (
        <div className="my-5">
            <p><FaHeart className='text-5xl text-primary mx-auto' /></p>
            <p className="text-5xl text-center mb-3">My Orders</p>
            <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">products</th>
                                <th className ="w-full">
                                    <th>
        name
                                    </th>
                                    
                                <th>price</th>
                               
                                <th>author</th>
                                <th>action</th>
                                </th>

                            </tr>
                        </thead>

                        {orders?.map(order => <tbody className="">
                            <tr >
                                <td className="border-[#e1e2e6]">
                                    <div className="product gap-2">

                                        <div className="avatar">
                                            <div className="w rounded">
                                                {/* <img src={book.book.book_cover_photo_url} /> */}{order._id}
                                            </div> 
                                        </div>

                                    </div>
                                </td>
                                <tr>
                                    <td>
                                        <div className=" ">
                                            <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                                                {/* {book.book.book_title}  */} hello
                                            </h3>
                                        </div>
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                        {/* ${book.book.book_price} */} hello
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                        Author name
                                    </td>

                                    <td className="border-[#e1e2e6] ">
                                        <div className=" flex flex-col my-auto">


                                            <button className=" btn btn-xs btn-error text-white w-[155px] h-[24px] rounded-full">delete <RiDeleteBack2Fill className='ml-1 text-[16px]' /></button>
                                        </div>
                                    </td>
                                </tr>
                                {order.ordered_items.map(order => <tr>
                                    <td>
                                        <div className=" ">
                                            <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                                                {/* {book.book.book_title}  */} hello
                                            </h3>
                                        </div>
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                        {/* ${book.book.book_price} */} hello
                                    </td>
                                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                        Author name
                                    </td>

                                    <td className="border-[#e1e2e6] ">
                                        <div className=" flex flex-col my-auto">


                                            <button className=" btn btn-xs btn-error text-white w-[155px] h-[24px] rounded-full">delete <RiDeleteBack2Fill className='ml-1 text-[16px]' /></button>
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