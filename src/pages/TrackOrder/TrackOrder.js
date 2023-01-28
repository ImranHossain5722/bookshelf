import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TrackOrder = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [orderData, setOrderData] = useState([]);
  // const [orderStatus, setOrderStatus] = useState('');
  const order = orderData[0];
  console.log(orderData);

  const onSubmit = (data) => {
    console.log(data);
    fetch(
      `https://bookshelf-server-s8lf.onrender.com/get-order-details?oid=${data?.invoice}`
    )
      .then((res) => res.json())
      .then((data) => setOrderData(data));
  };

  return (
    <div className="py-12">
      <div>
        <h2 className="text-center font-semibold uppercase text-secondary text-[40px]">
          Track Order{" "}
        </h2>
        <div className=" flex items-center justify-center pb-10">
          <progress className="progress progress-primary bg-white h-2 w-10  "></progress>
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=" mx-auto w-4/6 py-12 border p-8 rounded-lg bg-white ">
            <div className=" text-center text-xl font-bold pb-6">
              <label>Check Your Order Status</label>
            </div>
            <div className="">
              <input
                {...register("invoice", {
                  required: {
                    value: true,
                    message: "Invoice Number is Required",
                  },
                })}
                type="text"
                placeholder="Input Invoice Number"
                className="input input-bordered w-full bg-[#0000000d]  text-secondary"
              />
              <label className="label">
                <span className="label-text-alt text-red-500">
                  {errors.name?.type === "required" &&
                    `${errors?.name?.message}`}
                </span>
              </label>
            </div>
            <div className="mx-auto text-center">
              <input
                type="submit"
                className="btn btn-primary text-white w-md ml-2 mx-auto"
                value="Track Order"
              />
            </div>
          </div>
        </form>
      </div>
      <div>
        {order && (
          <div className="w-4/6 mx-auto ">
            <div className="p-8 mt-8 bg-white rounded-lg">
              <ul className="steps steps-vertical lg:steps-horizontal w-full">
                <li className="step step-primary text-xl" data-content="✓">
                  Order
                </li>
                <li
                  className={
                    order?.picked_status === true
                      ? "step step-primary text-xl"
                      : "step text-xl"
                  }
                  data-content={order?.picked_status === true ? "✓" : "✕"}
                >
                  Picked
                </li>
                <li
                  className={
                    order?.delivered_status === true
                      ? "step step-primary text-xl"
                      : "step text-xl"
                  }
                  data-content={order?.delivered_status === true ? "✓" : "✕"}
                >
                  Delivered
                </li>
              </ul>
            </div>
            {/* order Summury  */}
            <div className="p-8 mt-8 bg-white rounded-lg ">
              <h2 className="font-bold text-xl border-b-2 pb-4">
                Order Summury
              </h2>
              <div className="md:flex">
                <div className="md:w-3/6 pt-4 mt-1 md:border-r-2 px-3">
                  <div className="lg:flex py-4 border-b-2 ">
                    <p className="lg:w-1/2 font-bold">Invoice :</p>
                    <p className="lg:w-1/2">{order?._id}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Customer :</p>
                    <p className="w-1/2">{order?.user_id?.user_name}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Email :</p>
                    <p className="w-1/2">{order?.user_id?.user_email}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Shipping address :</p>
                    <p className="w-1/2">
                      {order?.user_id?.user_address
                        ? order?.user_id?.user_address
                        : "Not Available"}
                    </p>
                  </div>
                </div>
                <div className="md:w-3/6 pt-4 md:mt-1 px-3">
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Order date :</p>
                    <p className="w-1/2">{order?.placed_date}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Total order amount :</p>
                    <p className="w-1/2">{order?.ordered_price_amount}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Payment method :</p>
                    <p className="w-1/2">{order?.payment_info?.payment_type}</p>
                  </div>
                  <div className="lg:flex  py-4 border-b-2">
                    <p className="w-1/2 font-bold">Delivery Status :</p>
                    <p className="w-1/2">
                      {order?.picked_status === true
                        ? order?.delivered_status === true
                          ? "Order Delivered"
                          : "Picked for Deliver"
                        : "Order Received"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* product details  */}
            <div className="p-8 mt-8 bg-white rounded-lg ">
              <h2 className="font-bold text-xl border-b-2 pb-4">
                Product Details
              </h2>
              <table className="table w-full">
                <thead>
                  <tr>
                    <th className="text-lg">Photo</th>
                    <th className="text-lg">Product Name</th>
                    <th className="text-lg">Unit Price</th>
                    <th className="text-lg">Order Qty</th>
                    <th className="text-lg">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order?.ordered_items?.map((book) => (
                    <tr key={book?._id}>
                      <th>
                        <img
                          src={book?.book_id?.book_cover_photo_url}
                          width={50}
                          height={50}
                          alt=""
                        />
                      </th>
                      <th>{book?.book_id?.book_title}</th>
                      <td>{book?.book_id?.book_price}</td>
                      <td>{book?.qnt}</td>
                      <td>{book?.book_id?.book_price * book?.qnt}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackOrder;
