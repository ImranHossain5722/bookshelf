import React from "react";
import productImg from "../../Assets/images/clubB.jpg";
const Products_details = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px] ">
      <div className="container m-auto flex gap-6 justify-center">
        <div className="w-5/12">
          <div className="thumb w-full">
            <img className="max-w-[100%]" src={productImg} alt="" />
          </div>
        </div>
        <div className="w-6/12">
          <div class="cart_summery ">
            <div className="flex items-center gap-2 mb-3">
              <p className="text-[16px]">Availability : 1 in stock</p>
            </div>
            <h4 class="text-black text-[24px] capitalize font-semibold mb-3">
              East Hampton Fleece Hoodie
            </h4>
            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-black text-[18px]">$440.00 </h3>
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
              <button className="btn btn-primary">Add to Cart</button>
              <button className="btn btn-primary">add to wishlist</button>
            </div>
            <h5 class="text-black text-[30px] font-medium mt-8">
              Guaranteed Safe Checkout
            </h5>
            <div class=" single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
              <div class="description_box">
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Vendor: </span> Gap
                </p>
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Product Type: </span> Sweater
                </p>
                <p class="Information_text text-black mb-3">
                  {" "}
                  <span>Barcode: </span> 123456789
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
                <p class="mb-4">
                  Want to get a baby laundry basket? This tall toy storage
                  basket is perfect to gift for her the basket is designed with
                  two handles. The basket can also work well for dog toy basket
                  tall toy storage basket is perfect to gift for her Want to get
                  a baby laundry
                </p>
                <p>
                  This tall toy storage basket is perfect to gift for her the
                  basket is designed with two handles. The basket can also work
                  well for dog toy basket tall toy storage.
                </p>
              </div>
            </div>
            <div class="single_description_wrap border-b-[1px] border-[#e1e2e6] pb-4 mb-4">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products_details;
