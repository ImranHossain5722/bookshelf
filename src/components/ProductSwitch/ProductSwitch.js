import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductSwitch = () => {
  return (
    <div className="p-5 text-center my-5">
      <h2 className="text-2xl my-5">Popular Books</h2>
      <Link className="p-3" to="popular-books">
        Popular Books
      </Link>
      <Link className="p-3" to="popular-authors-books">
        Popular Authors Books
      </Link>
      <Link className="p-3" to="best-offers">
        Best Offers
      </Link>

      <Outlet />
    </div>
  );
};

export default ProductSwitch;
