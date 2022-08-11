import React from "react";

const Modal = ({ modal, children }) => {
  return (
    <>
      <input type="checkbox" id={modal} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
