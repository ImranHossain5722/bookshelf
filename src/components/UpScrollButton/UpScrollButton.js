import React from 'react'
import useWindowDimensions from '../windowSize/windowSize'
import './UpscrollButton.css'
const UpScrollButton = () => {
  const {height,width} = useWindowDimensions()
  console.log(height)
  return (
    <div>
      <button class="upScrollButton">
    <div class="text">
        <span>Back</span> 
        <span>to</span>
        <span>top</span>
    </div>
    <div class="clone">
        <span>Back</span>
        <span>to</span>
        <span>top</span>
    </div>
    <svg width="20px" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
    </svg>
</button>
    </div>
  )
}

export default UpScrollButton