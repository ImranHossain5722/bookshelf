import axios from 'axios'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const Wishlistbutton = ({ _id }) => {
  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
  const AddWishlist = async (id) => {
    const cartData = {
      user_id: userId,
      wishlist_data: {
        book: id
      }
    }
    if(userId){
    await  axios.post('https://book-shelf-webapp.herokuapp.com/add-to-wishlist', cartData).then(data => toast.success("added to wishlist"))
    }else{
      console.log(" the user id is not found")
    }

  
    console.log(cartData)
  }

  return (
    <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
      <FaHeart onClick={() => AddWishlist(_id)} />
    </button>
  )
}

export default Wishlistbutton