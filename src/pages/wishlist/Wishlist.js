import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaCartPlus } from 'react-icons/fa'
import { MdShoppingCart } from 'react-icons/md'
import { RiDeleteBack2Fill } from 'react-icons/ri'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

const Wishlist = () => {
    const books = useSelector((state) => state.wishlist.wishlistBooks)

    const user = useSelector((state) => state?.newUser?.user)
   
    const userId = user?._id
    const addToCart = (id) => {
        const cartData = {
            user_id: userId,
            cart_data: {
                book: id, 
                qnt: 1
            }
        }
        if (userId) {

            axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart', cartData).then(data => { toast.success('successfully added to cart') })
            deleteWishlist(id)
        }

    }

    const deleteWishlist = (id) => {
        
        const cart = user?.user_wishlist
        const match = cart.filter(e => e?.book === id)
        const cartId = match[0]._id
        console.log(cartId)
        if (id) {
            axios.delete(`https://book-shelf-webapp.herokuapp.com/remove-from-wishlist?id=${userId}&wid=${cartId}`).then(data => console.log(data))
        }
    }
     
            
    return (
        <div className="my-5">
            <p><FaHeart className='text-5xl text-primary mx-auto' /></p>
            <p className="text-5xl text-center mb-3">My Whishlist</p>
            <div className="w-full p-5">
                <div className="overflow-auto  h-[460px]">
                    <table className="table w-full ">
                        <thead>
                            <tr>
                                <th className="rounded-none">Products</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th className="relative pl-[50px]">Author</th>  
                                <th className="relative pl-[60px]" >Action</th>

                            </tr>
                        </thead>
                        <tbody className="">
                            {books?.map((book, index) => <tr >
                                <td className="border-[#e1e2e6]">
                                    <div className="product gap-2">

                                        <div className="avatar">
                                            <div className="w-20 rounded">
                                                <img src={book.book?.book_cover_photo_url} />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    <div className=" ">
                                        <h3 className="text-[18px] capitalize text-[#00124E] font-semibold">
                                            {book.book?.book_title}
                                        </h3>
                                    </div>
                                </td>
                                <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                    ${book.book?.book_price}
                                </td>
                                <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                                {book.book.book_author.author_name}
                                </td>

                                <td className="border-[#e1e2e6] ">
                                    <div className=" flex flex-col my-auto">

                                        <button className=" btn btn-xs btn-warning text-white w-[155px] h-[24px] mb-3 rounded-full" onClick={() => addToCart(book.book._id)}>Add to cart <FaCartPlus className='ml-1 text-[16px]' /></button>
                                        <button className=" btn btn-xs btn-error text-white w-[155px] h-[24px] rounded-full" onClick={() => deleteWishlist(book.book._id)}>delete <RiDeleteBack2Fill className='ml-1 text-[16px]' /></button>
                                    </div>
                                </td>
                            </tr>)}

                        </tbody>
                    </table>
                </div>
                <div className="flex justify-end  border-t-[1px] border-[#e1e2e6] pt-2">
                    <div className="gap-2 flex">
                    <NavLink to='/'>
                        <button className="btn btn-primary text-white">
                            Continue shoping
                        </button>
                        </NavLink>
                        <NavLink to='/cart'>
                            <button className="btn btn-primary text-white ">
                                View Cart <MdShoppingCart className='ml-1 text-[25px]' />
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Wishlist