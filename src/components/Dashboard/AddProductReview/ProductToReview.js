import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { FaCommentAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const ProductToReview = () => {
    const user = useSelector((state) => state?.newUser?.user)
    const [order, setOrders] = useState([])
    const userId = user?._id

    console.log('o', order)
    useEffect(() => {
        if (userId) {
            axios.get(`https://book-shelf-webapp.herokuapp.com/get-order-data?id=${userId}`).then(data => setOrders(data.data))
        }
    }, [userId])

    let deliveredOrders = [];
    // filter deliverd orders 
    order?.map(order => (order?.delivered_status === true) && deliveredOrders.push(order))

    const orderedBooks = deliveredOrders[0]?.ordered_items;
    console.log(orderedBooks);

    const navigate = useNavigate();
    const handleAddReview = id => {
        console.log(id);
        navigate(`/dashboard/addproductreviews/${id}`);
    }
    return (
        <div className="my-5">
            <p className="text-5xl text-center mb-3">Make Review</p>
            <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">Photo</th>
                                <th>Name</th>
                                {/* <th>Author</th> */}
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody className="">
                            {orderedBooks?.map((book) => <tr >
                                <td className="border-[#e1e2e6]">

                                    <img width={50} src={book?.book_id?.book_cover_photo_url} alt="" />

                                </td>
                                <td>
                                    <p>{book?.book_id?.book_title}</p>
                                </td>

                                <td className=" border-[#e1e2e6] text-[#00124E] font-bold">
                                    <button onClick={() => handleAddReview(book.book_id?._id)} title='Add Review' className=" btn btn-xs btn-error text-white  mb-3 rounded mr-1" ><FaCommentAlt className='font-bold text-[16px] ' /></button>
                                </td>


                            </tr>)}

                        </tbody>

                    </table>
                </div>

            </div>

        </div>
    );
};

export default ProductToReview;