
import imran from "../../Assets/images/left-side_profile_imran_hossain.jpg";
import { AiOutlineCloseCircle } from "react-icons/ai";
import ChatContainer from "../ChatContainer/ChatContainer";
import { io } from "socket.io-client";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "../ChatContainer/ChatInput";
import ChatPopupInput from "./ChatPopupInput";

const ChatPopup = ({currentChat}) => {
  const {user_name,user_photo_url,_id} = currentChat
  const socket = useRef(); 
  const currentUser = useSelector((state) => state?.newUser?.user);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

 

  useEffect(() => {
    const fetchChat = async () => {
      const response = await axios.post(
        "https://book-shelf-webapp.herokuapp.com/getmsg",
        {   
          from: currentUser._id,
          to: currentChat._id,
        }
      );
      setMessages(response.data);
    };
    fetchChat();
  }, [currentChat]);

  const handleSendMessage = async (msg) => {
    socket.current.emit("send-msg", {
      to: currentChat._id,
      from: currentUser._id,
      msg,
    });
    await axios.post("https://book-shelf-webapp.herokuapp.com/addmsg", {
      from: currentUser._id,
      to: currentChat._id,
      message: msg,
    });

    const msgs = [...messages];
    msgs.push({ fromSelf: true, message: msg });
    setMessages(msgs);
  };
  useEffect(() => {
    if (socket.current) {
      socket.current.on("msg-recieve", (msg) => {
        setArrivalMessage({ fromSelf: false, message: msg });
      });
    }
  }, []);

  useEffect(() => {
    arrivalMessage && setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage]);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (currentUser) {
      socket.current = io("https://book-shelf-webapp.herokuapp.com");
      socket.current.emit("add-user", currentUser._id);
    }
  }, [currentUser]);

  return (
    <div>
      <div className="bg-white  mx-auto w-96 h-[450px] ">
        {/* header */}
        <div className="flex mx-auto shadow-md bg-white justify-between p-2 w-96 h-14">
          <div className="flex  gap-2">
            <img className="rounded-full w-9 h-9" src={user_photo_url || `https://xsgames.co/randomusers/assets/avatars/male/${user_name.length}.jpg`} alt="" />
            <p>{user_name}</p>
          </div>
          <div className="">
            <AiOutlineCloseCircle />
          </div>
        </div>
      <div className="h-[300px] overflow-auto">
      {messages.map((msgs) => (
          <div
            className={`${
              msgs.fromSelf
                ? "text-start max-w-fit ml-auto"
                : "text-end max-w-fit mr-auto"
            }  `}
            ref={scrollRef}
            key={uuidv4()}
          >
            <p
              className="bg-[#0CCF6A] py-2 px-4  m-2 to text-white"
              style={{ borderRadius: "30px 0px 30px 30px" }}
            >
              {msgs.message}
            </p>
          </div>
        ))}
      </div>
      <ChatPopupInput handleSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPopup;
