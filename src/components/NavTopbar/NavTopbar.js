import React from "react";
import phone from "../../Assets/images/icon/Phone.png";
import email from "../../Assets/images/icon/Email.png";
import liveChat from "../../Assets/images/icon/Support agent.png";
import IG from "../../Assets/images/icon/instagram 1.png";
import FB from "../../Assets/images/icon/facebook-app-symbol 1.png";
import { useLocation } from "react-router-dom";
const NavTopbar = () => {
  

  return (
    <div 
    className="bg-primary p-2">
      <div className="grid justify-center	">
        <div className="grid md:grid-cols-3 lg:grid-cols-4">
          <div className="flex items-center">
            <img className="w-5" src={phone}/>
            <p className="text-white text-base">+8801688615454</p>
          </div>
          <div className="flex items-center ">
            <img className="mr-4 w-5" src={email} />
            <p className="text-white text-base">bookshefl@gmail.com</p>
          </div>

          <div className="flex items-center ">
            <img className=" mx-2 lg:mx-4 w-5" src={liveChat} />
            <p className="text-white text-base">Live Chat</p>
          </div>

          <div className="flex items-center py-4 md:p-0 lg:p-0 ">
            <img className="mr-4 w-5 h-5 "src={FB} />
            <img className="w-5 h-5 "src={IG} />
            </div>

           
        </div>
      </div>
    </div>
  );
};

export default NavTopbar;
