import React from "react";
import productImg from "../../Assets/images/clubB.jpg";
const Cart = () => {
  return (
    <div className="pt-[60px] md:pt-[80px] lg:pt-[120px]  pb-[60px] md:pb-[80px] lg:pb-[120px]  ">
      <div className="container m-auto flex">
        <div className="w-8/12">
          <div class="overflow-x-auto">
            <table class="table w-full">
              <thead>
                <tr>
                  <th className="rounded-none">products</th>
                  <th>prise</th>
                  <th>quentity</th>
                  <th>subtotal</th>
                  <th>action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="border-[#e1e2e6]">
                    <div className="product flex items-center gap-2">
                      <div className="thumb w-[120px]">
                        <img className="max-w-[100%]" src={productImg} alt="" />
                      </div>
                      <div className="">
                        <h3 className="text-[18px] font-medium capitalize text-black">
                          product title{" "}
                        </h3>
                        <p className="text-[16px] font-normal capitalize">
                          product desc{" "}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="text-[16px] border-[#e1e2e6] text-black">
                    $100
                  </td>
                  <td className="border-[#e1e2e6]">
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
                  </td>
                  <td className="text-[16px] text-black border-[#e1e2e6]">
                    $1200
                  </td>
                  <td className="border-[#e1e2e6]">
                    <button className="btn btn-error">delete</button>
                  </td>
                </tr>
                <tr>
                  <th className="border-[#e1e2e6]">
                    <div className="product flex items-center gap-2">
                      <div className="thumb w-[120px]">
                        <img className="max-w-[100%]" src={productImg} alt="" />
                      </div>
                      <div className="">
                        <h3 className="text-[18px] font-medium capitalize text-black">
                          product title{" "}
                        </h3>
                        <p className="text-[16px] font-normal capitalize">
                          product desc{" "}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="text-[16px] border-[#e1e2e6] text-black">
                    $100
                  </td>
                  <td className="border-[#e1e2e6]">
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
                  </td>
                  <td className="text-[16px] text-black border-[#e1e2e6]">
                    $1200
                  </td>
                  <td className="border-[#e1e2e6]">
                    <button className="btn btn-error">delete</button>
                  </td>
                </tr>
                <tr>
                  <th className="border-[#e1e2e6]">
                    <div className="product flex items-center gap-2">
                      <div className="thumb w-[120px]">
                        <img className="max-w-[100%]" src={productImg} alt="" />
                      </div>
                      <div className="">
                        <h3 className="text-[18px] font-medium capitalize text-black">
                          product title{" "}
                        </h3>
                        <p className="text-[16px] font-normal capitalize">
                          product desc{" "}
                        </p>
                      </div>
                    </div>
                  </th>
                  <td className="text-[16px] border-[#e1e2e6] text-black">
                    $100
                  </td>
                  <td className="border-[#e1e2e6]">
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
                  </td>
                  <td className="text-[16px] text-black border-[#e1e2e6]">
                    $1200
                  </td>
                  <td className="border-[#e1e2e6]">
                    <button className="btn btn-error">delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-between border-t-[1px] border-[#e1e2e6] pt-2">
            <div className="gap-2 flex">
              <button className="btn btn-primary text-white">
                update cart
              </button>
              <button className="btn btn-primary text-white">
                Continew shoping
              </button>
            </div>
            <button className="btn btn-primary text-white">
              Prossed to checkout
            </button>
          </div>
        </div>
        <div className="w-4/12">
          <div className="cart_summery  px-8">
            <h4 className="text-black text-[24px] capitalize font-medium mb-4">
              Order Summary
            </h4>
            <div className="">
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Subtotal</h5>
                <p>+ USD 1324.35</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">
                  Shiping charge
                </h5>
                <p>+ USD 75.35</p>
              </div>
              <div className="flex justify-between mb-3">
                <h5 className="text-black text-[18px] font-medium">Discount</h5>
                <p>- USD 75.35</p>
              </div>
              <div className="flex justify-between border-t-[1px] border-[#e1e2e6] pt-2 mt-3 items-center">
                <h5 className="text-black text-[18px] font-medium">
                  Total (Incl. VAT)
                </h5>
                <p>USD $1324.35</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
