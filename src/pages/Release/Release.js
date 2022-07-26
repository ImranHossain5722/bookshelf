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
    <div className='px-10 bg-white mx-auto max-w-[1240px] mt-[120px] shadow-xl rounded-xl'>
      <div class="card lg:card-side p-10">
        <figure><img className='rounded' src="https://images-us.bookshop.org/ingram/9780593353707.jpg?height=500&v=v2" alt="Album" /></figure>
        <div class="card-body flex justify-center items-center">
          <div>
          <p className='  text-xl lg:text-[40px]  my-5 font-semibold text-accent' >Time Remaining For </p>
          <p className=' text-xl lg:text-[40px] mb-5 font-semibold text-accent' >Publishing!
</p>

            <div className='lg:flex lg:justify-around '>
              <div className="text-center bg-">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl ">{countDays}</p>
                <p className='text-accent font-semibold pt-4'>Days</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">{countHour}</p>
                <p className='text-accent font-semibold pt-4'>Hours</p>
              </div>
              <div className="text-center  ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl mx-4">{countMinutes}</p>
                <p className='text-accent font-semibold pt-4 '>Minutes</p>
              </div>
              <div className="text-center ">
                <p className="text-5xl text-accent font-semibold bg-base-100 p-10 rounded-xl">{countSeconds}</p>
                <p className='text-accent font-semibold pt-4'>Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Release