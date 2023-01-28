import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AiFillEye } from "react-icons/ai";
import { orderView } from "../../Redux/actions/bookActions";
import Loading from "../../Loading/Loading";

const OrdersPicked = () => {
  const user = useSelector((state) => state?.newUser?.user);
  const [order, setOrders] = useState([]);
  const userId = user?._id;

  const dispatch = useDispatch();

  useEffect(() => {
    if (userId) {
      axios
        .get(
          `https://bookshelf-server-s8lf.onrender.com/get-order-data?id=${userId}`
        )
        .then((data) => setOrders(data.data));
    }
  }, [userId]);

  console.log(order);
  let pickedOrders = [];
  // filter picked orders
  order?.map(
    (order) =>
      order?.picked_status === true &&
      order?.delivered_status === false &&
      pickedOrders.push(order)
  );

  const viewOrder = (selectedOrder) => {
    // console.log(selectedOrder)
    dispatch(orderView(selectedOrder));
  };
  return (
    <div className="my-5">
      <p className="text-5xl text-center mb-3">Picked Orders</p>
      <div className="w-full p-5">
        <div className="overflow-auto  h-[460px]">
          <table className="table w-full ">
            <thead>
              <tr>
                <th className="rounded-none">code</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Order Status</th>
                <th>payment Status</th>
                <th>Options</th>
              </tr>
            </thead>
            {pickedOrders.length === 0 ? (
              <Loading></Loading>
            ) : (
              <tbody className="">
                {pickedOrders?.map((orderDetails) => (
                  <tr>
                    <td className="border-[#e1e2e6]">
                      <div className="">
                        <p>{orderDetails._id.slice(0, 18)}</p>
                      </div>
                    </td>
                    <td>
                      <div className=" ">
                        <p className=" capitalize text-[#00124E] font-semibold">
                          {orderDetails.createdAt.slice(0, 10)}
                        </p>
                      </div>
                    </td>
                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                      ${orderDetails.ordered_price_amount}
                    </td>
                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-semibold">
                      {(orderDetails.delivered_status === true &&
                        "Delivered") ||
                        (orderDetails.picked_status === true && "Picked") ||
                        (orderDetails.placed_status === true && "Placed")}
                    </td>
                    <td className="text-[16px] border-[#e1e2e6] text-[#00124E] font-bold">
                      <button className=" btn btn-xs btn-warning text-white w-[155px] h-[24px] mb-3 rounded-full">
                        {orderDetails.order_status}{" "}
                      </button>
                    </td>
                    <td className=" border-[#e1e2e6] text-[#00124E] font-bold">
                      <label
                        for="order-view"
                        className=" duration-500 a  btn btn-xs btn-info text-white  mb-3 rounded"
                        onClick={() => viewOrder(orderDetails)}
                      >
                        <AiFillEye className="font-bold text-[16px]" />
                      </label>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrdersPicked;
