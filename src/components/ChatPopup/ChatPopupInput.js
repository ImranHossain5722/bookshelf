import React, { useState } from "react";
import Picker from "emoji-picker-react";
import { BsEmojiSmileFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
const ChatPopupInput = ({ handleSendMessage }) => {
    const [msg, setMsg] = useState("");
  const [showEmoji, setshowEmoji] = useState(false);

  const handleEmoji = (event, emojiObject) => {
    let message = msg;
    message += emojiObject.emoji;
    setMsg(message);
  };
  const sendChat = (event) => {
    event.preventDefault();
    if (msg.length > 0) {
      handleSendMessage(msg);
      setMsg("");
    }
  };
  return (
    <div className="flex items-center relative ">
    <div className="mx-2 relative">
      {showEmoji && <Picker  onEmojiClick={handleEmoji} />}
      <BsEmojiSmileFill onClick={() => setshowEmoji(!showEmoji)} />
    </div>
    <form onSubmit={(event) => sendChat(event)}>
      <div className="flex ">
        <input
          type="text"
          placeholder="type your message"
          className="input w-[280px]  input-bordered  focus:outline-none"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="btn btn-primary ml-1" type="submit">
          <IoMdSend />
        </button>
      </div>
    </form>
  </div>
  )
}

export default ChatPopupInput