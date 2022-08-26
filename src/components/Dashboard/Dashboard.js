import { signOut } from 'firebase/auth'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import useGetUserData from '../../hooks/useGetUserData'
import OrderModel from '../OrderModel/OrderModel'
import OrderView from '../OrderModel/OrderView'


function Dashboard() {
  const { userRole } = useGetUserData();
  return (

    <div class="drawer drawer-mobile min-h-[100vh]">
      <input id="dashboard_drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content ">

        <div className="drawer drawer-mobile min-h-[100vh]">
          <input id="dashboard_drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            <Outlet />
          </div>
          <div className="drawer-side bg-white ">
            <label htmlFor="dashboard_drawer" className=" drawer-overlay bg-white "></label>
            <ul className="menu p-4 overflow-y-auto w-full text-base-content active">
              <p className='text-xl text-[#00124E] font-bold'>Dashboard</p>

              {userRole === 'user' && <>
                <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
                <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
                <li><Link to='/dashboard/orderhistory/orders' className='text-lg text-[#00124E] font-bold'>Order History</Link></li>
                <li><Link to='/dashboard/addproductreviews' className='text-lg text-[#00124E] font-bold'>Make Reviews</Link></li>
                <li><Link to='/dashboard/mywishlist' className='text-lg text-[#00124E] font-bold'>My Wishlist</Link></li>
                <li><Link to='/dashboard/requestbook' className='text-lg text-[#00124E] font-bold'>Request Book</Link></li>

                <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
              </>}

              {userRole === 'author' && <>
                <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
                <li><Link to='/dashboard/myproducts' className='text-lg text-[#00124E] font-bold'>My Products</Link></li>
                <li><Link to='/dashboard/addproduct' className='text-lg text-[#00124E] font-bold'>Add Product</Link></li>
                <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
                <li><Link to='/dashboard/orderhistory/orders' className='text-lg text-[#00124E] font-bold'>Order History</Link></li>
                <li><Link to='/dashboard/addproductreviews' className='text-lg text-[#00124E] font-bold'>Make Reviews</Link></li>
                <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
              </>}

              {userRole === 'publisher' && <>
                <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
                <li><Link to='/dashboard/myproducts' className='text-lg text-[#00124E] font-bold'>My Products</Link></li>
                <li><Link to='/dashboard/addproduct' className='text-lg text-[#00124E] font-bold'>Add Product</Link></li>
                <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
                <li><Link to='/dashboard/orderhistory/orders' className='text-lg text-[#00124E] font-bold'>Order History</Link></li>
                <li><Link to='/dashboard/addproductreviews' className='text-lg text-[#00124E] font-bold'>Make Reviews</Link></li>
                <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
              </>}

              {userRole === 'admin' && <>
                <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
                <li><Link to='/dashboard/addstuff' className='text-lg text-[#00124E] font-bold'>Add Stuff</Link></li>
                <li><Link to='/dashboard/allusers' className='text-lg text-[#00124E] font-bold'>All Users</Link></li>
                <li><Link to='/dashboard/allauthor' className='text-lg text-[#00124E] font-bold'>All Authors</Link></li>
                <li><Link to='/dashboard/allpublisher' className='text-lg text-[#00124E] font-bold'>All Publishers</Link></li>
                <li><Link to='/dashboard/allorders' className='text-lg text-[#00124E] font-bold'>All Orders</Link></li>
                <li><Link to='/dashboard/allproducts' className='text-lg text-[#00124E] font-bold'>All Products</Link></li>
                {/* <li><Link to='/dashboard/orderhistory/orders' className='text-lg text-[#00124E] font-bold'>Order History</Link></li> */}
                <li><Link to='/dashboard/addproduct' className='text-lg text-[#00124E] font-bold'>Add Product</Link></li>
                <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
              </>}

              {userRole === 'delivery' && <>
                <li><Link to='/dashboard' className='text-lg text-[#00124E] font-bold'>My profile</Link></li>
                <li><Link to='/dashboard/myorder' className='text-lg text-[#00124E] font-bold'>My Order</Link></li>
                <li><Link to='/dashboard/orderdelivery/orders' className='text-lg text-[#00124E] font-bold'>Order Delivery</Link></li>
                <li className='text-lg text-[#00124E] font-bold pl-5' onClick={() => signOut(auth)}>Logout</li>
              </>}

            </ul>
            <OrderModel modal={"order-view"}>
              <OrderView />
            </OrderModel>
          </div>
        </div>
      </div>

    </div>

  )
}

export default Dashboard