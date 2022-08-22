import React from 'react'

const PostModal = ({ modal, children }) => {
  return (
    <>
      <input type="checkbox" id={modal} className="modal-toggle w-[50vw]" />
      <div className="modal w-[50vw] h-[400px] bg-transparent my-auto mx-auto ">
        <div className="modal-box relative h-[400px]  py-4">
          <label
            htmlFor={modal}
            className="btn btn-sm btn-circle absolute right-2 top-2 btn-primary text-white hover:bg-white hover:text-primary hover:border-2"
            
        //  Customize icon
          >
            ✕
          </label>
          {children}
        </div>
      </div>
    </>
  )
}

export default PostModal