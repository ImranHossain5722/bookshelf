import React from "react";
import { Link, Outlet } from "react-router-dom";
import Button from "../Button/Button";

const PopularBooks = () => {
  return (
    <div className="bg-white container mx-auto max-w-[1240px]  mt-[60px] lg:mt-[120px] py-[120px] px-7">
      <h1 className="pl-6 text-[30px] lg:text-[40px] font-bold text-[#00124E] text-center">
        Popular Books
      </h1>
      <div className="flex justify-center mt-5 mb-16 text-[#00124E] font-bold">
        <ul className="flex">
          <li className="hover:text-primary duration-500">
            <Link to="/">Best Selling Books</Link>
          </li>
          <li className="mx-10 hover:text-primary duration-500">
            <Link to="/popular-writers">Popular Writer's Books</Link>
          </li>
          <li className="hover:text-primary duration-500">
            <Link to="/best-offers">Best Offers Books</Link>
          </li>
        </ul>
      </div>
      {/* content */}
      <Outlet />
    </div>
  );
};

export default PopularBooks;
