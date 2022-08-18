import React from 'react'
import { useSelector } from 'react-redux'

const ChatWelcome = () => {
  const user = useSelector((state) => state?.newUser?.user)

  return (
    <div className='w-full flex items-center justify-center flex-col'>
        <img src="https://i.ibb.co/vCFwLCd/Texting-bro.png" alt="" className='w-[400px] ' />
        <div className='relative bottom-[50px] text-center '> 
        <p className="text-4xl text-[#00124E] font-semibold  ">Welcome {user?.user_name}</p>
        <p className=" text-2xl text-[#00124E] font-semibold">Please select a chat to start messaging</p>
        </div>
    </div>
  ) 
}

export default ChatWelcome