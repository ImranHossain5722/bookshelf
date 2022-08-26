import React from 'react'
import { useNavigate } from 'react-router-dom'

const ThankYou = () => {
    const navigate = useNavigate()
  return (
    <div>
        <button  className="btn btn-primary btn-sm ml-2 mt-2 text-white" onClick={() => navigate('/')}>back to Home page</button>
 <img src="https://i.ibb.co/SQyndTG/Successful-purchase-pana-1.png"  className="mx-auto  h-[80vh]"/>
        
    </div>
  )
}

export default ThankYou