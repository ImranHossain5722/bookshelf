import React from "react";
import Stars from "../Stars/Stars";

const Card = (props) => {
  const imgLink = props?.imgSrc || "https://picsum.photos/200/300";
  return (
    <div className="p-5 border-solid border-1 rounded-lg border-transparent book-shadow max-w-md">
      <img className="mx-auto" src={imgLink} alt="" />
      <div className="text-center p-3">
        <h2 className="text-2xl">Book Title</h2>
        <p>Author Name</p>
        <Stars />
        <p className="text-xl">$123</p>
      </div>
    </div>
  );
};

export default Card;
