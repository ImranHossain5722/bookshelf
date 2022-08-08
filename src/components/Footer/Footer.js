import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../Assets/images/Logo/bookshelfWhite-removebg-preview.png";
import chat from "../../Assets/images/footer/chat.png";
import payment_img from "../../Assets/images/footer/payment_img.png";
import "./footer.scss";
const Footer = () => {
  return (
    <>
      <footer className="home_six_footer">
        <div className="main_footer_wrap">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>QUICK MENU</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <NavLink to="/contact">Contact Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About Us</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq">FAQ</NavLink>
                  </li>
                  <li>
                    <NavLink to="/privecy_policy">Privacy policy</NavLink>
                  </li>
                  <li>
                    <NavLink to="/termsCondition">Terms of use</NavLink>
                  </li>
                  <li>
                    <a className="text-white">Return policy</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>Partner</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <NavLink to="/became">Became Author/Publisher</NavLink>
                  </li>
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Gift Vouchers</a>
                  </li>
                  <li>
                    <a href="contact.php">Site Map</a>
                  </li>
                  <li>
                    <a href="#">Accessories</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>MY ACCOUNT</h3>
                </div>
                <ul className="footer_links">
                  <li>
                    <a href="my_account.php">My Account</a>
                  </li>
                  <li>
                    <a href="order_details.php">Order History</a>
                  </li>
                  <li>
                    <a href="wishlist.php">Wish List</a>
                  </li>
                  <li>
                    <a href="order_details.php">Order History</a>
                  </li>
                  <li>
                    <a href="wishlist.php">Wishlist</a>
                  </li>
                </ul>
              </div>
              <div className="footer_widget">
                <div className="footer_title">
                  <h3>Subscribe to our newsletter</h3>
                </div>
                <p className="synUp_text mb-4">
                  Sign up and get a voucher of worth $250.00
                </p>
                <div className="subcribe-form theme_mailChimp">
                  <form
                    target="_blank"
                    action="#"
                    method="get"
                    className="subscription relative"
                  >
                    <input
                      name="EMAIL"
                      className="form-control"
                      placeholder="Type e-mail address…"
                      required=""
                      type="email"
                    />
                    <button className="">Join Us</button>
                    <div className="info"></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_middle_wrap">
          <div className="container mx-auto">
            <div className="footer_border ">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                <div className="col-xl-4 col-lg-4 col-md-4">
                  <div className="footer_contact mb_30">
                    <div className="thumb">
                      <img className="" src={chat} />
                    </div>
                    <div className="contact_num">
                      <p>CALL US 24/7</p>
                      <h5>
                        {" "}
                        <span>+048</span> 800 456 789
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="footer_widget">
                    <p className="address_text">
                      9066 Green Lake Drive Chevy Chase, MD 20815
                    </p>
                    <a className="mail_text" href="#">
                      contact@example.com
                    </a>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-3">
                  <div className="footer_widget">
                    <div className="footer_title2">
                      <h3>Follow us</h3>
                    </div>
                    <div className="social__Links3">
                      <a href="#">
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="#">
                        <i className="fab fa-facebook"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3">
                  <div className="footer_widget">
                    <div className="footer_title2">
                      <h3>Payment method</h3>
                    </div>
                    <img className="img-fluid" src={payment_img} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright_area">
          <div className="container mx-auto">
            <div className="grid">
              <div className="copy_right_text text-center">
                <p>
                  © 2022 <a href="#"> BookSelf .</a> All rights reserved. Made
                  By <a href="#">BookSelf</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
