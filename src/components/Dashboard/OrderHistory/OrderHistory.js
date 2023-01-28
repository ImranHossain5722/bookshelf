import React from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import CurrentOrders from "./CurrentOrders";
import OrdersPicked from "./OrdersPicked";
import OrdersDelivered from "./OrdersDelivered";
const OrderHistory = () => {
  const pathname = window.location.pathname;

  const path = pathname.split("/")[3];
  const { data: allOrders } = useQuery(["myOrderHistory"], () =>
    fetch(`https://bookshelf-server-s8lf.onrender.com/all-orders`).then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <div>
        <Link
          className="btn btn-primary ml-2 mt-2"
          to="/dashboard/orderhistory/orders"
          element={CurrentOrders}
        >
          Orders
        </Link>
        <Link
          className="btn btn-error ml-2 mt-2"
          to="/dashboard/orderhistory/pickedorders"
          element={OrdersPicked}
        >
          Picked
        </Link>
        <Link
          className="btn btn-Secondary ml-2 mt-2"
          to="/dashboard/orderhistory/deliveredorders"
          element={OrdersDelivered}
        >
          Delivered
        </Link>
        {path === "orders" && <CurrentOrders allOrders={allOrders} />}
        {path === "pickedorders" && <OrdersPicked allOrders={allOrders} />}
        {path === "deliveredorders" && (
          <OrdersDelivered allOrders={allOrders} />
        )}
      </div>
    </div>
  );
};

export default OrderHistory;
