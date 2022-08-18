import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import leftSideProfileImage from "../../Assets/images/left-side_profile_imran_hossain.jpg";
import leftSideWatch from "../../Assets/images/watch.png";
import leftSideMarket from "../../Assets/images/marcket.png";
import gaming from "../../Assets/images/gmaing.png";
import { MdGroups } from "react-icons/md";
import group1 from "../../Assets/images/group1.png";
import group2 from "../../Assets/images/group2.jpg";
import group3 from "../../Assets/images/group3.jpg";
import group4 from "../../Assets/images/grp.jpg";
import { FiLink } from "react-icons/fi";
import JS from "../../Assets/images/js.png";
import './LeftSideBar.css'

const LeftSideBar = () => {
  return (
    <div className="">
      {/* home */}
      <div className="leftSidebar flex items-center  hover:bg-[#E4E6E9] border-l-4 border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <AiFillHome className=" text-3xl text-[#056BE1] " />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600"
        >
          Home
        </a>
      </div>
      {/* profile */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img
          className=" w-8 h-8 text-[#056BE1] rounded-full"
          src={leftSideProfileImage}
        />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Md.Imran Hossain
        </a>
      </div>
      {/* menu */}
      <div class="flex items-center  hover:bg-[#E4E6E9] mt-3   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <CgMenuGridO className=" text-3xl text-[#000] bg-gray-200 rounded-full" />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600"
        >
          Menu
        </a>
      </div>

      {/* watch */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img
          className=" w-8 h-8 text-[#056BE1] rounded-full"
          src={leftSideWatch}
        />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Watch
        </a>
      </div>
      {/* market place  */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img
          className=" w-8 h-8 text-[#056BE1] rounded-full"
          src={leftSideMarket}
        />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Merketplace
        </a>
      </div>

      {/* Gaming  */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={gaming} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Gaming
        </a>
      </div>

      {/* group */}
      <div class="flex items-center  hover:bg-[#E4E6E9] mt-3   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <MdGroups className=" text-3xl text-[#000] bg-gray-200 rounded-full" />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600"
        >
          Groups
        </a>
      </div>

      {/* group1 */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group1} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Bangladesh payton..
        </a>
      </div>
      {/* group2 */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group2} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Poramming Hero...
        </a>
      </div>

      {/* group3 */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group3} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          React Js Bd Group...
        </a>
      </div>
      {/* group4 */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group4} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Jobs Searc Bd Group...
        </a>
      </div>

      {/* group5 */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group2} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          CSS Tricks Bd Group...
        </a>
      </div>

      {/* shortcut */}
      <div class="flex items-center mt-3 hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <FiLink className=" text-3xl text-black " />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600"
        >
          Shortcuts
        </a>
      </div>
      {/* shortcut Js */}

      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={JS} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          JavaScript Tricks Bd Group...
        </a>
      </div>

      {/* shortcut Js */}

      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group4} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Java, C, React Group
        </a>
      </div>

      {/*  */}
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group2} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Poramming Hero...
        </a>
      </div>
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group2} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Poramming Hero...
        </a>
      </div>
      <div class="flex items-center   dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <img className=" w-8 h-8 text-[#056BE1] rounded-full" src={group2} />
        <a
          href="#"
          aria-current="true"
          className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600"
        >
          Poramming Hero...
        </a>
      </div>

    </div>
  );
};

export default LeftSideBar;
