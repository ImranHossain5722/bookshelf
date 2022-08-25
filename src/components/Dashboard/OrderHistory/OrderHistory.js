import React from 'react'
import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import CurrentOrders from './CurrentOrders';
import OrdersPicked from './OrdersPicked';
import OrdersDelivered from './OrdersDelivered';
const OrderHistory = () => {
  const pathname = window.location.pathname;

  const path = pathname.split('/')[3];
  const { data: allOrders } = useQuery(['myOrderHistory'], () =>
    fetch(`https://book-shelf-webapp.herokuapp.com/all-orders`).then(res =>
      res.json()
    )
  )


  return (
    <div>
      {/* 
      <div className="grid grid-cols-4 px-[12px] my-12">
        <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
          <div className='flex justify-between items-center'>
            <p className="text-[40px] text-[#00124E] font-bold">1503</p>
            <p className='text-5xl text-primary'><BsFillArrowLeftSquareFill /></p>
          </div>
          <div className='text-[#00124E] font-[600]'>Daily signup</div>
        </div>
        <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
          <div className='flex justify-between items-center'>
            <p className="text-[40px] text-[#00124E] font-bold">1503</p>
            <p className='text-5xl text-primary'><HiUsers /></p>
          </div>
          <div className='text-[#00124E] font-[600]'>Daily Visitors</div>
        </div>
        <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
          <div className='flex justify-between items-center'>
            <p className="text-[40px] text-[#00124E] font-bold">1503</p>
            <p className='text-5xl text-primary'><MdShoppingBasket /></p>
          </div>
          <div className='text-[#00124E] font-[600]'>Daily Orders</div>
        </div>
        <div className="mx-[12px] card history-shadow border-primary border-[1px] w-[260px] h-[150px] p-7">
          <div className='flex justify-between items-center'>
            <p className="text-[40px] text-[#00124E] font-bold">1503</p>
            <p className='text-5xl text-primary'><AiFillDollarCircle /></p>
          </div>
          <div className='text-[#00124E] font-[600]'>Daily Revenue</div>
        </div>

      </div> */}
      <div>
        <Link className='btn btn-primary ml-2 mt-2' to='/dashboard/orderhistory/orders' element={CurrentOrders}>Orders</Link>
        <Link className='btn btn-error ml-2 mt-2' to='/dashboard/orderhistory/pickedorders' element={OrdersPicked}>Picked</Link>
        <Link className='btn btn-Secondary ml-2 mt-2' to='/dashboard/orderhistory/deliveredorders' element={OrdersDelivered}>Delivered</Link>
        {path === 'orders' && <CurrentOrders allOrders={allOrders} />}
        {path === 'pickedorders' && <OrdersPicked allOrders={allOrders} />}
        {path === 'deliveredorders' && <OrdersDelivered allOrders={allOrders} />}
      </div>





    </div>
  )
}

export default OrderHistory