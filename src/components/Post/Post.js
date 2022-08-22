import React, { useEffect, useRef, useState } from "react";
import imran from "../../Assets/images/story_image.jpg";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { GoSmiley } from "react-icons/go";
// import CreateRoom from "../CreateRoom/CreateRoom";
import ShowPost from "../ShowPost/ShowPost";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import './Post.css'
import {  useSelector } from "react-redux";
import axios from "axios";

const Post = () => {
  const [userPost, setUserPost] = useState([]);
  const [showBtn, setShowBtn] = useState(false);
  const [user] = useAuthState(auth)
  const currentUser = useSelector((state) => state?.newUser?.user) 
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setUserPost(data[1].post_data));
      
  }, []);
  const text = useRef()
  const handlePost = (e) => {
    e.preventDefault()
    console.log(text.current.value)
        const postData = {
          user_id : currentUser?._id, 
          post_content : text.current?.value 
        }
        // sending post
        if(postData){
          console.log(postData);
          console.log(postData.user_id)
          axios.post("https://book-shelf-webapp.herokuapp.com/add-post",postData).then(data => console.log(data))
        }
  }

  const handleChange = () => {


    if( text.current?.value){
   setShowBtn(true)

  }else{
    setShowBtn(false)

    }

  }

  return (
    <div className="">
      <div className="post  bg-white rounded-xl shadow-md  mx-auto max-w-sm md:max-w-md lg:max-w-[100%]">
      <form onSubmit={handlePost} onChange={handleChange}>

        <div className="flex justify-center items-center relative ">
       
          <div class="avatar">
  <div class="w-14 m-4  rounded-full">
    <img src={user?.photoURL} />
  </div>
</div>
          {/* input field  */}
          <input
            className="flex justify-center pr-24  mr-3  bg-gray-200 px-7 mx-auto  w-5/6 h-12 rounded-xl focus:outline-none "
            placeholder="Whats on your mind" ref={text}
          />
        <button class={`${showBtn ? "flex ease-linear duration-500 post_button bg-primary" :"hidden ease-linear duration-500 post_button bg-primary"} focus:outline-none  `} type="submit" > Post
<div class="icon">
  <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
</div>
</button>

        </div>
          </form>
        <div className="  h-[1px] bg-gray-200 "> </div>

        <div className="flex mx-auto max-w-sm md:max-w-md lg:max-w-lg py-3">
        <label for="post_modal" className=" flex items-center gap-2 ml-3" >
  
      
            <MdOutlinePhotoLibrary className=" text-[16px] lg:text-[20px] text-green-800 " />
            <h2 className="text-gray-400 font-semibold text-[13px] lg:text-[16px] pr-2">
              {" "}
              Photo/ Video{" "}
            </h2>
        </label>

        
        
        </div>
      </div>

      {/* <div className="mt-6">
        <CreateRoom />
      </div> */}

      <div className="mt-6">
        {userPost?.map(singlePost => (
          <ShowPost key={singlePost?.id} singlePost={singlePost} />
        ))}
      </div>
    </div>
  );
};

export default Post;
