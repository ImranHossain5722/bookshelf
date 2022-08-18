import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { BsCartCheckFill } from 'react-icons/bs';
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
const Checkout = () => {
  const cart = useSelector((state) => state.cartData.cartData)
  const user = useSelector((state) => state?.newUser?.user) 
  const userId = user?._id
  const navigate = useNavigate()
  const sendOrder = async () => {
    console.log(cart)
    if(cart){

     await axios.post('https://book-shelf-webapp.herokuapp.com/place-order',cart).then(data => console.log(data))
     await axios.delete(`https://book-shelf-webapp.herokuapp.com/delete-cart?id=${userId}`)
    }else{
      console.log('cart not found')
    }
 
  }
  if(!cart.user_id){
    navigate("/cart")
  }
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6">
        <div className="w-8/12">
          <h3 className="text-black text-[24px] capitalize font-semibold pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
            Billing Details
          </h3>
          <div className="flex gap-6 flex-col">
            <div className="w-full flex grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Enter Company Name"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="country"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="House Number and street address"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none" required
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Apartment, suite, unit etc (Optional)"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Enter city/town name"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none" required
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="01XXXXXXXXXX"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none" required
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="e.g example@domian.com"
                className="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
          </div>
          <h3 className="text-black text-[24px] capitalize font-semibold mt-12 pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
            Additional Information
          </h3>
          <textarea
            className="textarea w-full border-[#e1e2e6] h-[120px] rounded-none focus:outline-none"
            placeholder="Note about your order, e.g. special note for you delivery"
          ></textarea>
        </div>
        <div className="w-4/12">
          <div className="cart_summery  p-8 border mt-[50px]">
            <h4 className="text-black text-[24px] capitalize font-semibold mb-4">
              Your order
            </h4>
            <div className="">
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">Product</h5>
                <p>Product</p>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">
                  Vestibulum suscipit × 1
                </h5>
                <p>$165.00</p>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">
                  Vestibulum dictum magna × 1
                </h5>
                <p>$60.00</p>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">
                  Cart Subtotal
                </h5>
                <p>$215.00</p>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">Shipping</h5>
                <p>Shipping type</p>
              </div>
              <div className="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 className="text-black text-[18px] font-medium">Order Total</h5>
                <p>$215.00</p>
              </div>
              <div className="flex justify-between items-center">
                <h5 className="text-black text-[18px] font-medium">
                  Total (Incl. VAT) 
                </h5>
                <p>USD $1324.35</p>
              </div>
              <div className="payment_boxes mt-12">
                <div className="single_payment_box mb-3">
                  <div className="single_payment_box border-[1px] text-black p-4 font-semibold">
                    DIRECT BANK TRANSFER
                  </div>
                  <div className="single_payment_box border-[1px] border-t-[0] p-4 font-normal">
                    <p>
                      Make your payment directly into our bank account. Please
                      use your Order ID as the payment reference. Your order
                      won’t be shipped until the funds have cleared in our
                      account.
                    </p>
                  </div>
                </div>
                <div className="single_payment_box border-[1px] text-black p-4 mb-3 font-semibold">
                  CHEQUE PAYMENT
                </div>
                <Link to="/payment">
                <div className="single_payment_box border-[1px] text-black p-4 mb-3 font-semibold" >
                  PAYPAL
                </div>
                </Link>
              </div>
              <div className="mt-6">
                <button className="btn btn-primary text-white w-full " onClick={() => sendOrder()}>
                  Checkout <BsCartCheckFill className="text-[18px] ml-1"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
