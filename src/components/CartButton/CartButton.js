import axios from 'axios'
import React from 'react'
import { FaShoppingBasket} from 'react-icons/fa'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


const CartButton = ({ _id }) => {

  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: 2
      }
    }

    if(userId){

      axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart',cartData).then(data =>{toast.success('successfully added to cart')})
  }else{
      console.log("user id not found", userId)
  }
    console.log(cartData)
  }


  return (
    <button className=" hover:text-primary duration-500 a">
      <FaShoppingBasket onClick={() => AddCart(_id)} />
    </button>
  )
}

export default CartButton