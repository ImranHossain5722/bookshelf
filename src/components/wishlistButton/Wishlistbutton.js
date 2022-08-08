import axios from 'axios'
import React, { useState } from 'react'
import { FaHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Wishlistbutton = ({ _id }) => {
  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
 const [loading, setloading] = useState(false)
  const AddWishlist = (id) => {
    setloading(true)
    const cartData = {
      user_id: userId,
      wishlist_data: {
        book: id
      }
    }
    axios.post('https://book-shelf-webapp.herokuapp.com/add-to-wishlist', cartData).then(data => console.log(data))

    


    setloading(false)
    // console.log(cartData)
  }

  if(loading){
    console.log("user")
  }else{
    console.log("user not found")
  }

  return (
    <button className="mx-5 text-3xl text-white hover:text-primary duration-500">
      <FaHeart onClick={() => AddWishlist(_id)} />
    </button>
  )
}

export default Wishlistbutton