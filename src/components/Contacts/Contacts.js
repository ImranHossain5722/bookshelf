import React from "react";
import ChatPopup from "../ChatPopup/ChatPopup";
const Contacts = ({ user,handleContact }) => {

  
  // console.log(user)
  return (
    <div     onClick={() => handleContact(user)}>
      <div className="flex items-center hover:bg-[#E4E6E9] cursor-pointer">
        <div className=" flex items-center">
          <img
            className=" w-9 h-9  text-[#056BE1] rounded-full"
            src={
              user?.user_photo_url
                ? user?.user_photo_url
                : `https://xsgames.co/randomusers/assets/avatars/male/${user?.user_name.length}.jpg`
            }
            alt="author"
          />
          <p className="py-2 px-4 w-full text-black text-lg   dark:bg-gray-800 dark:border-gray-600">
            {user?.user_name}
          </p>
        
     
        </div>
     
      </div>
    </div>
  );
};

export default Contacts;
