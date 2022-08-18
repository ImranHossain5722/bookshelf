import React from 'react';
import imran from "../../Assets/images/story_image.jpg";
import {BsDot}from "react-icons/bs"
const Contacts = ({user}) => {
  // console.log(user)
  const {user_name, user_photo_url} = user
        // console.log(user)
    return (
      
        <div>
            <div className='flex items-center hover:bg-[#E4E6E9] cursor-pointer'>
            <div className='w-11 h-11 bg-gray-300 m-4 rounded-full '
              style={{
                background:`url(${user_photo_url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} >
                      <BsDot className='relative top-3 left-4  text-[#2F9A48] text-[45px] '/>
                
              </div>
               <p>{user_name}</p>

            </div>
        </div>
    );
};

export default Contacts;