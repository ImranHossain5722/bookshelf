import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Assets/images/Logo/logoBookself-.png";
import userImg from "../../Assets/images/icon/001-user.png";
import bag from "../../Assets/images/icon//002-bag.png";
import wishlist from "../../Assets/images/icon/003-heart.png";
import { signOut } from "firebase/auth";
import downArrow from "../../Assets/images/icon/down-arrow.png";
import NavTopbar from "../NavTopbar/NavTopbar";
import { FaSearch } from "react-icons/fa";
import SearchModal from "../SearchModal/SearchModal";
import SearchIcon from "../../Assets/images/search-interface-symbol.png";

import { useDispatch, useSelector } from "react-redux";
// import { NavLink } from "react-router-dom";
// import productImg from "../../Assets/images/clubB.jpg";
import {
  cartBooks,
  whistlist,
} from "../../components/Redux/actions/bookActions";
import axios from "axios";
const NavBar = ({ children }) => {
  const [dark, setDark] = useState(false);

  const [user] = useAuthState(auth);
  const cartBook = useSelector((state) => state.cartBooks.cartBooks);
  const wishlistBook = useSelector((state) => state.wishlist.wishlistBooks);
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state?.newUser?.user);
  const userId = currentUser?._id;
  // dispatch(cartBooks
  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        await axios
          .get(
            `https://book-shelf-webapp.herokuapp.com/get-cart-data?id=${userId}`
          )
          .then((data) => dispatch(cartBooks(data.data.user_cart)));
      }
    };
    fetchData();
  }, [currentUser, cartBook]);
  useEffect(() => {
    const fetchData = async () => {
      if (userId) {
        await axios
          .get(
            `https://book-shelf-webapp.herokuapp.com/get-wishlist-data?id=${userId}`
          )
          .then((data) => dispatch(whistlist(data.data[0].user_wishlist)));
      }
    };
    fetchData();
  }, [currentUser, wishlistBook]);

  const [showModal, setShowModal] = useState("");

  const handelSignOut = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
  };

  // show search modal
  const showSearchModal = () => {
    showModal.classList.remove("right-full");
    showModal.classList.add("right-0");
  };

  return (
    <nav>
      {/* search feature */}
      <SearchModal showModal={showModal} setShowModal={setShowModal} />

      <div className=" drawer drawer-end " data-theme={dark ? "dark" : "light"}>
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <NavTopbar />

          {/* <!-- Navbar --> */}
          <div className="w-full navbar main_header sticky top-0 z-50">
            {/* mobile menu button */}
            <div className="flex-none lg:hidden">
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
            <div className="text-4xl text-blue-400 uppercase font-bold flex-1 text-center justify-center lg:flex-none lg:block">
              <NavLink to="/" className="">
                <img className="w-44" alt="logo" src={logo} />
              </NavLink>
            </div>

            {/* desktop */}
            <div className="flex-none mx-2 hidden lg:flex lg:flex-1 lg:justify-center">
              <ul className="menu menu-horizontal main_middle_menu ">
                {/* <!-- Navbar menu content here --> */}
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/books">Books</NavLink>
                </li>
                <li>
                  <NavLink to="/BestSellingBooksPage">Best Selling Books</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact US</NavLink>
                </li>
              </ul>
            </div>

            <div>
              {/* search button */}
              <div className="form-control mx-4">
                <button onClick={() => showSearchModal()}>
                  <img className="w-[25px] h-[25px]" alt="" src={SearchIcon} />
                </button>
              </div>
              {/* wishlist button */}
              <div className="hidden lg:flex user mx-4 mt-1">
                <div className="indicator ">
                  <span className="indicator-item badge badge-secondary w-[15px] bg-primary text-white border-primary ">
                    {wishlistBook.length}
                  </span>
                  <NavLink to="/wishlist">
                    <img className="" alt="" src={wishlist} />{" "}
                  </NavLink>
                </div>
              </div>
              {/* cart button */}
              <div className="user  hidden lg:flex">
                <div className="indicator ]">
                  <span className="indicator-item badge badge-secondary w-[15px]  bg-primary text-white border-primary ">
                    {cartBook.length}
                  </span>
                  <NavLink to="/cart">
                    {" "}
                    <img className="" alt="" src={bag} />
                  </NavLink>
                </div>
              </div>
              {/* user photo */}
              <div className="user ml-4 ">
                {user ? (
                  <span tabIndex="0">
                    <img
                      style={{ margin: "40px 0px -10px -4px" }}
                      className=" rounded-2xl"
                      alt=""
                      height={30}
                      width={30}
                      src={user?.photoURL ? user?.photoURL : userImg}
                    />

                    {/* dropdown */}
                    <div className="flex-none">
                      <ul className="menu menu-horizontal  p-0">
                        <li tabIndex="0">
                          <img className="" width={45} alt="" src={downArrow} />

                          <ul
                            style={{ margin: "-14px 0px 0px 0px" }}
                            className="p-2 z-40 drop-shadow-md bg-base-100"
                          >
                            <li>
                              <Link target={"_blank"} to="dashboard">
                                Dashboard
                              </Link>
                            </li>
                            <li>
                              <a onClick={handelSignOut}>sign Out</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </span>
                ) : (
                  <NavLink to="/login" className="rounded-lg">
                    <img
                      className="  rounded-2xl"
                      height={30}
                      width={30}
                      alt=""
                      src={userImg}
                    />
                  </NavLink>
                )}
              </div>

              {/* dark button */}
              <label className="swap swap-rotate hidden lg:flex ">
                {/* <!-- this hidden checkbox controls the state --> */}
                <input type="checkbox" onClick={() => setDark(!dark)} />

                {/* <!-- sun icon --> */}
                <svg
                  className="swap-on fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* <!-- Dark moon icon --> */}
                <svg
                  style={{ margin: "" }}
                  className="swap-off fill-current w-8 h-8"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
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
              <NavLink to="/" className="rounded-lg">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="rounded-lg">
                Books
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="rounded-lg">
                wishlist
              </NavLink>
            </li>
            <li>
              <NavLink to="/books" className="rounded-lg">
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
