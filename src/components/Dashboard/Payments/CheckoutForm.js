import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function CheckoutForm() {
  const cart = useSelector((state) => state.cartData.cartData)
  const [clientSecret, setClientSecret] = useState("");
  const user = useSelector((state) => state?.newUser?.user)


    const {ordered_price_amount,_id} = cart
    const {email,user_name} = user
    console.log(cart)
  useEffect(() => {
   if(cart){

     fetch("https://book-shelf-webapp.herokuapp.com/create-payment-intent", {
       method: "POST",
       headers: { 
           "content-Type": "application/json",
          
          },
 
       body: JSON.stringify(_id),
     })
       .then((res) => res.json())
       .then((data) => console.log("data",data));
   }

  }, [user]);

    const stripe= useStripe()
    const elements = useElements()
   

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          
    if (card == null) {
        return;
      }
      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        toast.error(error?.message)
      }

      // confirming card payment
      const {paymentIntent, error:paymentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: user_name, 
              email:email
            },
          },
        },
      );
      if(paymentError){
        toast.error(paymentError.message)
      }
      else{

        const payment = {
          order:_id,
          transactionId:paymentIntent.id
        }


        fetch(`https://book-shelf-webapp.herokuapp.com/payment/${_id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json',
          
          },
          body:JSON.stringify(payment)
        }).then(res=>res.json()).then(data => toast.success('payment successfull')
        )
      }
    }
 
  return (
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-primary btn-sm mt-4">
      Pay
    </button>
  </form>
  )
}

export default CheckoutForm