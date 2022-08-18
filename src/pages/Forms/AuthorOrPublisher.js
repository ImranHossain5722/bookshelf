import React, { useState } from "react";
import AddAuthor from "./AddAuthor";
import AddPublisher from "./AddPublisher";

const AuthorOrPublisher = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checkState = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);
  };

  return (
    <div>
      <div className="form-control w-1/6 mx-auto my-12 rounded-3xl ">
        <label className="label cursor-pointer border p-0 rounded-3xl max-w-xs flex bg-[#B4ACAC]">
          <span
            className={
              !isChecked
                ? "label-text text-lg font-bold p-3 px-5 w-1/2 bg-primary text-center text-white pl-8 rounded-[30px]"
                : "label-text text-lg font-bold p-3 px-5 w-1/2 bg-[#B4ACAC] text-center text-white pl-8 rounded-[30px]"
            }
          >
            Author
          </span>
          <input
            onChange={(e) => checkState(e)}
            type="checkbox"
            className="toggle rounded-none toggle-primary border-4 py-0 px-0 opacity-0 w-0 hidden"
          />
          <span
            className={
              isChecked
                ? "label-text text-lg font-bold p-3 px-5 w-1/2 bg-primary text-center text-white rounded-[30px]"
                : "label-text text-lg font-bold p-3 px-5 w-1/2 bg-[#B4ACAC] text-center text-white rounded-[30px]"
            }
          >
            Publisher
          </span>
        </label>
      </div>
      <div>{!isChecked ? <AddAuthor /> : <AddPublisher />}</div>
    </div>
  );
};

export default AuthorOrPublisher;
