import React from 'react'
import { BsFillArrowLeftSquareFill } from 'react-icons/bs';
import { HiUsers } from 'react-icons/hi';
import { MdShoppingBasket } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
const OrderHistory = () => {
 
  return (
    <div>
   <div className="grid grid-cols-4 px-[12px] my-20">
    <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
      <div className='flex justify-between items-center'>
        <p className="text-[40px] text-[#00124E] font-bold">1503</p>
        <p className='text-5xl text-primary'><BsFillArrowLeftSquareFill/></p>
      </div>
      <div className='text-[#00124E] font-[600]'>Daily signup</div> 
    </div>
    <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
      <div className='flex justify-between items-center'>
        <p className="text-[40px] text-[#00124E] font-bold">1503</p>
        <p className='text-5xl text-primary'><HiUsers/></p>
      </div>
      <div className='text-[#00124E] font-[600]'>Daily Visitors</div>
    </div>
    <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
      <div className='flex justify-between items-center'>
        <p className="text-[40px] text-[#00124E] font-bold">1503</p>
        <p className='text-5xl text-primary'><MdShoppingBasket/></p>
      </div>
      <div className='text-[#00124E] font-[600]'>Daily Orders</div>
    </div>
    <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
      <div className='flex justify-between items-center'>
        <p className="text-[40px] text-[#00124E] font-bold">1503</p>
        <p className='text-5xl text-primary'><AiFillDollarCircle/></p>
      </div>
      <div className='text-[#00124E] font-[600]'>Daily Revenue</div>
    </div>
    
   </div>
<div className="overflow-x-auto mx-[12px]">
<table className="table w-full " >

  <thead className=" ">
    <tr className='w-full base-100'>
      <th>Order History</th>
      <th></th>
      <th></th>
      <th></th>
      <th></th>
     
    </tr>
  </thead>

  <thead>
    <tr>
      
      <th>Product</th>
      <th>Product name</th>
      <th>Price</th>
      <th>Quantity</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
   {/* {
       data?.map((product,index) => <ManageallProductCard product={product} index={index} setOpen={setOpen}  setProductId={setProductId}/>)
   } */}
   
  </tbody>
</table>
</div>

  </div>
  )
}

export default OrderHistory