import React, { useEffect, useRef, useState } from 'react'

const Release = () => {
  const [countDays, setCountDays] = useState('00')
  const [countMinutes, setCountMinutes] = useState('00')
  const [countHour, setCountHour] = useState('00')
  const [countSeconds, setCountSeconds] = useState('00')

  let interval = useRef();
  const startCounting = () => {
    const releaseDate = new Date('September 20,2022 00:00:00 ').getTime()
    interval = setInterval(() => {

      const today = new Date().getTime();
      const duration = releaseDate - today

      const days = Math.floor(duration / (1000 * 60 * 60 * 24));
      const hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((duration % (1000 * 60)) / 1000);

      if(duration < 0){
        clearInterval(interval.current)
      }
      else{
        setCountDays(days)
        setCountHour(hours)
        setCountMinutes(minutes)
        setCountSeconds(seconds)
      }

    }, 1000);
    
  }
  
      useEffect(() => {
        startCounting()
      
        return () => {
          clearInterval(interval.current)
         
        }
      }, [])
  return (
    <div className='px-10'>
      <div class="card lg:card-side bg-base-100 shadow-xl p-10">
        <figure><img className='rounded' src="https://images-us.bookshop.org/ingram/9780593353707.jpg?height=500&v=v2" alt="Album" /></figure>
        <div class="card-body flex justify-center items-center">
          <div>

            <p className='text-[40px] mx-auto align'>Time remaining for Publishing!</p>
            <div className='flex justify-around text-center'>
              <div className="text-center">
                <p className="text-6xl">{countDays}</p>
                <p>Days</p>
              </div>
              <div className="text-center">
                <p className="text-6xl">{countHour}</p>
                <p>Hours</p>
              </div>
              <div className="text-center">
                <p className="text-6xl">{countMinutes}</p>
                <p>Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-6xl">{countSeconds}</p>
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