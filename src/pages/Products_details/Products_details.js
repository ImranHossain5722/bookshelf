import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

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
    }
 
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6 justify-center">
        <div className="w-5/12">
          <div className="thumb w-full">
            <img className="max-w-[100%]" src={book_cover_photo_url} alt="" />
          </div>
        </div>
        <div className="w-6/12">
          <div class="cart_summery ">
            {/* <div className="flex items-center gap-2 mb-3">
              <p className="text-[16px]">Availability : 1 in stock</p>
            </div> */}
            <h4 class="text-black text-[24px] capitalize font-semibold mb-3">
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
                  class="input  w-[50px] h-[40px] max-w-xs rounded-none text-center border-[#e1e2e6] border-solid border-y-1 border-x-0 text-black"
                />
                <button className="bg-[#f9f9fd] w-[40px] h-[40px] flex items-center justify-center rounded-none border-[#e1e2e6 border-solid border text-black">
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center text-black mb-3 gap-2">
              <button className="btn btn-primary" onClick={() => AddCart(_id)}>Add to Cart</button>
              <button className="btn btn-primary" onClick={() => AddCart(_id)} >add to wishlist</button>
            </div>
            <h5 class="text-black text-[30px] font-medium mt-8">
              Guaranteed Safe Checkout
            </h5>
            <div class=" single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div class="description_box">
                <p class="Information_text text-black mb-3">
                  <span> Language: </span> {book_language}
                </p>
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Pages: </span> {book_pages}
                </p>
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Country: </span> {book_country}
                </p>
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Tags: </span> Vintage, Awesome, Summer, Beachwear
                </p>
              </div>
            </div>
            <div class="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div class="details_title">
                <h4 className="text-black text-[18px]">Description</h4>
              </div>
              <div class="description_box">
                <p class="mb-4">{book_description}</p>
              </div>
            </div>
            {/* <div class="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div class="details_title">
                <h4 className="text-black text-[18px]">
                  Additional Information
                </h4>
              </div>
              <div class="description_box">
                <p class="Information_text">
                  {" "}
                  <span>Color: </span> Gap
                </p>
                <p class="Information_text">
                  {" "}
                  <span>Size: </span> 20, 24
                </p>
                <p class="Information_text">
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
