import axios from 'axios'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';


const CartButton = ({_id}) => {
    const [user] = useAuthState(auth)
    const email = "sharif@gmail.com"
    const AddCart =(id) => {
      const cartData = {
        user_email : email,
        cart_data : id
      } 
       axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart',cartData).then(data => console.log(data))
      
    }
  return (
    <button className="text-3xl text-white hover:text-primary duration-500">
    <FaShoppingCart onClick={() => AddCart(_id)}/>
    </button>
  )
}

export default CartButton