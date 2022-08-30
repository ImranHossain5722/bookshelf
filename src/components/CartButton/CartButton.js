import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaShoppingBasket} from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const CartButton = ({ _id }) => {
  const [includeCart, setincludeCart] = useState(false)
  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
  const userCart = user?.user_cart?.map(book => book?.book)
  const books = useSelector((state) => state?.cartBooks?.cartBooks)

  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: 1
      }
    }

    if(userId){

      axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart',cartData).then(data =>{toast.success('successfully added to cart')})
  }else{
      console.log("user id not found", userId)
  }
    console.log(cartData)
  }

  useEffect(() => {
  
    if(userCart?.includes(_id)){
       setincludeCart(true)
    }else{
     setincludeCart(false)
    }
  }, [user,_id,books]) 
  

  return (
    <button className=" hover:text-primar duration-500 a " >
      {includeCart ? <FaShoppingBasket className='text-primary'/> : <FaShoppingBasket onClick={() => AddCart(_id)} />}
  
  </button>
  )
}

export default CartButton