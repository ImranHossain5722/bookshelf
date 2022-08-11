import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import './Product_details.css'
import { FaCartPlus, FaHeart } from "react-icons/fa";
import { toast } from "react-toastify";
const Products_details = () => {
  const { _id } = useParams();
  const [book, setbook] = useState({});
  const {
    book_cover_photo_url,
    book_title,
    book_price,
    book_country,
    book_description,
    book_pages,
    book_language,
    discount,
  } = book;
  useEffect(() => {
    axios
      .get(`https://book-shelf-webapp.herokuapp.com/get-book?id=${_id}`)
      .then((data) => setbook(data.data[0]));
  }, []);
  const user = useSelector((state) => state?.newUser?.user)
  const userId = user?._id
  // adding to cart

  const AddCart = (id) => {
    const cartData = {
      user_id: userId,
      cart_data: {
        book: id,
        qnt: 2
      }
    }
    if (userId) {

      axios.post('https://book-shelf-webapp.herokuapp.com/add-to-cart', cartData).then(data => { toast.success('successfully added to cart') })
    } else {
      console.log("user id not found", userId)
    }
    console.log(cartData)
  }

  // adding to  wishlist 
  const AddWishlist = async (id) => {
    const cardData = {
      user_id: userId,
      wishlist_data: {
        book: id
      }
    }
    if (userId) {
      await axios.post('https://book-shelf-webapp.herokuapp.com/add-to-wishlist', cardData).then(data => toast.success("added to wishlist"))
    } else {
      console.log(" the user id is not found")
    }
    console.log(cardData)
  }
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6 justify-center">
        <div className="w-5/12">
          <div className="thumb w-full">
            <img className="w-full" src={book_cover_photo_url} alt="" />
          </div>
        </div>
        <div className="w-6/12">
          <div className="cart_summery ">
            {/* <div className="flex items-center gap-2 mb-3">
              <p className="text-[16px]">Availability : 1 in stock</p>
            </div> */}
            <h4 className="text-black text-[24px] capitalize font-semibold mb-3">
              {book_title}
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-black text-[18px]">${book_price}</h3>
              <p className="text-[16px]">Tax included</p>
            </div>

            <div className="flex items-center text-black mb-3">
              <p>(8k+ reviews)</p>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-black text-[16px]">Quantity</p>
              <div className="flex">
                <button className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6] border-solid border text-black">
                  +
                </button>
                <input
                  type="text"
                  placeholder="0"
                  className="input  w-[50px] h-[40px] max-w-xs rounded-none text-center border-[#e1e2e6] border-solid border-y-1 border-x-0 text-black"
                />
                <button className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6 border-solid border text-black">
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center text-black mb-3 gap-2">
              
              <button className="icon-btn add-btn" onClick={() => AddCart(_id)}>
                <FaCartPlus className="add-icon  text-primary text-2xl" />
                <div className="btn-txt">Add to cart</div>
              </button>

              <button className="icon-btn add-btn" onClick={() => AddWishlist(_id)}>
                <FaHeart className="add-icon text-primary text-2xl" />
                <div className="btn-txt">Add to wishlist</div>
              </button>
            </div>
            <h5 className="text-black text-[30px] font-medium mt-8">
              Guaranteed Safe Checkout
            </h5>
            <div className=" single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div className="description_box">
                <p className="Information_text text-black mb-3">
                  <span> Language: </span> {book_language}
                </p>
                <p className="Information_text text-black mb-3">
                  {" "}
                  <span>Pages: </span> {book_pages}
                </p>
                <p className="Information_text text-black mb-3">
                  {" "}
                  <span>Country: </span> {book_country}
                </p>
                <p className="Information_text text-black mb-3">
                  {" "}
                  <span>Tags: </span> Vintage, Awesome, Summer, Beachwear
                </p>
              </div>
            </div>
            <div className="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div className="details_title">
                <h4 className="text-black text-[18px]">Description</h4>
              </div>
              <div className="description_box">
                <p className="mb-4">{book_description}</p>
              </div>
            </div>
            {/* <div className="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div className="details_title">
                <h4 className="text-black text-[18px]">
                  Additional Information
                </h4>
              </div>
              <div className="description_box">
                <p className="Information_text">
                  {" "}
                  <span>Color: </span> Gap
                </p>
                <p className="Information_text">
                  {" "}
                  <span>Size: </span> 20, 24
                </p>
                <p className="Information_text">
                  {" "}
                  <span>Material:</span> 100% Polyester
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_details;
