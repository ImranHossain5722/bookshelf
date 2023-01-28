import imran from "../../Assets/images/left-side_profile_imran_hossain.jpg";
import { FaCommentSlash } from "react-icons/fa";
import ChatContainer from "../ChatContainer/ChatContainer";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ChatPopupInput from "./ChatPopupInput";
import "./ChatPopup.css";
const ChatPopup = ({ currentChat, setCurrentChat, socket }) => {
  const { user_name, user_photo_url, _id } = currentChat;
  const currentUser = useSelector((state) => state?.newUser?.user);
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  useEffect(() => {
    const fetchChat = async () => {
      const response = await axios.post(
        "https://bookshelf-server-s8lf.onrender.com/getmsg",
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
    await axios.post("https://bookshelf-server-s8lf.onrender.com/addmsg", {
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

  return (
    <div>
      <div className="bg-white  mx-auto w-96 h-[450px] ">
        {/* header */}
        <div className="flex mx-auto shadow-md bg-white justify-between p-2 w-96 h-14">
          <div className="flex  gap-2">
            <img
              className="rounded-full w-9 h-9"
              src={
                user_photo_url ||
                `https://xsgames.co/randomusers/assets/avatars/male/${user_name.length}.jpg`
              }
              alt=""
            />
            <p>{user_name}</p>
          </div>
          <div
            className="text-[18px] mt-2 mr-2 cursor-pointer"
            onClick={() => setCurrentChat(undefined)}
          >
            <FaCommentSlash />
          </div>
        </div>
        <div className="h-[300px] overflow-auto">
          {messages.map((msgs) => (
            <div
              className={`${
                msgs.fromSelf
                  ? "text-start max-w-fit ml-auto sender"
                  : "text-end max-w-fit mr-auto reciver"
              }  `}
              ref={scrollRef}
              key={uuidv4()}
            >
              <p
                className={`${
                  msgs.fromSelf ? " sender" : " reciver"
                } bg-[#0CCF6A] py-2 px-4  m-2 to text-white     `}
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
