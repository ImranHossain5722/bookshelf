import React from "react";
import Card from "../Card/Card";

const PopularBooks = () => {
  const imgLinks = [
    "https://i.ibb.co/ysvP0xV/62ac8862c-199403.png",
    "https://i.ibb.co/4pXDCwX/If-Cats-Disappeared-from-the-world-Genki-Kawamura-e7a6d-220182.png",
    "https://i.ibb.co/JyCDhW7/Ami-Poramanob-Muhammod-Zafar-Iqbal-0ac3e-222641.png",
    "https://i.ibb.co/mDsf3NM/d631b7a03-154385.jpg",
    "https://i.ibb.co/3y5C6BM/Rag-Niyontrone-Rakhun-Abu-Zarif-11f8f-226653.jpg",
    "https://i.ibb.co/0JY2BMZ/cb53eac80-215701.jpg",
    "https://i.ibb.co/RN2XCFF/0b8dbade5-198345.png",
    "https://i.ibb.co/jGxSS6B/247fb7d26-61656.png",
  ];
  return (
    <>
      <div className="grid sm:grid-cols-1  md:grid-cols-2  lg:grid-cols-4 gap-4 justify-evenly justify-items-center my-20">
        {imgLinks.map((link) => (
          <Card imgSrc={link}></Card>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary text-white my-8 mx-auto">
          See more
        </button>
      </div>
    </>
  );
};

export default PopularBooks;
