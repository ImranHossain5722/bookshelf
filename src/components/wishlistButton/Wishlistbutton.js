import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Loading from '../Loading/Loading'

const Wishlistbutton = ({ _id }) => {
  const user = useSelector((state) => state?.newUser?.user)
  const [includeCart, setincludeCart] = useState(false)

  const userId = user?._id
  const userWishlist = user?.user_wishlist?.map(book => book?.book)
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
  
  useEffect(() => {
  
    if(userWishlist?.includes(_id)){
       setincludeCart(true)
    }else{
     setincludeCart(false)
    }
  }, [user,_id]) 

  return (
    <button className=" hover:text-primar duration-500 a">
        {includeCart ? <FaRegHeart className='text-primary'/> : <FaRegHeart onClick={() => AddWishlist(_id)}  />}
      
    </button>
  )
}

export default Wishlistbutton