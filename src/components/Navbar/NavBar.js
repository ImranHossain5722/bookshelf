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
              <NavLink to="/cart" className="rounded-lg">
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
