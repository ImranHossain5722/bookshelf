import React, { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { useSelector } from 'react-redux';
const stripePromise = loadStripe('pk_test_51L26U9AgMm9RRJ7pUcXRrqvzh1l97MSE67ouqD91yeStOldtECYDRodWCnsFPvzd95yoDu0m2LW5ybpFB8FFoWFL00pnLC2Pvv');
function Payment() {
    
    const [payItem, setpayItem] = useState([])
  const cart = useSelector((state) => state.cartData.cartData)
  const navigate = useNavigate()

    
    if(!cart.user_id){
      navigate("/cart")
    }
  
  return (
    <div>
        <p className='text-3xl text-center text-[#00124E] font-bold'>Place your payment here</p>
        <div class="hero h-auto mt-10 ">
  <div class="hero-content flex-col  ">
    <div class="text-center lg:text-left w-80 ">
      <h1 class="text-3xl font-bold text-primary">Pay via stripe</h1>
      <p class="py-6">You have to pay ${cart.ordered_price_amount}.00</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body w-50">
      <Elements stripe={stripePromise}>
      <CheckoutForm payItem={payItem}/>
    </Elements>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Payment