import React from "react";
import Card from "../Card/Card";

const SampleCard = () => {
  return (
    <div className="grid grid-cols-4 justify-items-center gap-4">
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default SampleCard;
