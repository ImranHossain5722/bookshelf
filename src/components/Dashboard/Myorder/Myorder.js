import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart,FaCartPlus } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { RiDeleteBack2Fill} from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
const Myorder = () => {
  const user = useSelector((state) => state?.newUser?.user) 
  const [order, setOrders] = useState([])
  const userId = user?._id
  const orders = order.map(item => console.log("items",item.ordered_items)) 
  useEffect(() => {
    console.log("user",userId) 
    if(userId){

      axios.get(`https://book-shelf-webapp.herokuapp.com/get-order-data?id=${userId}`).then(data => setOrders(data.data))
    }
  }, [user])
   
  return (
    <div className="my-5">
    <p><FaHeart className='text-5xl text-primary mx-auto' /></p>
    <p className="text-5xl text-center mb-3">My Orders</p>
    <div className="w-full p-5">
        <div class="overflow-auto  h-[460px]">
            <table class="table w-full ">
                <thead>
                    <tr>
                        <th className="rounded-none">products</th>
                        <th>name</th>
                        <th>price</th>
                        <th>author</th>
                        <th>action</th> 

                    </tr>
                </thead>
                <tbody className="">
                    {/* {books?.map((book,index) => <tr >
                        <td className="border-[#e1e2e6]">
                            <div className="product gap-2">

                                <div class="avatar">
                                    <div class="w-20 rounded">
                                        <img src={book.book.book_cover_photo_url} />
                                    </div>
                                </div>
                               
                            </div>
                        </td>
                        <td>
                        <div className=" ">
                                    <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                                        {book.book.book_title} 
                                    </h3>
                                </div>
                        </td>
                        <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                            ${book.book.book_price}
                        </td>
                        <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                            Author name
                        </td>

                        <td className="border-[#e1e2e6] ">
                            <div className=" flex flex-col my-auto">

                                <button className=" btn btn-xs btn-warning text-white w-[155px] h-[24px] mb-3 rounded-full" onClick={() => addToCart(book.book._id)}>Add to cart <FaCartPlus className='ml-1 text-[16px]'/></button>
                                <button className=" btn btn-xs btn-error text-white w-[155px] h-[24px] rounded-full">delete <RiDeleteBack2Fill className='ml-1 text-[16px]'/></button>
                            </div>
                        </td>
                    </tr>)} */}

                </tbody>
            </table>
        </div>
      
    </div>

</div>
  )
}

export default Myorder