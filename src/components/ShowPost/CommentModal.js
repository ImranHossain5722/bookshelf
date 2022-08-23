import React from 'react'

const CommentModal = ({ modal, children }) => {
  return (
    <>
    <input type="checkbox" id={modal} className="modal-toggle w-[45vw]" />
    <div className="modal w-[45vw] h-fit bg-transparent my-auto mx-auto ">
      <div className="modal-box relative h-fit  py-4">
        
        {children}
      </div>
    </div>
  </>
  )
}

export default CommentModal