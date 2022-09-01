import axios from 'axios'
import React from 'react'
import { FaShoppingBasket } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const AddCartButton = ({_id,qnt}) => {
    
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
      toast.error("Please login before adding to cart")
  }
  }
  return (
    <>
    { _id ?
      <button className="home22_addCard_btn add_to_cart flex border-0 items-center" onClick={() => AddCart(_id)}>
      <div className="circle_icon">
        <FaShoppingBasket />
      </div>
      <h5 className="text-sm font-bold text-uppercase m-0">
        ADD TO CART
      </h5>
    </button> :
    <button className="home22_addCard_btn add_to_cart flex border-0 items-center" onClick={() => toast.error("Sorry This Book Is Out Of Stock")}>
    <div className="circle_icon">
      <FaShoppingBasket />
    </div>
    <h5 className="text-sm font-bold text-uppercase m-0">
      ADD TO CART
    </h5>
  </button>
    }
    </>
  )
}

export default AddCartButton