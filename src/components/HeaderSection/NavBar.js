import React from "react";
import logo from "../../Assets/Images/Tier5books.png";
import { GoSearch } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { BsPersonFill} from "react-icons/bs";
import { BsMessenger } from "react-icons/bs";
import { BsCamera} from 'react-icons/bs';
import { BsFillBellFill } from "react-icons/bs";
import { ImNewspaper } from "react-icons/im";
import { AiOutlineShop } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { FiYoutube } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import imran from "../../Assets/Images/story_image.jpg";
const NavBar = () => {
  return (
    <div className="navbar ">

        {/* for mobile menu */}
        <div className="bg-[#3B5998]  border-gray-200 dark:bg-gray-900 shadow-md py-2 flex lg:hidden">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
        <div class="flex place-items-end gap-3 ">
            
            <div className="topbarIconItem bg-bg-[#3B5998]  border border-white hover:bg-gray-300 p-2 rounded-full ">
              <BsPersonFill className="text-white" />
            </div>
          </div>
          <div className="flex items-center   lg:w-1/2  py-2 border-b">
            <GoSearch className="ml-[20px] text-sm text-white" />
            <input
              className="searchbar bg-[#3B5998] text-white font-sembold pl-1 focus:outline-none "
              placeholder="Search"
            />
          </div>
          <div class="flex place-items-end gap-3 ">
            
          <div className="topbarIconItem text-white hover:bg-gray-300 p-2 rounded-full">
              <BsMessenger className=" text-lg " />
            </div>
          </div>

        </div>
        </div>

            {/* desktop mmeu */}
   
      <nav class="bg-white border-gray-200 dark:bg-gray-900 shadow-md lg:fixed  top-20 lg:top-0  w-full lg:w-full h-[80px] z-50 py-2">

              {/* logo fir desktop */}
        <div class="flex  justify-between items-center  max-w-screen-full  py-2.5">
          <a href="/" class=" hidden lg:flex items-start pl-4  ">
            <img src={logo} class="mr-3 w-[180px]  sm:h-9" alt="Logo" />
          </a>

              {/* searcbar for destop */}
          <div className=" hidden lg:flex items-center bg-gray-100  max-w-sm md:max-w-md lg:w-1/2 rounded-2xl py-2 hover:bg-gray-200 ">
            <GoSearch className="ml-[20px] text-sm text-gray-500" />
            <input
              className="sm:max-w-sm md:max-w-md lg:w-full searchbar bg-[#80808000] text-black font-sembold pl-1 focus:outline-none "
              placeholder="Search Tier5Fbooks "
            />
          </div>

          <div class="flex  items-end  mx-auto md:mx-auto  gap-8 md:gap-8 lg:mx-0 lg:gap-3 pr-4">
                {/* news feed icon for mobile  */}
            <div className=" lg:hidden topbarIconItem p-2 rounded-full">
              <ImNewspaper className=" flex items-center text-lg text-[30px]" />
            </div>
                {/* news feed icon for mobile  */}
            <div className="lg:hidden topbarIconItem  p-2 rounded-full">
              <HiOutlineUsers className=" text-lg flex items-center text-[30px]" />
            </div>
                {/* news feed icon for mobile  */}
            <div className="lg:hidden topbarIconItem p-2 rounded-full">
              <AiOutlineShop className=" text-lg flex items-center text-[30px] " />
            </div>

                {/* news feed watch  icon for mobile  */}
            <div className=" flex items-center justify-center lg:hidden topbarIconItem  p-2 rounded-full">
              <FiYoutube className=" text-lg flex items-center text-[30px]" />
            </div>
            <div className="  flex lg:hidden topbarIconItem p-2 rounded-full text-[30px]">
              <AiOutlineBell/>
            </div>
            {/* for destop icon  */}
            <div className="hidden lg:flex topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
              <BsMessenger className=" text-lg " />
            </div>
            
             {/* for destop icon  */}
            <div className=" hidden lg:flex topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
              <BsFillBellFill />
            </div>
             {/* for destop icon  */}
            <div style={{
              background: `url(${imran})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }} className="hidden lg:flex topbarIconItem bg-gray-200 hover:bg-gray-300 p-2 rounded-full ">
              < MdOutlineKeyboardArrowDown className="bg-gray-200 rounded-full relative top-5 left-2"/>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
