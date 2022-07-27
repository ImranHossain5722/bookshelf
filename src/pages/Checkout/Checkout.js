import React from "react";

const Checkout = () => {
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
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
              <input
                type="text"
                placeholder="Last Name"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Enter Company Name"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="country"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="House Number and street address"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Apartment, suite, unit etc (Optional)"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="Enter city/town name"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="01XXXXXXXXXX"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
            <div className="w-full flex ">
              <input
                type="text"
                placeholder="e.g example@domian.com"
                class="input w-full border-[#e1e2e6] h-[50px] rounded-none focus:outline-none"
              />
            </div>
          </div>
          <h3 className="text-black text-[24px] capitalize font-semibold mt-12 pb-4 border-b-[1px] border-[#e1e2e6] mb-12">
            Additional Information
          </h3>
          <textarea
            class="textarea w-full border-[#e1e2e6] h-[120px] rounded-none focus:outline-none"
            placeholder="Note about your order, e.g. special note for you delivery"
          ></textarea>
        </div>
        <div className="w-4/12">
          <div class="cart_summery  p-8 border mt-[50px]">
            <h4 class="text-black text-[24px] capitalize font-semibold mb-4">
              Your order
            </h4>
            <div class="">
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">Product</h5>
                <p>Product</p>
              </div>
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">
                  Vestibulum suscipit × 1
                </h5>
                <p>$165.00</p>
              </div>
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">
                  Vestibulum dictum magna × 1
                </h5>
                <p>$60.00</p>
              </div>
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">
                  Cart Subtotal
                </h5>
                <p>$215.00</p>
              </div>
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">Shipping</h5>
                <p>Shipping type</p>
              </div>
              <div class="flex justify-between mb-3 pb-3 border-b-[1px]">
                <h5 class="text-black text-[18px] font-medium">Order Total</h5>
                <p>$215.00</p>
              </div>
              <div class="flex justify-between items-center">
                <h5 class="text-black text-[18px] font-medium">
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
                <div className="single_payment_box border-[1px] text-black p-4 mb-3 font-semibold">
                  PAYPAL
                </div>
              </div>
              <div className="mt-6">
                <button className="btn btn-primary text-white w-full ">
                  + update cart
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
