import React, { useState } from 'react'

const Release = () => {
    const [countDays, setCountDays] = useState('00')
    const [countMinutes, setCountMinutes] = useState('00')
    const [countHour, setCountHour] = useState('00')
    const [countSeconds, setCountSeconds] = useState('00')
    const [count, setCount] = useState('00')
   
  return (
    <div className='px-10'>
        <div class="card lg:card-side bg-base-100 shadow-xl p-10">
  <figure><img className='rounded' src="https://placeimg.com/400/400/arch" alt="Album"/></figure>
  <div class="card-body flex justify-center items-center">
    <div>

    <p className='text-[40px] mx-auto align'>Time remaining for Publishing!</p>
    <div className='flex justify-around text-center'> 
        <div className="text-center">
        <p className="text-6xl">00</p>
            <p>Days</p>
        </div>
        <div className="text-center">
        <p className="text-6xl">00</p>
            <p>Hours</p>
        </div>
        <div className="text-center">
        <p className="text-6xl">00</p>
            <p>Minutes</p>
        </div>
        <div className="text-center">
            <p className="text-6xl">00</p>
            <p>Seconds</p>
        </div>
    </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Release