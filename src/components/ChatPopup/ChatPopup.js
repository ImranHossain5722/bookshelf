import React from "react";
import imran from "../../Assets/images/left-side_profile_imran_hossain.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
const ChatPopup = () => {
  return (
    <div>
      <div className="bg-white  mx-auto w-96 h-[450px] ">
        {/* header */}
        <div className="flex mx-auto shadow-md bg-white justify-between p-2 w-96 h-14">
          <div className="flex  gap-2">
            <img className="rounded-full w-9 h-9" src={imran} alt="" />
            <p>Name</p>
          </div>
          <div className="">
            <AiOutlineCloseCircle />
          </div>
        </div>

        <div className="body">
          <h2 className="">pop up body</h2>
        </div>

        <div className="footer relative top-80 bottom-0 left-0 ">
          <div className=" w-full">
            <input
              type="text"
              placeholder="Aa"
              className="focus:outline-none p-3 bg-gray-200 w-full "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPopup;
