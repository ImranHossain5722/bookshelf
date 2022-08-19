import React from "react";
import phone from "../../Assets/images/icon/Phone.png";
import email from "../../Assets/images/icon/Email.png";
import liveChat from "../../Assets/images/icon/Support agent.png";
import IG from "../../Assets/images/icon/instagram 1.png";
import FB from "../../Assets/images/icon/facebook-app-symbol 1.png";
import { Link, useLocation } from "react-router-dom";
const NavTopbar = () => {
  return (
    <div className="bg-primary header_topBar hidden lg:block">
      <div className="w-full">
        <div className="flex justify-between gap-2">
          <div className="flex items-center gap-4">
            <p className="text-white text-base">Hotline: +016 688 615 454</p>
            <span className="seperator h-3 w-[1px] bg-[#fff]"></span>
            <p className="text-white text-base">Email: bookshefl@gmail.com</p>
          </div>
          <div className="flex items-center  gap-4">
            <Link to="/chat">
            <p className="text-white text-base">Live Chat</p>
            </Link>
            <span className="seperator h-3 w-[1px] bg-[#fff]"></span>
            <p className="text-white text-base">My Account</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavTopbar;
