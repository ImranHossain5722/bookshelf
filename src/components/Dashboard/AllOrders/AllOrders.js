import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allOrders } from '../../Redux/actions/bookActions'
import axios from 'axios'


const AllOrders = () => {

const [order, setOrders] = useState([]) 
const orders = order?.map(item => item)
console.log(orders)
  useEffect(() => {
   fetch('https://book-shelf-webapp.herokuapp.com/all-orders').then(res => res.json()).then(data => setOrders(data))
  }, [order])
  
  return (
    <div className="my-5">
    <p className="text-5xl text-center mb-3">All Orders</p>
    <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">Transiction Id</th>
                                <th className=" text-center">User Name</th>
                                <th className="w-full text-center">
                                    order details
                                </th>

                            </tr>
                        </thead>
                        <tbody className="w-full">
                        {orders?.map(order =>
                            <tr >

                                <td className="border-[#e1e2e6]">
                                   

                                        <div className="avatar">
                                            <div className="w rounded text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                                            {order?._id.slice(0,15)}... 
                                            
                                        </div>
                                        

                                    </div>
                                </td>
                                <td className="border-[#e1e2e6]">
                                  

                                        <div className="avatar">
                                            <div className="w rounded text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold ">
                                            {order.user_id?.user_email}
                                            </div>

                                    </div>
                                </td>
                                
                                   <table  className="table w-full ">
        <tbody>
                                {order.ordered_items?.map(book => <tr className='w-full'>
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

                                   
                                   
                                </tr>
                                )}
                                </tbody>
              </table>
                        </tr>
                        )}
                        </tbody>


                    </table>
                </div>

            </div>

</div>
  )
}
    
export default AllOrders