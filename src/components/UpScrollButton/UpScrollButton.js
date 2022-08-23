import React, { useState } from "react";
import './UpscrollButton.css'
import ScrollToTop from "react-scroll-to-top";


const UpScrollButton = () => {

  const [visiable, setvisiable] = useState(true)

  return (
    <div>
      <ScrollToTop smooth />
    </div>
  )
}

export default UpScrollButton