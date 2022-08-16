import axios from 'axios'
import React from 'react'
import { useSelector } from 'react-redux'
import './CartDeleteButton.css'
import { toast } from 'react-toastify'
const CartDeleteButton = ({ _id}) => {
  const user = useSelector((state) => state?.newUser?.user) 
  const userId = user._id
    const deleteCart = (id) => {
        console.log(id)
        const cart = user.user_cart
        const match = cart.filter(e => e.book ===id)
        const cartId = match[0]._id
          if(id){
            axios.delete(`https://book-shelf-webapp.herokuapp.com/remove-from-cart?id=${userId}&cid=${cartId}`).then(data => toast.success("deleted from cart"))
          }
          
         }
  return (
        <button class="noselect cartButton"  onClick={() => deleteCart(_id)}><span class="text">Delete</span><span class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path></svg></span></button>
    
  )
}

export default CartDeleteButton