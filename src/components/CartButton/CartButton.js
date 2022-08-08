import axios from 'axios'
import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useSelector } from 'react-redux';


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

    const options = {
      method: 'POST',
      url: 'https://book-shelf-webapp.herokuapp.com/add-to-cart',
      params: cartData
    };
    axios.request(options).then(function (response) {
    console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });


console.log(cartData)
    axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart', cartData).then(data => console.log(data))
    // console.log(cartData)
  }


  return (
    <button className="text-3xl text-white hover:text-primary duration-500">
      <FaShoppingCart onClick={() => AddCart(_id)} />
    </button>
  )
}

export default CartButton