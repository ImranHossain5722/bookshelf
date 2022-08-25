import React from 'react'
import { BsBoxArrowLeft } from 'react-icons/bs'

const PostModal = ({ modal, children }) => {
  return (
    <>
      <input type="checkbox" id={modal} className="modal-toggle w-[50vw]" />
      <div className="modal w-[50vw] h-[400px] bg-transparent my-auto mx-auto ">
        <div className="modal-box relative h-[400px]  py-4">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute left-2  top-2 btn-primary text-white "
            
      
          >
            <BsBoxArrowLeft className="text-[18px] relative right-[2px] font-bold"/>
          </label>
          {children}
        </div>
      </div>
    </>
  )
}

export default PostModal