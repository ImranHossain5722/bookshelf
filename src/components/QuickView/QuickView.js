import React from "react";
import { useSelector } from "react-redux";
import Stars from "../Stars/Stars";
import { toast } from 'react-toastify'
import axios from 'axios'
import Loading from "../Loading/Loading";

const QuickView = () => {
  const selecItem = useSelector((state) => state.quickView.quickView[0])
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
    
  }

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


  }

  if(!selecItem){
    return <Loading/>
  }

  return ( 
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto" bis_skin_checked="1">
          <div className="lg:w-4/5 mx-auto flex flex-wrap" bis_skin_checked="1">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={selecItem?.book_cover_photo_url }
            />
            <div
              className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0"
              bis_skin_checked="1"
            >
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {selecItem?.book_title}
              </h1>
              <Stars />
              <p className="leading-relaxed my-10">
                {selecItem?.book_description}
              </p>

              <div className="flex" bis_skin_checked="1">
                <span className="title-font font-medium text-2xl text-gray-900">
                ${selecItem?.book_price}.00
                </span>
                <button className="flex ml-auto text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded" onClick={() => AddCart(selecItem._id)}>
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"onClick={() => AddWishlist(selecItem._id)}>
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuickView;
