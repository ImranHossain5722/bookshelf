import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Assets/images/Logo/logoBookself-.png";
import userImg from "../../Assets/images/icon/001-user.png";
import bag from "../../Assets/images/icon//002-bag.png";
import wishlist from "../../Assets/images/icon/003-heart.png";
import { signOut } from "firebase/auth";
import downArrow from "../../Assets/images/icon/down-arrow.png";

import NavTopbar from "../NavTopbar/NavTopbar";
import { useDispatch } from "react-redux";
import axios from "axios";
import { newUser, whistlist } from "../Redux/actions/bookActions";
const NavDashboard = ({ children }) => {
  const [dark, setDark] = useState(false);

  const [user] = useAuthState(auth);

  const handelSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };
  // h-13vh

  const [getUser, setGetUser] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const userUid = { uid: user?.uid };

    const options = {
      method: "GET",
      url: "https://bookshelf-server-s8lf.onrender.com/get-user",
      params: userUid,
    };
    axios
      .request(options)
      .then(function (response) {
        setGetUser(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [user]);

  // upload image to imgbb and get image url

  useEffect(() => {
    dispatch(newUser(getUser[0]));
  }, [getUser, user]);
  return (
    <div>
      <div className="drawer drawer-end  " data-theme={dark ? "dark" : "light"}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* <!-- Navbar --> */}
          <div className="w-full  navbar bg-white p-2 dashboard_header">
            <div className=" hidden lg:block  px-2 ">
              <NavLink
                to="/"
                className="text-white text-sm p-2 bg-primary rounded-md"
              >
                Home
              </NavLink>
            </div>
            {/* mobile button */}
            <div className="flex-none lg:hidden mr-5">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>

            {/* desktop */}
            <div className=" hidden lg:block flex-1">
              {/* <!-- Navbar menu content here --> */}
              <div className="flex items-center justify-center gap-1">
                <p className="text-xl text-primary uppercase text-center font-bold">
                  Weclome to
                </p>{" "}
                <p className="text-xl text-primary uppercase text-center font-bold">
                  <span className="text-secondary">Book</span>
                  <span className="">Shelf</span>
                </p>{" "}
                <p className="text-xl text-secondary uppercase text-center font-bold">
                  Dashboard
                </p>
              </div>
            </div>

            {/* dark button */}
            <div>
              {/* user image */}

              <div className="user mr-4 ">
                {user ? (
                  <span tabIndex="0">
                    <img
                      onClick={handelSignOut}
                      className=" rounded-2xl"
                      alt=""
                      height={30}
                      width={30}
                      src={user?.photoURL ? user?.photoURL : userImg}
                    />
                  </span>
                ) : (
                  <NavLink to="/login" className="rounded-lg">
                    <img
                      className=" mr-4 rounded-2xl"
                      height={30}
                      width={30}
                      alt=""
                      src={userImg}
                    />
                  </NavLink>
                )}
              </div>
            </div>
          </div>

          {/* <!-- Page content here --> */}
          {children}
        </div>

        {/* mobile-phone */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/" className="text-lg text-[#00124E] font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="text-lg text-[#00124E] font-bold"
              >
                My profile
              </Link>
            </li>
            <li>
              <Link to="/addstuff" className="text-lg text-[#00124E] font-bold">
                Add Stuff
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/myorder"
                className="text-lg text-[#00124E] font-bold"
              >
                My Order
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addreview"
                className="text-lg text-[#00124E] font-bold"
              >
                Add a review
              </Link>
            </li>

            <li>
              <Link
                to="/dashboard/allusers"
                className="text-lg text-[#00124E] font-bold"
              >
                All Users
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allorders"
                className="text-lg text-[#00124E] font-bold"
              >
                All Orders
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allauthor"
                className="text-lg text-[#00124E] font-bold"
              >
                All Authors
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/allpublisher"
                className="text-lg text-[#00124E] font-bold"
              >
                All Publishers
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/orderhistory"
                className="text-lg text-[#00124E] font-bold"
              >
                Order History
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/addproduct"
                className="text-lg text-[#00124E] font-bold"
              >
                All Product
              </Link>
            </li>
            <li
              className="text-lg text-[#00124E] font-bold pl-5"
              onClick={() => signOut(auth)}
            >
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavDashboard;
//
