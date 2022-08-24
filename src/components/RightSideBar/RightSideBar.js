import React, { useEffect, useRef, useState } from "react";
import wp from "../../Assets/images/wp.png";
import "./RightSideBar.css";
import Contacts from "../Contacts/Contacts";
import { useDispatch, useSelector } from 'react-redux'
import { allUsers, sellBooks } from '../Redux/actions/bookActions'
import axios from 'axios'
import Loading from '../Loading/Loading'
import ChatPopup from "../ChatPopup/ChatPopup";
import { io } from "socket.io-client";

const RightSideBar = () => {
  const currentUser = useSelector((state) => state?.newUser?.user);

  const users = useSelector((state) => state.allUser.allUsers)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [currentChat, setCurrentChat] = useState(undefined);
  const socket = useRef(); 
  

  // console.log("users", users)
  useEffect(() => {

    const fetchUsers = async () => {
      setLoading(true);
      const res = await axios.get('https://book-shelf-webapp.herokuapp.com/all-users');
      dispatch(allUsers(res.data))
      setLoading(false);

    };
    if (users.length === 0) {
      console.log("user is not present")
      fetchUsers();
    }
  }, [])
  useEffect(() => {
    if (currentUser) {
      socket.current = io("https://book-shelf-webapp.herokuapp.com");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);
  const handleContact = (chat) => {
    setCurrentChat(chat);
    console.log(chat);
  };
  if (loading) {
    return <Loading />
  }
  return (
    <div className="RightSideBar">
      <div class="flex items-center mt-3 hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        <p className="py-2 px-4 w-full text-black text-lg    dark:bg-gray-800 dark:border-gray-600 font-semibold">
          Sponsored
        </p>
      </div>
      {/* add */}
      <div className="add mt-5">
        <div class="flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4 cursor-pointer">
          <img className=" w-36 text-[#056BE1] rounded-lg" src={wp}  alt="" />
          <p className=" px-4 w-full text-black text-[15px]   dark:bg-gray-800 dark:border-gray-600">
            30% of our this books 
          </p>
        </div>
      </div>
       
  
      {/* contact */}
      <div className="mt-6 flex gap-x-14">
        <div className="">
        <p className="font-semibold pl-5" >Customers</p>
        </div>
       
      </div>
      {
        users.map((user) =>(
          <Contacts key={user.id} user={user} handleContact={handleContact} />
        ))}
        <div className="fixed bottom-0 right-[50px]">

      {currentChat && <ChatPopup  currentChat={currentChat} setCurrentChat={setCurrentChat} socket={socket}/>}
        </div>
    </div>
  );
};

export default RightSideBar;
