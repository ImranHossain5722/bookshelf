import React from "react";
import { TbArrowBigLeftLines } from "react-icons/tb";

const CommentModal = ({ modal, children }) => {
  return (
    <>
      <input type="checkbox" id={modal} className="modal-toggle w-[40vw]" />
      <div className="modal w-[100vw] right-[40px] md:w-[55vw]  h-fit bg-transparent my-auto mx-auto commentModal">
        <div className="modal-box relative h-fit  py-4">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute left-2 top-2 mb-2 btn-primary text-white hover:bg-white hover:text-primary hover:border-2"
          >
            <TbArrowBigLeftLines className="text-[18px] relative right-[2px]" />
          </label>
          {children}
        </div>
      </div>
    </>
  );
};

export default CommentModal;
