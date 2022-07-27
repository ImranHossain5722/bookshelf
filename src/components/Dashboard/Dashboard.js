import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'


function Dashboard() {
  const [user] = useAuthState(auth)

  return (
    <div class="drawer drawer-mobile min-h-[100vh]">
    <input id="dashboard_drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content ">
        <p className='text-4xl m-3'>Dashboard</p>
  <Outlet/>
      
    </div> 
    <div class="drawer-side ">
      <label for="dashboard_drawer" class=" drawer-overlay bg-white "></label> 
      <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
  <p className='text-xl text-[#00124E] font-bold'>Dashboard</p>
        <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
       <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
        <li><Link to='/dashboard/addreview' className='text-lg text-[#00124E] font-bold'>Add a review</Link></li>
        
        <li><Link to='/dashboard/alluser' className='text-lg text-[#00124E] font-bold'>All Users</Link></li>
        <li><Link to='/dashboard/allorders' className='text-lg text-[#00124E] font-bold'>All Orders</Link></li>
        <li><Link to='/dashboard/allauthor' className='text-lg text-[#00124E] font-bold'>All Authors</Link></li>
        <li><Link to='/dashboard/allpublisher' className='text-lg text-[#00124E] font-bold'>All Publishers</Link></li>
        <li><Link to='/dashboard/orderhistory' className='text-lg text-[#00124E] font-bold'>Order History</Link></li>
        <li><Link to='/dashboard/addproduct' className='text-lg text-[#00124E] font-bold'>All Product</Link></li>
        <li className='text-lg text-[#00124E] font-bold pl-5'>Logout</li>
        

        
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard