import React from "react";
import logo from "../../Assets/images/Logo/bookshelfWhite-removebg-preview.png";
const Footer = () => {
  return (
        <div style={{
            backgroundColor: "#293661",
            borderRadius: "30px 30px 0px 0px "
          }}>
      <footer
        
        class="footer p-10 

        "
      >
        <div>
          <div classNmae="">
            <img className="" src={logo} />
          </div>
          <p>
            ACME Industries Ltd.
            <br />
            Providing reliable tech since 1992{" "}
          </p>
        </div>
        <div>
          <span class="footer-title">Services</span>
          <a class="link link-hover">Branding</a>
          <a class="link link-hover">Design</a>
          <a class="link link-hover">Marketing</a>
          <a class="link link-hover">Advertisement</a>
        </div>
        <div>
          <span class="footer-title">Company</span>
          <a class="link link-hover">About us</a>
          <a class="link link-hover">Contact</a>
          <a class="link link-hover">Jobs</a>
          <a class="link link-hover">Press kit</a>
        </div>
        <div>
          <span class="footer-title">Legal</span>
          <a class="link link-hover">Terms of use</a>
          <a class="link link-hover">Privacy policy</a>
          <a class="link link-hover">Cookie policy</a>
        </div>
      </footer>

      </div>
   
  );
};

export default Footer;
