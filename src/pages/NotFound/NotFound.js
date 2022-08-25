import React from "react";
import { useNavigate } from "react-router-dom";
import './NotFound.css'

const NotFound = () => {
const navigate =useNavigate()

const navgateHome =()=>{
    navigate('/')
}

  return (
    <div className="mainNotFound ">

      <div className="container h-screen">
        <div className="row ">
            <button button onClick={navgateHome } className="notFoundtButton w-25 mt-5  bg-primary">Back Home</button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
