import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ChatInput from "./ChatInput";

const ChatContainer = ({ currentChat, socket }) => {
  const [messages, setMessages] = useState([]);
  const scrollRef = useRef();
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const currentUser = useSelector((state) => state?.newUser?.user);
  const { email, user_name, _id } = currentChat;

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

  return (
    <div className="bg-white rounded-xl p-10 flex flex-col max-h-screen">
      <div class="avatar p-4 flex items-center border-b">
        <div class="w-10 rounded-full">
          <img src={`https://xsgames.co/randomusers/assets/avatars/male/${user_name.length}.jpg` } /> 
        </div>

        <p className="ml-2 font-semibold">{user_name}</p>
      </div>
      <div className="flex_1 overflow-auto ">
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
                 className={`${
                  msgs.fromSelf
                    ? " sender"
                    : " reciver"
                } bg-[#0CCF6A] py-2 px-4  m-2 to text-white     `}
         
            >
              {msgs.message}
            </p>
          </div>
        ))}
      </div>
      <ChatInput handleSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatContainer;
