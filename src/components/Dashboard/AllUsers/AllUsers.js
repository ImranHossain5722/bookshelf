import React from 'react'

const AllUsers = () => {
  return (
    <div className='grid grid-cols-3 g-4'>
      <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[370px] h-[160px] p-7">
        <p className="pl-8 ">mark don</p>
      <div className='flex items-center'>
      <div class="avatar">
  <div class="w-16 rounded">
    <img src="https://placeimg.com/192/192/people" alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
        <div className='pl-4'>
        <p className=''>icons</p>
        <p className=''>icon</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AllUsers