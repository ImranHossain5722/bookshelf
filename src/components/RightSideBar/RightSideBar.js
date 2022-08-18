import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsGiftFill } from "react-icons/bs";
import group2 from "../../Assets/images/group2.jpg";
import wp from "../../Assets/images/wp.png";
import jira from "../../Assets/images/jira.jfif";
import giftbox from "../../Assets/images/giftbox.png";
import "./RightSideBar.css";
import { RiVideoAddFill } from "react-icons/ri";
import {GrSearch} from "react-icons/gr";
import {BsThreeDots} from "react-icons/bs";
import Contacts from "../Contacts/Contacts";

const RightSideBar = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setUsers(data[0].user_data));
  }, []);
    
  return (
    <div className="RightSideBar">
      <div class="flex items-center  hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <p className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Sponsored
        </p>
      </div>
      {/* add */}
      <div className="add mt-5">
        <div class="flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4 cursor-pointer">
          <img className=" w-36 text-[#056BE1] rounded-lg" src={wp}  alt="" />
          <p className=" px-4 w-full text-black text-[15px]   dark:bg-gray-800 dark:border-gray-600">
            Wrodpress developemnt
          </p>
        </div>
      </div>
        {/* birthday */}
      <div class="flex items-center  hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <p className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600">
          Birthday
        </p>
      </div>
      <div className="add mt-5">
        <div class="flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img  src={giftbox} className="w-10" alt="" />
          <p className=" px-4 text-black text-[15px] text-left  w-[250px] dark:bg-gray-800 dark:border-gray-600">
           Adom and Anna have 
           birthdays today
          </p>
        </div>
      </div>

      {/* contact */}
      <div className="mt-6 flex gap-x-14">
        <div className="">
        <p className="font-semibold pl-5" >Contacts</p>
        </div>
        <div className="flex items-center gap-8">
        <RiVideoAddFill className=" text-gray-600"/> 
        <GrSearch/>
        <BsThreeDots/>
        </div>
      </div>
      {
        users.map((user) =>(
          <Contacts key={user.id} user={user} />
        ))}
       
        
    </div>
  );
};

export default RightSideBar;
