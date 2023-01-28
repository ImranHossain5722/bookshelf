import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link } from "react-router-dom";
import DeliveredOrder from "./DeliveredOrder";
import Orders from "./Orders";
import PickedOrder from "./PickedOrder";

const OrderDelivery = () => {
  const pathname = window.location.pathname;

  const path = pathname.split("/")[3];
  const { data: allOrders } = useQuery(["allOrders"], () =>
    fetch(`https://bookshelf-server-s8lf.onrender.com/all-orders`).then((res) =>
      res.json()
    )
  );

  return (
    <div>
      <div>
        <Link
          className="btn btn-primary ml-2 mt-2"
          to="/dashboard/orderdelivery/orders"
          element={DeliveredOrder}
        >
          Orders
        </Link>
        <Link
          className="btn btn-error ml-2 mt-2"
          to="/dashboard/orderdelivery/pickedorders"
          element={Orders}
        >
          Picked
        </Link>
        <Link
          className="btn btn-Secondary ml-2 mt-2"
          to="/dashboard/orderdelivery/deliveredorders"
          element={DeliveredOrder}
        >
          Delivered
        </Link>
        {path === "orders" && <Orders allOrders={allOrders} />}
        {path === "pickedorders" && <PickedOrder allOrders={allOrders} />}
        {path === "deliveredorders" && <DeliveredOrder allOrders={allOrders} />}
      </div>
    </div>
  );
};

export default OrderDelivery;
